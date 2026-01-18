
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin, Instagram, Video, Hotel } from 'lucide-react';
import { HOTEL_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand */}
          <div className="md:col-span-4 space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 rounded-xl bg-blue-50 group-hover:bg-blue-600 transition-colors">
                <Hotel className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-slate-900 tracking-tight leading-none uppercase">Kili Comfort</span>
                <span className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mt-0.5">Hotel</span>
              </div>
            </Link>
            <p className="text-slate-500 leading-relaxed font-medium">
              Offering premium comfort and coastal hospitality at an affordable price point. Your sanctuary in the heart of Kilifi.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, url: HOTEL_INFO.contact.facebook },
                { icon: Instagram, url: HOTEL_INFO.contact.instagram },
                { icon: Video, url: HOTEL_INFO.contact.tiktok }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-8">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-500 hover:text-blue-600 font-semibold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-8">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Contact</h4>
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                <span className="text-slate-500 font-medium">{HOTEL_INFO.location}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <a href={`tel:${HOTEL_INFO.contact.phone}`} className="text-slate-500 hover:text-blue-600 font-semibold transition-colors">
                  {HOTEL_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <a href={`mailto:${HOTEL_INFO.contact.email}`} className="text-slate-500 hover:text-blue-600 font-semibold transition-colors">
                  {HOTEL_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="md:col-span-3">
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Quick Booking</h4>
              <p className="text-sm text-slate-500 mb-6 font-medium leading-relaxed">Secure your room through Airbnb for a verified stay.</p>
              <a
                href={HOTEL_INFO.contact.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-slate-900 text-white font-bold py-4 px-6 rounded-xl hover:bg-slate-800 transition-all shadow-lg active:scale-95"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Kili Comfort Hotel. Crafted with care.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
