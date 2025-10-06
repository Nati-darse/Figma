// import React from "react";
import { FaAmazon } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";

export default function ArticlesShowcase() {
  const articles = [
    {
      id: 1,
      title: "The Ultimate Guide to Keyword Tracking on Amazon",
      icon: <FaAmazon className="text-5xl text-orange-400" />,
      glow: "from-orange-500/40 to-yellow-700/10",
    },
    {
      id: 2,
      title: "Simplify ML Workflow using AI XL Automation Feature",
      icon: <SiOpenai className="text-5xl text-white" />,
      glow: "from-blue-900/30 to-white-400/10",
    },
    {
      id: 3,
      title: "Amazon Review Checker: Everything You Need to Know",
      icon: (
        <div className="flex gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className="text-xl" />
          ))}
        </div>
      ),
      glow: "from-yellow-500/40 to-orange-600/10",
    },
  ];

  return (
    <section className="bg-[#01051e] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Take a look at our latest articles
          </h2>
          <p className="mt-3 text-gray-400 text-sm">
            Stay informed and inspired with our latest blog posts, featuring
            industry news, practical tips, and innovative strategies.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {articles.map((a) => (
            <div
              key={a.id}
              className="bg-gradient-to-br from-[#0f071a] to-[#0b0611] border border-purple-900/30 rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Icon Glow */}
              <div
                className={`flex items-center justify-center py-16 bg-gradient-to-br ${a.glow}`}
              >
                <div className="p-6 bg-black/40 rounded-2xl shadow-lg">
                  {a.icon}
                </div>
              </div>

              {/* Title */}
              <div className="px-6 py-4">
                <h3 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {a.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="grid md:grid-cols-2 items-center gap-8 border-none pt-8">
          {/* Left text */}
          <div>
            <h3 className="text-5xl md:text-3xl font-extrabold mb-3">
              Start making more money with Alqen
            </h3>
            
          </div>

          {/* Right input + button */}
          <div >
          <p className="text-gray-400 text-sm pb-6">
              Subscribe to our newsletter and become part of our thriving
              community of our thriving
              community. Get access to exclusive content.
            </p>
          <form className="flex gap-3">
            
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-lg px-4 py-3 text-sm bg-[#0b0611] border border-purple-900/30 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium text-sm hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
}
