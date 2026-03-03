import React from 'react';
import { motion } from 'motion/react';
import { Phone, Instagram, MapPin, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-kerala-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-kerala-gold font-bold tracking-widest uppercase text-sm mb-4 block">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-kerala-green mb-8">
              Get in Touch
            </h2>
            
            <div className="space-y-8">
              <a 
                href="tel:8934778435" 
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:bg-kerala-green transition-colors">
                  <Phone className="w-6 h-6 text-kerala-green group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-kerala-brown/50 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-bold text-kerala-brown">8934778435</p>
                </div>
              </a>

              <a 
                href="https://instagram.com/tasty_shaala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:bg-kerala-green transition-colors">
                  <Instagram className="w-6 h-6 text-kerala-green group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-kerala-brown/50 uppercase tracking-widest mb-1">Follow Us</p>
                  <p className="text-xl font-bold text-kerala-brown">@tasty_shaala</p>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md">
                  <Clock className="w-6 h-6 text-kerala-green" />
                </div>
                <div>
                  <p className="text-xs text-kerala-brown/50 uppercase tracking-widest mb-1">Opening Hours</p>
                  <p className="text-xl font-bold text-kerala-brown">10:00 AM - 11:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md">
                  <MapPin className="w-6 h-6 text-kerala-green" />
                </div>
                <div>
                  <p className="text-xs text-kerala-brown/50 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-bold text-kerala-brown">Kochi, Kerala, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.7594241315!2d76.2304443831682!3d9.982342800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582ca58444f845!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
