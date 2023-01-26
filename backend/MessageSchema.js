const mongoose = require("mongoose");

const whatsappSchema = mongoose.Schema({
    // user:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'newroom'
    // },
    message: String,
    name: String,
    timestamp: {
        type: String,
    },
    received: Boolean
});

module.exports = mongoose.model("messagenew", whatsappSchema);