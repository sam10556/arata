import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-10 min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6C8A57] to-[#A3B18A] relative overflow-hidden text-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-center lg:text-left space-y-10">
            <div className="space-y-5">
              <h1 className="text-5xl sm:text-6xl garamond font-serif font-light text-white leading-tight">
                Elevate Your Skincare.
                <span className="block text-[#F6F1EA] garamond italic">Naturally.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white max-w-xl leading-relaxed mx-auto lg:mx-0">
                Discover the perfect fusion of form and function. Our
                eco-refillable soap flasks are designed to look good and do good
                — for your skin and the planet.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-[#FAF8F5] text-[#4A5A38] px-8 py-4 rounded-full hover:bg-[#4A5A38] hover:text-white transition duration-300 font-medium text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-[#FAF8F5] text-[#FAF8F5] px-8 py-4 rounded-full hover:bg-white hover:text-[#4A5A38] transition duration-300 font-medium text-lg">
                Learn More
              </button>
            </div>

            {/* Trust icons */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8">
              {[
                ["100%", "Plastic-Free"],
                ["Eco", "Refillable"],
                ["Natural", "Ingredients"],
              ].map(([title, desc], i) => (
                <div className="text-center" key={i}>
                  <div className="text-2xl font-bold text-white">{title}</div>
                  <div className="text-sm text-[#F1ECE5]">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative flex items-center justify-center">
            {/* Rotating Circle */}
            <div className="wavy-circle-wrapper w-72 h-72 sm:w-[38rem] sm:h-[38rem] relative flex items-center justify-center">
              <div className="wavy-circle absolute inset-0 bg-[#EDE9E0] rounded-full animate-spin-slow z-0"></div>

              {/* Stationary Image */}
              <img
                src="/h.png"
                alt="Soap Flask"
                className="w-40 sm:w-90 md:ml-10 rounded-3xl object-contain z-10"
                loading="eager"
              />
            </div>

            {/* Decorative Circles */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#baa6a6] rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#DAD1BF] rounded-full opacity-30 blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-40"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFEE0"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,208C384,192,480,192,576,208C672,224,768,256,864,256C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128V320H0Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
