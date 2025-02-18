
import { motion } from "framer-motion";

const Tickets = () => {
  const tickets = [
    {
      name: "Early Bird",
      price: "$99",
      features: ["Full event access", "Welcome kit", "Priority seating", "Workshop materials"],
      highlight: true,
    },
    {
      name: "Regular",
      price: "$149",
      features: ["Full event access", "Welcome kit", "Standard seating", "Workshop materials"],
      highlight: false,
    },
    {
      name: "VIP",
      price: "$249",
      features: [
        "Full event access",
        "Premium welcome kit",
        "VIP seating",
        "Workshop materials",
        "Exclusive meet & greet",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-white" id="tickets">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-festival-900 mb-4">Get Your Tickets</h2>
          <p className="text-festival-600 max-w-2xl mx-auto">
            Choose the perfect ticket package for your festival experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`rounded-xl p-6 ${
                ticket.highlight
                  ? "bg-festival-900 text-white"
                  : "bg-festival-50 text-festival-900"
              }`}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{ticket.name}</h3>
                <p className="text-4xl font-bold">{ticket.price}</p>
              </div>
              <ul className="space-y-4 mb-6">
                {ticket.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className={`w-5 h-5 mr-2 ${
                        ticket.highlight ? "text-festival-300" : "text-festival-500"
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  ticket.highlight
                    ? "bg-white text-festival-900 hover:bg-festival-100"
                    : "bg-festival-900 text-white hover:bg-festival-800"
                }`}
              >
                Get Tickets
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tickets;
