const { User } = require("../Modals/userSchema");
const SALT_ROUNDS = 5
const bcrypt = require('bcrypt')

const SignupService = async() => {
    const { email, username, mobile, gender, password: userPassword } = req.body
    const password = await bcrypt.hash(userPassword, SALT_ROUNDS)

    const succ = await User.findOne({ email })
}