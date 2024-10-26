import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../servicio/pelicula.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
items:any;
  constructor(
    private peliculaService: PeliculaService
  ) {}
ngOnInit(): void {
  const pelicula=localStorage.getItem('pelicula');
  if (pelicula){
  console.log('Peliculas desde el LocalStorage');
  this.items=JSON.parse(pelicula);}
  else{
    this.peliculaService.obtenerPelicula().subscribe((pelicula)=>{
      this.items= pelicula;
      console.log('Peliculas desde la API');
      localStorage.setItem('pelicula',JSON.stringify(this.items));
    });
  }}
}
