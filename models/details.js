const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
let schema = new Scheme({
    image: {
        type: String,
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    user_id: {
        type: Number,
    },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Details', schema);