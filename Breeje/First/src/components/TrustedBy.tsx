const logoFiles = import.meta.glob("../assets/logos/*.svg", { eager: true });

const logos = Object.entries(logoFiles).map(([path, module]) => {
  const parts = path.split("/");
  const fileName = parts[parts.length - 1];
  const alt = fileName.replace(".svg", "");
  return {
    src: (module as { default: string }).default,
    alt,
  };
});

export default function TrustedBy() {
  return (
    <section className="pt-8 pb-12 bg-[#01051e]">
      <div className=" max-w-6xl mx-auto px-6 md:px-8 text-center">
        <p className="text-gray-400">Trusted by Industry Titans for more profits </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="h-8 flex items-center opacity-70 hover:opacity-100 transition"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-6 object-contain filter grayscale hover:filter-none transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
