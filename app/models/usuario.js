import mongoose from "mongoose";
import bcrypt from "bcrypt"

const schema = mongoose.Schema;
/*
  ADD USER ROLES HERE, first user role is the default
*/
const userRoles = ["new", "user", "admin"]

const schemaUsuario = new schema({

  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  profileImage: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "invalid-email-format",
    ]
  },
  password:{
    type:String,
    default:""
  },
  role: {
    type: String,
    default: userRoles[0], // new
    enum: userRoles
  },
},
{ timestamps: true }
);

schemaUsuario.virtual("id").get(function () {
  return this._id;
});
schemaUsuario.set('toJSON', {
    virtuals: true
});

const modeloUsuario = mongoose.model("user", schemaUsuario);
export { modeloUsuario };
