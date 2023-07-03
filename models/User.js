const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    admin: Boolean,
    email: {
        type: String,
        required: true,
        unique: true,
    }
});

UserSchema.plugin(passportLocalMongoose);

UserSchema.methods.isValidPassword = function (password) {
    return password === this.hashedPassword;

};

module.exports = mongoose.model('User', UserSchema);