import React from 'react';
import { motion } from 'motion/react';
import { UtensilsCrossed } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-kerala-green flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="mb-8"
      >
        <UtensilsCrossed className="w-20 h-20 text-kerala-gold" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-3xl font-serif font-bold text-white tracking-widest"
      >
        Tasty <span className="text-kerala-gold">Shaala</span>
      </motion.h2>
      <motion.div
        className="w-48 h-1 bg-white/20 rounded-full mt-6 overflow-hidden"
      >
        <motion.div
          animate={{ x: [-200, 200] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-1/2 h-full bg-kerala-gold"
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
