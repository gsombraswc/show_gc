'use client';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@radix-ui/react-separator";
import { Badge } from "./ui/badge";

import Image from 'next/image';

export default function Principal() {
    return (
        <>
            <h1 className="text-[1.8rem] text-neutral-50 uppercase p-4"> Bloco 1</h1>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="">Lorem Ipsum</AccordionTrigger>
                    <AccordionContent className="flex items-center overflow-x-hidden text-wrap">
                        <div className="flex items-center">
                            <Image
                                alt='Image'
                                className='aspect-video bg-black rounded-md object-cover min-w-[90px]'
                                height='35'
                                width='90'
                                src={''}
                            />
                            <div>
                                <p className='text-sm pl-1 pt-1 font-medium leading-tight uppercase text-neutral-600 ml-1'>
                                    Título superior
                                </p>
                                <h2 className='text-md font-medium pl-1 py-1 leading-tight uppercase ml-1'>
                                    TÍTULO PRINCIPAL
                                </h2>
                            </div>
                        </div>
                        <div className="flex flex-grow justify-end rounded-md">
                            <Badge>
                                frase atualizada
                            </Badge>
                        </div>
                    </AccordionContent>
                    
                    <AccordionContent className="flex items-center p-1 overflow-x-hidden text-wrap ">
                        <div className="flex items-center">
                            <Image
                                alt='Image'
                                className='aspect-video bg-black rounded-md object-cover min-w-[90px]'
                                height='35'
                                width='90'
                                src={''}
                            />
                            <div>
                                <p className='text-sm pl-1 pt-1 font-medium leading-tight uppercase text-neutral-600 ml-1'>
                                    Título superior
                                </p>
                                <h2 className='text-md font-medium pl-1 py-1 leading-tight uppercase ml-1'>
                                    TÍTULO PRINCIPAL
                                </h2>
                            </div>
                        </div>
                        <div className="flex flex-grow justify-end rounded-md p-1">
                            <Badge>
                                frase atualizada
                            </Badge>
                        </div>
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
            </Accordion>
        </>
    );
}
