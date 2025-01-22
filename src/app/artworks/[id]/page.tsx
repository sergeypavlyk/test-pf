import BackButton from '@/components/ui/BackButton';
import { mockApiData } from '@/mock-data';
import Image from 'next/image';

export const generateStaticParams = async () => {
    const artworkIds = mockApiData.items.map((artwork) => artwork.id);

    return artworkIds.map((id) => ({
        id: `${id}`,
    }));
};

export default async function ArtworkIdPage({ params }: { params: { id: string } }) {
    const { id: index } = await params;

    const item = mockApiData.items.filter(({ id }) => String(id) === index)[0];

    return (
        <div className="flex min-h-screen flex-col items-center">
            <BackButton />
            <div className="relative h-screen w-full">
                <Image
                    className="object-cover"
                    src={`/${item.main_photo.filename_disk}`}
                    alt={item.artwork_name}
                    fill
                    priority
                />
            </div>
            <div className="absolute bottom-10 right-10 rounded-2xl bg-white/50 p-10 text-black backdrop-blur-sm">
                <h1>Artwork: {index}</h1>
                <h2>{item.artist_name}</h2>
                <h3>{item.artwork_name}</h3>
            </div>
        </div>
    );
}
