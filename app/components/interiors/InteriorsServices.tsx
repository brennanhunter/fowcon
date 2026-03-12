'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const rooms = [
  {
    title: 'Living Rooms',
    image: '/images/fakelivingroom.jpg',
    description:
      "Your living room sets the tone for your entire home. Whether it feels outdated, cramped, or just doesn\u2019t reflect your style anymore, we can redesign the layout, update finishes, and create a space that\u2019s as functional as it is beautiful \u2014 from custom built-ins and accent walls to new lighting and flooring.",
  },
  {
    title: 'Family Rooms',
    image: '/images/fakelivingroom.jpg',
    description:
      "Family rooms should be built for how your family actually lives. We design spaces for movie nights, game days, homework sessions, or just relaxing together. Think custom entertainment centers, upgraded lighting, sound-friendly layouts, and finishes durable enough for everyday life.",
  },
  {
    title: 'Home Offices',
    image: '/images/fakelivingroom.jpg',
    description:
      "A well-designed home office helps you stay focused and productive. We build workspaces tailored to your routine \u2014 from custom desks and cabinetry to smart storage, proper lighting, and soundproofing. Whether you work from home full-time or need a quiet space for managing household tasks, we\u2019ll design it around you.",
  },
  {
    title: 'Laundry Rooms',
    image: '/images/fakelivingroom.jpg',
    description:
      "Laundry rooms deserve more than an afterthought. We add custom cabinetry, countertops for folding, organized storage, and updated flooring to turn a utility space into a room that actually works for you \u2014 and looks good doing it.",
  },
];

export default function InteriorsServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Remodeling for Every Room in the House
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Kitchens and bathrooms get all the attention, but the rest of your home deserves
            the same level of craftsmanship. We remodel living spaces, work spaces, and
            utility rooms with the same care and precision.
          </p>
        </motion.div>

        <div className="space-y-20">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                {index % 2 === 0 ? (
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-blue mb-4">
                      {room.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {room.description}
                    </p>
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={room.image}
                      alt={`${room.title} remodel`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                {index % 2 === 0 ? (
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={room.image}
                      alt={`${room.title} remodel`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-blue mb-4">
                      {room.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {room.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
