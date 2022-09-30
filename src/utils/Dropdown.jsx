import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Transition from '../utils/Transition';

function Dropdown({
  children,
  title
}) {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    function updateM(e) {
      setMobile(!e.matches)
    }
    setMobile(!mediaQuery.matches)
    mediaQuery.addEventListener('change',updateM)
    return () => {
      mediaQuery.removeEventListener('change',updateM)
    }
  }, [])
  
  return (
    <li
      className="relative"
      onMouseEnter={() => mobile || setDropdownOpen(true)}
      onMouseLeave={() => mobile || setDropdownOpen(false)}
      onFocus={() => mobile || setDropdownOpen(true)}
      onBlur={() => mobile || setDropdownOpen(false)}
      onClick={() => mobile && setDropdownOpen(!dropdownOpen)}
    >
      <a
        className=" hover:text-gray-900 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
        href="#0"
        aria-expanded={dropdownOpen}
        onClick={(e) => e.preventDefault()}
      >
        {title}
        <svg className="ml-2 w-3 h-3 fill-current cursor-pointer  flex-shrink-0 " viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
        </svg>
      </a>
      <Transition
        show={dropdownOpen}
        tag="ul"
        className={`origin-top-right ${mobile?"":"z-10 absolute top-full right-0 w-56 bg-white ml-4 rounded text-center border border-gray-200 shadow-md"}`}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        {children}
      </Transition>
    </li>
  );
}

export default Dropdown;

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
  title: PropTypes.string.isRequired,
};
