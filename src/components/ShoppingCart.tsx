import { useState } from "react";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

type CartItem = Product & { quantity: number };

const products: Product[] = [
  {
    id: 1,
    name: "Eco-Refillable Soap Flask - Lemongrass",
    description: "Bright and refreshing lemongrass scent, gentle on skin.",
    price: 200,
    image: "/y.png",
  },
  {
    id: 2,
    name: "Eco-Refillable Soap Flask - Lavender",
    description: "Soothing lavender aroma for a calming cleanse.",
    price: 200,
    image: "/v.png",
  },
  {
    id: 3,
    name: "Eco-Refillable Soap Flask - Mint",
    description: "Cooling mint infusion for a fresh start to your day.",
    price: 200,
    image: "/b.png",
  },
  {
    id: 4,
    name: "Eco-Refillable Soap Flask - Rose",
    description: "Delicate rose fragrance with natural extracts.",
    price: 200,
    image: "/p.png",
  },
  {
    id: 5,
    name: "Eco-Refillable Soap Flask - Vanilla",
    description: "Warm vanilla essence for a cozy bathing experience.",
    price: 200,
    image: "/w.png",
  },
  {
    id: 6,
    name: "Eco-Refillable Soap Flask - Citrus",
    description: "Zesty citrus blend to energize and refresh.",
    price: 200,
    image: "/r.png",
  },
];

const ShopPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add from product list
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Increase in cart
  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease in cart
  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section
      id="shop"
      className="min-h-screen bg-gradient-to-br from-[#6C8A57] to-[#A3B18A] text-[#FAF8F5] px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-serif garamond text-center">
          Our Natural Collection
        </h1>
        <p className="text-center italic text-lg mt-4 text-[#F6F1EA]">
          “Pure ingredients, mindful design — because your skin deserves the
          best.”
        </p>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#FAF8F5] text-[#4A5A38] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="bg-[#EDE9E0] p-6 h-80 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full rounded-2xl"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-serif garamond mb-2">
                    {product.name}
                  </h2>
                  <p className="text-sm opacity-80 mb-4">
                    {product.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-semibold">
                    ₹{product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#6C8A57] text-white p-2 rounded-full hover:bg-[#4A5A38] transition duration-300 shadow-md hover:shadow-lg"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="bg-[#FAF8F5] text-[#4A5A38] rounded-3xl shadow-lg p-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6 border-b border-[#EDE9E0] pb-4">
            <h2 className="text-2xl font-serif garamond">Your Cart</h2>
            <ShoppingCart className="w-6 h-6" />
          </div>

          {cart.length === 0 ? (
            <p className="text-center text-[#4A5A38] opacity-70">
              Your cart is empty.
            </p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-[#EDE9E0] rounded-xl p-4"
                >
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm opacity-70">
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-[#6C8A57] text-white p-1 rounded-full hover:bg-[#4A5A38]"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-[#6C8A57] text-white p-1 rounded-full hover:bg-[#4A5A38]"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-between font-semibold text-lg pt-4 border-t border-[#EDE9E0]">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>
          )}

          <div className="mt-6 text-center text-[#A37B4B] italic">
            Stocking Up Soon...
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
