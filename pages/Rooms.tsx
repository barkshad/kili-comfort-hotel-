
import React from 'react';
import { Check, Star, Wind, Shield, Coffee, Zap } from 'lucide-react';
import { AMENITIES, ICON_MAP, HOTEL_INFO } from '../constants';

const Rooms: React.FC = () => {
  return (
    <div className="pt-24 animate-in fade-in slide-in-from-bottom-10 duration-1000">
      {/* Header */}
      <section className="py-32 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">Your Coastal <br/><span className="text-blue-600">Sanctuary.</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Meticulously designed for rest, focus, and modern comfort. Every room is an island of tranquility.
          </p>
        </div>
      </section>

      {/* Main Feature Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="grid grid-cols-2 gap-4 h-[700px]">
              <div className="col-span-2 h-1/2 rounded-[2rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=1000" alt="Main Bedroom" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=500" alt="Bathroom" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=500" alt="Detail" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="space-y-12 py-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />)}
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Premium Rating</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Private & Thoughtfully Appointed.</h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  We believe that great accommodation starts with the basics: high-quality bedding, powerful climate control, and absolute quiet.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {[
                  { icon: Wind, text: "Advanced Air Conditioning" },
                  { icon: Shield, text: "High-Security Locks" },
                  { icon: Coffee, text: "Complimentary Kitchen Use" },
                  { icon: Zap, text: "Ultra Fast Wi-Fi (Starlink Ready)" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-800 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6 pt-4">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-4">Essential Highlights</h4>
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    "Hand-picked orthopedic mattresses",
                    "Dedicated ergonomic workspace with high-CRI lighting",
                    "Blackout curtains for deep recovery sleep",
                    "Modern en-suite bathrooms with premium finishes"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                        <Check className="w-3 h-3 stroke-[4]" />
                      </div>
                      <span className="text-slate-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={HOTEL_INFO.contact.airbnb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-2xl hover:shadow-blue-500/30 active:scale-95"
                >
                  View Details on Airbnb
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of icons refined */}
      <section className="py-32 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Every detail accounted for.</h2>
            <p className="text-lg text-slate-500 font-medium">From high-speed connectivity to secure parking, we ensure your daily needs are met with excellence.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {AMENITIES.map((amenity, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  {ICON_MAP[amenity.icon]}
                </div>
                <span className="font-bold text-slate-900">{amenity.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
