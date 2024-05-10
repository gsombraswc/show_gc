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


export default function TarjasFixas() {
    return (
        <Card className='bg-neutral-700 h-full flex flex-col rounded-md border-none'>
            <CardHeader>
                <CardTitle className='text-lime-300'>Lorem Ipsum</CardTitle>
                <Separator className='bg-neutral-600'></Separator>
            </CardHeader>
            <CardContent className='grow overflow-y-auto'>
                <div className='flex flex-wrap gap-1'>
                    <div className='flex flex-col w-1/2 bg-neutral-50 max-w-[160px] rounded-md'>
                        <Image
                            alt='Image'
                            className='aspect-video bg-black rounded-t-md object-cover'
                            src={''} />
                        <p className='p-1 overflow-y-hidden text-nowrap leading-tight'>Titulo que pode ficar muito grande</p>
                    </div>
                    <div className='flex flex-col w-1/2 bg-neutral-50 max-w-[160px] rounded-md'>
                        <Image
                            alt='Image'
                            className='aspect-video bg-black rounded-t-md object-cover'
                            src={''} />
                        <p className='p-1 overflow-y-hidden text-nowrap leading-tight'>Titulo que pode ficar muito grande</p>
                    </div>
                    <div className='flex flex-col w-1/2 bg-neutral-50 max-w-[160px] rounded-md'>
                        <Image
                            alt='Image'
                            className='aspect-video bg-black rounded-t-md object-cover'
                            src={''} />
                        <p className='p-1 overflow-y-hidden text-nowrap leading-tight'>Titulo que pode ficar muito grande</p>
                    </div>


                </div>
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

