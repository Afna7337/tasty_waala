import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-kerala-gold font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-kerala-green mb-8 leading-tight">
            Authentic Flavors from <br />
            <span className="text-kerala-gold italic">God's Own Country</span>
          </h2>
          <p className="text-lg text-kerala-brown/80 leading-relaxed mb-8">
            Tasty Shaala brings the authentic flavors of Kerala to your table. From traditional Sadya to crispy Masala Dosa and refreshing shakes, we serve happiness on every plate. Our chefs use traditional recipes passed down through generations to ensure every bite is a journey to the backwaters of Kerala.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-3xl font-serif font-bold text-kerala-green">15+</h4>
              <p className="text-sm text-kerala-brown/60 uppercase tracking-wider">Years of Heritage</p>
            </div>
            <div>
              <h4 className="text-3xl font-serif font-bold text-kerala-green">50+</h4>
              <p className="text-sm text-kerala-brown/60 uppercase tracking-wider">Authentic Dishes</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://raw.githubusercontent.com/Afna7337/niche/main/Sadhyaa.jpg"
              alt="Authentic Kerala Sadhya"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-kerala-gold rounded-2xl -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-kerala-green rounded-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
