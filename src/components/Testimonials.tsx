

import { Star, Instagram } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      handle: "@sarahsustainable",
      text: "Beautiful design, planet-friendly choice. This flask has completely transformed my skincare routine!",
      rating: 5,
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Maya Patel",
      handle: "@zerowastemaya",
      text: "Finally, a soap dispenser that matches my values. The cork cap is such a thoughtful touch.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Emma Rodriguez",
      handle: "@cleanbeautyemma",
      text: "Love how this looks in my bathroom. It's like having a piece of art that's also functional!",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
  ];

  return (
    <section className="relative bg-[#6C8A57] pt-24 pb-40 overflow-hidden">
      {/* Blobs */}
      <div className="absolute -top-10 -left-20 w-80 h-80 bg-[#5A7D49] opacity-30 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#A4C7A2] opacity-20 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-light text-white mb-4">
            Loved by{" "}
            <span className="italic text-[#CDE6C2]">Conscious Consumers</span>
          </h2>
          <p className="text-lg text-[#E5F2DD] max-w-3xl mx-auto leading-relaxed">
            Join thousands of customers who've made the switch to sustainable
            skincare.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-[#2F3E34] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-[#2A5D4A]">
                    {testimonial.name}
                  </div>
                  <div className="text-[#5C7D6A] text-sm flex items-center space-x-1">
                    <Instagram className="w-4 h-4" />
                    <span>{testimonial.handle}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center bg-white rounded-2xl p-10 shadow-md max-w-2xl mx-auto hover:shadow-xl transition-all duration-300">
          <DrawOutlineButton>
          <a href="https://www.instagram.com/us_arata?igsh=bmxvZ3ExZXFjaWd5" className="flex items-center justify-center space-x-2 m-4">
            {/* <Instagram className="w-12 h-12 text-[#2A5D4A]" /> */}
            <span className="text-6xl garamond font-semibold text-[#2A5D4A]">
              @us_arata
            </span>
          </a>
            </DrawOutlineButton>
          <p className="text-[#3C5E52] garamond eczar mb-6 text-xl">
            Share your Arata moments and join our community of conscious
            consumers.
          </p>
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-40"
          preserveAspectRatio="none"
        >
          <path
            fill="#7e2f26"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,208C384,192,480,192,576,208C672,224,768,256,864,256C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128V320H0Z"
          />
        </svg>
      </div>
    </section>
  );
};

type Props = {
  children: React.ReactNode;
}

// ✅ Updated button with green border animation
const DrawOutlineButton : React.FC<Props> =  ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-[#2A5D4A] transition-colors duration-500 hover:text-[#963A2F]"
    >
      <span>{children}</span>
      {/* TOP */}
      <span className="absolute left-0 rounded-full top-0 h-[4px] w-0 bg-[#2A5D4A] transition-all duration-100 group-hover:w-full" />
      {/* RIGHT */}
      <span className="absolute right-0 rounded-full top-0 h-0 w-[4px] bg-[#2A5D4A] transition-all delay-100 duration-100 group-hover:h-full" />
      {/* BOTTOM */}
      <span className="absolute bottom-0 rounded-full right-0 h-[4px] w-0 bg-[#2A5D4A] transition-all delay-200 duration-100 group-hover:w-full" />
      {/* LEFT */}
      <span className="absolute bottom-0 rounded-full left-0 h-0 w-[4px] bg-[#2A5D4A] transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Testimonials;
