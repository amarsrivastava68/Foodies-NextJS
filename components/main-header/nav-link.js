'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
export default function NavLink({ href, children }) {
  const path = usePathname();

  
  const className = useMemo(() => {
    let baseClass = 'text-white-600 hover:text-orange-300 ';

    
    if (href === path) {
      baseClass += ' text-bold'; 
    }

    return baseClass;
  }, [href, path]);

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
