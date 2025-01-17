import { ArtworkItem, SortConfig } from "@/types";
import SortTh from "../ui/SortTh";

const ArtworksTableHead = ({
  sortConfig,
  handleSort,
}: {
  sortConfig: SortConfig;
  handleSort: (key: keyof ArtworkItem | null) => void;
}) => (
  <thead className="text-left">
    <tr>
      <th></th>
      <SortTh
        sortConfig={sortConfig}
        name="Artwork Name"
        onClick={() => handleSort("artwork_name")}
        sortKey="artwork_name"
      />
      <SortTh
        sortConfig={sortConfig}
        name="Artist Name"
        onClick={() => handleSort("artist_name")}
        sortKey="artist_name"
      />
      <SortTh
        sortConfig={sortConfig}
        name="Views"
        onClick={() => handleSort("views")}
        sortKey="views"
      />
      <SortTh
        sortConfig={sortConfig}
        name="Years"
        onClick={() => handleSort("creation_year")}
        sortKey="creation_year"
      />
      <SortTh
        sortConfig={sortConfig}
        name="Status"
        sortKey="status"
      />
      <SortTh
        sortConfig={sortConfig}
        name="Visibility"
        onClick={() => handleSort("isVisible")}
        sortKey="isVisible"
      />
      <SortTh
        sortConfig={sortConfig}
        name="Price"
        onClick={() => handleSort("price")}
        sortKey="price"
      />
      <SortTh sortConfig={sortConfig} name="Docs" sortKey="documents_number" />
      <SortTh
        sortConfig={sortConfig}
        name="Updated"
        onClick={() => handleSort("date_updated")}
        sortKey="date_updated"
      />
    </tr>
  </thead>
);

export default ArtworksTableHead;
