// import { useState } from 'react';
import {
  Instagram,
  Mail,
} from 'lucide-react';

const Footer = () => {
//   const [email, setEmail] = useState('');

//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Subscribing email:', email);
//     setEmail('');
//   };

  return (
    <footer id='footer' className="bg-[#963A2F] text-[#FFF6ED]">
      {/* Newsletter */}
      <div className="bg-[#7e2f26] py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl sm:text-4xl font-serif garamond font-bold mb-4">
          Small choices, <span className="italic oi text-[#FFE3D2]">big impact.</span>
        </h3>
        {/* <p className="text-[#FDEDE4] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Subscribe to our newsletter for sustainable living tips, product drops,
          and exclusive offers from Arata.
        </p> */}

        {/* <form
          onSubmit={handleSubscribe}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-3 rounded-full bg-white text-[#32110f] placeholder-[#963A2F] focus:outline-none focus:ring-2 focus:ring-[#FFE3D2]"
          />
          <button
            type="submit"
            className="bg-[#FFF6ED] text-[#963A2F] px-6 py-3 rounded-full font-medium hover:bg-[#FFE3D2] transition-all flex items-center justify-center space-x-2"
          >
            <span>Subscribe</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form> */}
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
            <img
              src="/logo.png"
              alt="Arata Logo"
              className="w-16 h-16 object-contain"
            />
            <span className="text-xl garamond1 font-serif font-bold text-sage-800">
              ARATA
            </span>
            </div>
            <p className="text-[#FDEDE4] leading-relaxed mb-6 max-w-md">
              Redefining personal care through sustainable design and natural ingredients.
              Join us in creating a more beautiful, waste-free world.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Mail].map((Icon, idx) => (
                <a
                  key={idx}
                  href="https://www.instagram.com/us_arata?igsh=bmxvZ3ExZXFjaWd5"
                  className="w-10 h-10 rounded-full bg-[#A3544A] hover:bg-[#D87E6C] flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
  <h4 className="font-semibold text-lg mb-4 text-[#FFE3D2]">Quick Links</h4>
  <ul className="space-y-2 text-[#FDEDE4]">
    {[
      'Home,l:#',
      'Feature,l:#features',
      'About Us,l:#about',
      'Contact,l:#footer',
    ].map((item) => {
      const [label, hrefPart] = item.split(',l:');
      const href = hrefPart || '#';

      return (
        <li key={label}>
          <a href={href} className="hover:text-white transition-colors">
            {label}
          </a>
        </li>
      );
    })}
  </ul>
</div>


          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#FFE3D2]">Support</h4>
            <ul className="space-y-2 text-[#FDEDE4]">
              {['FAQ', 'Shipping', 'Returns', 'Care Guide', 'Help Center'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#B46F61] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-[#FDEDE4]">
          <p>© 2024 Arata Natural Care. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy) => (
              <a key={policy} href="#" className="hover:text-white transition-colors">
                {policy}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
