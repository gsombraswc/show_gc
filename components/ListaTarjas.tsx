import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image';

export default function ListaTarjas() {
    return (
        <>
            <Card className='h-99 flex justify-start items-center overflow-y-auto rounded-md bg-neutral-50 my-1'>
                <CardContent className='flex justify-between items-center p-1'>
                    <Image
                        alt='Image'
                        className='aspect-video bg-black rounded-md object-cover'
                        height='35'
                        width='90'
                        src={''} />
                    <CardTitle className='text-sm font-medium leading-none uppercase ml-1'>Card Title</CardTitle>
                </CardContent>
            </Card>
            <Card className='h-99 flex justify-start items-center overflow-y-auto rounded-md bg-neutral-50 my-1'>
                <CardContent className='flex justify-between items-center p-1'>
                    <Image
                        alt='Image'
                        className='aspect-video bg-black rounded-md object-cover'
                        height='35'
                        width='90'
                        src={''} />
                    <CardTitle className='text-sm font-medium leading-none uppercase ml-1'>Card Title</CardTitle>
                </CardContent>
            </Card>
            <Card className='h-99 flex justify-start items-center overflow-y-auto rounded-md bg-neutral-50 my-1'>
                <CardContent className='flex justify-between items-center p-1'>
                    <Image
                        alt='Image'
                        className='aspect-video bg-black rounded-md object-cover'
                        height='35'
                        width='90'
                        src={''} />
                    <CardTitle className='text-sm font-medium leading-none uppercase ml-1'>Card Title</CardTitle>
                </CardContent>
            </Card>
            <Card className='h-99 flex justify-start items-center overflow-y-auto rounded-md bg-neutral-50 my-1'>
                <CardContent className='flex justify-between items-center p-1'>
                    <Image
                        alt='Image'
                        className='aspect-video bg-black rounded-md object-cover'
                        height='35'
                        width='90'
                        src={''} />
                    <CardTitle className='text-sm font-medium leading-none uppercase ml-1'>Card Title</CardTitle>
                </CardContent>
            </Card>
            <Card className='h-99 flex justify-start items-center overflow-y-auto rounded-md bg-neutral-50 my-1'>
                <CardContent className='flex justify-between items-center p-1'>
                    <Image
                        alt='Image'
                        className='aspect-video bg-black rounded-md object-cover'
                        height='35'
                        width='90'
                        src={''} />
                    <CardTitle className='text-sm font-medium leading-none uppercase ml-1'>Card Title</CardTitle>
                </CardContent>
            </Card>
        </>

    )
}