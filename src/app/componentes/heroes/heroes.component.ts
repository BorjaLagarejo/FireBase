import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicio/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }
  
  list: any = []


  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    console.log(this.heroesService.getHeroes());
    this.list = this.heroesService.getHeroes();
    console.log(this.list);
    
  }

}
