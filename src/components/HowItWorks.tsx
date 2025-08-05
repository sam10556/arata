"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import { motion } from "framer-motion";


const steps = [
  {
    title: "Choose Your Flask",
    description:
      "Begin your journey by browsing our thoughtfully curated collection of reusable soap flasks. Each design is crafted with aesthetics and sustainability in mind, from sleek minimalism to earthy elegance. Select the one that reflects your personality and pair it with your favorite soap blend, formulated with gentle, natural ingredients that care for both your skin and the planet.",
  },
  {
    title: "Unbox & Enjoy",
    description:
      "When your order arrives, you’ll find it beautifully wrapped using eco-friendly, compostable packaging. Open the box to reveal your stylish flask and soap refill. Simply pop the refill into the flask, give it a gentle shake, and it's ready to use. Let the rich, plant-based lather and calming scents transform your everyday washing routine into a mindful ritual.",
  },
  {
    title: "Refill & Repeat",
    description:
      "Once you've used up your soap, it’s time to refill — no need to replace the flask. Our convenient refill packs are designed to be mess-free and 100% compostable. Just drop in a new refill and continue enjoying your luxurious, sustainable experience. With each refill, you’re saving another plastic bottle from ending up in the ocean or landfill.",
  },
  {
    title: "Love Your Impact",
    description:
      "Every small step matters. By choosing our refillable system, you're contributing to a more circular, waste-free future. Feel empowered knowing your purchase supports ethical sourcing, clean ingredients, and zero-plastic goals. With every use, you're not just nourishing your skin — you're nurturing the planet and inspiring others to do the same.",
  },
];


const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative bg-[#963a2f] py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-light leading-tight text-[#FFF6ED]">
            Simple Steps to{" "}
            <span className="text-[#FFE3D2] italic">Sustainable Beauty</span>
          </h2>
          <p className="mt-4 text-lg text-[#FDEDE4] max-w-3xl mx-auto leading-relaxed">
            Making the switch to sustainable skincare has never been easier.
            Follow these simple steps to start your eco-friendly journey.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation, Parallax]}
            pagination={{ type: "progressbar" }}
            navigation={{
              nextEl: ".custom-swiper-next",
              prevEl: ".custom-swiper-prev",
            }}
           loop={true}
            spaceBetween={30}
            slidesPerView={1}
            className="max-w-4xl mx-auto rounded-4xl"
          >
            {steps.map((step, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className="bg-white p-10 sm:p-12 rounded-3xl text-center shadow-xl border border-[#F2D6CB] transition-all duration-300 hover:shadow-2xl relative"
                  >
                    {/* Step Badge */}
                    <div className="absolute mb-5 top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#963a2f] text-white rounded-full flex items-center justify-center font-bold shadow-md">
                      {index + 1}
                    </div>

                    {/* Text */}
                    <h3 className="text-5xl mt-10 garamond font-semibold text-[#32110f] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#5C3A35] garamond leading-relaxed text-2xl">
                      {step.description}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Arrows */}
          <div className="custom-swiper-prev absolute top-1/2 -left-6 transform -translate-y-1/2 z-20 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#FFF4EF] text-[#963a2f] flex items-center justify-center shadow-md hover:bg-[#ffe1cf] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
          <div className="custom-swiper-next absolute top-1/2 -right-6 transform -translate-y-1/2 z-20 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#FFF4EF] text-[#963a2f] flex items-center justify-center shadow-md hover:bg-[#ffe1cf] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center my-10">
          <button
            className="bg-transparent text-[white] px-8 py-2 rounded-full transition-all duration-300 font-medium text-3xl garamond hover:scale-150"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-40"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFEE9"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,208C384,192,480,192,576,208C672,224,768,256,864,256C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128V320H0Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HowItWorks;
