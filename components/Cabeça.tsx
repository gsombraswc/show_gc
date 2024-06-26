
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Textarea } from "@/components/ui/textarea"

export default function Cabeça() {
    return (
        <Card className='bg-neutral-800 h-full  flex flex-col rounded-md border-none'>
            <CardHeader>
                <CardTitle className='text-lime-400 mx-2 my-1 uppercase font-normal'>cabeça</CardTitle>
            </CardHeader>
                <Separator className='bg-neutral-700/50 mb-3'></Separator>
            <CardContent className='grow overflow-y-auto '>
                <ScrollArea className='flex flex-wrap items-center gap-2'>
                    <Textarea />
                </ScrollArea>
            </CardContent>
        </Card>
    )
}

