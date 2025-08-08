import { Quote } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-[#fffde0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 garamond">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-serif font-light mb-6"
                style={{ color: "#1a351b" }} // sage-900
              >
                What if personal care could be{" "}
                <span className="text-3xl block italic" style={{ color: "#dc5e43" }}>
                  personal, beautiful, and waste-free?
                </span>
              </h2>

              <div className="relative pl-10">
                <Quote
                  className="absolute top-0 left-0 w-6 h-6"
                  style={{ color: "#c8d9c8" }} // sage-300 approximation
                />
                <p
                  className="text-2xl garamond leading-relaxed italic"
                  style={{ color: "#446b44" }} // sage-700
                >
                  "We believe that the products we use daily should reflect our
                  values. That's why we created Arata — to prove that luxury and
                  sustainability can coexist beautifully."
                </p>
              </div>
            </div>

            <div
              className="rounded-2xl p-8 shadow-md"
              style={{ backgroundColor: "#f6f8f6" }} // sage-50
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: "#1a351b" }} // sage-900
              >
                Our Mission
              </h3>
              <p
                className="leading-relaxed mb-4"
                style={{ color: "#446b44" }} // sage-700
              >
                At Arata Natural Care, we're reimagining personal care for the
                conscious consumer. Our soap flask represents more than just a
                product — it's a statement that beautiful design and
                environmental responsibility go hand in hand.
              </p>
              <p
                className="leading-relaxed"
                style={{ color: "#446b44" }} // sage-700
              >
                Every flask is crafted with intention, using sustainable
                materials and time-honored techniques. We're not just reducing
                waste; we're creating a new standard for what personal care can
                be.
              </p>
            </div>

            {/* <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#2f502f" }} // sage-800
                >
                  2019
                </div>
                <div className="text-sm" style={{ color: "#598658" }}>
                  Founded
                </div>
              </div>
              <div>
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#2f502f" }} // sage-800
                >
                  10K+
                </div>
                <div className="text-sm" style={{ color: "#598658" }}>
                  Happy Customers
                </div>
              </div>
              <div>
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#2f502f" }} // sage-800
                >
                  50K
                </div>
                <div className="text-sm" style={{ color: "#598658" }}>
                  Plastic Bottles Saved
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Content - Team Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/team.jpeg"
                alt="Arata Natural Care team"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                loading="lazy"
              />
            </div>

            {/* Decorative blobs */}
            <div
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-30 blur-2xl"
              style={{ backgroundColor: "#f4cfc4" }} // terracotta-200
            ></div>
            <div
              className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-40 blur-xl"
              style={{ backgroundColor: "#e5ece5" }} // sage-100
            ></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-24">
          <h3
            className="text-2xl font-serif font-light text-center mb-12"
            style={{ color: "#1a351b" }} // sage-900
          >
            Our{" "}
            <span className="italic" style={{ color: "#dc5e43" }}>
              Core Values
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Sustainability First",
                description:
                  "Every decision we make considers its impact on our planet and future generations.",
                bg: "#e5ece5", // sage-100
                dot: "#598658", // sage-600
              },
              {
                title: "Timeless Design",
                description:
                  "We create products that are as beautiful today as they will be tomorrow.",
                bg: "#f9e2dc", // terracotta-100
                dot: "#dc5e43", // terracotta-600
              },
              {
                title: "Natural Purity",
                description:
                  "Only the finest natural ingredients touch your skin and our environment.",
                bg: "#e5ece5", // sage-100
                dot: "#598658", // sage-600
              },
            ].map((val, i) => (
              <div
                key={i}
                className="text-center p-6 hover:scale-[1.02] transition-transform duration-300"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: val.bg }}
                >
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: val.dot }}
                  ></div>
                </div>
                <h4
                  className="text-lg font-semibold mb-3"
                  style={{ color: "#1a351b" }} // sage-900
                >
                  {val.title}
                </h4>
                <p style={{ color: "#446b44" }}>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-40"
          preserveAspectRatio="none"
        >
          <path
            fill="#6C8A57"
            fillOpacity="1"
            d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,218.7C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96V320H0Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;
