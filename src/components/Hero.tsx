
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-festival-50 to-festival-100">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-festival-200/30 to-festival-300/30 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm bg-festival-200 text-festival-800 rounded-full">
            March 5-6, 2025
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-festival-900">
            Collage Fest
          </h1>
          <p className="text-xl md:text-2xl text-festival-700 mb-8 max-w-2xl mx-auto">
            Join us for two days of creative expression, artistic collaboration, and unforgettable moments.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-festival-800 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-festival-700 transition-colors"
          >
            Get Tickets
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
