
import React from 'react';
import { ExternalLink, Compass } from 'lucide-react';
import { ATTRACTIONS } from '../constants';

const Explore: React.FC = () => {
  return (
    <div className="pt-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="relative py-32 bg-blue-900 text-white overflow-hidden">
        <img 
          src="https://picsum.photos/id/1015/1920/1080" 
          alt="Kilifi Creek" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Compass className="w-12 h-12 mx-auto mb-6 text-blue-400" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Discover Kilifi</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            From turquoise waters to ancient ruins, explore the magic of the Kenyan coast right from our doorstep.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {ATTRACTIONS.map((attraction, idx) => (
              <div key={idx} className="group overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:shadow-xl">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={attraction.imageUrl} 
                    alt={attraction.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">{attraction.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{attraction.description}</p>
                  <button className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
                    View on Map <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 font-serif">The Coastal Lifestyle</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Kilifi isn't just a destination; it's a feeling. Whether you want to sail a dhow at sunset, explore the local art scene at Distant Relatives, or simply enjoy fresh calamari by the beach, everything is within easy reach from Kili Comfort Hotel.
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-blue-600">5min</span>
                <span className="text-slate-500 uppercase text-xs font-bold tracking-widest mt-1">To Town Center</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-blue-600">10min</span>
                <span className="text-slate-500 uppercase text-xs font-bold tracking-widest mt-1">To The Beach</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-blue-600">15min</span>
                <span className="text-slate-500 uppercase text-xs font-bold tracking-widest mt-1">To Creek Activities</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
