import React from "react";
import Character from "./Character";

const getCharacters = async ({
  filters,
}: {
  filters: {
    status?: string;
    gender?: string;
  };
}) => {
  const filtersMap: any = {};

  if (filters.status !== "all") filtersMap.status = filters.status;
  if (filters.gender !== "all") filtersMap.gender = filters.gender;

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?${new URLSearchParams(
      filtersMap
    ).toString()}`
  );
  const data = await response.json();
  return data.results as ICharacter[];
};

export default async function CharacterList({
  searchParams,
}: {
  searchParams: { status?: string; gender?: string };
}) {
  const chars = await getCharacters({ filters: searchParams });

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
