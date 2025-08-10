import { Recycle, Droplets, Leaf, Package } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: Recycle,
      title: "Eco-Refillable Design",
      description:
        "One elegant bottle, endlessly refillable. A smarter choice for your skin and the planet.",
    },
    {
      icon: Package,
      title: "Rustic Cork Cap",
      description:
        "Earthy cork seals freshness naturally. Biodegradable, beautiful, and sustainable.",
    },
    {
      icon: Droplets,
      title: "Travel-Ready Compactness",
      description:
        "Designed to fit your life on the go — ergonomic, portable, and always ready.",
    },
    {
      icon: Leaf,
      title: "100% Natural Formula",
      description:
        "Plant-based, plastic-free, and crafted without compromise. Clean skin, clean conscience.",
    },
  ];

  return (
    <section
      id="features"
      className="relative bg-[#FFFEE0] text-green-900 py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-light leading-tight">
            Thoughtful Design for{" "}
            <span className="italic text-[#A25F4B]">Sustainable Living</span>
          </h2>
          <p className="mt-4 text-lg text-green-800 max-w-2xl mx-auto">
            Every detail has a purpose. Our products are born from a deep
            respect for nature, function, and form.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 group hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Icon Bubble with ripple */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-green-200 opacity-0 group-hover:opacity-30 scale-0 group-hover:scale-125 transition-all duration-500 blur-md" />
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-green-300 flex items-center justify-center shadow-sm relative z-10">
                    <Icon className="w-6 h-6 text-green-800" />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-green-800 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Content Block */}
      <div className="mt-32 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-green-100/50 border border-green-200 backdrop-blur-sm rounded-3xl px-10 py-16 text-center shadow-md"
        >
          <h3 className="text-3xl sm:text-4xl font-serif font-light mb-6 text-[#2F3E34]">
            Why Choose Our Skincare?
          </h3>

          {/* Decorative divider */}
          <div className="w-16 h-[2px] bg-[#A25F4B] mx-auto mb-6 rounded-full" />

          <p className="text-lg text-green-900 leading-relaxed max-w-3xl mx-auto">
            We blend tradition, sustainability, and modern skincare science to
            deliver conscious luxury. Our products honor your skin — and the
            Earth.
          </p>
        </motion.div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-40"
          preserveAspectRatio="none"
        >
          <path
            fill="#963a2f"
            fillOpacity="1"
            d="M0,192L60,186.7C120,181,240,171,360,165.3C480,160,600,160,720,149.3C840,139,960,117,1080,122.7C1200,128,1320,160,1380,176L1440,192V320H0Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Features;
