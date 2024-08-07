import CharacterList from "@/components/CharacterList";
import Filters from "@/components/Filters";
import Header from "@/components/Header";

export default function HomePage({
  searchParams,
}: {
  searchParams: { status?: string; gender?: string };
}) {
  return (
    <div className="flex flex-col gap-10 mb-10">
      <Header />
      <Filters searchParams={searchParams} />
      <CharacterList />
    </div>
  );
}
