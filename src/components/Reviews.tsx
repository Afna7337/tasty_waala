import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Rahul Nair',
    rating: 5,
    text: 'The most authentic Kerala Sadya I have had outside of Kerala. The flavors are spot on and the service is excellent!',
    role: 'Food Blogger',
  },
  {
    id: 2,
    name: 'Anjali Menon',
    rating: 4.5,
    text: 'Appam and Stew here is a must-try. The stew is so creamy and the appams are perfectly lacy. Highly recommended!',
    role: 'Local Guide',
  },
  {
    id: 3,
    name: 'Suresh Kumar',
    rating: 5,
    text: 'Great ambiance and even better food. The Kerala Style Burger was a pleasant surprise. Will definitely come back.',
    role: 'Regular Customer',
  },
  {
    id: 4,
    name: 'Meera Pillai',
    rating: 4.8,
    text: 'Tasty Shaala truly lives up to its name. The fish curry reminds me of my grandmother’s cooking. 5 stars!',
    role: 'Home Chef',
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-kerala-green/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-kerala-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-kerala-gold font-bold tracking-widest uppercase text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-kerala-green mb-6">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl font-bold text-kerala-brown">4.8/5</span>
            <div className="flex text-kerala-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-kerala-brown/60 italic">Based on 500+ reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-kerala-cream p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-kerala-gold/20 group-hover:text-kerala-gold/40 transition-colors" />
              <div className="flex text-kerala-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-kerala-brown/80 mb-6 italic leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-bold text-kerala-green">{review.name}</h4>
                <p className="text-xs text-kerala-brown/50 uppercase tracking-widest">
                  {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
