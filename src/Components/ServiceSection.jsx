import React, { useState } from "react";
import {
  FaCode,
  FaMobileAlt,
  FaShoppingCart,
  FaBullhorn,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { PiAppStoreLogoLight } from "react-icons/pi";

const services = [
  {
    id: 1,
    icon: <FaCode className="text-blue-500 text-2xl md:text-3xl" />,
    title: "Web Development",
    description:
      "Our Web Developers construct specialised websites and web apps. With the latest online technology in the market.",
  },
  {
    id: 2,
    icon: <PiAppStoreLogoLight className="text-blue-500 text-2xl md:text-3xl" />,
    title: "App Development",
    description:
      "We provide iOS and Android app development services to help you succeed in the competitive mobile app market.",
  },
  {
    id: 3,
    icon: <FaCode className="text-blue-500 text-2xl md:text-3xl" />,
    title: "Software Development",
    description:
      "We provide software development services for startups, businesses looking for custom software solutions.",
  },
  {
    id: 4,
    icon: <FaShoppingCart className="text-blue-500 text-2xl md:text-3xl" />,
    title: "Ecommerce Development",
    description:
      "Custom e-commerce solutions for seamless online transactions. Boost sales and customer engagement with our tailored approach.",
  },
  {
    id: 5,
    icon: <FaBullhorn className="text-blue-500 text-2xl md:text-3xl" />,
    title: "Digital Marketing",
    description:
      "Effective digital marketing campaigns. Engage, convert, and grow your audience with our strategic approach.",
  },
  {
    id: 6,
    icon: <MdDesignServices className="text-blue-500 text-2xl md:text-3xl" />,
    title: "UX/UI Designs",
    description:
      "Enhance user experiences with our expert UI/UX design. Drive engagement and elevate your brand.",
  },
];

const ServicesSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsPopupOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const openPopup = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setFormData({ ...formData, service: serviceTitle });
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedService("");
  };

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
              <button
                onClick={() => openPopup(service.title)}
                className="text-blue-600 text-sm sm:text-base font-medium flex items-center gap-1 hover:underline transition duration-200"
              >
                Buy more <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000] transition-opacity duration-300">
          <div className="bg-white rounded-lg p-6 sm:p-8 w-full max-w-md mx-4 transform transition-all duration-300 scale-100 opacity-100 data-[state=open]:scale-100 data-[state=open]:opacity-100 data-[state=closed]:scale-95 data-[state=closed]:opacity-0">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-lg font-semibold transition-colors duration-200"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Request {selectedService}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 transition duration-200"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 transition duration-200"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 transition duration-200"
                  placeholder="Your Phone"
                />
              </div>
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service
                </label>
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  readOnly
                  className="block w-full rounded-md border-gray-300 bg-gray-100 sm:text-sm py-2 px-3"
                />
              </div> */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 transition duration-200"
                  placeholder="Your Message"
                  rows="4"
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closePopup}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;