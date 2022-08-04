import React from 'react';
import { Link } from 'react-router-dom';
import Button1 from './Button1';
import Logo from './Logo';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-4 md:py-6 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-9">
            <div className="mb-2 flex gap-5">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="Cruip">
                <Logo className="w-20" />
              </Link> · 
              <Link to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</Link> · <Link to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</Link>
            </div>
          </div>

        </div>
             
      </div>
    </footer>
  );
}

export default Footer;
