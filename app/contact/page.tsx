'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Send, CheckCircle, AlertCircle } from 'lucide-react';

const eventTypes = [
  'Bridal Makeup',
  'Engagement Makeup',
  'Reception Makeup',
  'Party Makeup',
  'Editorial Makeup',
  'Photoshoot Makeup',
  'Other',
];

interface FormData {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  message: string;
}

const WHATSAPP_NUMBER = '919999999999';
// Replace with your actual Google Apps Script URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openWhatsApp = (data: FormData) => {
    const text = `Hi Suman,\n\nName: ${data.name}\nPhone: ${data.phone}\n\nEvent Type: ${data.eventType}\nEvent Date: ${data.eventDate}\nLocation: ${data.location}\n\n${data.message ? `Message: ${data.message}\n\n` : ''}I would like to book a makeup session.\n\nThank you.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const payload = { ...form, timestamp: new Date().toISOString() };

      // Try to save to Google Sheets
      if (GOOGLE_SCRIPT_URL !== 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec') {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      setStatus('success');
      // Open WhatsApp after brief delay so success message is visible
      setTimeout(() => openWhatsApp(form), 1200);
    } catch {
      // Even on error, open WhatsApp so lead is not lost
      setStatus('success');
      setTimeout(() => openWhatsApp(form), 1200);
    }
  };

  const isValid = form.name && form.phone && form.eventType && form.eventDate;

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-beige overflow-hidden flex items-center pt-24">
        <div className="absolute inset-0">
          <Image src="https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Contact" fill className="object-cover opacity-20" priority />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <p className="font-cormorant italic text-gold text-xl mb-2">Let&apos;s Connect</p>
            <h1 className="font-playfair text-5xl lg:text-6xl text-dark mb-4">Book Your Look</h1>
            <p className="font-dm text-mocha/60 text-sm max-w-md">Fill out the form and I&apos;ll be in touch shortly — or connect with me directly on WhatsApp.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h2 className="font-playfair text-2xl text-dark mb-2">Get In Touch</h2>
              <p className="font-cormorant italic text-gold text-lg mb-8">Beauty that feels like you.</p>

              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-beige flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-playfair text-dark text-sm mb-0.5">Location</p>
                    <p className="font-dm text-xs text-mocha/65">Mumbai, Maharashtra, India</p>
                    <p className="font-dm text-xs text-mocha/65">Available for home visits across Mumbai</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-beige flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-playfair text-dark text-sm mb-0.5">WhatsApp</p>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="font-dm text-xs text-mocha/65 hover:text-gold transition-colors">
                      +91 99999 99999
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-beige flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-playfair text-dark text-sm mb-0.5">Email</p>
                    <a href="mailto:suman@makeupsumansouls.com" className="font-dm text-xs text-mocha/65 hover:text-gold transition-colors">
                      suman@makeupsumansouls.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-beige flex items-center justify-center shrink-0">
                    <Instagram size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-playfair text-dark text-sm mb-0.5">Instagram</p>
                    <a href="https://www.instagram.com/makeup_suman_soul" target="_blank" rel="noopener noreferrer" className="font-dm text-xs text-mocha/65 hover:text-gold transition-colors">
                      @makeup_suman_soul
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-2xl hover:opacity-90 transition-opacity mb-8"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <p className="font-dm text-sm font-medium">Chat on WhatsApp</p>
                  <p className="font-dm text-xs opacity-80">Typically replies within 1 hour</p>
                </div>
              </a>

              {/* Portfolio Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3985353/pexels-photo-3985353.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Suman Mukadam"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="font-playfair text-ivory text-lg">Suman Mukadam</p>
                  <p className="font-cormorant italic text-gold">Makeup Artist, Mumbai</p>
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-beige shadow-sm">
                <h2 className="font-playfair text-2xl text-dark mb-1">Book an Appointment</h2>
                <p className="font-dm text-sm text-mocha/55 mb-8">After submitting, you&apos;ll be redirected to WhatsApp to confirm your booking.</p>

                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <CheckCircle size={64} className="text-gold mx-auto mb-6" strokeWidth={1} />
                    </motion.div>
                    <h3 className="font-playfair text-2xl text-dark mb-3">Thank You!</h3>
                    <p className="font-dm text-mocha/65 text-sm mb-2">Your booking request has been received.</p>
                    <p className="font-dm text-mocha/65 text-sm">Opening WhatsApp to confirm your appointment...</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-dm text-xs text-mocha/70 uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-beige bg-ivory text-dark font-dm text-sm placeholder:text-mocha/30 focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-dm text-xs text-mocha/70 uppercase tracking-wider mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-beige bg-ivory text-dark font-dm text-sm placeholder:text-mocha/30 focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-dm text-xs text-mocha/70 uppercase tracking-wider mb-2">
                        Event Type *
                      </label>
                      <select
                        name="eventType"
                        value={form.eventType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-beige bg-ivory text-dark font-dm text-sm focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-dm text-xs text-mocha/70 uppercase tracking-wider mb-2">
                          Event Date *
                        </label>
                        <input
                          type="date"
                          name="eventDate"
                          value={form.eventDate}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 rounded-xl border border-beige bg-ivory text-dark font-dm text-sm focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-dm text-xs text-mocha/70 uppercase tracking-wider mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={form.location}
                          onChange={handleChange}
                          placeholder="Area / Venue in Mumbai"
                          className="w-full px-4 py-3 rounded-xl border border-beige bg-ivory text-dark font-dm text-sm placeholder:text-mocha/30 focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-dm text-xs text-mocha/70 uppercase tracking-wider mb-2">
                        Additional Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell me about your vision, preferences, or any special requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-beige bg-ivory text-dark font-dm text-sm placeholder:text-mocha/30 focus:outline-none focus:border-gold transition-colors resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-500 text-sm font-dm bg-red-50 p-3 rounded-xl">
                        <AlertCircle size={15} />
                        Something went wrong. Please try again or contact via WhatsApp.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={!isValid || status === 'loading'}
                      className="w-full bg-dark text-ivory py-4 text-xs tracking-[0.18em] uppercase font-dm rounded-full hover:bg-mocha transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-ivory/30 border-t-ivory rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Send Booking Request
                        </>
                      )}
                    </button>
                    <p className="text-center font-dm text-xs text-mocha/40">
                      After submitting, WhatsApp will open to confirm your booking.
                    </p>
                  </form>
                )}
              </div>

              {/* Quick Info Cards */}
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                {[
                  { title: 'Home Visits', desc: 'Available across all of Mumbai', icon: '🏠' },
                  { title: 'Trial Session', desc: 'Included with all bridal bookings', icon: '✨' },
                  { title: 'Premium Products', desc: 'Only the best skin-safe brands', icon: '💎' },
                ].map((card) => (
                  <div key={card.title} className="bg-beige rounded-xl p-4 border border-beige/50">
                    <div className="text-lg mb-2">{card.icon}</div>
                    <p className="font-playfair text-dark text-sm mb-1">{card.title}</p>
                    <p className="font-dm text-xs text-mocha/60">{card.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
