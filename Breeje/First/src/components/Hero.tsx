
import Button from "./UI/Button";
import mockup from "../assets/db.png"; 

export default function Hero() {
  return (
    <header className="relative bg-[#01051e] overflow-hidden pt-36 pb-20">
      {/* Background gradient blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#150322]/60 via-[#0b0316]/40 to-transparent pointer-events-none" />

      {/* --- Spotlight source & beams --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* The source glow at the very top center */}

        {/* Left beam → expanding to bottom-left border */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 ml-[-500px] w-0 h-0 
            border-l-[100px] border-r-[20px] border-b-[700px] border-transparent
            border-b-[#6210dd] blur-3xl opacity-80 rotate-[25deg] " />

          {/* Center beam → straight down */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 
            border-l-[100px] border-r-[100px] border-b-[400px] border-transparent
            border-b-[#6109e5] blur-2xl opacity-90" />

          {/* Right beam → expanding to bottom-right border */}
          <div className="absolute top-0 right-1/2 -translate-x-1/2 mr-[-700px] w-0 h-0 
            border-l-[80px] border-r-[50px] border-b-[700px] border-transparent
            border-b-[#6309ea] blur-3xl opacity-80 rotate-[-25deg]" />
          
          <div className="absolute top-0 right-1/2 -translate-x-1/2 mr-[-400px] w-0 h-0 
            border-l-[50px] border-r-[70px] border-b-[200px] border-transparent
            border-b-[#6109e5] blur-3xl opacity-80 rotate-[-25deg]" />

         </div>

      {/* Radial glow behind to soften */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] 
        rounded-full bg-purple-900/20 blur-[160px] opacity-50 pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 text-center">
        <div className="inline-block bg-[#0f1023]/40 px-4 py-3 rounded-full text-sm text-gray-200 mb-8">
          Announcing our new module
        </div>

        <h1 className="text-white font-extrabold tracking-tight leading-tight text-4xl md:text-6xl max-w-3xl mx-auto">
          Access Accurate Analytics,
          <br />
          Increase Sales.
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
          Get actionable insights into profitable products, competitor performance, and trends across multiple marketplaces.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button>Get started</Button>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-12">
          <div className="mx-auto max-w-5xl rounded-xl overflow-hidden border border-purple-900/30 shadow-2xl shadow-purple-900/20">
            {mockup ? (
              <img src={mockup} alt="dashboard mockup" className="w-full object-cover" />
            ) : (
              <div className="h-[380px] bg-gradient-to-b from-[#070417] to-[#0b0712] flex items-center justify-center text-gray-400">
                Dashboard mockup placeholder
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
