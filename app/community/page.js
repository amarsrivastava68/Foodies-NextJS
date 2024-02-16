import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import Image from 'next/image';

export default function CommunityPage() {
  return (
    <>
      <header className="gap-12 my-20 mx-auto w-90 max-w-75 text-center text-white-700 text-3xl ">
        <h1 className="font-montserrat">
          One shared passion: <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className="w-90  text-center">
        <h2 className="font-montserrat font-bold text-2xl mb-12 text-black-700">Community Perks</h2>

        <ul className="list-none my-12 p-0">
          <li className="flex flex-col items-center gap-8">
            <Image src={mealIcon} alt="A delicious meal" className="w-32 h-32 object-contain" />
            <p className="font-montserrat text-2xl font-bold">Share & discover recipes</p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image src={communityIcon} alt="A crowd of people, cooking" className="w-32 h-32 object-contain" />
            <p className="font-montserrat text-2xl font-bold">Find new friends & like-minded people</p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image src={eventsIcon} alt="A crowd of people at a cooking event" className="w-32 h-32 object-contain" />
            <p className="font-montserrat text-2xl font-bold">Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
