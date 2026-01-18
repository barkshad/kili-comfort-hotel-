
import React from 'react';
import { Check, Star } from 'lucide-react';
import { AMENITIES, ICON_MAP } from '../constants';

const Rooms: React.FC = () => {
  return (
    <div className="pt-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/id/1027/1920/600" alt="Texture" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Rooms & Amenities</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Designed for business, leisure, and everything in between. Discover your perfect stay.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <img src="https://picsum.photos/id/1031/600/600" alt="Room View 1" className="rounded-2xl shadow-lg w-full h-[300px] object-cover" />
              <img src="https://picsum.photos/id/1032/600/600" alt="Room View 2" className="rounded-2xl shadow-lg w-full h-[300px] object-cover" />
              <img src="https://picsum.photos/id/1033/600/600" alt="Room View 3" className="rounded-2xl shadow-lg w-full h-[300px] object-cover sm:col-span-2" />
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-1 text-yellow-500 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-slate-500 text-xs ml-2 uppercase font-bold tracking-widest">Premium Quality</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif">Private & Cozy Accommodations</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Our rooms are thoughtfully designed to maximize comfort and utility. Each unit is a private sanctuary featuring modern decor and high-quality furnishings.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold border-b pb-2">Room Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Plush, high-quality mattresses",
                    "Crisp, clean linens & towels",
                    "Spacious en-suite bathrooms",
                    "Ample storage for long stays",
                    "Blackout curtains for restful sleep",
                    "Dedicated workspace with lamp"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                <h3 className="text-blue-900 font-bold mb-2 uppercase text-xs tracking-widest">Guest Policy</h3>
                <p className="text-blue-800 text-sm italic">
                  Ideal for couples, solo travelers, and business guests seeking a quiet, secure, and impeccably clean environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 font-serif">Comprehensive Amenities</h2>
            <p className="text-slate-600">Enjoy full access to these features throughout your stay.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AMENITIES.map((amenity, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  {ICON_MAP[amenity.icon]}
                </div>
                <span className="font-semibold text-slate-800">{amenity.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
