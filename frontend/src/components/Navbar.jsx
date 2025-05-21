import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation(); // track route change

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setAboutDropdownOpen(false);
  }, [location]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow">
      <nav className="flex items-center justify-between p-6 lg:px-10">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img
              className="h-8 w-auto"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="logo"
            />
          </Link>
        </div>

        {/* Search Input */}
        <div className="relative hidden lg:block w-100 mr-10 mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Mobile menu icon */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="size-6" />
          </button>
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex lg:gap-x-10 items-center">
          <Link to="/" className="text-l font-semibold text-indigo-600 hover:text-sky-700">Bosh sahifa</Link>
          <Link to="/contact" className="text-l font-semibold text-indigo-600 hover:text-sky-700">Bog'lanish</Link>

          {/* Biz haqimizda Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setAboutDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 text-l font-semibold text-indigo-600 hover:text-sky-700"
            >
              Biz haqimizda
              {aboutDropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 py-2">
                <Link
                  to="/about/company"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Kompaniya haqida
                </Link>
                <Link
                  to="/about/team"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Jamoa
                </Link>
                <Link
                  to="/about/mission"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Maqsad
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 text-center">
                <Link to="/" className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Bosh sahifa
                </Link>
                <Link to="/contact" className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Bog'lanish
                </Link>
                <Link to="/about" className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Biz haqimizda
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
