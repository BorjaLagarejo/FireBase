import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interfaces';
import { map } from 'rxjs/operators';

@Injectable()
export class HeroesService {

  heroesURL: string = "https://pruebaapp-a0a3e.firebaseio.com/heroes"
  
  constructor(private http: Http) { }

  nuevoHeroe(heroe: Heroe) {

    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.heroesURL+".json", body, { headers }).pipe(map(res => res.json()))
  }

  actualizarHeroe(heroe: Heroe , id:String){
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    
    let url = `${ this.heroesURL}/${ id }/.json`
    console.log(url);
    
    return this.http.put(url , body, { headers }).pipe(map(res => res.json()))
  }

  getHeroes(){   
    return this.http.get(this.heroesURL+".json").pipe(map(res => res.json()))
  }
  getHeroe(id:String){

    return this.http.get(this.heroesURL+"/"+id+".json").pipe(map(res => res.json()))
  }

}
