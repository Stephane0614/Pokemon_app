import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePokemonComponent } from './views/liste-pokemon/liste-pokemon.component';
import { DetailPokemonComponent } from './views/detail-pokemon/detail-pokemon.component';
import { Pokemon } from './Models/pokemon';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'pokemons',
    component: ListePokemonComponent
  },

  {
    path:'pokemons/:id',
    component: DetailPokemonComponent

  }, 
  
  {
    path: '',
    redirectTo: 'Pokemons',
    pathMatch: 'full'
  },

  {
    path: '**',
    component: PageNotFoundComponent 

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
