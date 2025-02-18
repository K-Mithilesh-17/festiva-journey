
import { motion } from "framer-motion";

const Schedule = () => {
  const events = [
    {
      day: "Day 1 - March 5",
      items: [
        { time: "10:00 AM", title: "Opening Ceremony", location: "Main Stage" },
        { time: "11:30 AM", title: "Interactive Workshop", location: "Studio A" },
        { time: "2:00 PM", title: "Artist Showcase", location: "Gallery Hall" },
        { time: "4:30 PM", title: "Collaborative Art Session", location: "Workshop Space" },
      ],
    },
    {
      day: "Day 2 - March 6",
      items: [
        { time: "10:00 AM", title: "Morning Masterclass", location: "Studio B" },
        { time: "1:00 PM", title: "Exhibition Opening", location: "Main Gallery" },
        { time: "3:30 PM", title: "Panel Discussion", location: "Conference Room" },
        { time: "6:00 PM", title: "Closing Ceremony", location: "Main Stage" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white" id="schedule">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-festival-900 mb-4">Event Schedule</h2>
          <p className="text-festival-600 max-w-2xl mx-auto">
            Two days packed with inspiring sessions, workshops, and exhibitions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: dayIndex % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
              className="bg-festival-50 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-festival-800 mb-6">{day.day}</h3>
              <div className="space-y-4">
                {day.items.map((event, index) => (
                  <motion.div
                    key={event.time}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="min-w-[100px] text-festival-700 font-medium">
                      {event.time}
                    </div>
                    <div>
                      <h4 className="font-semibold text-festival-900">{event.title}</h4>
                      <p className="text-festival-600 text-sm">{event.location}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
