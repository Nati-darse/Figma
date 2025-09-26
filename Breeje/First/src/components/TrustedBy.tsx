export default function TrustedBy() {
  const logos = ["Walmart", "Amazon", "Shopify", "Facebook", "Ebay", "Etsy"];

  return (
    <section className="py-16 text-center">
      <p className="text-gray-400">Trusted by Industry Titans & Innovative Brands</p>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {logos.map((logo, idx) => (
          <span
            key={idx}
            className="text-gray-300 text-lg font-semibold opacity-70 hover:opacity-100 transition"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
