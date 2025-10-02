import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  { href: "#", icon: <FaFacebookF size={20} /> },
  { href: "#", icon: <FaTwitter size={20} /> },
  { href: "#", icon: <FaLinkedinIn size={20} /> },
  { href: "#", icon: <FaEnvelope size={20} /> },
  { href: "#", icon: <FaYoutube size={20} /> },
];

const features = ["Product Research", "Market Intelligence", "Keyword Explorer", "Analytics & Monitor"];
const company = ["Blog", "Case Studies", "Whitepapers", "Webinar", "Podcast"];
const partners = ["Woorise", "Upland"];

const Footer: React.FC = () => (
  <footer className="bg-[#0b0c23] text-white py-14 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
      {/* Left Brand and Newsletter */}
      <div className="flex-1 min-w-[220px]">
        <div className="flex items-center gap-2 mb-4">
          {/* Replace with your SVG logo if available */}
          <span className="text-2xl font-black tracking-wider">ALGEN</span>
        </div>
        <p className="mb-3 text-gray-300">Subscribe to our newsletter and become part of our thriving community.</p>
        <div className="flex gap-4 mt-4 mb-7">
          {socialLinks.map((link, i) => (
            <a
              href={link.href}
              key={i}
              className="bg-[#101128] hover:bg-purple-900/30 p-3 rounded-full border border-gray-700/20 text-gray-300 transition"
              aria-label={`Social ${i}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="mt-8 text-xs text-gray-500">© 2025 Algen. All rights reserved.</div>
      </div>
      {/* Features */}
      <div className="flex-1 min-w-[170px]">
        <div className="font-bold mb-4 text-base">Features</div>
        <ul>
          {features.map((text) => (
            <li key={text} className="mb-2 text-gray-400">{text}</li>
          ))}
        </ul>
      </div>
      {/* Company */}
      <div className="flex-1 min-w-[170px]">
        <div className="font-bold mb-4 text-base">Company</div>
        <ul>
          {company.map((text) => (
            <li key={text} className="mb-2 text-gray-400">{text}</li>
          ))}
        </ul>
      </div>
      {/* Partners */}
      <div className="flex-1 min-w-[170px]">
        <div className="font-bold mb-4 text-base">Partners</div>
        <ul>
          {partners.map((text) => (
            <li key={text} className="mb-2 text-gray-400">{text}</li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
