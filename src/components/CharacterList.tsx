import React from "react";
import Character from "./Character";

const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data.results as ICharacter[];
};

export default async function CharacterList() {
  const chars = await getCharacters();

  return (
    <main className="container">
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {chars.map((c, i) => (
          <div key={i}>
            <Character c={c} />
          </div>
        ))}
      </div>
    </main>
  );
}
