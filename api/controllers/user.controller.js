import { errorHandler } from "../utils/error";
import bcryptjs from "bcryptjs";
import User from "../models/user.model";

export const test = (req, res) => {
    res.json({ message: " api is working oo yeah " });
};

export const updateUser = async (req, res, next) => {
    // before reaching this fuction we need to be sure that the person is authenticated ,as the image has to be changed here 
    console.log(req.user); // cookie the has been set 
    if (req.user.id != req.params.userId) {
        return next(errorHandler(403, 'not allowed to update user'));
    }
    if (req.body.password) {
        if (req.body.password.length < 6) {
            return next(errorHandler(400, 'password should be atleast 6 characters'));
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if (req.body.username < 7 || req.body.username.length > 20) {
        return next(errorHandler(400, 'username should be between 7  and 20 characters'));
    }
    if (req.body.username.includes('')) {
        return next(errorHandler(400, 'username cant have spacces'));
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
        return next(errorHandler(400, 'Username must be lowercase'));
    }

    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
        return next(
            errorHandler(400, 'Username can only contain letters and numbers')
        );
    }


    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    profilePicture: req.body.profilePicture,
                    password: req.body.password,
                },
            },
            { new: true } // this ensures that new info is sent 
        );
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }

};
// module.exports = {test};