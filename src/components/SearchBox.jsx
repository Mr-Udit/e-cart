"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";

export default function SearchBox() {
  const [category, setCategory] = useState("All");
  const categories = ["All", "Products", "Services", "Articles"];
  const suggestions = [
    // Electronics & Gadgets
    "Smartphones",
    "Laptops",
    "Tablets",
    "Smartwatches",
    "Headphones",
    "Wireless Earbuds",
    "Bluetooth Speakers",
    "Gaming Consoles",
    "Cameras",
    "Power Banks",

    // Fashion & Accessories
    "T-Shirts",
    "Jeans",
    "Sneakers",
    "Formal Shoes",
    "Handbags",
    "Watches",
    "Sunglasses",
    "Dresses",
    "Jackets",
    "Jewelry",

    // Home & Kitchen
    "Bedsheets",
    "Curtains",
    "Cookware Set",
    "Dinnerware",
    "Air Fryer",
    "Coffee Maker",
    "Vacuum Cleaner",
    "Storage Boxes",
    "LED Lights",
    "Wall Clocks",

    // Beauty & Personal Care
    "Makeup Kits",
    "Skincare Products",
    "Perfumes",
    "Hair Dryers",
    "Shaving Kits",
    "Sunscreen",
    "Nail Polish",
    "Face Masks",
    "Hair Straighteners",

    // Grocery & Essentials
    "Rice & Grains",
    "Cooking Oil",
    "Snacks & Beverages",
    "Dairy Products",
    "Fresh Fruits & Vegetables",
    "Spices & Condiments",
    "Tea & Coffee",
    "Cleaning Supplies",

    // Sports & Fitness
    "Yoga Mats",
    "Dumbbells",
    "Resistance Bands",
    "Running Shoes",
    "Protein Supplements",
    "Smart Fitness Bands",
    "Bicycles",
    "Gym Bags",

    // Toys & Baby Products
    "Soft Toys",
    "Educational Games",
    "Action Figures",
    "Baby Diapers",
    "Feeding Bottles",
    "Baby Strollers",
    "Car Seats",

    // Automotive & Tools
    "Car Covers",
    "Car Chargers",
    "Helmets",
    "Tool Kits",
    "Tire Inflators",
    "Car Cleaning Supplies",
  ];
  const [searchValue, setSearchValue] = useState(suggestions[0]);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % suggestions.length; // Loop through suggestions
      setSearchValue(suggestions[indexRef.current]);
    }, 2000); // Updates every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex items-center border rounded-lg overflow-hidden w-full max-w-md">
      {/* Dropdown Menu */}
      <select
        className="bg-gray-100 px-2 py-3 border-r focus:outline-none"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 px-3 py-2 focus:outline-none w-[300px]"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {/* Search Button */}
      <button
        className="bg-blue-500 text-white p-3 hover:bg-blue-600"
        onClick={() => alert(`Searching for ${searchValue} in ${category}`)}
      >
        <Search size={20} />
      </button>
    </div>
  );
}
