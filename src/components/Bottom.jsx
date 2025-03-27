import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const reviews = [
  {
    name: "Emily R.",
    review:
      "I ordered a few indoor plants, and they arrived in perfect condition! The packaging was eco-friendly, and the plants were super healthy.",
    rating: 5,
  },
  {
    name: "David S.",
    review:
      "I was hesitant to buy plants online, but this store exceeded my expectations. The plants were well-hydrated, and the care guide was helpful.",
    rating: 4,
  },
  {
    name: "Sophia L.",
    review:
      "I had a few questions before ordering, and the support team was so friendly! My snake plant is thriving, and I can't wait to buy more.",
    rating: 5,
  },
  {
    name: "Michael T.",
    review:
      "Great quality plants and fast delivery! My home office looks amazing now. Highly recommend!",
    rating: 5,
  },
  {
    name: "Olivia W.",
    review:
      "The website was easy to navigate, and I found exactly what I needed. The plants were fresh and well-packaged.",
    rating: 4,
  },
  {
    name: "Daniel K.",
    review:
      "Superb customer service and great variety of plants! Will definitely be ordering again.",
    rating: 5,
  },
];

export default function Bottom() {
  return (
    <div>
      {/* Header Section */}
      <div id="shop" className="py-4 mt-3 text-center max-w-[1700px] text-white bg-green-900">
        <h2 className="text-2xl font-semibold md:text-5xl">Shops</h2>
      </div>

      {/* Responsive Image Grid with Hover Price Effect */}
      <div className="mx-12 mt-5 mb-4 rounded-lg">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {[
            { src: "images/PA.jpg", price: "Rs.150.00" },
            { src: "images/PB.jpeg", price: "Rs.369.00" },
            { src: "images/PC.jpg", price: "Rs.750.00" },
            { src: "images/PD.jpeg", price: "Rs.500.00" },
            { src: "images/PE.jpg", price: "Rs.275.00" },
            { src: "images/PF.jpeg", price: "Rs.525.00" },
            { src: "images/PG.jpeg", price: "Rs.400.00" },
            { src: "images/PH.jpg", price: "Rs.620.00" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-2xl hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.src}
                className="object-cover w-full transition-transform duration-300 ease-in-out rounded-lg h-80 hover:scale-105"
                alt={`Shop ${index + 1}`}
              />

              {/* Price Overlay on Hover */}
              <div className="absolute bottom-0 left-0 w-full transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 h-1/2 hover:opacity-100">
                <div className="flex items-center justify-center w-full bg-gray-200 rounded-lg shadow-xl h-1/2 bg-opacity-60">
                  <span className="px-4 py-2 text-xl font-bold text-white bg-green-600 rounded-lg shadow-lg">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="max-w-6xl p-6 mx-auto my-10 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-center text-green-700">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md bg-green-50">
              <p className="text-lg italic text-gray-700">"{review.review}"</p>
              <h4 className="mt-4 text-xl font-semibold text-green-800">{review.name}</h4>

              {/* Star Ratings */}
              <div className="flex mt-2">
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-xl text-yellow-400">★</span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information Section */}
      <div id="contact" className="py-10 text-white bg-green-900">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="mt-2 text-lg text-gray-300">
            We'd love to hear from you! Reach out with any questions or feedback.
          </p>

          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-3">
            <div className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt className="text-2xl text-yellow-400" />
              <p>03/B, Homagama, Sri Lanka</p>
            </div>

            <div className="flex items-center justify-center gap-3">
              <FaPhone className="text-2xl text-yellow-400" />
              <p>032-2256765</p>
            </div>

            <div className="flex items-center justify-center gap-3">
              <FaEnvelope className="text-2xl text-yellow-400" />
              <p>indoreblooms@gmail.com</p>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="text-yellow-400 hover:text-yellow-300">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300">
              <FaTwitter className="text-2xl" />
            </a>
          </div>

          <p className="mt-6 text-lg">
            📅 <strong>Opening Hours:</strong> Mon - Sat | 9:00 AM - 7:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}
