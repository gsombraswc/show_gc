'use client';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "./ui/badge";
import Notification from "./ui/notification";
import { FaPlayCircle } from "react-icons/fa";

import Image from 'next/image';

export default function Principal() {
    const handleNotificationClick = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
        
    };

    const handlePlayCircleClick = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation(); 
        
    };

    return (
        <>
            <h1 className="text-[1.8rem] text-neutral-50 uppercase p-4"> Bloco 1</h1>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="flex items-center">
                        <div>
                            Lorem Ipsum
                        </div>
                        <div className="flex items-center gap-3 flex-grow justify-end">
                            <div onClick={handleNotificationClick}>
                                <Notification contentCount={2} />
                            </div>
                            <div onClick={handlePlayCircleClick}>
                                <FaPlayCircle className="h-8 w-8 hover:text-lime-300 active:text-lime-500" />
                            </div>
                        </div>
                    </AccordionTrigger>

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
                </AccordionItem>
            </Accordion>
        </>
    );
}
