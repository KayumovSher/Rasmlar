import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Navbar({ user, logout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false); // Profil dropdown uchun state
  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null); // Profil dropdown uchun ref
  const location = useLocation();

  // Tashqariga bosilganda "Biz haqimizda" dropdownni yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Route o'zgarganda barcha dropdownlarni va mobil menyuni yopish
  useEffect(() => {
    setAboutDropdownOpen(false);
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
  }, [location]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow">
      <nav className="flex items-center justify-between p-6 lg:px-10">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="h-10 w-30">
          <img
            className=""
            src="/Navbar/Rasmlar_logo.png"
            alt="Rasmlar logo"
          />
          </Link>
        </div>
        

        {/* Mobile menu icon */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex lg:gap-x-10 items-center">
          <Link
            to="/"
            className="text-l font-semibold text-indigo-600 hover:text-sky-700"
          >
            Bosh sahifa
          </Link>

          {/* Biz haqimizda dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setAboutDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 text-l font-semibold text-indigo-600 hover:text-sky-700"
              aria-expanded={aboutDropdownOpen}
              aria-haspopup="true"
            >
              Xizmat ko'rsatish
              {aboutDropdownOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>

            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 py-2">
                <Link
                  to="/about"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Biz haqimizda
                </Link>
                <Link
                  to="/license"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Litsenziya
                </Link>
                {/* <Link
                  to="/#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Maqsad
                </Link> */}
              </div>
            )}
          </div>

          {/* {user ? (
            <div ref={profileDropdownRef} className="relative">
              <button
                onClick={() => setProfileDropdownOpen((prev) => !prev)}
                className="rounded-full bg-indigo-600 text-white w-8 h-8 text-sm font-bold flex items-center justify-center"
                aria-label="User menu"
                aria-expanded={profileDropdownOpen}
              >
                {user.username[0].toUpperCase()}
              </button>

              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 py-2">
                  <Link
                    to="/editprofile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setProfileDropdownOpen(false)}
                  >
                    Akkountni tahrirlash
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setProfileDropdownOpen(false)}
                  >
                    Akkount sahifasiga kirish
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setProfileDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    type="button"
                  >
                    Akkountdan chiqish
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Foydalanuvchi kirmagan — faqat Kirish link
            <Link
              to="/login"
              className="text-l font-semibold text-indigo-600 hover:text-sky-700"
            >
              Kirish
            </Link>
          )} */}
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        as="div"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
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
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 text-center">
                <Link
                  to="/"
                  className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bosh sahifa
                </Link>

                <Link
                  to="/about"
                  className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Xizmat ko'rsatish
                </Link>

                {user ? (
                  <>
                    <Link
                      to="/profile"
                      className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Akkount sahifasi
                    </Link>
                    <Link
                      to="/editprofile"
                      className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Akkountni tahrirlash
                    </Link>
                    <Link
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      type="button"
                    >
                      Akkountdan chiqish
                    </Link>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Kirish
                  </Link>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
