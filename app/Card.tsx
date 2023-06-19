import pokeApi from "@/api/pokeApi";
import Image from "next/image";
import Link from "next/link";

interface IPokemon {
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  weight: number;
  height: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export default async function Card({ name }: { name: string }) {
  const pokemon: IPokemon = await pokeApi(`/pokemon/${name}`);
  let colorPokemon: string = "";

  pokemon.types.map((data) => {
    colorPokemon = data.type.name;
    // console.log(colorPokemon);
  });

  // switch

  return (
    <div
      className={`
      ${colorPokemon === "fire" ? "bg-[#EE8130]" : ""}
      ${colorPokemon === "water" ? "bg-[#6390F0]" : ""}
      ${colorPokemon === "electric" ? "bg-[#6cb8f5]" : ""}
      ${colorPokemon === "grass" ? "bg-[#7AC74C]" : ""} 
      ${colorPokemon === "ice" ? "bg-[#96D9D6]" : ""} 
      ${colorPokemon === "fighting" ? "bg-[#C22E28]" : ""}
      ${colorPokemon === "poison" ? "bg-[#A33EA1]" : ""}
      ${colorPokemon === "ground" ? "bg-[#E2BF65]" : ""}
      ${colorPokemon === "flying" ? "bg-[#A98FF3]" : ""} 
      ${colorPokemon === "psychic" ? "bg-[#F95587]" : ""}
      ${colorPokemon === "bug" ? "bg-[#A6B91A]" : ""}
      ${colorPokemon === "rock" ? "bg-[#B6A136]" : ""}
      ${colorPokemon === "ghost" ? "bg-[#735797]" : ""}
      ${colorPokemon === "dragon" ? "bg-[#6F35FC]" : ""} 
      ${colorPokemon === "dark" ? "bg-[#705746]" : ""}
      ${colorPokemon === "steel" ? "bg-[#B7B7CE]" : ""}
      ${colorPokemon === "fairy" ? "bg-[#D685AD]" : ""}
      bg-[#A8A77A] p-4 rounded-xl shadow-lg`}
    >
      <Image
        className="mx-auto"
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt=""
        height={200}
        width={200}
      />
      <h1 className="font-bold text-lg text-white md:text-xl lg:text-2xl">
        {pokemon.name}
      </h1>
      <div></div>
    </div>
  );
}
