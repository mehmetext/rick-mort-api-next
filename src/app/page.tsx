import CharacterList from "@/components/CharacterList";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 mb-10">
      <Header />
      <CharacterList />
    </div>
  );
}
