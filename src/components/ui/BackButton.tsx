'use client';

import { ArrowBigLeft } from 'lucide-react';

export default function BackButton() {
    return (
        <button
            className="absolute top-10 left-10 rounded backdrop-blur-sm text-black p-2 z-10 flex items-center gap-2 bg-white/70"
            onClick={() => window.history.back()}
        >
            <ArrowBigLeft />
            Back
        </button>
    );
}
