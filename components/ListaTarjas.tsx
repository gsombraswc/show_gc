import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Image from 'next/image';

export default function ListaTarjas() {
    return (
        <>
            <Card className='h-99 flex justify-start items-center overflow-y-auto rounded-md bg-neutral-50 my-1'>
                <CardContent className='flex justify-between items-center p-1 overflow-x-hidden text-wrap'>
                    <Image
                        alt='Image'
                        className='aspect-video bg-black rounded-md object-cover min-w-[90px]'
                        height='35'
                        width='90'
                        src={''} />
                    <CardTitle className='text-sm font-medium leading-tight  uppercase ml-1'>
                        Card Title
                    </CardTitle>
                </CardContent>
            </Card>
            
        </>

    )
}