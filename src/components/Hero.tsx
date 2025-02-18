
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-green-50 to-green-100">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-200/30 to-emerald-300/30 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3')] bg-cover bg-center"
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-48 md:w-64 mx-auto mb-8"
          >
            <img 
              src="/lovable-uploads/a4718c2a-f64c-46e6-b3f0-b0910253ccf0.png" 
              alt="DHANUSH Logo" 
              className="w-full h-auto"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 mb-4 text-lg bg-green-600 text-white rounded-full font-medium"
          >
            March 5-6, 2025
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-green-800 mb-8 max-w-2xl mx-auto"
          >
            The Grand Event of DHANAKULA - Where Talent Meets Tradition
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors shadow-lg shadow-green-500/20"
            >
              Get Tickets
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-50 transition-colors border-2 border-green-600 shadow-lg shadow-green-500/10"
            >
              View Schedule
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg
          className="w-6 h-6 text-green-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.1)_0%,transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(74,222,128,0.1)_0%,transparent_50%)] rounded-full animate-spin-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[conic-gradient(from_270deg_at_50%_50%,rgba(74,222,128,0.1)_0%,transparent_50%)] rounded-full animate-spin-slow" />
      </motion.div>
    </section>
  );
};

export default Hero;
