import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed p-5 top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Arata Logo"
              className="w-16 h-16 object-contain"
            />
            <span className="text-2xl font-serif garamond1 font-bold text-[#4B5D44]">
              ARATA
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {[
              { label: "Home", section: "hero" },
              { label: "Features", section: "features" },
              { label: "How It Works", section: "how-it-works" },
              { label: "About", section: "about" },
            ].map(({ label, section }) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-xl font-medium text-[#4B5D44] hover:text-[#2F3E34] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#6C8A57] hover:after:w-full after:transition-all after:duration-300"
              >
                {label}
              </button>
            ))}
            <button className="text-lg bg-[#6C8A57] text-white px-6 py-2 rounded-full hover:bg-[#5A7D49] transition-colors font-medium shadow-md">
              Shop Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#4B5D44]"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#D6E2D0] mt-2 rounded-md shadow-md">
            <div className="px-4 pt-4 pb-4 space-y-2">
              {[
                { label: "Home", section: "hero" },
                { label: "Features", section: "features" },
                { label: "How It Works", section: "how-it-works" },
                { label: "About", section: "about" },
              ].map(({ label, section }) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left text-lg px-3 py-2 text-[#4B5D44] hover:text-[#2F3E34] transition-colors font-medium"
                >
                  {label}
                </button>
              ))}
              <button className="w-full bg-[#6C8A57] text-white px-6 py-2 rounded-full hover:bg-[#5A7D49] transition-colors font-medium">
                Shop Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
