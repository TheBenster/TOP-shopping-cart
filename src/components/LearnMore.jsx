const LearnMore = () => {
  return (
    <section
      id="learn-more"
      className="relative bg-gradient-to-b from-white to-slate-50 py-24 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Text Content */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
              Introducing Hex
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The brand that puts transparency first
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="https://placehold.co/600x300"
              alt="Sustainable sourcing"
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-semibold text-xl">
                  Sustainable Sourcing
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="https://placehold.co/600x300"
              alt="Ethical manufacturing"
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-semibold text-xl">
                  Ethical Manufacturing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-l-4">
            <div className="text-sky-600 text-4xl mb-4"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Full Traceability
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Hex, we believe every product should have a story. Our supply
              chain is fully traceable, ensuring ethical sourcing and
              responsible practices at every step.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-l-4">
            <div className="text-blue-600 text-4xl mb-4"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Trusted Partners
            </h3>
            <p className="text-gray-600 leading-relaxed">
              From raw materials to your doorstep, we partner with suppliers and
              artisans who share our vision of a sustainable, ethical future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
