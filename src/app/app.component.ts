import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
  
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit() {

    console.table(this.pokemonList);
    this.selectpokemon(this.pokemonList[0])

  }
  selectpokemon(pokemon: Pokemon)
  {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);

  }
}
