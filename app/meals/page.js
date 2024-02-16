import { Suspense } from 'react';
import Link from 'next/link';

import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community.',
};

async function Meals() {
  console.log('Fetching meals');
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
       <header className="grid gap-6 mt-16 mb-20 mx-auto max-w-7xl text-black-600  text-center">
        <h1 className="text-4xl font-semibold">
          Delicious meals, created <span className="text-gradient text-orange-600 ">by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className="text-lg">
          
            <Link href="/meals/share" className="inline-block px-6 py-2 mt-4 rounded-lg bg-gradient-to-r from-red-600 to-yellow-400 text-white font-semibold hover:bg-yellow-600">
              Share Your Favorite Recipe
            </Link>
         
        </p>

      </header>
      <main className="max-w-7xl mx-auto">
      <Suspense fallback={<p className="text-center animate-pulse text-gray-700 text-xl">Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
