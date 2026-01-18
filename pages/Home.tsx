
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { HOTEL_INFO, AMENITIES, ICON_MAP } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/164/1920/1080" 
            alt="Coastal scene" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-600/20 text-blue-100 border border-blue-400/30 text-xs font-bold uppercase tracking-[0.2em] mb-6 animate-in slide-in-from-bottom duration-1000">
            Welcome to Kilifi
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {HOTEL_INFO.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {HOTEL_INFO.tagline} — Where modern comfort meets Kenyan hospitality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={HOTEL_INFO.contact.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              Book Your Stay <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/id/1029/800/1000" 
                alt="Comfortable Room" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block border border-slate-50">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Highly Rated</p>
                    <p className="text-xs text-slate-500">By Guests on Airbnb</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Your Coastal Sanctuary <br /> <span className="text-blue-600">in Kilifi North</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Experience the perfect blend of affordability and comfort. Kili Comfort Hotel offers cozy, meticulously clean, and well-equipped rooms designed for travelers who value peace of mind.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-6 h-6 mt-1 text-green-500">
                    <CheckCircle2 className="w-full h-full" />
                  </div>
                  <p className="text-slate-700 font-medium">Safe and quiet environment for a restful stay.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-6 h-6 mt-1 text-green-500">
                    <CheckCircle2 className="w-full h-full" />
                  </div>
                  <p className="text-slate-700 font-medium">Business-friendly with high-speed Wi-Fi and workspaces.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-6 h-6 mt-1 text-green-500">
                    <CheckCircle2 className="w-full h-full" />
                  </div>
                  <p className="text-slate-700 font-medium">Strategically located near Kilifi town and pristine beaches.</p>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center text-blue-600 font-bold hover:gap-2 transition-all">
                Learn More About Us <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exceptional Amenities</h2>
            <p className="text-slate-600">Everything you need for a comfortable and productive stay at the coast.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {AMENITIES.map((amenity, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {ICON_MAP[amenity.icon]}
                </div>
                <h3 className="font-bold text-slate-800">{amenity.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Teaser */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">Find Us in the Heart of Kilifi</h2>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-blue-200 mt-1 shrink-0" />
                <p className="text-xl text-blue-50 leading-relaxed">
                  Located in {HOTEL_INFO.location}, we provide easy access to the town center, local markets, and the breathtaking Kilifi Creek.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all inline-block"
                >
                  Get Directions
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full h-[400px] bg-white/20 rounded-2xl border border-white/30 backdrop-blur-sm overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15925.325619177113!2d39.85160869999999!3d-3.6333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183f99e3c7569111%3A0xc31057e4e13b8656!2sKilifi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1715600000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
