import SectionTitle from "./UI/SectionTitle";

export default function FAQ() {
  const faqs = [
    { q: "What can Algen help me with?", a: "Algen helps analyze sales data across marketplaces. Algen helps analyze sales data across marketplaces Algen helps analyze sales data across marketplaces" },
    { q: "Is there a free trial?", a: "Yes, you can start with a free plan." },
    { q: "Which marketplaces are supported?", a: "Amazon, Walmart, Shopify, eBay, and more." },
  ];

  return (
    <section className="py-20 bg-[#01051e] px-48 max-w-1xl mx-auto">
      <SectionTitle title="Frequently Asked Questions" />
      <div className="mt-12 space-y-6">
        {faqs.map((faq, idx) => (
          <details key={idx} className="bg-gray-800/40 p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold text-gray-200">
              {faq.q}
            </summary>
            <p className="text-gray-400 mt-2 text-sm">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
