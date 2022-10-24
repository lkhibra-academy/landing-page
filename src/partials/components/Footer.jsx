import React from "react";
import { Link } from "react-router-dom";
import Button1 from "./Button1";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="border-t md:mb-0 mb-16 border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        {/* Top area: Blocks */}
        <div className="py-4 md:py-6">
          {/* 1st block */}
          <div className="">
            <div className="mb-2 flex gap-4 items-center md:gap-8">
              {/* Logo */}
              <Link to="/" className="inline-block " aria-label="Cruip">
                <Logo className="md:w-20 w-16" /> 
              </Link>{" "}
              
              <Link
                to="/responsibility"
                className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                إخلاء المسؤولية
              </Link>{" "}
              <Link
                to="/privacy"
                className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                سياسة الخصوصية
              </Link>{" "}
              <Link
                to="/termsofuse"
                className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                شروط الاستخدام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
