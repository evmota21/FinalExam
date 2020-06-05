const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );
const errorHandler = require('./middleware/errorHandler');
const {Movies} = require('./models/movie-model');
const {Actors} = require('./models/actor-model');

const app = express();

app.patch( '/api/delete-movie-actor/:movie_ID' , (errorHandler), jsonParser, ( req, res ) => {
    Actors
    .findActor( firstName, lastName )
    .then( foundActor => {
        console.log("Found actor! continue...");
        console.log(foundActor);
        
        let actorid = foundActor._id;

        Movies
            .removeActorFromMovieList( actorid, movie_ID_param )
            .then( result => {
                console.log("Movie updated!");
                return res.status(201).json(result);
            })
            .catch( err => {
                res.statusMessage = err.message;

                return res.status(500).json(err);
            })
    })
    .catch( err => {
        res.statusMessage = "Actor does not exist.";

        return res.status(404).end();
    })
} )

app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});