import React from 'react';
import { FaCode, FaMobileAlt, FaShoppingCart, FaBullhorn } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { PiAppStoreLogoLight } from 'react-icons/pi';

const services = [
  {
    icon: <FaCode className="text-blue-500 text-2xl md:text-3xl" />,
    title: 'Web Development',
    description:
      'Our Web Developers construct specialised websites and web apps. With the latest online technology in the market.',
  },
  {
    icon: <PiAppStoreLogoLight className="text-blue-500 text-2xl md:text-3xl" />,
    title: 'App Development',
    description:
      'We provide iOS and Android app development services to help you succeed in the competitive mobile app market.',
  },
  {
    icon: <FaCode className="text-blue-500 text-2xl md:text-3xl" />,
    title: 'Software Development',
    description:
      'We provide software development services for startups, businesses looking for custom software solutions.',
  },
  {
    icon: <FaShoppingCart className="text-blue-500 text-2xl md:text-3xl" />,
    title: 'Ecommerce Development',
    description:
      'Custom e-commerce solutions for seamless online transactions. Boost sales and customer engagement with our tailored approach.',
  },
  {
    icon: <FaBullhorn className="text-blue-500 text-2xl md:text-3xl" />,
    title: 'Digital Marketing',
    description:
      'Effective digital marketing campaigns. Engage, convert, and grow your audience with our strategic approach.',
  },
  {
    icon: <MdDesignServices className="text-blue-500 text-2xl md:text-3xl" />,
    title: 'UX/UI Designs',
    description:
      'Enhance user experiences with our expert UI/UX design. Drive engagement and elevate your brand.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 md:py-16 bg-[#f6f9fe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-gray-800">
          Our Services
        </h2>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 sm:p-6 hover:shadow-xl transition duration-300 text-left"
            >
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-blue-50 rounded-full shadow-inner">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                {service.description}
              </p>
              <button className="text-blue-600 text-sm sm:text-base font-medium flex items-center gap-1 hover:underline">
                Buy more <span>&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
