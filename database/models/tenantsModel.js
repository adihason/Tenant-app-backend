const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TenantsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    debts: {
        type: Number,
        required: true
    }
}
);

const tanentsModel = mongoose.model('tanents', TenantsSchema);
module.exports = tanentsModel;