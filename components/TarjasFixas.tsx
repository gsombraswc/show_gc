import {
    CirclePlus,
    Trash2,
    Eye,
    EyeOff,
    CirclePlay,
    CircleStop
} from 'lucide-react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image';
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from '@radix-ui/react-scroll-area';

export default function TarjasFixas() {
    return (
        <Card className='bg-neutral-700 h-full flex flex-col rounded-md border-none'>
            <CardHeader>
                <CardTitle className='text-lime-400 mx-2 my-1'>Lorem Ipsum</CardTitle>
                <Separator className='bg-neutral-600'></Separator>
            </CardHeader>
            <CardContent className='grow overflow-y-auto '>
                <ScrollArea className='flex flex-wrap items-center gap-2'>

                        <div className='flex flex-col w-1/2 bg-neutral-50 max-w-[45%] rounded-sm ml-2'>
                            <Image
                                alt='Image'
                                className='aspect-video bg-black rounded-t-sm object-cover'
                                src={''} />
                            <p className='p-1 overflow-hidden text-nowrap leading-tight uppercase text-sm font-medium'>Titulo que pode ficar muito grande</p>
                        </div>
                        <div className='flex flex-col w-1/2 bg-neutral-50 max-w-[45%] rounded-sm ml-2'>
                            <Image
                                alt='Image'
                                className='aspect-video bg-black rounded-t-sm object-cover'
                                src={''} />
                            <p className='p-1 overflow-hidden text-nowrap leading-tight uppercase text-sm font-medium'>Titulo que pode ficar muito grande</p>
                        </div>
                        <div className='flex flex-col w-1/2 bg-neutral-50 max-w-[45%] rounded-sm ml-2'>
                            <Image
                                alt='Image'
                                className='aspect-video bg-black rounded-t-sm object-cover'
                                src={''} />
                            <p className='p-1 overflow-hidden text-nowrap leading-tight uppercase text-sm font-medium'>Titulo que pode ficar muito grande</p>
                        </div>

                </ScrollArea>
            </CardContent>
            <CardFooter className='flex justify-between items-center p-2'>
                <CirclePlus strokeWidth={2} className='text-white' />
                <Trash2 strokeWidth={2} className='text-white' />
                <Eye strokeWidth={2} className='text-white' />
                <CirclePlay strokeWidth={2} className='text-white' />
                <CircleStop strokeWidth={2} className='text-white' />
            </CardFooter>
        </Card>
    )
}

