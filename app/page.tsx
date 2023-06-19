import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import pokeApi from "@/api/pokeApi";

interface IListPokemon {
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export default async function Home() {
  const pokemons: IListPokemon = await pokeApi(
    "https://pokeapi.co/api/v2/pokemon"
  );
  // console.log(pokemons);

  // let pokemonImg: any[] = [];
  // const pokemonDataWithImage = pokemons.results.map(async (pokemon) => {
  //   const detailPokemon = await pokeApi(pokemon.url);
  //   pokemonImg.push(detailPokemon);

  //   return detailPokemon;
  // });

  // console.log(pokemonImg);

  return (
    <>
      <div className="py-12 bg-white shadow-lg">
        <h1 className="font-extrabold text-5xl text-center">Pokedex center</h1>
      </div>
      <div className="pk-container mt-8">
        <div className="gap-y-5 gap-x-3 grid grid-cols-2 justify-items-stretch md:grid-cols-3 lg:grid-cols-4">
          {/* {pokemons.results.map((pokemon, index) => (
            // <Card key={index} name={pokemon.name} />
          ))} */}
        </div>
      </div>
    </>
  );
}
