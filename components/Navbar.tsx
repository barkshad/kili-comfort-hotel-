
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hotel } from 'lucide-react';
import { HOTEL_INFO, NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Hotel className="w-8 h-8 text-blue-600" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 tracking-tight leading-none uppercase">Kili Comfort</span>
                <span className="text-[10px] text-blue-600 font-medium uppercase tracking-widest mt-0.5">Hotel</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path) ? 'text-blue-600' : 'text-slate-600 hover:text-blue-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={HOTEL_INFO.contact.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium border-l-4 transition-colors ${
                  isActive(item.path)
                    ? 'bg-blue-50 border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-4 px-3">
              <a
                href={HOTEL_INFO.contact.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-bold shadow-lg"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
