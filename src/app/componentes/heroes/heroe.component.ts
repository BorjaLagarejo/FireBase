import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interfaces';
import { HeroesService } from '../../servicio/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  nuevo: boolean = false;
  id: String;

  constructor(
    private heroesService: HeroesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(parametros => this.id = parametros['id']);

  }

  ngOnInit() {
    if (this.id != "new") {
      this.heroesService.getHeroe(this.id).subscribe(data => {
        this.heroe = data;
      })
    }
  }

  setGuardar() {
    if (this.id == "new") {
      this.heroesService.nuevoHeroe(this.heroe).subscribe(data => {
        this.router.navigate(['/heroe', data.name])
        console.log("Creado");
      },
        error => console.error(error));
    } else {
      this.heroesService.actualizarHeroe(this.heroe, this.id).subscribe(data => {
        console.log("Update");
      },
        error => console.error(error));
    }
  }

  reset( forma:NgForm) {
    this.router.navigate(['/heroe','new']);

    forma.reset();

  }

}
