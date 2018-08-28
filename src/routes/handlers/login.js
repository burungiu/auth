const userFunction = require('./../../login');

const loginHandler = (req, res) => {
  console.log("Mesaj pentru autentificare ")
  console.log(req);
  if (req.body.username === null || req.body.password === null) {
    res.status(401).send({error: 'username or password is missing'});
  } else {
    return userFunction.Login.loginUser(req.body.username, req.body.password)
    .then((data) => {
      console.log(data);
      res.cookie('token-cookie', data.token, { maxAge: 1000 * 60 * 10, httpOnly: false });
      res.status(200).send(data.token);
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).send(err);
    })
  }
}

module.exports = {
  loginHandler,
}
