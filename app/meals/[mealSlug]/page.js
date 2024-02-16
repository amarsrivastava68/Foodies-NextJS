import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getMeal } from '@/lib/meals';

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className="flex items-center justify-between px-4 py-8 mx-auto max-w-screen-xl">
        <div className="relative w-80 h-52">
          <Image
            src={meal.image}
            alt={meal.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="ml-8 max-w-md">
          <h1 className="text-4xl font-bold text-gray-900">{meal.title}</h1>
          <p className="mt-2 text-sm text-gray-600">
            by <a href={`mailto:${meal.creator_email}`} className="font-medium text-indigo-600 hover:text-indigo-500">{meal.creator}</a>
          </p>
          <p className="mt-4 text-lg text-gray-800">{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className="px-8 py-6 text-lg leading-relaxed bg-gray-400 mb-4 text-gray-800 rounded-lg shadow-md max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
