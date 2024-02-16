import Link from "next/link";
import Image from "next/image";

export default function MealItem({ title, slug, image, summary, creator }) {
  console.log(image);
  return (
    <article className="flex flex-col justify-between bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 rounded-md shadow-md overflow-hidden transition duration-300 ease-in-out">
      <header>
        <div className="relative w-full">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            layout="fixed"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-sm italic">{`by ${creator}`}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between">
        <p className="p-4">{summary}</p>
        <div className="p-4 text-right">
          <Link
            href={`/meals/${slug}`}
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-orange-700 to-orange-400 text-white font-semibold hover:bg-gradient-to-r hover:from-orange-700 hover:to-orange-400 transition duration-900 ease-in-out"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
