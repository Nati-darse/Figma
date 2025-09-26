import SectionTitle from "./UI/SectionTitle";

export default function Testimonials() {
  return (
    <section className="py-20 px-6 text-center">
      <SectionTitle title="Hear what our customers have to say about us" />
      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[1, 2, 3].map((t) => (
          <div
            key={t}
            className="bg-gray-800/40 p-6 rounded-lg border border-gray-700/40"
          >
            <p className="text-gray-300 text-sm">
              “Algen helped us increase sales by 30% in just 3 months.”
            </p>
            <span className="block mt-4 text-sm text-gray-400">- Customer {t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
