import { Routes, RouterModule } from '@angular/router';

import { HeroeComponent } from './componentes/heroes/heroe.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';

const routes: Routes = [
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: '**', component: HeroesComponent },
];

export const APP_ROUTER = RouterModule.forRoot(routes);
