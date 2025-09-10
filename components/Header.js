"use client";
import AuthButton from './AuthButton';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import {UserIcon} from "@heroicons/react/24/outline";
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
  }, []);
  return (
    <div className='relative z-30 w-full mb-8'>
    <header className="header flex w-full">
        <Link href="/"><h3 className="logo absolute font-semibold text-2xl w-1/4 "><span className="text-main_red">Echo</span>Flick</h3></Link>
        
        <ul className="header-ul w-1/2 mx-auto justify-evenly  mt-2 hidden md:flex">
            <li key="home"><Link href="/" className='hover:text-main_red '>Home</Link></li>
            <li key="movies"  className='hover:text-main_red  '><Link href="/movie">Movies</Link></li>
            <li key="tv"  className='hover:text-main_red '><Link href="tv">TV Shows</Link></li>
            <li key="lists"  className='hover:text-main_red '><Link href="/mylist">My List</Link></li>
        </ul>

        <div className="absolute right-4">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
            {mobileOpen ? <XMarkIcon className="h-6 w-6 text-white" /> : <Bars3Icon className="h-6 w-6 text-white" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden shadow text-white absolute top-8 backdrop-blur-sm w-full">
            <ul className="flex flex-col p-4 space-y-2">
              <li>
                <Link href="/" className="hover:text-main_red">Home</Link>
              </li>
              <li>
                <Link href="/movie" className="hover:text-main_red">Movies</Link>
              </li>
              <li>
                <Link href="/tv" className="hover:text-main_red">TV Shows</Link>
              </li>
              <li>
                <Link href="/mylist" className="hover:text-main_red">My List</Link>
              </li>
            </ul>
          </nav>
        )}

        
       <AuthButton />
        
    </header>
    </div>

    
  )
}




export default Header