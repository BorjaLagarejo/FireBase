import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicio/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }
  
  items: any = []
  carga: boolean = true;
  msg: String = "Cargado datos...";


  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes().subscribe(data => {
      this.items = (data);
      console.log(data);
      if(data != null){
        this.carga = false;
      }else{
        this.msg = "No hay datos";
      }
    },
      error => console.error(error));
    
    
  }

}
