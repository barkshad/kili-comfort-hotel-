
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ShieldCheck, Check } from 'lucide-react';
import { HOTEL_INFO, AMENITIES, ICON_MAP } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070" 
            alt="Boutique Hotel in Kilifi" 
            className="w-full h-full object-cover brightness-[0.45]"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="flex justify-center mb-8 animate-in slide-in-from-bottom duration-700">
            <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
              Kilifi North's Premier Stay
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
            Comfort that feels <br/><span className="text-blue-400 italic font-medium">like home.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Discover a peaceful sanctuary in Mabirikani. Meticulously clean, modern, and perfectly positioned for your Kilifi adventure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={HOTEL_INFO.contact.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-2xl hover:shadow-blue-500/40 active:scale-95 flex items-center justify-center gap-3"
            >
              Book Your Stay <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/rooms"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all"
            >
              Explore Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Core Value Prop */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100 rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000" 
                alt="Immaculate Room" 
                className="relative rounded-[2rem] shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md py-3 px-5 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Verified Clean</span>
              </div>
            </div>
            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs">Quality Accomodation</h3>
                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                  Elegance meet affordability.
                </h2>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                At Kili Comfort, we strip away the unnecessary noise of luxury travel to focus on what matters: **cleanliness, safety, and a restful night's sleep.**
              </p>
              <div className="grid grid-cols-1 gap-6">
                {[
                  "Safe & tranquil residential neighborhood",
                  "Dedicated workspaces in every room",
                  "Meticulous attention to hygiene standards",
                  "Personalized Kenyan coastal hospitality"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link to="/about" className="group inline-flex items-center text-blue-600 font-black uppercase text-sm tracking-widest hover:gap-3 transition-all">
                  Our Philosophy <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Amenities - Minimalist Grid */}
      <section className="py-32 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Curated for your comfort.</h2>
              <p className="text-lg text-slate-500 font-medium">Every detail has been selected to ensure your stay is seamless, whether you're here for work or relaxation.</p>
            </div>
            <Link to="/rooms" className="text-blue-600 font-bold hover:underline underline-offset-8">View all amenities</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {AMENITIES.slice(0, 8).map((amenity, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-slate-100/50">
                <div className="w-16 h-16 bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-colors">
                  {ICON_MAP[amenity.icon]}
                </div>
                <h3 className="font-bold text-slate-900 text-lg leading-tight">{amenity.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section - Bold and Immersive */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <h3 className="text-blue-400 font-black uppercase tracking-[0.2em] text-xs">The Location</h3>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">The heart of <br/>Kilifi North.</h2>
              <p className="text-xl text-slate-400 leading-relaxed font-medium">
                Perfectly situated in Mabirikani, giving you quick access to the vibrant town center and the serene Kilifi Creek.
              </p>
              <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <MapPin className="w-8 h-8 text-blue-400 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-white uppercase tracking-widest">Our Address</p>
                  <p className="text-slate-300">{HOTEL_INFO.location}</p>
                </div>
              </div>
              <div className="pt-4">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all inline-block shadow-xl active:scale-95"
                >
                  Get Directions
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 h-[500px] w-full bg-slate-800 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15925.325619177113!2d39.85160869999999!3d-3.6333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183f99e3c7569111%3A0xc31057e4e13b8656!2sKilifi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1715600000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Kili Comfort Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
