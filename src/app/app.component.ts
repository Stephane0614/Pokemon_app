import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  template: `<h1>LIST DE POKEMON</h1>
      
    <router-outlet></router-outlet>
  `
  
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit() {

    console.table(this.pokemonList);
    this.selectpokemon(this.pokemonList[6])

  }
  selectpokemon(pokemon: Pokemon)
  {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);

  }
}
