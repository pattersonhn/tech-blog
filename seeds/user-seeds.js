const { User } = require('../models');

const userData = [
  {
    username: "Hannah",
    email: "hannah@icloud.com",
    password: "password1234"
  },
  {
    username: "Georgia",
    email: "josh@gmail.com",
    password: "password1234"
  },
  {
    username: "Steven",
    email: "steven@gmail.com",
    password: "password1234"
  },
  {
    username: "Larry",
    email: "larry@gmail.com",
    password: "password1234"
  },
  {
    username: "John",
    email: "john@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;