import {
    CirclePlus,
    Trash2,
    Eye,
    EyeOff,
    CirclePlay,
    CircleStop
} from 'lucide-react';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image';
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from '@radix-ui/react-scroll-area';

export default function TarjasFixas() {
    return (
        <Card className='bg-neutral-800 h-full flex flex-col rounded-md border-none'>
            <CardHeader>
                <CardTitle className='text-lime-400 mx-2 my-1 uppercase'>tarjas fixas</CardTitle>
            </CardHeader>
            <Separator className='bg-neutral-700/50 mb-3'></Separator>
            <CardContent className='grow overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-500 '>
                <ScrollArea>
                    <ul className='grid grid-cols-2 items-center gap-4'>
                        <li className=' bg-neutral-50 w-full rounded-sm cursor-pointer focus:ring-2 '>
                            <Image
                                alt='Image'
                                className='aspect-video bg-black rounded-t-sm object-cover'
                                src={''} 
                            />
                            <p className='p-1 overflow-hidden truncate leading-tight uppercase text-sm font-medium'>
                                Titulo que pode ficar muito grande
                            </p>
                        </li>
                        <li className=' bg-neutral-50 w-full rounded-sm cursor-pointer focus:ring-2 '>
                            <Image
                                alt='Image'
                                className='aspect-video bg-black rounded-t-sm object-cover'
                                src={''} />
                            <p className='p-1 overflow-hidden truncate leading-tight uppercase text-sm font-medium'>
                                Titulo que pode ficar muito grande
                            </p>
                        </li>
                        <li className=' bg-neutral-50 w-full rounded-sm cursor-pointer focus:ring-2 '>
                            <Image
                                alt='Image'
                                className='aspect-video bg-black rounded-t-sm object-cover'
                                src={''} />
                            <p className='p-1 overflow-hidden truncate leading-tight uppercase text-sm font-medium'>
                                Titulo que pode ficar muito grande
                            </p>
                        </li>
                    </ul>
                </ScrollArea>
            </CardContent>
            <CardFooter className='flex justify-between items-center p-2'>
                <CirclePlus strokeWidth={2} className='text-white hover:text-lime-300 active:text-lime-500' />
                <Trash2 strokeWidth={2} className='text-white hover:text-lime-300 active:text-lime-500' />
                <Eye strokeWidth={2} className='text-white hover:text-lime-300 active:text-lime-500' />
                <CirclePlay strokeWidth={2} className='text-white hover:text-lime-300 active:text-lime-500' />
                <CircleStop strokeWidth={2} className='text-white hover:text-lime-300 active:text-lime-500' />
            </CardFooter>
        </Card>
    )
}

