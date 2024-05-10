'use client'
import { useEffect, useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { Input } from '@/components/ui/input';

import ListaTarjas from './ListaTarjas';
import TarjasFixas from './TarjasFixas';

export default function Sidebar() {
    const [remainingHeight, setRemainingHeight] = useState(0);

    useEffect(() => {
        const calculateHeight = () => {
            const windowHeight = window.innerHeight;
            const headerHeight = 80; // Altura do cabeçalho
            const inputHeight = 50; // Altura do input
            const totalFixedHeight = headerHeight + inputHeight;
            const remainingHeight = windowHeight - totalFixedHeight;
            setRemainingHeight(remainingHeight);
        };

        calculateHeight();

        const resizeHandler = () => {
            calculateHeight();
        };

        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    return (
        <div className='w-[380px] min-w-[380px] min-h-screen bg-neutral-800 flex flex-col'>
            <div className="h-12 flex items-center justify-left m-2">
                <img src='/images/logo.png' alt='Logo' width={140} height={4} />
            </div>

            <div className="flex justify-between items-center bg-neutral-700 h-10 mb-2 px-2 gap-2">
                <Input type='text' className='w-full h-6 bg-white' />
                <LayoutGrid strokeWidth={2} className='h-6 w-6 ml-2 mr-1 text-white' />
                <List strokeWidth={2} className='h-6 w-6 m-1 text-white' />
            </div>

            <div className="grow flex flex-col mb-2">
                <div className=" overflow-y-auto mx-2" style={{ height: remainingHeight / 2 }}>
                    <ListaTarjas />
                </div>
                <div className=" mx-2 mt-2" style={{ height: remainingHeight / 2 }}>
                    <TarjasFixas />
                </div>
            </div>
        </div>
    );
}
