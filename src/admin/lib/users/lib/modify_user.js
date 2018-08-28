const UsersHandler = require('../../../../users/index.js');

const setBan = (req, res) => {
  UsersHandler.setBan(req.params.accountID).then((data) => {
    if (data === false) {
    	return res.status(404).send({status:404, message:"User not found"});
    } else {
    	return res.status(200).send({status:200, message: "User succesfuly banned"});
    }
  });
}

const unsetBan = (req, res) => {
  UsersHandler.unsetBan(req.params.accountID).then((data) => {
    if (data === false) {
    	return res.status(404).send({status:404, message:"User not found"});
    } else {
    	return res.status(200).send({status:200, message: "User succesfuly unbanned"});
    }
  });
}

const removeUser = (req, res) => {
  UsersHandler.removeUser(req.params.accountID).
  then((data) => {
    res.send(200).send({status:200, message:"User was succesfuly removed"});
  })
  .catch((err) => {
    if (err === "No user") {
      res.status(404).send({status:404, message:"User not found"});
    } else {
      res.status(503);
    }
  })
}

const addUser = (req, res) => {
  if (req.body.name && req.body.password && req.body.email) {
    UsersHandler.addUser(req.body).
    then((data) => {
      res.status(200).send({status:200, message:"User was succesfuly removed"});
    })
    .catch((err) => {
      res.send({success:false, message:err.name});
    });
  } else {
    res.send({succes: false, message: "Need more parameters"});
  }
}


module.exports = {
  setBan,
  unsetBan,
  removeUser,
  addUser,
}
