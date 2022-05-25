const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true, //store in the db when the data is stored in the db
  }
)

const User = mongoose.model('User', userSchema)
module.exports = User
