import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Dropdown from '../utils/Dropdown';
function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`shadow-sm fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 ">
        <div className="flex items-center justify-center md:justify-between h-14 md:h-16 md:my-1">

          {/* Site branding */}
          <div className="flex-shrink-0">
            {/* Logo */}
            <Link to="/" className="block" aria-label="lkhibra">
              <Logo className="w-20 md:w-28" />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center text-lg font-medium">
              <li className='ml-3'><a href="">Home</a></li>
              <li className='ml-3'><a href="./Training"><Dropdown title="Trainings" children={
                <ul>
                  <li className='rounded p-2  font-medium'><a href="/Training" dir='rtl'>تدريب الخبرة فالبرمجة</a>
                  
                  </li>
                  <li className='p-2 font-medium'>
                  <span className='text-xs font-bold text-white rounded bg-red-700 px-2 mr-2'>قريبا</span>
                  <a href="./Training" dir='rtl'>تدريب الخبرة فالتصميم</a>
                  </li>
                  <li className='p-2 font-medium'><a href="./Training" >
                  <span className='text-xs font-bold text-white rounded bg-red-700 px-2 mr-2'>قريبا</span>
                    <span className='text-base font-medium'>Front-End 101</span> تدريب</a>
                  </li>
                </ul>}>
                  </Dropdown></a></li>
              <li className='ml-3'><a href="./Certificate">Certificate</a></li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
