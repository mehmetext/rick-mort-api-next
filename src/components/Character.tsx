import Image from "next/image";
import React from "react";

export default function Character({ c }: { c: ICharacter }) {
  return (
    <div
      className={`rounded overflow-hidden shadow group ${
        c.status === "Dead"
          ? "bg-red-50 shadow-red-300 text-red-900"
          : c.status === "Alive"
          ? "bg-green-50 shadow-green-300 text-green-900"
          : "bg-gray-50 shadow-gray-300 text-gray-900"
      }`}
    >
      <div className="overflow-hidden">
        <div className="relative aspect-square transition-transform group-hover:scale-105">
          <Image src={c.image} fill className="object-cover" alt={c.name} />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <h2 className="text-2xl font-semibold">{c.name}</h2>
          <div className="flex gap-1">
            <div className="rounded-full bg-black/30 text-[9px] px-1.5 py-0.5 font-medium text-white/80">
              {c.species.toUpperCase()}
            </div>
            <div
              className={`rounded-full text-[9px] px-1.5 py-0.5 font-medium text-white/80 ${
                c.status === "Dead"
                  ? "bg-red-500"
                  : c.status === "Alive"
                  ? "bg-green-500"
                  : "bg-gray-500"
              }`}
            >
              {c.status.toUpperCase()}
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded bg-black/5 text-sm overflow-hidden">
          <div className="p-1.5 text-xs bg-black/5">Last known location:</div>
          <p className="text-sm font-medium p-1.5">{c.location.name}</p>
        </div>
        <div className="flex flex-col rounded bg-black/5 text-sm overflow-hidden">
          <div className="p-1.5 text-xs bg-black/5">First seen in:</div>
          <p className="text-sm font-medium p-1.5">{c.origin.name}</p>
        </div>
      </div>
    </div>
  );
}
