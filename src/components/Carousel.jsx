'use client';
import metadodia1 from '../assets/metadodia1.webp'


import { Carousel } from 'flowbite-react';

export default function DefaultCarousel() {
  return (
    <Carousel>
      <img
        alt="..."
        src={metadodia1}
        />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
    
    </Carousel>
  )
}


