'use client';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from "@/components/ui/separator"
import { Input } from './ui/input';
import {
    LogIn,
    LogOut,
    Eye,
    EyeOff,
    RefreshCcw
} from 'lucide-react';

export default function InputFrases() {
    return (
        <Card className='bg-neutral-800 h-full flex flex-col rounded-md border-none'>
            <CardHeader>
                <CardTitle className='text-lime-400 mx-2 my-1 uppercase'>ta no ar</CardTitle>
            </CardHeader>
            <Separator className='bg-neutral-700/50 mb-3'></Separator>
            <CardContent className='grow overflow-y-auto '>
                <div className='flex justify-between items-center pb-2' >
                    <p className='uppercase text-nowrap text-[.8rem] text-neutral-50 text-medium mr-4'>Campo 1</p>
                    <Input type='text' className='w-full h-6 bg-white' />
                </div>
                <div className='flex justify-between items-center pb-2' >
                    <p className='uppercase text-nowrap text-[.8rem] text-neutral-50 text-medium mr-4'>Campo 2</p>
                    <Input type='text' className='w-full h-6 bg-white' />
                </div>
                <div className='flex justify-between items-center pb-1' >
                    <p className='uppercase text-nowrap text-[.8rem] text-neutral-50 text-medium mr-4'>Campo 3</p>
                    <Input type='text' className='w-full h-6 bg-white' />
                </div>

            </CardContent>
            <CardFooter className='flex justify-between items-center p-2'>
                <Eye strokeWidth={2} className='text-white hover:text-lime-300 active:text-lime-500' />
                <LogIn strokeWidth={2} className='text-white hover:text-lime-300 active:text-lime-500' />
                <RefreshCcw strokeWidth={2} className='text-white hover:text-lime-300 active:text-lime-500' />
                <LogOut strokeWidth={2} className='text-white hover:text-lime-300 active:text-lime-500' />
            </CardFooter>
        </Card>
    );
}