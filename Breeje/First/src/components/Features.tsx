import { useState } from "react";
import SectionTitle from "./UI/SectionTitle";
import Card from "./UI/Card";
import Button from "./UI/Button";
import { FaChevronRight, FaChevronDown, FaGlobe } from "react-icons/fa";
import { FaTh, FaChartLine, FaKey, FaSearch, FaFilter } from "react-icons/fa";

export default function Features() {
  const [expanded, setExpanded] = useState(true);

  const features = [
    { icon: <FaTh className="text-purple-500" />, label: "Product Research" },
    { icon: <FaChartLine className="text-purple-500" />, label: "Market Intelligence" },
    { icon: <FaKey className="text-purple-500" />, label: "Keyword Research" },
    { icon: <FaSearch className="text-purple-500" />, label: "Monitoring & Tracking" },
    { icon: <FaFilter className="text-purple-500" />, label: "Smart Filters" },
  ];

  const marketplaces = [
    { name: "Amazon", logo: "/logos/amazon.svg", status: "Available", available: true },
    { name: "Walmart", logo: "/logos/walmart.svg", status: "Available", available: true },
    { name: "Shopify", logo: "/logos/shopify.svg", status: "Coming soon", available: false },
    { name: "Etsy", logo: "/logos/etsy.svg", status: "Coming soon", available: false },
    { name: "eBay", logo: "/logos/ebay.svg", status: "Coming soon", available: false },
    { name: "Alibaba", logo: "/logos/alibaba.svg", status: "Coming soon", available: false },
  ];

  return (
    <section className="bg-[#01051e] py-20 px-6 text-center">
      {/* Section Title */}
      <SectionTitle title="Explore Algen's Powerful Features" />

      {/* Subtext */}
      <div className="pt-6 text-sm text-gray-500 max-w-2xl mx-auto">
        <p>
          Algen gives you the tools and insights you need to grow and scale your
          e-commerce business.
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <Button>7 days free trial </Button>
      </div>

      {/* Features Layout */}
      <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
        {/* LEFT SIDE - Accordion Style with stacked layers */}
        <div className="relative pb-1 pl-2">
          {/* Layered shadows behind the card */}
          <div className="absolute -top-3 left-4 w-[96%] h-2 bg-gray-800/20 rounded-t-md z-0" />

          {/* Main Card */}
          <Card className="relative bg-[#0f1023] text-left cursor-pointer border border-purple-900/30 z-10">
            {/* Accordion Header */}
            <div
              className="flex justify-between items-center pb-2 "
              onClick={() => setExpanded(!expanded)}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3">
                <FaGlobe className="text-purple-500" />
                <h3 className="font-semibold text-white">
                  Dominate Multiple Marketplaces
                </h3>
              </div>

              {/* Chevron */}
              {expanded ? (
                <FaChevronDown className="text-purple-400" />
              ) : (
                <FaChevronRight className="text-purple-400" />
              )}
            </div>

            {/* Expandable Content */}
            {expanded && (
              <p className="text-gray-400 text-sm mt-3">
                Analyze market trends and competitors across all e-commerce
                platforms with Algen, the exclusive analytics platform for
                accurate trend insights.
              </p>
            )}
          </Card>

          {/* Other Features List */}
          <ul className="mt-8 space-y-5">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center text-gray-300 cursor-pointer hover:text-white transition p-3 rounded-lg hover:bg-purple-900/10"
              >
                <span className="flex items-center gap-3">
                  {feature.icon}
                  {feature.label}
                </span>
                <FaChevronRight className="text-gray-700 text-xs" />
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE - Marketplace Selector with stacked effect */}
        <div className="relative bg-[#01051e]">
          {/* Stacked shadow layers behind the card */}
          <div className="absolute -bottom-3 -right-3 w-full h-full rounded-4xl bg-gradient-to-br from-gray-900/30 to-blue-800/10 blur-sm z-0"></div>
          
          {/* Main card */}
          <Card className="relative bg-[#050127] border border-gray-900/20 shadow-2xl shadow-blue-900/10 z-10">
          <div className="absolute -top-(-1) bottom-(-1) left-4 w-[94%] h-[95%] bg-gray-700/20 rounded-lg z-0" />
            <div className="text-left py-1 px-8">
              <h3 className="font-semibold text-white text-lg mb-1">
                Select a marketplace to see market trends
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Choose from available platforms to analyze market data
              </p>

              {/* Marketplace list */}
              <div className="bg-gradient-to-b from-gray-900/40 to-gray-800/20 rounded-xl p-6 border border-gray-700/30">
                <ul className="space-y-4">
                  {marketplaces.map((marketplace, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center p-3 rounded-lg bg-gray-800/20 hover:bg-gray-700/30 transition-all duration-200"
                    >
                      <span className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                          <img
                            src={marketplace.logo}
                            alt={marketplace.name}
                            className="h-4 w-4 object-contain"
                          />
                        </div>
                        <span className="text-gray-200 font-medium">
                          {marketplace.name}
                        </span>
                      </span>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          marketplace.available
                            ? "bg-green-900/30 text-green-400 border border-gray-800/50"
                            : "bg-gray-700/50 text-gray-400 border border-gray-600/50"
                        }`}
                      >
                        {marketplace.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
