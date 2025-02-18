
import { motion } from "framer-motion";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  ];

  return (
    <section className="py-20 bg-festival-50" id="gallery">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-festival-900 mb-4">Gallery</h2>
          <p className="text-festival-600 max-w-2xl mx-auto">
            Glimpses of magical moments from previous editions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
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
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
