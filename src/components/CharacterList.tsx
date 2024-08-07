import React from "react";
import Character from "./Character";

export default function CharacterList() {
  return (
    <main className="container">
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <Character key={i} />
        ))}
      </div>
    </main>
  );
}
