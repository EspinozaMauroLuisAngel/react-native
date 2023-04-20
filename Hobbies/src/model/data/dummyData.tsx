import { Category } from "../classes/Category";
import { Hobby } from "../classes/Hobby";

export const Categories = [
    new Category('1', 'Deportes', '#0085C7'),
    new Category('2', 'Video juegos', '#0039C7'),
    new Category('3', 'Comidad', '#C71B00'),
    new Category('4', 'Idiomas', '#00C706'),
    new Category('5', 'Juegos de mesa', '#F7DC6F')
];

export const Hobbies = [
    new Hobby('1', ['1', '2'], 'Halo 6', '', ['Concentracion']),
    new Hobby('2', ['1', '2'], 'Correr para que no me deje el autobus', '', ['Concentracion','Condicion'])
]