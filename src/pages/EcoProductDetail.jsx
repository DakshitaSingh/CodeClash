import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { Leaf, ShoppingCart, Trash2, ShieldCheck } from 'lucide-react';
// import Header_ShopGreen from '../components/header/Header_ShopGreen'; // Original import path

// --- Placeholder for Header_ShopGreen component ---

// --- End Placeholder ---

const EcoProductDetail = () => {
  const { productId } = useParams(); // Get the productId from the URL

  // --- Mock Product Data (replace with actual data fetching in a real app) ---
  const allProducts = {
    '1': {
      name: "Bamboo Toothbrush",
      description:
        "A sustainable alternative to plastic toothbrushes, made from 100% biodegradable bamboo. Designed for eco-conscious living without compromising on dental hygiene.",
      price: 149,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhWF2X2-HjHOr3For7r2pm0SxZy4GoOY3Wg&s",
      benefits: {
        carbonSaved: "2.3 kg",
        plasticPrevented: "1 piece",
        biodegradable: true,
      },
      highlights: [
        "100% natural bamboo handle",
        "Soft BPA-free bristles",
        "Plastic-free packaging",
        "Compostable after use",
      ],
    },
    '2': {
      name: "Organic Cotton Tote Bag",
      description: "Reusable and durable tote bag made from 100% organic cotton. Perfect for shopping, commuting, and everyday use, reducing the need for single-use plastic bags.",
      price: 299,
      image: "https://example.com/organic-tote.jpg", // Replace with a real image URL
      benefits: {
        carbonSaved: "1.5 kg",
        plasticPrevented: "20 bags",
        biodegradable: true,
      },
      highlights: [
        "Certified organic cotton",
        "Heavy-duty construction",
        "Machine washable",
        "Stylish and versatile",
      ],
    },
    // Add more products corresponding to your product images (product1, product2, etc.)
    // For example:
    '3': {
        name: "Eco-Friendly Cleaning Tablets",
        description: "Dissolvable cleaning tablets that reduce plastic waste from traditional cleaning bottles. Just add water!",
        price: 199,
        image: "https://m.media-amazon.com/images/I/71u9sXj946L._AC_SL1500_.jpg",
        benefits: {
            carbonSaved: "0.5 kg",
            plasticPrevented: "3 bottles",
            biodegradable: true,
        },
        highlights: [
            "Concentrated formula",
            "Refillable bottle system",
            "Safe for pets and kids",
            "Streak-free clean",
        ],
    },
    // ... and so on for product4, product5, product6 based on index + 1
  };

  const product = allProducts[productId];

  // Handle case where product is not found (e.g., invalid ID in URL)
  if (!product) {
    return (
      <>
        
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-16">
          <h1 className="text-2xl font-bold text-gray-700">Product not found.</h1>
        </div>
      </>
    );
  }

  return (
    <>
     
      <div className="min-h-screen bg-gradient-to-tr from-green-50 to-white text-green-900 p-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Product Image */}
          <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-5">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-700 text-base">{product.description}</p>

            {/* Highlights */}
            <ul className="mt-3 space-y-2 text-sm text-green-800">
              {product.highlights.map((point, i) => (
                <li key={i} className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-600" /> {point}
                </li>
              ))}
            </ul>

            {/* Eco Metrics */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-green-100 rounded-lg p-4 flex items-center gap-3">
                <Leaf className="text-green-700" />
                <div>
                  <p className="text-xs text-gray-600">Carbon Saved</p>
                  <p className="font-semibold text-green-900">{product.benefits.carbonSaved}</p>
                </div>
              </div>
              <div className="bg-blue-100 rounded-lg p-4 flex items-center gap-3">
                <Trash2 className="text-blue-700" />
                <div>
                  <p className="text-xs text-gray-600">Plastic Prevented</p>
                  <p className="font-semibold text-blue-900">{product.benefits.plasticPrevented}</p>
                </div>
              </div>
            </div>

            {/* Price and Buy Button */}
            <div className="mt-6 flex items-center justify-between">
              <p className="text-2xl font-bold text-green-800">₹{product.price}</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full shadow flex items-center gap-2 transition">
                <ShoppingCart className="w-5 h-5" />
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 bg-green-100 text-center p-6 rounded-xl shadow-md max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold text-green-800">
            Every green purchase makes a difference 🌱
          </h2>
          <p className="text-sm text-green-700 mt-2">
            By choosing this eco-friendly product, you contribute to reducing landfill waste and
            promoting a sustainable future. Thank you for making a conscious choice!
          </p>
        </div>
      </div>
    </>
  );
};

export default EcoProductDetail;