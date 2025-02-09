import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const AuthSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: [true,"Name is required"],
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true,"Email is required"],
    unique: true,
    lowercase: true,
    trim: true
  },
  mobile: {
    type: String,
    required: [true,"Mobile is required"],
    trim: true
  },
  address: {
    type: String,
    required: [true,"Address is required"],
    trim: true
  },
  city: {
    type: String,
    required: [true,"City is required"],
    trim: true
  },
  gender: {
    type: String,
    required: [true,"Gender is required"],
  },
  password: String,
  info: String
});

AuthSchema.plugin(uniqueValidator);

const AuthSchemaModel = mongoose.model('auth',AuthSchema);

export default AuthSchemaModel