import mongoose from "mongoose";
import IUser from "./user.interface";

const userSchema = new mongoose.Schema({
    Email: {
        required: [true, "email is required."],
        type: String,
        unique: [true, "email already exists"]
    },
    Name: {
        required: [true, "First name is required!"],
        type: String
    },
    Password: {
        minLength: [8, "password should at least 8 characters."],
        required: [true, "password is required."],
        type: String
    }
});
const UserModel = mongoose.model<IUser & mongoose.Document>("User", userSchema);

export default UserModel;
