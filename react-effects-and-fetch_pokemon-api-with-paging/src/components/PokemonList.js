import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [currentpage, setCurrentpage] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?offset= ${currentpage *20}"
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [currentpage]);

  function nextPage() {
    setCurrentpage((prevPage) => prevPage + 2);
  }
  function prevPage() {
    setCurrentpage((prevPage) => prevPage - 1);
  }
  return (
    <main>
      <button type="button" onClick={prevPage} disabled={currentpage === 0}>
        Previous Page
      </button>
      <button type="button" onClick={nextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
