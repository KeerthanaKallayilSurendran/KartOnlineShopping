

const userSignup = async (req, res) => {
    try {
        const { email, username, mobile, gender, password: userPassword } = req.body
        const password = await bcrypt.hash(userPassword, SALT_ROUNDS)

        const succ = await User.findOne({ email })
        if (succ) {
            return res.json({ message: 'User already exists' })
        }
        const signupFormData = {
            username,
            email,
            mobile,
            gender,
            password
        };
        const userData = await User.create(signupFormData);

        res.json({ message: 'Signup successfully' })
    } catch (e) {
        res.json({ message: e.message })
    }
}

const userSignin = async (req, res) => {
    try {
        const { email, password: userPassword } = req.body
        console.log(33);
        const user = await User.findOne({ email })
        if (user) {
            const { password } = user
            const isMatch = bcrypt.compare(password, userPassword)
            if (isMatch) {
                return res.json({ message: 'Signin successfully', success: true })
            }
            return res.json({ message: 'Signin Failed', success: false })
        }

        res.json({ message: 'user not existing', success: false })
    } catch (err) {
        res.json({ message: err.message });
    }
}

module.exports = {userSignin, userSignup}



