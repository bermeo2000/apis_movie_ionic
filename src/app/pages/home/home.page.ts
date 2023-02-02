import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { subscribeOn } from 'rxjs';
import { ApitmdbService } from 'src/app/services/apitmdb.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
results:any
  movies:any
  idMovies:any
  moviesStore:any
  isMovies=false
  constructor(
    private ApitmdbService:ApitmdbService,
    private MoviesService:MoviesService,
    private alertCtrl:AlertController,
    private toastController:ToastController
  ) { 
    this.
    results=""
  }

  ngOnInit() {
  }

  buscar(nombre:any){
     
    this.ApitmdbService.buscarPelicula(nombre).subscribe({
      next:(res)=>{
        this.movies=res.results;
        console.log(this.movies);
        this.isMovies=true
      }
    })

  }

  obtenerDatos(id:any){
    this.idMovies=id
    this.moviesStore=this.movies.find((e:any) =>e.id==id)
    this.MoviesService.guardarPelicula(this.moviesStore).subscribe({
      next:(res)=>{
        console.log(res);
        this.alert("pelicula agregada con exito")
      }
    })
    
  }

  async alert(message: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'modal-delete',
      header: message,
      buttons: [
        {
          text: 'Ok',
          id: 'confirm-button',
        },
      ],
    });
    alert.present();
  }

    async toastAlert(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
