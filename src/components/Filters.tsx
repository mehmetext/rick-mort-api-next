import { createSearchParams } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Filters({
  searchParams: { status, gender },
}: {
  searchParams: { status?: string; gender?: string };
}) {
  return (
    <div className="container flex flex-col gap-2">
      <div className="flex rounded overflow-hidden">
        <Link
          scroll={false}
          href={createSearchParams({ status: "all", gender }, true)}
          className={`cursor-pointer flex-1 flex items-center justify-center p-2 font-medium ${
            status === "all" || status === undefined
              ? "text-white bg-blue-500"
              : "bg-blue-100 text-blue-500"
          }`}
        >
          ALL
        </Link>
        <Link
          scroll={false}
          href={createSearchParams({ status: "dead", gender }, true)}
          className={`cursor-pointer flex-1 flex items-center justify-center p-2 font-medium ${
            status === "dead"
              ? "text-white bg-red-500"
              : "bg-red-100 text-red-500"
          }`}
        >
          DEAD
        </Link>
        <Link
          scroll={false}
          href={createSearchParams({ status: "alive", gender }, true)}
          className={`cursor-pointer flex-1 flex items-center justify-center p-2 font-medium ${
            status === "alive"
              ? "text-white bg-green-500"
              : "bg-green-100 text-green-500"
          }`}
        >
          ALIVE
        </Link>
        <Link
          scroll={false}
          href={createSearchParams({ status: "unknown", gender }, true)}
          className={`cursor-pointer flex-1 flex items-center justify-center p-2 font-medium ${
            status === "unknown"
              ? "text-white bg-gray-500"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          UNKNOWN
        </Link>
      </div>
      <div className="flex rounded overflow-hidden">
        <Link
          scroll={false}
          href={createSearchParams({ status: status, gender: "all" }, true)}
          className={`cursor-pointer flex-1 flex items-center justify-center p-2 font-medium ${
            gender === "all" || gender === undefined
              ? "text-white bg-gray-500"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          ALL
        </Link>
        <Link
          scroll={false}
          href={createSearchParams({ status, gender: "male" }, true)}
          className={`cursor-pointer flex-1 flex items-center justify-center p-2 font-medium ${
            gender === "male"
              ? "text-white bg-blue-500"
              : "bg-blue-100 text-blue-500"
          }`}
        >
          MALE
        </Link>
        <Link
          scroll={false}
          href={createSearchParams({ status, gender: "female" }, true)}
          className={`cursor-pointer flex-1 flex items-center justify-center p-2 font-medium ${
            gender === "female"
              ? "text-white bg-red-500"
              : "bg-red-100 text-red-500"
          }`}
        >
          FEMALE
        </Link>
      </div>
    </div>
  );
}
