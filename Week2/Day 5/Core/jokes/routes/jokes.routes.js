const UserController = require('../controllers/jokes.controller');
 
module.exports = app => {
    app.get('/api/jokes', UserController.getAllJokes);
    app.get('/api/jokes/:id', UserController.getOneSingleJoke);
    app.put('/api/jokes/update/:id', UserController.updateJoke);
    app.post('/api/jokes/new', UserController.createNewJoke);
    app.delete('/api/jokes/delete/:id', UserController.deleteJoke);
}