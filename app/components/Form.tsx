"use client";

import { useRef } from "react";

export default function PriceList() {
  const formRef = useRef<HTMLFormElement>(null);

  const services = [
    {
      name: "Landing Pages",
      price: 500,
      details: "Price varies based on complexity and scope.",
    },
    {
      name: "Telegram Bots",
      price: 300,
      details: "Pricing may vary depending on functionality.",
    },
  ];

  const handleOrder = (serviceName) => {
    const emailBody = `I would like to order: ${serviceName}`;
    const mailtoLink = `mailto:kostakovalenko7@gmail.com?subject=Order Request&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink; // Open the default email client
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Available Services
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Choose a service and start your project.
      </p>
      <ul className="space-y-4">
        {services.map((service) => (
          <li
            key={service.name}
            className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-teal-500">
              {service.name}
            </h2>
            <p className="text-xl text-gray-900 dark:text-gray-100">
              Price: {service.price}$
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {service.details}
            </p>
            <button
              onClick={() => handleOrder(service.name)}
              className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition"
            >
              Order Now
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
