import { Component} from '@angular/core';
import { POKEMONS } from 'src/assets/data/mock-pokemon-list';
import { Pokemon } from '../../Models/pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-pokemon',
  templateUrl: './liste-pokemon.component.html',
 
})
export class ListePokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router) {}

    goToPokemon(pokemon: Pokemon) {
      this.router.navigate(['/pokemons', pokemon.id])
       
    }

    }

  


