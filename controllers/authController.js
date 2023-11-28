const User = require("../models/user")
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
    if (err.code===11000) {
        errors.email = 'that email already exists ';
        return errors;
        
    }
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path]= properties.message

        });
    }
return errors;
}
const signup = (req, res) => {
    res.render('signup')
}
const signuppost = async (req, res) => {
    console.log("in signup Post");
    const { email, password } = req.body
    try {
        console.log("in try");
        const user = await User.create({ email, password });
        res.status(201).json(user)

    } catch (error) {
        const err = handleErrors(error)
        res.status(400).json(err    );

    }
}
const loginpost = (req, res) => {
    console.log(req.body);
    res.send('we are in login')
}
const login = (req, res) => {
    res.render('login')
}
module.exports = {
    signup,
    signuppost,
    login,
    loginpost
}