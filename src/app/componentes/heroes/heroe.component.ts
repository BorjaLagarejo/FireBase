import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interfaces';
import { HeroesService } from '../../servicio/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: "",
    casa: "",
    bio: "",
  }

  constructor(private heroesService : HeroesService) { }

  ngOnInit() {
  }
  guardar() {

    console.log(this.heroe);
    this.heroesService.nuevoHeroe(this.heroe);
  }

}
