import LearnMore from "./LearnMore";
import shopImg from '../assets/shop-img.jpg'
const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src={shopImg}
                alt="Flat Lay of products"
                className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <div className="space-y-8 font-modern">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-sky-100 text-sky-900 rounded-full text-sm font-bold uppercase tracking-wide">
                  Limited Time Offer
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">25% off</span> your first order
                </h1>
                <p className="text-xl text-gray-600">
                  Sign up <span className="font-bold text-sky-900">TODAY</span> and start shopping smarter
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-sky-200 via-sky-400 to-transparent"></div>

              <p className="text-2xl text-gray-700 leading-relaxed">
                Hex is a brand that cares about you. Our products are ethically sourced and fully traceable through every step of the supply chain.
              </p>

              <p className="text-3xl font-semibold text-gray-900 italic">
                Invest in quality. Live confidently.
              </p>

              <button className="px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="relative max-w-4xl mx-auto text-center space-y-6 px-8">
          <p className="text-5xl md:text-6xl font-bold text-white italic tracking-wide animate-fade-in">
            Live comfortably.
          </p>
          <p className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400 italic tracking-wide animate-fade-in">
            Explore freely.
          </p>
        </div>
      </div>

      <LearnMore />
    </>
  );
};

export default Hero;
