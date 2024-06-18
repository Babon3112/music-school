"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing FontAwesome icons

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-black text-gray-300 py-12">
      {" "}
      {/* Kept the gradient consistent */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 leading-relaxed">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-gray-200 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-gray-200 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-gray-200 transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-gray-200 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p className="mt-2">Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8 text-gray-500">
        © 2024 Music School. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
