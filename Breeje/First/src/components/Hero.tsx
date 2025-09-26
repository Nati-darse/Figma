import Button from "./UI/Button";

export default function Hero() {
  return (
    <section className="text-center px-6 py-20 bg-gradient-to-b from-purple-900/40 to-transparent">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Access Accurate Analytics, <br /> Increase Sales.
      </h1>
      <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
        Get actionable insights into product sales, conversions, performance, and
        competition.
      </p>
      <Button>Get Started</Button>

      {/* Mockup area */}
      <div className="mt-12">
        <div className="bg-gray-900/60 rounded-lg p-4 h-96 w-full max-w-4xl mx-auto border border-purple-600/20">
          <p className="text-gray-400 text-sm">[Dashboard Mockup]</p>
        </div>
      </div>
    </section>
  );
}
