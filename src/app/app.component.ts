import { Component, } from "@angular/core";
// import { POKEMONS } from "../assets/data/mock-pokemon-list";
// import { Pokemon } from "./Models/pokemon";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent{
  // pokemonList: Pokemon[] = POKEMONS;
  // pokemonSlected: Pokemon | undefined;

  // ngOnInit() 
  // {
  //   // s'ignitialise au depart
  //   console.table(this.pokemonList);
  // }

  //  selectPokemon(pokemonId: string)
  //  {

  //   //  refacting:  caste element html ou sur lequel c'est prduit l'evenement
  //   //  index: numbers = (event?.target as HTMLInputElement).value (.value renvoi un string)
  //   // + transfomre le string (S) en nombre
  //   const index: number = +pokemonId;

  //   const pokemon: Pokemon | undefined = this.pokemonList.find((pokemon) => pokemon.id == +pokemonId);
    
  //   if (pokemon) 
  //   {
  //     console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  //     this.pokemonSlected = pokemon;
  //   } 
  //   else 
  //   {
  //     console.log(`Vous avez demandé un pokemon qui n'existe pas `);
  //     this.pokemonSlected = pokemon;
  //   }
  // }
  
}
