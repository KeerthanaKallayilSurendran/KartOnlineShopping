const adminSignin = async (req, res) => {
    console.log(2)
    try {
        const { email, password } = req.body
        console.log(4);
        const adminEmail = 'admin@gmail.com'
        const adminPassword= 'admin@321'
        const isMatch = compare(email, adminEmail && password, adminPassword)
        if (isMatch) {
            return res.json({ message: 'Signin successfully', success: true })
        }
        return res.json({ message: 'Signin Failed', success: false })


    } catch (err) {
        res.json({ message: err.message });
    }
}


module.exports = { adminSignin }



