import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})



export class MoviesService {
  urlApi: string= "http://127.0.0.1:8000/api/"
  
 constructor(private http: HttpClient) { }
/* mostrar */
guardarPelicula(form:any){
  const params =new FormData();
  params.set('poster_path',form.poster_path);
  params.set('overview',form.overview);
  params.set('release_date',form.release_date);
  params.set('original_title',form.original_title);
  params.set('original_language',form.original_language);
  return this.http.post(this.urlApi+'movies',params)

}

mostrarPelicula(){
  return this.http.get<any>(this.urlApi+'movies')
}

eliminarPelicula(id:any){
    return this.http.delete(this.urlApi+'movies/'+id)
}
}
