import React from 'react';
import { UtensilsCrossed, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-kerala-green text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <UtensilsCrossed className="w-8 h-8 text-kerala-gold" />
              <span className="text-2xl font-serif font-bold tracking-tight">
                Tasty <span className="text-kerala-gold">Shaala</span>
              </span>
            </div>
            <p className="text-white/70 leading-relaxed mb-8">
              Bringing the true essence of Kerala's culinary heritage to your plate. Experience tradition, taste, and hospitality like never before.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-kerala-gold hover:border-kerala-gold transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-kerala-gold">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-kerala-gold">Our Menu</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#menu" className="hover:text-white transition-colors">Kerala Breakfast</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Traditional Sadya</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Seafood Specials</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Snacks & Burgers</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Refreshing Shakes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-kerala-gold">Newsletter</h4>
            <p className="text-white/70 mb-6">Subscribe to get latest updates and offers.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 w-full focus:outline-none focus:border-kerala-gold transition-colors"
              />
              <button className="bg-kerala-gold text-kerala-brown px-4 py-2 rounded-xl font-bold hover:bg-white transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center text-white/50 text-sm">
          <p>© 2026 Tasty Shaala | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
