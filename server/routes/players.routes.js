const PlayerController = require('../controllers/player.controller');
module.exports = function (app) {
    app.post('/api/players/new', PlayerController.createPlayer);
    app.get('/api/players', PlayerController.getAllPlayer);
    app.get('/api/players/:id', PlayerController.getPlayer);
    app.put('/api/players/state/:id', PlayerController.updatePlayerState);
    app.put('/api/players/:id', PlayerController.updatePlayer);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
}
