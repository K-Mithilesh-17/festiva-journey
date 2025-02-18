
import { motion } from "framer-motion";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      title: "Cultural Performances"
    },
    {
      url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
      title: "Dance Competitions"
    },
    {
      url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
      title: "Music Events"
    },
    {
      url: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec",
      title: "Technical Workshops"
    },
    {
      url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
      title: "Sports Events"
    },
    {
      url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
      title: "Art Exhibitions"
    },
  ];

  return (
    <section className="py-20 bg-purple-50" id="gallery">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Event Gallery
          </h2>
          <p className="text-purple-700 max-w-2xl mx-auto">
            Glimpses of the magic that awaits you at DHANUSH
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={image.url}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Full size image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
