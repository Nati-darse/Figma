import SectionTitle from "./UI/SectionTitle";
import Card from "./UI/Card";
import Button from "./UI/Button";
import { FaCheckCircle } from "react-icons/fa";

export default function Features() {
  const features = [
    "Product Research",
    "Market Intelligence",
    "Keyword Research",
    "Monitoring & Tracking",
    "Smart Filters",
  ];

  return (
    <section className="bg-[#01051e] py-20 px-6 text-center">
      <SectionTitle title="Explore Algen’s Powerful Features" />
      <div className="mt-8 flex items-center justify-center gap-4">
        
       <Button>Get started</Button>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-red-200/50 rounded-lg pt-2 m-0 ">
        <Card title="Dominate Multiple Marketplaces">
          <p className="text-gray-400 text-sm py-0 my-0">
            Unlock AI-driven analytics across multiple eCommerce platforms with
            one dashboard.
          </p>
        </Card>
        </div>
        <div className="bg-red-800/50 rounded-lg p-5 ">
        <Card title="Select a marketplace to see trends">
          <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
            <p className="text-gray-400 text-sm">[Dropdown of Marketplaces]</p>
          </div>
        </Card>
        </div>
        <ul className="space-y-4 ml-8 text-left">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <FaCheckCircle className="text-purple-500" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
      </div>
    </section>
  );
}
