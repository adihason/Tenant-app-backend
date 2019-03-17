const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}
);

const usersModel = mongoose.model('Users', UsersSchema);
module.exports = usersModel;