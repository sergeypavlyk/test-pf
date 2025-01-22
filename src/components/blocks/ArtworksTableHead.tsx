import { ArtworkItem } from '@/types';
import SortTh from '../ui/SortTh';

const ArtworksTableHead = ({
    handleSort,
}: {
    handleSort: (key: keyof ArtworkItem | null) => void;
}) => (
    <thead className="text-left">
        <tr>
            <th></th>
            <SortTh name="Artwork Name" onClick={() => handleSort('artwork_name')} />
            <SortTh name="Artist Name" onClick={() => handleSort('artist_name')} />
            <SortTh name="Views" onClick={() => handleSort('views')} />
            <SortTh name="Years" onClick={() => handleSort('creation_year')} />
            <SortTh name="Status" />
            <SortTh name="Visibility" />
            <SortTh name="Price" onClick={() => handleSort('price')} />
            <SortTh name="Docs" />
            <SortTh name="Updated" onClick={() => handleSort('date_updated')} />
        </tr>
    </thead>
);

export default ArtworksTableHead;
