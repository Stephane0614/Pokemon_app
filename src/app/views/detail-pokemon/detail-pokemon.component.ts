import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../Models/pokemon';
import { POKEMONS } from 'src/assets/data/mock-pokemon-list';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',

})
export class DetailPokemonComponent implements OnInit{

  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonId: string|null  = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    }
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  };

}
