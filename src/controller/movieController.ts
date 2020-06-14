import * as TE from "fp-ts/lib/TaskEither";
import { getMovie } from "../apiClient/apiClient";
import { EnhancedMovie } from "./enhancedMovie";
import { pipe } from "fp-ts/lib/function";
import { Movie } from "../apiClient/movie";
// import { number, Int } from "io-ts";

const enhance = (movie: Movie): EnhancedMovie => {
}

export const getEnhancedMovie = (name: string): TE.TaskEither<Error, EnhancedMovie> => {
}
