import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePic: {
      type: String,
      default: '',
    },
    coverPic: {
      type: String,
      default: '', 
    },
    about: {
      type: String,
      default: '', 
    },
    livesin: {
      type: String,
      default: '', 
    },
    worksAt: {
      type: String,
      default: '',
    },
    relationship: {
      type: String,
      default: '', 
    },
    country: {
      type: String,
      default: '',
    },
    followers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
    }],
    following: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
    }],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
