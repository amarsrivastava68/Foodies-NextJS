import Link from 'next/link';

import ImageSlideshow from '@/components/images/image-slideshow';


export default function Home() {
  return (
    <>
       <header className="flex gap-3 p-4 ml-20 mt-12 mb-20 ">
        <div className="w-1/2 h-80 rounded-3xl">
      
          <ImageSlideshow />
        </div>
        <div>
        <div className="hero text-Black-300 font-semibold text-2xl ml-8 mt-4">
            <h1 className="text-gradient text-4xl font-bold tracking-wide uppercase">  NextLevel Food for NextLevel <span className='text-orange-500 text-4xl'>FOODIES</span> 
            </h1>
            <p className='text-orange-500 mt-2'>Taste & share food from all over the world.</p>
          </div>
          <div className="cta flex gap-4 mt-4 ml-8">
            
              <Link href="/community" className="button-primary text-white text-right p-3 mt-10 border-2 bg-orange-500 hover:bg-orange-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Join the Community</Link>
            
           
              <Link href="/meals" className="button-primary text-white text-right p-3 mt-10 border-2 bg-orange-500 hover:bg-orange-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Explore Meals</Link>
            
          </div>
        </div>
      </header>
      <main>
        <section className="section mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">How it works</h2>
          <p  className=" font-semibold mb-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p  className=" font-semibold mb-4">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="section mx-auto mt-8 mb-8 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Why NextLevel Food?</h2>
          <p  className=" font-semibold mb-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p  className=" font-semibold mb-4">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
  