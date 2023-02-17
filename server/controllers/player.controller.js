const { Player } = require("../models/player.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPlayer = async (request, response) => {
    const { name, position } = request.body
    const state = [3, 3, 3]
    try {
        const jugador = await Player.create({
            name, position, state
        });
        response.json(jugador);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAllPlayer = async (request, response) => {
    try {
        const players = await Player.find({}).sort({ nombre: 1 })
        response.json(players);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getPlayer = async (request, response) => {
    try {
        const result = await Player.findOne({ _id: request.params.id })
        response.json(result);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.updatePlayerState = async (request, response) => {
    const { estado } = request.body
    try {
        const result = await Player.findOneAndUpdate({ _id: request.params.id }, { $set: { "state.0": parseInt(estado, 10) } })
        response.json(result);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.updatePlayer = async (request, response) => {
    console.log(request.body)
    try {
        const result = await Player.findOneAndUpdate({ _id: request.params.id }, { $set: request.body }, { new: true, runValidators: true })
        response.json(autor);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.deletePlayer = async (request, response) => {
    try {
        const result = await Player.deleteOne({ _id: request.params.id })
        response.json(result);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}