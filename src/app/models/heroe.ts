import { Pelicula } from "./pelicula";

export interface Heroe{
    id: number;
    name: string;
    pelicula: Pelicula[];
}