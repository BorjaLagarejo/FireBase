import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interfaces';

@Injectable()
export class HeroesService {

  heroesURL: string = "https://pruebaapp-a0a3e.firebaseio.com/heroes.json"

  constructor(private http: Http) { }

  nuevoHeroe(heroe: Heroe) {

    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    })

    return this.http.post(this.heroesURL, body, { headers }).subscribe(res => {
      console.log(res.json());
      return res.json();

    });
  }

  getHeroes() {
    return this.http.get(this.heroesURL).subscribe((data:any) => {

      

      return data._body;
    })
  }
}
