var jwt    = require('jsonwebtoken');
var superSecret = require('../../config.js').secret;
const User = require('../../models').Models.Users.Users;
const UsersHandler = require('../../users/index.js');



const isStillAdmin = (username) => {
  return User.findOne({ where: { name: username}})
  .then((data) => {
    if (data !== null && data.dataValues.is_admin === 1) {
      return true;
    } else {
      return false;
    }
  })
  .catch((err) => {
    return Promise.reject(err);
  });
}
/*
  Function wich check authenticated user.
*/
const checkSimpleUser = (req, res, next) => {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  // recomended to use token in header
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, superSecret, function(err, decoded) {
      if (err ) { //invalid token
        return res.status(401).json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        console.log(decoded.userid);
        UsersHandler.getUserByID(decoded.userid).then((data) => {
          if (data.dataValues.banned === 1)
            return res.status(401).json({success: false, message: 'You are banned'});
          else {
            req.decoded = decoded;
            next();
          }
        })
        .catch((err) => res.status(403).send("Invalid user, please login in again"));
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }
};

/*
  Function wich check admin permission based on java web token.
  Middleware function, it will call on each admin route.
*/
const checkAdminAccess = (req, res, next) => {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, superSecret, function(err, decoded) {
      if (err) { //invalid token
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else if (decoded.admin === 0) { //decoded token doesn't have admin access
        return res.json({ success: false, message: 'No admin access'});
      } else { //valid admin access
        isStillAdmin(decoded.username).then((data) => {
          if (data === false) {
            return res.json({ success: false, message: 'You are no longer an admin'});
          } else {
            req.decoded = decoded;
            next();
          }
        }).catch((err) => {
          return res.json({status:503, message:"Database not work"});
        });
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }
};


module.exports = {
  checkSimpleUser,
  checkAdminAccess,
};
