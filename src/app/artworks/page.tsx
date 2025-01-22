import ArtworkTable from '@/components/blocks/ArtworkTable';

export default function Artworks() {
    return (
        <main className="w-full">
            <div className="w-full flex flex-col justify-center overflow-auto p-4 2xl:p-10">
                <ArtworkTable />
            </div>
        </main>
    );
}
