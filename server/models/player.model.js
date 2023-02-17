const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ["nombre es un dato obligatorio"],
        minlength: [3, 'El minimo es de 10']
    },
    position: {
        type: String,
        minlength: [5, 'El minimo es de 10']
    },
    state: [{ type: Object }]

}, { timestamps: true });
module.exports.Player = mongoose.model('player', PlayerSchema);

