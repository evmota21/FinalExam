const {Movies} = require('./models/movie-model');
const {Actors} = require('./models/actor-model');

function errorHandler(req, res) {
    let movie_ID = req.body.id;

    let movie_ID_param = req.params;

    let firstName = req.body.firstName;

    let lastName = req.body.lastName;

    console.log(movie_ID, movie_ID_param, firstName, lastName);

    if(!movie_ID){
        res.statusMessage = "Id is missing in the body of the request.";

        return res.status(406).end();
    }
    if(movie_ID != movie_ID_param){
        res.statusMessage = "id and movie_ID does not match.";

        return res.status(409).end();
    }
    if(!firstName || !lastName){
        res.statusMessage = "You need to send both the first name and last name of the actor to remove from the movie list."

        return res.status(403).end();
    }

    Movies
        .findMovie( movie_ID_param )
        .then( foundMovie => {
            console.log("Movie found! continue...");
            console.log(foundMovie);
        })
        .catch( err => {
            res.statusMessage = "Movie does not exist.";

            return res.status(404).end();
        })

    Actors
        .findActor( firstName, lastName )
        .then( foundActor => {
            console.log("Found actor! continue...");
            console.log(foundActor);
        })
        .catch( err => {
            res.statusMessage = "Actor does not exist.";

            return res.status(404).end();
        })


}

module.exports = errorHandler;