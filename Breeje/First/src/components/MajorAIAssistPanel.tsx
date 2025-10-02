import { FaMagic, FaSearch } from "react-icons/fa";

export default function MajorAIAssistPanel() {
  return (
    <section className="px-48 bg-[#01051e] text-white rounded-2xl shadow-xl mx-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT SECTION: AI Assist Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-2">
            <FaMagic className="text-purple-300" />
            Major AI Assist
          </h2>
          <p className="mt-2 text-gray-300 leading-relaxed max-w-md">
            Save time and effort when doing your research. Our advanced AI-driven tool reveals data insights from your real existing Amazon segments in the blink of an eye — reviewed, manipulated, and ready with just a few clicks.
          </p>
        </div>
        {/* RIGHT SECTION: Table with Search */}
        <div className="relative">
          <div className="bg-[#171632] border border-purple-900/25 rounded-2xl px-5 py-6 shadow-2xl">
           <div className="absolute top-0 right-1/2 -translate-x-1/2 mr-[-120px] w-0 h-0 
            border-l-[110px] border-r-[80px] border-b-[700px] border-transparent
            border-b-[#6309ea] blur-3xl opacity-80 rotate-[-25deg]" />
            {/* Search Bar */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative flex-1">
                <input
                  className="w-full bg-[#191731] border border-purple-900/30 rounded-lg py-2 pl-10 pr-3 text-gray-200 placeholder-gray-400 focus:outline-none"
                  placeholder="What are the top-selling potential Amazon areas, 2025 with Amazon Astro AI?"
                  type="text"
                />
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" />
              </div>
              <button className="ml-3 px-4 py-2 rounded-lg bg-gradient-to-tr from-purple-700 via-purple-600 to-pink-700 text-sm font-semibold text-white border border-purple-900/30 transition hover:from-pink-700 hover:to-purple-700">
                Download
              </button>
            </div>
            {/* Column Headers */}
            <div className="flex w-full text-gray-400 text-xs font-semibold py-2 px-1 border-b border-purple-900/20 mb-2">
              <div className="w-1/5">Flag</div>
              <div className="w-1/5">Category</div>
              <div className="w-1/5">ROI</div>
              <div className="w-1/5">Image</div>
              <div className="w-1/5">Growth</div>
            </div>
            {/* Table Data */}
            <div>
              <div className="flex w-full items-center py-3 border-b border-purple-900/15">
                <div className="w-1/5 text-lg">🦾</div>
                <div className="w-1/5 text-purple-400 font-semibold">SmartPro</div>
                <div className="w-1/5 text-green-400">12%</div>
                <div className="w-1/5 text-cyan-400">↑16%</div>
                <div className="w-1/5 text-green-400">81</div>
              </div>
              <div className="flex w-full items-center py-3 border-b border-purple-900/15">
                <div className="w-1/5 text-lg">🔲</div>
                <div className="w-1/5 text-purple-400 font-semibold">CreativeKit</div>
                <div className="w-1/5 text-green-400">17%</div>
                <div className="w-1/5 text-cyan-400">↑24%</div>
                <div className="w-1/5 text-green-400">99</div>
              </div>
              <div className="flex w-full items-center py-3">
                <div className="w-1/5 text-lg">🖼️</div>
                <div className="w-1/5 text-purple-400 font-semibold">ContentBond</div>
                <div className="w-1/5 text-orange-400">10%</div>
                <div className="w-1/5 text-cyan-400">↑29%</div>
                <div className="w-1/5 text-green-400">100</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
