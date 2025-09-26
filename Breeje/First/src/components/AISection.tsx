import SectionTitle from "./UI/SectionTitle";
import Card from "./UI/Card";

export default function AISection() {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-b from-purple-900/30 to-transparent">
      <SectionTitle title="Unlock the potential of your business with AI" />
      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card title="Generate Listings From Scratch">
          <p className="text-gray-400 text-sm">
            AI-driven automation for creating optimized listings instantly.
          </p>
        </Card>
        <Card title="Review Analysis">
          <p className="text-gray-400 text-sm">
            Analyze customer reviews, spot trends, and improve faster.
          </p>
        </Card>
      </div>
    </section>
  );
}
