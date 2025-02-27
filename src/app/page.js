"use client";
import React from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import ProductDescription from "@/components/ProductDescription";
import ProductPage from "@/components/Products";
import CartPage from "@/components/Cart";
import Hero from "@/components/Hero";

export default function Home() {

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        {/* /* carousel */ }
        <Hero/>
          {/* product section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 w-fit m-auto px-4 md:px-0">
        <ProductCard
          image="https://images.unsplash.com/photo-1612838320302-3b3b3f1b3b3b"
          name="Product Name"
          price="100"
          rating="4"
        />
      </div>
        {/* <ProductDescription product={sampleProduct} />; */}
        <ProductPage/>
        <CartPage/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
