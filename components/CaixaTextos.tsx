
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Textarea } from "@/components/ui/textarea"

export default function TarjasFixas() {
    return (
        <Card className='bg-neutral-700 h-full  flex flex-col rounded-md border-none'>
            <CardHeader>
                <CardTitle className='text-lime-400 mx-2 my-1 uppercase font-normal'>Lorem Ipsum</CardTitle>
                <Separator className='bg-neutral-600'></Separator>
            </CardHeader>
            <CardContent className='grow overflow-y-auto '>
                <ScrollArea className='flex flex-wrap items-center gap-2'>
                    <Textarea />
                </ScrollArea>
            </CardContent>
        </Card>
    )
}

