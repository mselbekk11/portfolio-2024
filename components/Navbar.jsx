import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

const Navbar = () => {

  const pathname = usePathname()

  const { theme, setTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true));

  // this line is the key to avoid the error.
  if (!hasMounted) return null;

  return (
    <nav>
      <ul>
        <li><Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>Home</Link></li>
        <li><Link className={`link ${pathname === '/projects' ? 'active' : ''}`} href='/projects'>Projects</Link></li>
        <li><Link href='/'>Contact</Link></li>
        <li><Link href='/'>CV</Link></li>
        {/* <li><p className='text-red-700'>Test</p></li> */}
      </ul>
      <div className='line'></div>
      {/* <div className='night'></div> */}
      <span>
      {theme === 'light' ? (
        <span onClick={() => setTheme('dark')}>Dark</span>
      ) : (
        <span onClick={() => setTheme('light')}>Light</span>
      )}
      {/* ({theme}) */}

        {/* <span onClick={() => setTheme("light")}>Light</span> |
        <span onClick={() => setTheme("dark")}>Dark</span> | ({theme}) */}
      </span>
    </nav>
  )
}

export default Navbar