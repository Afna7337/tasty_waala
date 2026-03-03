import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="h-screen w-full relative overflow-hidden flex items-center">
      {/* Full-Screen Immersive Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] hover:scale-105"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop)' }}
      >
        {/* Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-l from-kerala-green/90 via-kerala-green/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-20 flex justify-end">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl text-right"
        >
          <div className="flex items-center justify-end gap-3 mb-6">
            <span className="text-kerala-gold font-bold uppercase tracking-widest text-xs">
              Welcome to Tasty Shaala
            </span>
            <div className="w-12 h-[1px] bg-kerala-gold" />
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white leading-[0.85] mb-8 tracking-tighter">
            Taste the <br />
            <span className="text-kerala-gold italic">Soul</span> of <br />
            Kerala.
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-md ml-auto leading-relaxed">
            Experience authentic flavors from God's Own Country, crafted with heritage recipes and served with love.
          </p>

          <div className="flex flex-wrap gap-6 items-center justify-end">
            <button className="flex items-center gap-3 text-white font-bold hover:text-kerala-gold transition-colors group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-kerala-gold transition-colors">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              Our Story
            </button>
            <button className="bg-kerala-gold text-kerala-brown px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-white transition-all group shadow-2xl">
              Explore Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Kathakali Mask (Left Side Decoration) */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -10 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute left-10 top-1/4 hidden lg:block w-64 h-64 z-20 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1621319330605-649033100075?q=80&w=2070&auto=format&fit=crop" 
          alt="Kathakali Mask"
          className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(212,175,55,0.4)] opacity-80"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Floating Food Elements (Subtle) */}
      <div className="absolute left-40 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="relative w-[500px] h-[500px]">
          {/* Main Image Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute top-0 left-0 w-64 h-64 rounded-full overflow-hidden border-8 border-white/10 shadow-2xl z-20"
          >
            <img
              src="https://raw.githubusercontent.com/Afna7337/niche/main/Sadhyaa.jpg"
              alt="Traditional Kerala Food"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
              <p className="text-white font-serif font-bold text-xl leading-tight drop-shadow-lg">
                TRADITIONAL <br /> KERALA FOOD
              </p>
            </div>
          </motion.div>

          {/* Secondary Floating Images */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-0 w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 shadow-xl z-10"
          >
            <img
              src="https://raw.githubusercontent.com/Afna7337/niche/main/download%20(7).jpg"
              alt="Fish Fry"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-20 right-10 w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-xl z-10"
          >
            <img
              src="https://raw.githubusercontent.com/Afna7337/niche/main/download%20(5).jpg"
              alt="Kolli & Pootti"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>

      {/* Vertical Rail Text */}
      <div className="absolute left-8 bottom-12 hidden md:block">
        <p className="vertical-text text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">
          Authentic • Traditional • Heritage
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
      `}} />
    </section>
  );
};

export default Hero;


