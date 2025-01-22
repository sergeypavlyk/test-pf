'use client';

import React, { useEffect, useState } from 'react';
import { ArtworkItem, Sort, SortConfig } from '@/types';
import ArtworksTableBody from './ArtworksTableBody';
import ArtworksTableHead from './ArtworksTableHead';
import { useFetch } from '@/hooks';

const ArtworkTable = () => {
    // imitate real fetch request
    const { data, isLoading, error } = useFetch<ArtworkItem[]>('mock-url');

    const [tableData, setTableData] = useState<ArtworkItem[]>([]);
    const [sortConfig, setSortConfig] = useState<SortConfig>({
        key: null,
        direction: 'asc',
    });

    const handleSort = (key: keyof ArtworkItem | null) => {
        if (!key) return;

        const direction: Sort =
            sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
        setSortConfig({ key, direction });

        const sortedData = [...tableData].sort((a, b) => {
            const aValue = a[key];
            const bValue = b[key];

            if (aValue == null) return direction === 'asc' ? -1 : 1;
            if (bValue == null) return direction === 'asc' ? 1 : -1;

            if (typeof aValue === 'number' && typeof bValue === 'number') {
                return direction === 'asc' ? aValue - bValue : bValue - aValue;
            }

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return direction === 'asc'
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            }

            return 0;
        });

        setTableData(sortedData);
    };

    useEffect(() => {
        if (!isLoading && data) {
            setTableData(data);
        }
    }, [isLoading, data]);

    if (isLoading) {
        return (
            <div className="mx-auto w-full flex justify-center items-center py-10 text-black">
                Loading...
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <table className="border-separate border-spacing-y-2">
            <ArtworksTableHead handleSort={handleSort} />
            <ArtworksTableBody data={tableData} />
        </table>
    );
};

export default ArtworkTable;
