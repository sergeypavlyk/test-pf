import ArtworkTable from "@/components/blocks/ArtworkTable";

export default function Artworks() {
  return (
    <main className="w-full px-4">
      <div className="w-full flex flex-col justify-center overflow-auto p-24">
        <ArtworkTable />
      </div>
    </main>
  );
}
