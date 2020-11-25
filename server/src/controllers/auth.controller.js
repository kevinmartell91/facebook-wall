const User = require('../models/users.model');

module.exports = {

    // post 
    signup: async (req, res, next) => {

        const newUser = new User(req.body);
        await newUser.save();
        res.json({
            status: 200,
            success: true,
            message: "New user created successfully.",
            data: newUser
        });
       
    },
    // post 
    signin: async (req, res, next) => {

        const { email,  password } = req.body;
        const user = await User.findOne({ email: email });
        
        if ( user && user.password == password ) {
            res.json({
                status: 200,
                success: true,
                message: "User login to DB successfully.",
                data: user
            })
        } else {
            res.json({
                status: 500,
                success: false,
                message: "User login fail."
            })

        }
    }

}