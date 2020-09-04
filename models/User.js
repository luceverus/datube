import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,

})