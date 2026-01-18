
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react';
import { HOTEL_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-serif">Kili Comfort Hotel</h3>
            <p className="text-slate-400 leading-relaxed">
              Your comfortable haven in Kilifi. Affordable, clean, and welcoming hospitality for every traveler.
            </p>
            <div className="flex space-x-4">
              <a href={HOTEL_INFO.contact.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="flex items-start space-x-3 text-slate-400">
              <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
              <span>{HOTEL_INFO.location}</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-400">
              <Phone className="w-5 h-5 text-blue-500 shrink-0" />
              <a href={`tel:${HOTEL_INFO.contact.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                {HOTEL_INFO.contact.phone}
              </a>
            </div>
            <div className="flex items-center space-x-3 text-slate-400">
              <Mail className="w-5 h-5 text-blue-500 shrink-0" />
              <a href={`mailto:${HOTEL_INFO.contact.email}`} className="hover:text-white transition-colors">
                {HOTEL_INFO.contact.email}
              </a>
            </div>
          </div>

          {/* Booking */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Reservations</h4>
            <p className="text-slate-400 mb-4">Book your stay via Airbnb for a secure and hassle-free experience.</p>
            <a
              href={HOTEL_INFO.contact.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
            >
              Book via Airbnb
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Kili Comfort Hotel. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
