export type Transformation = {
    preset_key: string;
    width: number;
    height: number;
    filename_disk: string;
};

export type MainPhoto = {
    id: string;
    width: number;
    height: number;
    title: string;
    filename_disk: string;
    transformations: Transformation[];
};

export type ArtworkItem = {
    id: number;
    isVisible: boolean;
    views: number;
    artwork_name: string;
    documents_number: number;
    has_notifications: boolean;
    status: string | null;
    main_photo: MainPhoto;
    artist_name: string;
    creation_year: number;
    date_created: string;
    date_updated: string | null;
    price: number;
};

export type ArtworkData = {
    offset: number;
    limit: number;
    total: number;
    items: ArtworkItem[];
};

export type Sort = 'asc' | 'desc';

export type SortConfig = {
    key: string | null;
    direction: Sort;
};
