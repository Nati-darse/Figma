import SectionTitle from "./UI/SectionTitle";
import Card from "./UI/Card";

export default function Features() {
  const features = [
    "Product Research",
    "Market Intelligence",
    "Keyword Research",
    "Monitoring & Tracking",
    "Smart Filters",
  ];

  return (
    <section className="py-20 px-6 text-center">
      <SectionTitle title="Explore Algen’s Powerful Features" />
      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card title="Dominate Multiple Marketplaces">
          <p className="text-gray-400 text-sm">
            Unlock AI-driven analytics across multiple eCommerce platforms with
            one dashboard.
          </p>
        </Card>
        <Card title="Select a marketplace to see trends">
          <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
            <p className="text-gray-400 text-sm">[Dropdown of Marketplaces]</p>
          </div>
        </Card>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <Card key={idx} title={feature} />
        ))}
      </div>
    </section>
  );
}
