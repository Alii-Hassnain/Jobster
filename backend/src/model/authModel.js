const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: 6,
  },
}, {
  timestamps: true
});

userSchema.pre("save",async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next()
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

module.exports = mongoose.model('User', userSchema);