/* import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-center p-4'>
        <h2 className='text-white text-3xl'>Footer Comp</h2>
    </div>
  )
}

export default Footer */
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // ensure this is imported only once

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-3">ShopEasy Store</h2>
          <p className="text-gray-400">
            Premium online shopping experience with quality products.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-5 text-2xl">

            <i className="fab fa-facebook cursor-pointer hover:text-white hover:scale-110 transition"></i>

            <i className="fab fa-instagram cursor-pointer hover:text-white hover:scale-110 transition"></i>

            <i className="fab fa-youtube cursor-pointer hover:text-white hover:scale-110 transition"></i>

            <i className="fab fa-twitter cursor-pointer hover:text-white hover:scale-110 transition"></i>

            <i className="fab fa-linkedin cursor-pointer hover:text-white hover:scale-110 transition"></i>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Products", "Cart", "Checkout", "Contact"].map((item) => (
              <li key={item} className="cursor-pointer hover:text-white transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer transition">FAQs</li>
            <li className="hover:text-white cursor-pointer transition">Shipping Policy</li>
            <li className="hover:text-white cursor-pointer transition">Return Policy</li>
            <li className="hover:text-white cursor-pointer transition">Track Order</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Join Newsletter</h3>
          <p className="text-gray-400">Get latest updates & exclusive offers.</p>

          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full rounded-l-lg outline-none"
            />
            <button className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400">
        © {new Date().getFullYear()} ShopEasy — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;