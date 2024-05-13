'use client';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import Image from 'next/image';

export default function Principal() {
    return (
        <>
            <h1 className="text-[1.8rem] text-neutral-50 uppercase p-4"> Bloco 1</h1>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="">Lorem Ipsum</AccordionTrigger>
                    <AccordionContent>
                    <Image
                        alt='Image'
                        className='aspect-video bg-black rounded-md object-cover min-w-[90px]'
                        height='35'
                        width='90'
                        src={''} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Lorem Ipsum</AccordionTrigger>
                    <AccordionContent>
                        Lorem Ipsum Dolor Sit Amet
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Lorem Ipsum</AccordionTrigger>
                    <AccordionContent>
                        Lorem Ipsum Dolor Sit Amet
                    </AccordionContent>
                </AccordionItem>
            </Accordion></>
    );
}