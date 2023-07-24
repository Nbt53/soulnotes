const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    address: [
        {
            lineOne: { type: String, required: true },
            lineTwo: String,
            city: { type: String, required: true },
            country: String,
            postcode: { type: String, required: true },
        }
    ],
    email: {
        type: String,
        required: true,
        unique: true,
    },
    optIn: { type: Boolean, required: true }
});

UserSchema.plugin(passportLocalMongoose);

UserSchema.methods.isValidPassword = function (password) {
    return password === this.hashedPassword;

};

module.exports = mongoose.model('User', UserSchema);