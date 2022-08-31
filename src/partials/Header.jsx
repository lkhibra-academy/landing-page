import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

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
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-center md:justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0">
            {/* Logo */}
            <Link to="/" className="block" aria-label="lkhibra">
              <Logo className="w-20 md:w-28" />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link to="/" className="font-semibold text-xl text-black hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Home</Link>
              </li>
              <li>
                <Link to="/Training" className="font-semibold text-xl text-black hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Trainings</Link>
              </li>
              <li>
                <Link to="/Certificate" className="font-semibold text-xl text-black hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Certificate</Link>
              </li>
              <li>
                
                <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="font-semibold text-xl text-black hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out" type="button">Dropdown divider <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                {/* <!-- Dropdown menu --> */}
                <div id="dropdownDivider" className=" bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block"  data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                    <div class="py-1">
                      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                    </div>
                </div>

              </li>
              {/* <li>
                <Link to="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Sign up</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                  
                </Link>
              </li> */}
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
