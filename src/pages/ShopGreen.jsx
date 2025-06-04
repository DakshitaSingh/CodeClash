import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaRecycle,
  FaCheckCircle,
  FaBoxOpen,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { FaStar } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import heroImg from "../assets/hero.png";
import butterfly1 from "../assets/butterfly1.png";
import butterfly2 from "../assets/butterfly2.png";
import bulb from "../assets/bulb.png";

import Slide1 from "../assets/slide1.png";
import Slide2 from "../assets/slide2.png";
import Slide3 from "../assets/slide3.png";
import Slide4 from "../assets/slide4.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import aboutBackground from "../assets/about.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
const slides = [Slide1, Slide2, Slide3, Slide4];

const ShopGreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const blogData = [
    {
      image: p1,
      title: 'Embracing Sustainability',
      description: 'The Power of Eco-Friendly Products at Greenify',
    },
    {
      image: p2,
      title: 'Sustainable Living Made Simple',
      description: 'How Greenify Helps You Make a Difference',
    },
    {
      image: p3,
      title: "Greenify's Guide to Eco-Friendly Shopping",
      description: 'Reducing Your Carbon Footprint One Purchase at a Time',
    },
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: `I absolutely love my Organic Cotton Tote Bag from Greenify! It's not only stylish but also eco-friendly. Knowing that I'm making a positive impact on the environment with my purchase makes me feel great. Highly recommend this sustainable accessory!`,
    },
    {
      name: 'Mark Anderson',
      image: 'https://randomuser.me/api/portraits/men/76.jpg',
      text: `The Bamboo Toothbrushes from Greenify are a game-changer! The quality is outstanding, and I love the fact that they are made from renewable bamboo. My oral care routine just got a lot greener, and I couldn't be happier. Kudos to Greenify for offering such fantastic eco-friendly products!`,
    },
    {
      name: 'Emily Lee',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: `I recently bought the Hemp Backpack from Greenify, and I must say it's a fantastic investment. The durability of the hemp material is impressive, and I feel good knowing I'm choosing a sustainable alternative. This backpack is perfect for my outdoor adventures and daily commutes. Thumbs up for the eco-conscious design!`,
    },
    {
      name: 'David Kim',
      image: 'https://randomuser.me/api/portraits/men/43.jpg',
      text: `Greenify's Reusable Water Bottle is a daily essential for me now. Keeps my drinks cold, and I'm helping reduce plastic waste. Great quality and sleek look.`,
    },
    {
      name: 'Lily Thomas',
      image: 'https://randomuser.me/api/portraits/women/12.jpg',
      text: `I gifted my friend the Eco Stationery Set and she absolutely loved it! Beautifully packaged and thoughtfully made. Will definitely buy again.`,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + visibleCount < reviews.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const visibleReviews = reviews.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="relative min-h-screen bg-white font-sans text-gray-800 overflow-hidden">
      {/* Navbar */}
      <header className="bg-green-900 text-white px-6 py-3 flex items-center justify-between shadow-md z-30 relative">
        <div className="text-2xl font-bold text-yellow-400">
          <Link to="/">Greenify</Link>
        </div>

        <div className="hidden md:flex items-center w-1/2">
          <input
            type="text"
            placeholder="Search products"
            className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-r-md">
            Search
          </button>
        </div>

        <nav className="flex items-center space-x-6 text-sm">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/products/1" className="hover:text-yellow-400">Products</Link> {/* Link to a sample product */}
          <Link to="/cart" className="hover:text-yellow-400">Cart</Link>
          <Link to="/account" className="hover:text-yellow-400">Account</Link>
          <Link to="/mystore" className="hover:text-yellow-400">My Store</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 bg-green-50 py-16 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between mt-4">
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left relative">
          <img src={butterfly1} alt="butterfly1" className="absolute w-8 left-[-30px] top-[-20px] animate-float" />
          <img src={butterfly2} alt="butterfly2" className="absolute w-6 right-[-20px] top-[10px] animate-float-slow" />
          <img src={bulb} alt="bulb" className="absolute w-10 right-[20%] bottom-[-30px] animate-bounce-slow" />

          <h1 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight">
            Welcome to Greenify
          </h1>
          <p className="text-xl mt-4 text-gray-600">
            Your Sustainable <span className="text-green-600 font-semibold">Shopping Destination</span>
          </p>
          <p className="mt-4 text-sm text-gray-500 italic">
            "Discover Sustainability. Embrace Greenify. <br />
            Your Eco-Friendly Haven for Conscious Shopping."
          </p>
          <Link
            to="/products/1" // Link to a sample product
            className="inline-block mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            SHOP NOW
          </Link>
        </div>

        {/* Right Hero Image */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <div className="relative rounded-xl overflow-hidden shadow-xl border border-green-100 p-4 bg-white">
            <img src={heroImg} alt="Eco bag" className="w-[250px] md:w-[300px] object-contain" />
          </div>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="mt-10 px-6 mb-16">
        <div className="relative w-full max-w-5xl mx-auto rounded-3xl border border-green-200 shadow-lg overflow-hidden">
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-[33rem] object-cover object-top transition duration-700 ease-in-out rounded-3xl"
          />
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
              onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
              className="bg-white/70 hover:bg-white text-green-600 font-bold p-2 rounded-full shadow"
            >
              &#8592;
            </button>
            <button
              onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
              className="bg-white/70 hover:bg-white text-green-600 font-bold p-2 rounded-full shadow"
            >
              &#8594;
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 w-2 rounded-full ${
                  currentSlide === idx ? "bg-green-600" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">Why Choose Greenify?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {[
            { icon: FaLeaf, title: "Sustainable Products", text: "Explore carefully crafted selections that reduce carbon footprint." },
            { icon: FaRecycle, title: "Eco-Friendly Choices", text: "Make conscious decisions with our eco-friendly products." },
            { icon: FaCheckCircle, title: "High-Quality Selection", text: "Select from premium items built to last and reduce waste." },
            { icon: FaBoxOpen, title: "Sustainable Packaging", text: "Eco packaging that protects the planet and your purchase." },
          ].map((item, index) => (
            <div key={index}>
              <item.icon className="text-green-600 text-4xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best-Selling Products */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
          Our Best-Selling Sustainable Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[product1, product2, product3, product4, product5, product6].map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:scale-105"
            >
              <img src={img} alt={`Product ${index + 1}`} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-700">Eco Product {index + 1}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  A sustainable product made with care for the environment.
                </p>
                {/* --- IMPORTANT CHANGE HERE --- */}
                {/* Link to a dynamic product detail page */}
                <Link to={`/products/${index + 1}`} className="text-green-600 text-sm mt-2 inline-block hover:underline">
                  View Details
                </Link>
                {/* --- END IMPORTANT CHANGE --- */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section
        className="py-16 px-6 md:px-20 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-80 z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center text-black">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">About Us</h2>
          <p className="text-lg">
            Welcome to <span className="font-bold text-green-800">Greenify</span>! Our mission is to encourage sustainable living by offering eco-friendly products that help reduce environmental impact.
          </p>
          <p className="mt-4">
            From biodegradable packaging to ethically sourced materials, every product in our store is designed with sustainability in mind.
          </p>
          <p className="mt-4 italic text-gray-500">
            "Small steps lead to a greener future. Let's shop responsibly and make a difference together!"
          </p>
          <div className="mt-8">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-white py-12 px-4 text-center relative overflow-hidden">
        <h2 className="text-3xl font-bold mb-10">Customer Reviews</h2>

        {/* Review Cards */}
        <div className="flex justify-center gap-6">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-green-400 rounded-xl p-6 w-full max-w-sm relative shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{review.name}</h3>
              <p className="text-sm text-gray-600 mb-4">"{review.text}"</p>
              <div className="flex justify-center text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-green-500" />
              <div className="absolute bottom-3 right-3 text-green-500 text-xl">⊛</div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-black disabled:opacity-30"
          onClick={handlePrev}
          disabled={startIndex === 0}
          aria-label="Previous"
        >
          <FiArrowLeft />
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-black disabled:opacity-30"
          onClick={handleNext}
          disabled={startIndex + visibleCount >= reviews.length}
          aria-label="Next"
        >
          <FiArrowRight />
        </button>
      </section>

      {/* Blog Section */}
      <div className="bg-green-500 py-16 px-6 text-white relative overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-12">Blogs</h2>

        <div className="flex flex-wrap justify-center gap-10">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl w-80 p-5 text-center shadow-lg"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-black mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm">{blog.description}</p>
              <button className="bg-green-500 text-white font-bold px-6 py-2 rounded-md hover:bg-green-600 transition">
                READ MORE
              </button>
            </div>
          ))}
        </div>

        {/* Optional Butterfly Decorations */}
        <img
          src={butterfly1}
          alt=""
          className="absolute top-6 left-6 w-10 h-10"
        />
        <img
          src={butterfly2}
          alt=""
          className="absolute bottom-6 right-6 w-10 h-10"
        />
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-700 via-green-900 to-black text-gray-200 px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand & Description */}
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-4 tracking-widest">GREENIFY</h2>
            <p className="text-gray-300 mb-6">
              Your one-stop eco-friendly shop, dedicated to sustainable living and a greener planet.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 text-lg">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label="social link"
                  className="p-3 rounded-full bg-green-600 hover:bg-green-400 transition transform hover:scale-110 shadow-lg"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5 border-b border-green-500 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "Shop", to: "/products/1" }, // Link to a sample product
                { label: "Categories", to: "/categories" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map(({ label, to }, i) => (
                <li key={i} className="flex items-center gap-2 hover:text-green-400 transition cursor-pointer">
                  <FaLeaf className="text-green-400" />
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5 border-b border-green-500 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-center gap-3 hover:text-green-400 transition cursor-pointer">
                <FaPhoneAlt className="text-green-400" /> +91 123456789
              </li>
              <li className="flex items-center gap-3 hover:text-green-400 transition cursor-pointer">
                <HiOutlineMail className="text-green-400" /> info@greenify.com
              </li>
              <li className="flex items-start gap-3 hover:text-green-400 transition cursor-pointer">
                <GoLocation className="text-green-400 mt-1" />
                <address>
                  102-Complex, Xyz Road <br />
                  City Name, State, 136458
                </address>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5 border-b border-green-500 pb-2">
              Newsletter
            </h3>
            <p className="text-gray-300 mb-5 text-sm">
              Subscribe to our newsletter and get the latest updates on sustainable products and exclusive offers.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing!");
              }}
              className="flex flex-col space-y-3"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 transition rounded-md py-3 font-semibold shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-green-600 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
          <p>© 2023 Greenify. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-400 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-green-400 transition">
              Cookie Policy
            </a>
          </div>
        </div >
      </footer>
    </div>
  );
};

export default ShopGreen;