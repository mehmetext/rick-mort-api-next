import Image from "next/image";
import React from "react";

export default function Character() {
  return (
    <div className="rounded overflow-hidden shadow bg-red-50 shadow-red-300 text-red-900 group">
      <div className="overflow-hidden">
        <div className="relative aspect-square transition-transform group-hover:scale-105">
          <Image
            src="https://rickandmortyapi.com/api/character/avatar/25.jpeg"
            fill
            className="object-cover"
            alt="Character name"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <h2 className="text-2xl font-semibold">Armothy</h2>
          <div className="flex gap-1">
            <div className="rounded-full bg-red-500 text-[9px] px-1.5 py-0.5 font-medium text-white/80">
              Unknown
            </div>
            <div className="rounded-full bg-red-500 text-[9px] px-1.5 py-0.5 font-medium text-white/80">
              DEAD
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded bg-black/5 text-sm overflow-hidden">
          <div className="p-1.5 text-xs bg-black/5">Last known location:</div>
          <p className="text-sm font-medium p-1.5">
            Earth (Replacement Dimension)
          </p>
        </div>
        <div className="flex flex-col rounded bg-black/5 text-sm overflow-hidden">
          <div className="p-1.5 text-xs bg-black/5">First seen in:</div>
          <p className="text-sm font-medium p-1.5">Rickmancing the Stone</p>
        </div>
      </div>
    </div>
  );
}
