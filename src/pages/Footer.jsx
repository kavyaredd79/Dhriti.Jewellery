import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/DhritiLogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#592A26] text-yellow-600 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="Dhriti Jewellery"
            className="w-24 mb-2 object-contain"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
            <li className="hover:underline cursor-pointer">Disclaimer</li>
            <li className="hover:underline cursor-pointer">
              Care and Maintenance
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">
              Terms and Conditions
            </li>
            <li className="hover:underline cursor-pointer">Shipping Policy</li>
            <li className="hover:underline cursor-pointer">
              Refund and Cancellation Policy
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Social Links</h3>
           <div className="flex space-x-4 text-xl">
      
      {/* Facebook */}
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF className="cursor-pointer hover:text-white" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/dhriti.jewellery/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="cursor-pointer hover:text-white" />
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className="cursor-pointer hover:text-white" />
      </a>

    </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-sm border-t border-yellow-700 pt-4">
        © 2026, JEWELS BY DHRITI Powered by<b> Kavya Reddy</b>
      </div>
    </footer>
  );
};

export default Footer;