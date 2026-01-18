
import React, { useState } from 'react';
import { Phone, Mail, Facebook, MessageSquare, MapPin, Instagram, Video } from 'lucide-react';
import { HOTEL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get In Touch</h1>
            <p className="text-lg text-slate-600">Have questions? We're here to help you plan your perfect Kilifi stay.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-serif">Contact Information</h2>
                <p className="text-slate-600 text-lg">Reach out to us through any of our official channels.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a href={`tel:${HOTEL_INFO.contact.phone}`} className="flex flex-col p-6 bg-slate-50 rounded-2xl group hover:bg-blue-600 transition-all">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-blue-100">Phone</p>
                  <p className="text-lg font-semibold text-slate-900 group-hover:text-white truncate">{HOTEL_INFO.contact.phone}</p>
                </a>

                <a href={`mailto:${HOTEL_INFO.contact.email}`} className="flex flex-col p-6 bg-slate-50 rounded-2xl group hover:bg-blue-600 transition-all">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-blue-100">Email</p>
                  <p className="text-lg font-semibold text-slate-900 group-hover:text-white truncate">{HOTEL_INFO.contact.email}</p>
                </a>

                <a href={HOTEL_INFO.contact.facebook} target="_blank" rel="noopener noreferrer" className="flex flex-col p-6 bg-slate-50 rounded-2xl group hover:bg-blue-700 transition-all">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-blue-100">Facebook</p>
                  <p className="text-lg font-semibold text-slate-900 group-hover:text-white">Kili Comfort</p>
                </a>

                <a href={HOTEL_INFO.contact.instagram} target="_blank" rel="noopener noreferrer" className="flex flex-col p-6 bg-slate-50 rounded-2xl group hover:bg-pink-600 transition-all">
                  <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-pink-100">Instagram</p>
                  <p className="text-lg font-semibold text-slate-900 group-hover:text-white">@kilicomfort.hotel</p>
                </a>

                <a href={HOTEL_INFO.contact.tiktok} target="_blank" rel="noopener noreferrer" className="flex flex-col p-6 bg-slate-50 rounded-2xl group hover:bg-slate-900 transition-all">
                  <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white">
                    <Video className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-400">TikTok</p>
                  <p className="text-lg font-semibold text-slate-900 group-hover:text-white">@kilicomfort.hotel</p>
                </a>

                <div className="flex flex-col p-6 bg-slate-50 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Location</p>
                  <p className="text-sm font-semibold text-slate-900">{HOTEL_INFO.location}</p>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href={HOTEL_INFO.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-10 py-4 rounded-full font-bold hover:bg-green-600 transition-all shadow-lg active:scale-95"
                >
                  <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 font-serif">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl active:scale-[0.98]"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
