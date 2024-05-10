'use client';
import Image from 'next/image';

export default function Preview() {
    return (
        <Image
            alt='Image'
            className='aspect-video bg-black rounded-lg border object-cover'
            src={''} />
    );
}