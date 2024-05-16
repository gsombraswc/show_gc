'use client';
import { RefreshCcw, FolderOpen } from 'lucide-react';

export default function Header() {
    return (
        <div className="flex h-14 gap-4 justify-between bg-neutral-800 p-4">
            <h1 className="font-medium text-lime-400 uppercase">
                LOREM IPSUM
            </h1>
            <div className='flex items-center gap-4'>
                <RefreshCcw strokeWidth={2} className='text-white hover:text-lime-300 active:text-lime-500'  />
                <FolderOpen strokeWidth={2} className='text-white hover:text-lime-300 active:text-lime-500' />
            </div>
        </div>
    );
}