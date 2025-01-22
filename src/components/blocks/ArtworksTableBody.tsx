import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ArtworkItem, Transformation } from '@/types';
import { statusColors, statusMap, transformationsMap } from '@/constants';
import NotificationDot from '../ui/NotificationDot';
import { Eye, EyeClosed, EyeOff, File } from 'lucide-react';
import { PathEnum } from '@/enums';
import { useRouter } from 'next/navigation';
import throttle from 'lodash/throttle';
import { cn, formatDate } from '@/utils';

const ArtworksTableBody = ({ data }: { data: ArtworkItem[] }) => {
    const router = useRouter();

    const [screenWidth, setScreenWidth] = useState<number>(0);

    const getImageTransformation = (transformations: Transformation[]) => {
        const transformation = Object.values(transformationsMap).find(
            ({ maxWidth }) => screenWidth <= maxWidth,
        );
        const presetKey = transformation ? transformation.presetKey : '';

        return transformations.find((t) => t.preset_key === presetKey);
    };

    const updateScreenWidth = useCallback(
        throttle(() => setScreenWidth(window.innerWidth), 200),
        [],
    );

    const cellStyles = 'py-3 truncate text-nowrap max-w-[200px] px-3';

    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);

        return () => {
            window.removeEventListener('resize', updateScreenWidth);
            updateScreenWidth.cancel();
        };
    }, [updateScreenWidth]);

    return (
        <tbody>
            {data.map(
                ({
                    main_photo,
                    id,
                    artist_name,
                    artwork_name,
                    price,
                    documents_number,
                    has_notifications,
                    views,
                    isVisible,
                    creation_year,
                    date_updated,
                    status,
                }) => {
                    const transformation = getImageTransformation(main_photo.transformations);

                    return (
                        <tr
                            className="bg-medium-gray hover:bg-light-gray shadow-sm transition-colors duration-300 rounded-6 text-black font-medium text-sm cursor-pointer"
                            key={id}
                            onClick={() => router.push(`${PathEnum.Artworks}/${id}`)}
                        >
                            <td className={`${cellStyles} rounded-tl-xl rounded-bl-xl mt-5`}>
                                <Image
                                    className="min-w-12 min-h-12 rounded-md max-h-12 max-w-12 aspect-square object-cover"
                                    src={`/${transformation ? transformation.filename_disk : ''}`}
                                    alt={artwork_name}
                                    width={transformation ? transformation.width : 48}
                                    height={transformation ? transformation.height : 48}
                                />
                            </td>
                            <td className={`${cellStyles} max-w-[140px]`}>
                                {artwork_name ?? 'Untitled'}
                                {has_notifications && <NotificationDot />}
                            </td>
                            <td className={`${cellStyles}`}>{artist_name}</td>
                            <td className={`${cellStyles} max-w-20`}>
                                {views.toLocaleString('en-US')}
                            </td>
                            <td className={`${cellStyles} max-w-20`}>{creation_year}</td>
                            <td className={`${cellStyles} max-w-[160px]`}>
                                <div
                                    className={cn(
                                        'rounded-50 text-xs w-fit px-2 py-1',
                                        status && {
                                            'text-dark-green bg-light-green': status === 'on_sale',
                                            'text-black bg-foreground': status === 'draft',
                                            'text-dark-orange bg-orange': status === 'ready',
                                            'text-white bg-white': !status,
                                        },
                                    )}
                                >
                                    {statusMap[status as keyof typeof statusMap]}
                                </div>
                            </td>
                            <td className={`${cellStyles} max-w-[100px]`}>
                                {isVisible ? (
                                    <div className="bg-green/80 text-dark-green px-2 py-1 rounded-4 w-fit text-xs flex items-center">
                                        <Eye
                                            size={16}
                                            strokeWidth={1.5}
                                            className="inline-block mr-1"
                                        />
                                        Visible
                                    </div>
                                ) : (
                                    <div className="bg-dark-gray text-gray-800 px-2 py-1 rounded-4 w-fit text-xs flex items-center">
                                        <EyeOff
                                            size={16}
                                            strokeWidth={1.5}
                                            className="inline-block mr-1"
                                        />
                                        Hidden
                                    </div>
                                )}
                            </td>
                            <td className={`${cellStyles} max-w-[100px]`}>
                                $ {price.toLocaleString('en-US')}
                            </td>
                            <td className={`${cellStyles} max-w-20`}>
                                {documents_number ? (
                                    <div className="bg-light-blue/50 text-dark-indigo px-2 py-1 rounded-4 w-fit flex items-center text-xs">
                                        <File size={16} className="inline-block mr-1" />
                                        <span>{documents_number}</span>
                                    </div>
                                ) : (
                                    <div className="bg-background text-accent px-2 py-1 rounded-4 w-fit flex items-center text-xs">
                                        <span>No Docs</span>
                                    </div>
                                )}
                            </td>
                            <td
                                className={`${cellStyles} rounded-tr-xl rounded-br-xl max-w-[100px]`}
                            >
                                {formatDate(date_updated)}
                            </td>
                        </tr>
                    );
                },
            )}
        </tbody>
    );
};

export default ArtworksTableBody;
