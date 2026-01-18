
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hotel } from 'lucide-react';
import { HOTEL_INFO, NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className={`p-2 rounded-xl transition-colors ${scrolled ? 'bg-blue-50' : 'bg-white/20'}`}>
                <Hotel className={`w-6 h-6 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
              </div>
              <div className="flex flex-col">
                <span className={`text-lg font-extrabold tracking-tight leading-none uppercase ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                  Kili Comfort
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-widest mt-0.5 ${scrolled ? 'text-blue-600' : 'text-blue-200'}`}>
                  Hotel & Suites
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold tracking-wide transition-all relative py-2 ${
                  isActive(item.path) 
                    ? scrolled ? 'text-blue-600' : 'text-white'
                    : scrolled ? 'text-slate-500 hover:text-slate-900' : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full transition-all ${scrolled ? 'bg-blue-600' : 'bg-white'}`}></span>
                )}
              </Link>
            ))}
            <a
              href={HOTEL_INFO.contact.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-7 py-3 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95"
            >
              Book Your Stay
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-600' : 'text-white'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-40 flex flex-col pt-24 px-8">
          <div className="space-y-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block text-3xl font-bold transition-colors ${
                  isActive(item.path) ? 'text-blue-600' : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto pb-12">
            <a
              href={HOTEL_INFO.contact.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-600 text-white px-8 py-5 rounded-2xl text-lg font-bold shadow-xl"
            >
              Check Availability
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
