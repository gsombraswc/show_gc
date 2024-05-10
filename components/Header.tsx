'use client';
import { RefreshCcw, FolderOpen } from 'lucide-react';
import DateTime from './DateTime';
 
export default function Header() {
return (
    <div className="flex h-14 gap-4 justify-between bg-neutral-800 p-4">
      <h1 className="font-medium text-lime-400">
        LOREM IPSUM
      </h1>
      <div className='flex items-center gap-4'>
        <RefreshCcw strokeWidth={2} className='text-white' />
        <FolderOpen strokeWidth={2} className='text-white' />

        <div className='ml-16'>
        <DateTime />
        </div>

      </div>
    </div>
);
}