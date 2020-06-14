import * as express from 'express';
import { pipe } from 'fp-ts/lib/function';
import { getEnhancedMovie } from './controller/movieController';
import * as E from 'fp-ts/lib/Either';
import { EnhancedMovie } from './controller/enhancedMovie';

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/movie', async function (req, res) {
    const maybeMovie = await pipe(
        req.query.name,
        getEnhancedMovie
    )();

    E.fold(
        (error: Error) => res.status(400).send(error),
        (movie: EnhancedMovie) => res.send(movie)
    )(maybeMovie);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
