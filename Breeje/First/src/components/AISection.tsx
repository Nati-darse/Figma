import { useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import { FaSearch, FaStar, FaMagic } from "react-icons/fa";

type MetricBoxProps = {
  value: string;
  label: string;
  hint?: string;
};

function MetricBox({ value, label, hint }: MetricBoxProps) {
  return (
    <div className="flex-0 min-w-0 bg-gray-600/30 border border-purple-900/25 rounded-lg shadow-2xl p-2">
      
      <div className="mt-3 text-2xl md:text-3xl font-extrabold text-purple-600">

        {value}
      </div>
      <div className="text-sm text-purple-400">{label}</div>
      {hint && <div className="text-xs text-gray-500 mt-1">{hint}</div>}
    </div>
  );
}

type ReviewCardProps = {
  author: string;
  rating: number;
  text: string;
};

function ReviewCard({ author, rating, text }: ReviewCardProps) {
  return (
    <div className="bg-[#0e0b17] border border-purple-900/20 rounded-lg p-3">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 h-9 w-9 rounded-full bg-purple-800/30 flex items-center justify-center text-sm text-purple-200">
          {author.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-gray-200">{author}</div>
            <div className="text-xs text-purple-300 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className={`text-xs ${i < rating ? "text-yellow-400" : "text-gray-600"}`} />
              ))}
            </div>
          </div>
          <div className="text-xs text-gray-400 mt-2 line-clamp-2">{text}</div>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="bg-[#0e0b17] border border-purple-900/20 rounded-full h-3 w-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default function AISection() {
  const [activeTab, setActiveTab] = useState<"review" | "customer">("review");

  return (
    <section className="py-20 px-6 bg-[#01051e] text-white">
      <div className="max-w-6xl mx-auto pb-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold flex items-center justify-center gap-2">
            
            <span>
              Unlock the potential of your<br className="hidden md:inline" />
              business with AI
            </span>
          </h2>
          <p className="mt-4 py-6 text-gray-400 max-w-2xl mx-auto">
            AI-driven solutions for every aspect of your e-commerce business — listings, reviews, insights and more.
          </p>
          <div className="mt-5 flex items-center justify-center gap-4">
              <Button>7 days free trial </Button>
          </div>
          
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-start">

          {/* LEFT: Generate Listings card with stacked depth effect */}
          <div className="relative">
            <div className="absolute -top-2 left-2 w-[98%] h-3 bg-gray-700/30 rounded-t-xl z-0" />
            
            <Card className="relative bg-gradient-to-br from-[#140729] to-[#491789] border border-purple-900/30 shadow-2xl shadow-blue-900/10 z-10 overflow-visible">
              <div className="absolute top-0 left-1/3 -translate-x-1/3 w-0 h-0 
            border-l-[150px] border-r-[70px] border-b-[250px] border-transparent
            border-b-[#320a6e] blur-2xl opacity-90 rotate-110" />

              <div className="flex flex-col gap-4 ">
                <div className="flex items-start justify-between gap-4">
                  <div >
                    <h3 className="flex items-center gap-2 text-white text-lg font-semibold">
                      <FaMagic className="text-white pr-1" />
                      Generate Listings From Scratch
                    </h3>
                    <p className="text-gray-400 mt-2 text-sm pl-2">
                      Enter your ASIN or current listing and our AI listing tool will help you create high-converting listings for your products.
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <input
                        className="w-full bg-gray-800/30 border border-gray-900/25 rounded-lg px-4 py-3 text-gray-200 placeholder:text-gray-500"
                        placeholder="Enter ASIN, eg. B07DTTFW5R"
                      />
                      <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Title", "Description", "Features", "Keywords"].map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#220b39]/50 to-[#2b0d4b]/30 border border-purple-900/20 text-purple-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 bg-gray-800/30 border border-purple-900/20 rounded-lg p-4">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-700/30 rounded-lg border border-purple-900/15 flex items-center justify-center text-gray-600">
                      IMG
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-300 font-semibold">Get iPhone Smash Case</div>
                      <div className="text-xs text-gray-400 mt-2">
                        - Highly protective design and ergonomic fit. - Excellent drop resistance and grip.
                      </div>
                      <div className="mt-3 text-xs text-gray-500">Listing Performance</div>
                      <div className="mt-2 grid grid-cols-3 gap-3 pl-2 ">
                        <MetricBox value="238" label="Keywords" />
                        <MetricBox value="53,200" label="Search volume" />
                        <MetricBox value="98/100" label="Listing score" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* RIGHT: Review Analysis card with stacked depth effect */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-purple-900/30 to-purple-950/10 blur-sm z-0"></div>
            <Card className="relative bg-gradient-to-br from-[#13062a] to-[#0c0515] border border-purple-900/30 shadow-2xl shadow-blue-900/10 z-10 overflow-visible">
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="flex items-center gap-2 text-white text-lg font-semibold">
                      <FaMagic className="text-purple-400" />
                      Review Analysis
                    </h3>
                    <p className="text-gray-400 mt-2 text-sm">
                      Save time and effort when doing your research. Our advanced AI tools analyze reviews and surface trends for you.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="px-3 py-1 rounded-md bg-[#0f0b15] border border-purple-900/20">Export</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <ReviewCard
                    author="Reviewer 1"
                    rating={5}
                    text="I really love this product, great packaging and fast shipping. Works as described."
                  />
                  <ReviewCard
                    author="Reviewer 2"
                    rating={4}
                    text="Good value for money. The product matches the description but the box was slightly damaged."
                  />
                  <ReviewCard
                    author="Reviewer 3"
                    rating={5}
                    text="Amazing quality — exceeded expectations. Will buy again."
                  />
                  <ReviewCard
                    author="Reviewer 4"
                    rating={4}
                    text="Solid product overall, minor issues with the strap but customer service was helpful."
                  />
                </div>
                <div className="mt-3">
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() => setActiveTab("review")}
                      className={`px-3 py-2 rounded-t-md text-sm ${activeTab === "review" ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white" : "bg-[#0b0814] text-gray-300"}`}
                    >
                      Review Analysis
                    </button>
                    <button
                      onClick={() => setActiveTab("customer")}
                      className={`px-3 py-2 rounded-t-md text-sm ${activeTab === "customer" ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white" : "bg-[#0b0814] text-gray-300"}`}
                    >
                      Customer Analysis
                    </button>
                  </div>
                  <div className="bg-[#0b0712] border border-purple-900/20 rounded-b-lg p-4 mt-0">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-300 font-medium">Purchase Intention</div>
                        <div className="mt-3 space-y-3">
                          <div className="text-xs text-gray-400">Good Quality</div>
                          <ProgressBar value={72} />
                          <div className="text-xs text-gray-400 mt-2">Value for Money</div>
                          <ProgressBar value={55} />
                          <div className="text-xs text-gray-400 mt-2">Delivery satisfaction</div>
                          <ProgressBar value={81} />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-300 font-medium">Review Feedback</div>
                        <div className="mt-3 h-36 bg-gradient-to-b from-[#0e0b17] to-[#07101b] rounded-lg border border-purple-900/15 flex items-end gap-2 px-3 py-3">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="flex-1 flex items-end">
                              <div
                                className={`mx-1 rounded-t-md`}
                                style={{
                                  height: `${30 + ((i * 7) % 60)}%`,
                                  background: `linear-gradient(180deg, rgba(198,93,255,0.95), rgba(147,52,255,0.85))`,
                                  width: "100%",
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
