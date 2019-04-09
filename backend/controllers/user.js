const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash,
      role: req.body.role
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Invalid authentication credentials!"
        });
      });
  });
}

exports.getUser = (req, res, next) => {
  User.findById(req.params.id)
   .then(user => {
     if (user) {
       res.status(200).json(user);
     } else {
       res.status(404).json({ message: " User not found!" });
     }
   })
   .catch(error => {
     res.status(500).json({
       message: "Fetching user failed!"
     });
   });
};

exports.getUsers = (req, res, next) => {
 const userQuery =  User.find();
 let fetchedUsers;
 userQuery
   .then(documents => {
     fetchedUsers = documents;
     return  User.count();
   })
   .then(count => {
     res.status(200).json({
       message: " Users fetched successfully!",
       users: fetchedUsers,
       maxUsers: count
     });
   })
   .catch(error => {
     res.status(500).json({
       message: "Fetching users failed!"
     });
   });
};

exports.userLogin = (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });
}
