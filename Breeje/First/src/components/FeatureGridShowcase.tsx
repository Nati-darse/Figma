import { useState } from "react";
import { FaAmazon, FaEbay, FaFacebook, FaShopify } from "react-icons/fa";
import { SiWalmart } from "react-icons/si";

function SparkBar({ value = 60 }: { value?: number }) {
  return (
    <div className="flex items-end gap-1 h-20">
      {Array.from({ length: 10 }).map((_, i) => {
        const height = 10 + ((i * 7 + value) % 80);
        const shade =
          i % 3 === 0
            ? "bg-gradient-to-b from-blue-400 to-yellow-600"
            : "bg-gradient-to-b from-red-400 to-green-500";
        return (
          <div
            key={i}
            className={`rounded-t-sm ${shade}`}
            style={{ width: 6, height: `${(height / 100) * 100}%` }}
          />
        );
      })}
    </div>
  );
}

export default function FeatureGridShowcase() {
  const [estValue, setEstValue] = useState<number>(13748);
  const [query, setQuery] = useState<string>("");

  const marketplaceLogos = [
    { icon: <FaAmazon className="text-yellow-400" />, name: "Amazon" },
    { icon: <SiWalmart className="text-sky-400" />, name: "Walmart" },
    { icon: <FaShopify className="text-green-400" />, name: "Shopify" },
    { icon: <FaFacebook className="text-blue-500" />, name: "Facebook" },
    { icon: <FaEbay className="text-red-400" />, name: "eBay" },
  ];

  return (
    <section className="bg-[#01051e] py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Magical features to help you see data
            <br className="hidden md:inline" />
            at the close look
          </h2>
          <p className="mt-4 text-gray-400 text-sm">
            Powerful insights across marketplaces — identify opportunities,
            track performance, and optimize listings with AI-driven analytics.
          </p>
        </div>

        {/* GRID - Reduced gap to 1px */}
        <div className="mt-12 grid grid-cols-12 gap-2 items-start">
          {/* LEFT - Multiple Marketplaces (tall) */}
          <div className="col-span-12 md:col-span-4 md:row-span-2">
            <div className="h-full rounded-xl p-8  bg-gradient-to-br from-[#08030d] to-[#280358] border border-purple-900/30 flex flex-col items-center justify-center">
              {/* Circular Logo Arrangement */}
              <div className="relative w-64 h-64 mb-8">
                {marketplaceLogos.map((logo, index) => {
                  const angle = (index / marketplaceLogos.length) * 2 * Math.PI;
                  const radius = 100;
                  const x = radius * Math.cos(angle);
                  const y = radius * Math.sin(angle);
                  
                  return (
                    <div
                      key={logo.name}
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-10"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="text-4xl p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/20 rounded-full border border-purple-500/30 shadow-lg">
                          {logo.icon}
                        </div>
                        <span className="text-xs text-gray-400 mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                          {logo.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
                
                {/* Center circle */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-pink-600/10 rounded-full border border-purple-400/20 flex items-center justify-center">
                    <div className="text-white text-sm font-serif text-center ">
                      All
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-16 pb-4">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Multiple Marketplaces
                </h3>
                <p className="text-gray-400 text-sm">
                  Easy-to-use centralized platform to manage listings, sales and
                  inventory across channels.
                </p>
              </div>
            </div>
          </div>

          {/* CENTER TOP - Sales Estimator */}
          <div className="col-span-12 md:col-span-4 md:col-start-5">
            <div className="rounded-xl p-6 bg-gradient-to-br from-[#280358] to-[#08030d] border border-purple-900/30 h-full">
              <div className="flex flex-col md:flex-row gap-4">
                {/* LEFT: text + input + controls */}
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg">
                    Sales Estimator
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Enter a product or competitor to calculate estimated sales
                    and performance.
                  </p>

                  <div className="mt-4">
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search product, ASIN or keyword..."
                      className="w-full bg-[#080511] border border-purple-900/20 rounded-lg px-3 py-2 text-sm text-gray-200 placeholder:text-gray-500"
                    />
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() =>
                        setEstValue(
                          (v) => v + Math.round(Math.random() * 1000 - 400)
                        )
                      }
                      className="px-3 py-2 rounded-md text-sm bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                    >
                      Estimate
                    </button>

                    <div className="text-xs text-gray-400">
                      Estimates are indicative
                    </div>
                  </div>
                </div>

                {/* RIGHT: big result + small chart */}
                <div className="w-full md:w-48 flex-shrink-0">
                  <div className="rounded-lg p-3 bg-[#0b0813] border border-purple-900/20 text-center">
                    <div className="text-xs text-gray-400">Estimated sales</div>
                    <div className="mt-2 text-2xl font-extrabold text-purple-300">
                      {estValue.toLocaleString()}
                    </div>
                    <div className="mt-3">
                      <SparkBar
                        value={Math.min(
                          90,
                          Math.round((estValue % 20000) / 200)
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Keyword Research (tall) */}
          <div className="col-span-12 md:col-span-4 md:row-span-2 md:col-start-9">
            <div className="h-full rounded-xl p-6 bg-gradient-to-br from-[#260b3d] to-[#0b0611] border border-purple-900/30">
              <h3 className="text-white font-semibold text-lg mb-3">
                Keyword Research
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Gain keyword suggestions and search volumes to optimize listings
                and campaigns.
              </p>

              <div className="bg-[#080511] border border-purple-900/20 rounded-lg p-3 max-h-[420px] overflow-auto">
                <table className="w-full text-left text-xs text-gray-300">
                  <thead className="text-purple-300">
                    <tr>
                      <th className="py-2 px-2">Keyword</th>
                      <th className="py-2 px-2">Volume</th>
                      <th className="py-2 px-2">Trend</th>
                      <th className="py-2 px-2">CPC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      "wireless charger",
                      "phone case",
                      "bluetooth headphones",
                      "phone stand",
                      "usb-c cable",
                      "portable charger",
                      "smartwatch band",
                      "laptop sleeve",
                      "camera mount",
                    ].map((kw) => (
                      <tr
                        key={kw}
                        className="border-t border-purple-900/10"
                      >
                        <td className="py-2 px-2">{kw}</td>
                        <td className="py-2 px-2">
                          {Math.floor(Math.random() * 20000).toLocaleString()}
                        </td>
                        <td className="py-2 px-2 text-purple-300">
                          ▲ {(Math.random() * 30).toFixed(0)}%
                        </td>
                        <td className="py-2 px-2">
                          ${(Math.random() * 3).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* CENTER MID - ALGEN Logo */}
          <div className="col-span-12 md:col-span-4 md:col-start-5">
            <div className="rounded-xl p-6 py-16 bg-gradient-to-br from-[#140a1f] via-[#2b0d4b] to-[#0b0611] border border-purple-900/30 flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-6xl font-black text-purple-300">⟡</div>
                <div className="mt-3 uppercase text-sm tracking-wider text-gray-200 font-semibold">
                  ALGEN
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM LEFT - Real Time Tracking */}
          <div className="col-span-12 md:col-span-6 md:col-start-1">
            <div className="rounded-xl p-6 bg-gradient-to-br from-[#270158] to-[#08030d] border border-purple-900/30">
              <h3 className="text-white font-semibold mb-6">
                Real Time Tracking
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Update sales and stock numbers automatically across your
                channels.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#080511] p-4 rounded-lg border border-purple-900/20 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <div>Amazon</div>
                    <div className="text-green-400 font-semibold">Synced</div>
                  </div>
                  <div className="mt-3 text-xs">Last sync: 4m ago</div>
                </div>
                <div className="bg-[#080511] p-4 rounded-lg border border-purple-900/20 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <div>Inventory Level</div>
                    <div className="text-gray-300">72%</div>
                  </div>
                  <div className="mt-3 h-2 bg-gray-800 rounded overflow-hidden">
                    <div
                      style={{ width: "72%" }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM RIGHT - Profit Calculator */}
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="rounded-xl p-3 pt-2 bg-gradient-to-br from-[#1b0932] to-[#080414] border border-purple-900/30">
              <h3 className="text-white font-semibold mb-0">
                Profit Calculator
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                Quickly calculate your profit margins and see a projection chart.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#080511] p-4 rounded-lg border border-purple-900/20 text-sm text-gray-300">
                  <div className="flex justify-between mb-2">
                    <span>Price</span>
                    <span>$49.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cost</span>
                    <span>$19.99</span>
                  </div>
                  <div className="mt-3 text-sm">Profit margin</div>
                  <div className="mt-1 text-lg font-bold text-green-400">
                    +60%
                  </div>
                </div>
                <div className="bg-[#080511] p-4 rounded-lg border border-purple-900/20 flex items-center justify-center">
                  <div className="w-full h-28 relative">
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 200 60"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                          <stop
                            offset="0%"
                            stopColor="#6b21a8"
                            stopOpacity="0.9"
                          />
                          <stop
                            offset="100%"
                            stopColor="#1b0630"
                            stopOpacity="0.1"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,50 C30,30 60,40 90,20 120,8 150,20 200,0 L200,60 L0,60 Z"
                        fill="url(#g1)"
                      />
                    </svg>
                    <div className="relative z-10 text-xs text-gray-300 text-right pr-2">
                      Projected profit over time
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* grid end */}
      </div>
    </section>
  );
}