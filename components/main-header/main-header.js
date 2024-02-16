import Link from 'next/link';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import logoImg from '@/assets/logo.png';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center px-4 md:px-10 py-8">
        <Link href="/" className="flex items-center text-white font-bold">
          <Image src={logoImg} alt="A plate with food on it" width={70} height={70} priority />
          <span className="ml-2 text-lg ml-4">NextLevel Food</span>
        </Link>

        <nav>
          <ul className="flex space-x-6 text-white font-semibold text-lg">
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
