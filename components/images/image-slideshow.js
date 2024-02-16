
'use client';
import { useEffect, useState } from 'react';
import burgerImg from '@/public/images/burger.jpg';
import curryImg from '@/public/images/curry.jpg';
import dumplingsImg from '@/public/images/dumplings.jpg';
import macncheeseImg from '@/public/images/macncheese.jpg';
import pizzaImg from '@/public/images/pizza.jpg';
import schnitzelImg from '@/public/images/schnitzel.jpg';
import tomatoSaladImg from '@/public/images/tomato-salad.jpg';
import Image from 'next/image';

const images = [
  burgerImg,
  curryImg,
  dumplingsImg,
  macncheeseImg,
  pizzaImg,
  schnitzelImg,
  tomatoSaladImg,
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
      {images.map((image, index) => (
       <Image
       key={index}
       src={image}
       className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ease-in-out ${
         index === currentImageIndex ? 'z-10 opacity-100 scale-100' : 'opacity-0 scale-110'
       }`}
       alt={`Slide ${index}`}
     />
      ))}
    </div>
  );
}
