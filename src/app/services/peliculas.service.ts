import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{
    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman", 2020, "https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg"),
            new Pelicula("Los vengadores Endgame", 2022, "https://www.tonica.la/__export/1587957633788/sites/debate/img/2020/04/26/avengers-endgame-momentos-epicos-no-podemos-dejar-ver_1.jpg_423682103.jpg"), 
            new Pelicula("Batman", 2015, "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1000,h_600/https://wipy.tv/wp-content/uploads/2020/07/actores-que-iban-a-ser-batman-en-el-dceu.jpg")
          ];
    }

    holaMundo(){
        return "Hola mundo desde servicio Angular";
    }
    getPeliculas(){
        return this.peliculas;
    }
}