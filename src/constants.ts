export const MOBILE_MAX_WIDTH = 500;
export const TABLET_MAX_WIDTH = 1024;

export const statusMap = {
    on_sale: 'On Sale',
    draft: 'Draft',
    ready: 'Ready for Verification',
    null: 'No Status',
};

export const transformationsMap = {
    small: { maxWidth: MOBILE_MAX_WIDTH, presetKey: 'webp-50x50' },
    medium: { maxWidth: TABLET_MAX_WIDTH, presetKey: 'webp-500w' },
    large: { maxWidth: Infinity, presetKey: 'webp-1000w' },
};

export const statusColors = {
    on_sale: 'light-green',
    draft: 'gray',
    ready: 'orange',
    null: 'white',
};
