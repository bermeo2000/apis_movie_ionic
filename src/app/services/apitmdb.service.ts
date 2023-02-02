import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApitmdbService {

  urlApi: string= "https://api.themoviedb.org/3/search/movie?api_key=be0ac967b1cec38df31a1e39bd9ed82c&language=en-US&query="

  constructor(   private http:HttpClient) { }

  buscarPelicula(nombre:any){
    return this.http.get<any>(this.urlApi+nombre)
}
}
