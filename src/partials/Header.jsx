import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Dropdown from "../utils/Dropdown";
function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    
    <nav className=" bg-white shadow-lkhibra w-full">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
      <div className="justify-between md:items-center md:flex">
        <div className="bg-white">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/" className="block" aria-label="lkhibra">
              <Logo className="w-20 md:w-28" />
            </Link>
            <div className="md:hidden bg-white">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-lg font-medium bg-white">
              <li className="ml-3">
                <Link to="/">Home</Link>
              </li>
              <li className="ml-3">
                <div>
                  <Dropdown force={navbar} title="Trainings">
                    <ul className="text-right">
                      <li className="rounded p-2  font-medium">
                        <Link to="/Training" dir="rtl">
                          تدريب الخبرة فالبرمجة
                        </Link>
                      </li>
                      <li className="p-2 font-medium">
                        <span className="text-xs font-bold text-white rounded bg-red-700 px-2 mr-2">
                          قريبا
                        </span>
                        <Link to="/Training" dir="rtl">
                          تدريب الخبرة فالتصميم
                        </Link>
                      </li>
                      <li className="p-2 font-medium">
                        <Link to="/Training">
                          <span className="text-xs font-bold text-white rounded bg-red-700 px-2 mr-2">
                            قريبا
                          </span>
                          <span className="text-base font-medium">
                            Front-End 101
                          </span>{" "}
                          تدريب
                        </Link>
                      </li>
                    </ul>
                  </Dropdown>
                </div>
              </li>
              <li className="ml-3">
                <Link to="/Certificate">Certificate</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Header;
