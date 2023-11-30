const mongoose = require("mongoose")
const signupFormSchema = new mongoose.Schema({
  username: {
  type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model("User", signupFormSchema);

module.exports = { User };