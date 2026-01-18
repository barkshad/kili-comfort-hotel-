
import React from 'react';
import { HOTEL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Story</h1>
            <p className="text-lg text-slate-600">Founded on the principles of comfort, hospitality, and affordability.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 font-serif uppercase tracking-tight">Kili Comfort Hotel</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Kili Comfort Hotel was established with a simple yet powerful vision: to provide a "home away from home" for travelers visiting the beautiful Kilifi County. We understood that while Kilifi is a paradise, finding cozy and high-quality accommodation that remains affordable was often a challenge.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our hotel, nestled in the serene neighborhood of Mabirikani, Kilifi North, focuses on the core essentials of a great stay: cleanliness, comfort, convenience, and warm coastal hospitality. Whether you are here for a business meeting, a romantic getaway, or a solo exploration of the Kenyan coast, we treat every guest like family.
              </p>
            </div>
            <div>
              <img 
                src="https://picsum.photos/id/1018/800/600" 
                alt="Hospitality at Kili Comfort" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold italic font-serif">C</div>
              <h3 className="text-xl font-bold">Comfort</h3>
              <p className="text-slate-600">From plush bedding to climate-controlled rooms, your comfort is our top priority.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold italic font-serif">H</div>
              <h3 className="text-xl font-bold">Hospitality</h3>
              <p className="text-slate-600">Our team is dedicated to providing warm, attentive, and personalized Kenyan service.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold italic font-serif">A</div>
              <h3 className="text-xl font-bold">Affordability</h3>
              <p className="text-slate-600">High-quality coastal living shouldn't break the bank. We offer premium value.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Ready to experience Kili Comfort?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a
              href={HOTEL_INFO.contact.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg"
            >
              Book via Airbnb
            </a>
            <a
              href={`tel:${HOTEL_INFO.contact.phone}`}
              className="bg-slate-100 text-slate-800 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-all"
            >
              Call Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
