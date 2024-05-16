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
        <Card className='bg-neutral-700 h-full flex flex-col rounded-md border-none'>
            <CardHeader>
                <CardTitle className='text-lime-400 mx-2 my-1'>Lorem Ipsum</CardTitle>
                <Separator className='bg-neutral-600'></Separator>
            </CardHeader>
            <CardContent className='grow overflow-y-auto '>
                
                <div className='flex justify-between items-center pb-1' >
                    <p className='uppercase text-nowrap text-[.8rem] text-neutral-50 text-medium mr-4'>Campo 1</p>
                    <Input type='text' className='w-full h-6 bg-white' />
                </div>
                <div className='flex justify-between items-center pb-1' >
                    <p className='uppercase text-nowrap text-[.8rem] text-neutral-50 text-medium mr-4'>Campo 2</p>
                    <Input type='text' className='w-full h-6 bg-white' />
                </div>
                <div className='flex justify-between items-center pb-1' >
                    <p className='uppercase text-nowrap text-[.8rem] text-neutral-50 text-medium mr-4'>Campo 3</p>
                    <Input type='text' className='w-full h-6 bg-white' />
                </div>

            </CardContent>
            <CardFooter className='flex justify-between items-center p-2'>
                <Eye strokeWidth={2} className='text-white' />
                <LogIn strokeWidth={2} className='text-white' />
                <RefreshCcw strokeWidth={2} className='text-white' />
                <LogOut strokeWidth={2} className='text-white' />
            </CardFooter>
        </Card>
    );
}