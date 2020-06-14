import * as TE from "fp-ts/lib/TaskEither";
import { getMovie } from "../apiClient/apiClient";
import { EnhancedMovie } from "./enhancedMovie";
import { pipe } from "fp-ts/lib/function";
import { Movie } from "../apiClient/movie";
// import { number, Int } from "io-ts";

const enhance = (movie: Movie): EnhancedMovie => {
    return {
        title: movie.Title,
        imdbRating: Number(movie.imdbRating),
        goodMovie: Number(movie.imdbRating) > 8
    };
}

export const getEnhancedMovie = (name: string): TE.TaskEither<Error, EnhancedMovie> => {
    return pipe(
        getMovie(name),
        TE.map(enhance)
    );
}
