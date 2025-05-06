import { Products } from "../../components/Products";
import SlideOver from "../../components/Slide-over";
import QuickView from "../../components/QuickView";
import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import StoreNavigation from "../../components/storeNavigation";

export default function Product() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Sta
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setQuickViewOpen(false);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? Products
      : Products.filter((product) => product.category === selectedCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setQuickViewOpen(true);
  };

  return (
    <div className="bg-[url('https://images2.alphacoders.com/114/1145884.jpg')] bg-fixed bg-no-repeat bg-cover bg-center min-h-screen">
      <StoreNavigation />
      {/* Shopping Cart Button */}
      {!open && (
        <div className="animate-pulse fixed bottom-4 right-4 sm:bottom-10 sm:right-10 z-20">
          <button
            onClick={() => setOpen(true)}
            className="rounded-full bg-orange-600 p-3 text-white shadow-lg hover:bg-orange-700"
            style={{ position: "fixed", bottom: "23rem", right: "2rem" }}
          >
            <ShoppingCartIcon className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Category Buttons */}
      <div className="relative w-full overflow-hidden bg-black bg-opacity-40 shadow-lg mb-4">
        <div className="flex relative w-[200%] animate-slide-right">
          {/* First set of logos */}
          <div className="flex w-1/2 justify-around flex-shrink-0">
            <button
              onClick={() => setSelectedCategory("To Love Ru")}
              className="px-4 py--1 rounded-lg"
            >
              <img src="To Love Ru/10265111.png" alt="" className="h-20" />
            </button>
            <button
              onClick={() => setSelectedCategory("To Love Ru Darkness")}
              className="px-4 py--1 rounded-lg"
            >
              <img
                src="To Love Ru/toloveruDarkness.png"
                alt=""
                className="h-20"
              />
            </button>
            <button
              onClick={() => setSelectedCategory("Chainsaw Man")}
              className="px-4 py--1 rounded-lg"
            >
              <img
                src="Chainsaw Man/Chainsaw-Man-Logo.png"
                alt=""
                className="h-20"
              />
            </button>
            <button
              onClick={() => setSelectedCategory("Jujutsu Kaisen")}
              className="px-4 py--1 rounded-lg"
            >
              <img
                src="Jujutsu Kaisen/Jujutsu-Kaisen-Logo.png"
                alt=""
                className="h-20"
              />
            </button>
            <button
              onClick={() => setSelectedCategory("One Piece")}
              className="px-4 py--1 rounded-lg"
            >
              <img
                src="./One Piece/One-Piece-Logo-PNG-Photo.png"
                alt=""
                className="h-20"
              />
            </button>
            <button
              onClick={() => setSelectedCategory("Kaguya-sama")}
              className="px-4 py-2 rounded-lg"
            >
              <img
                src="Kaguya-sama/Kaguya-Sama - Love is War TV Series.svg"
                alt=""
                className="h-12 pb-1 pt-1"
              />
            </button>
            <button
              onClick={() => setSelectedCategory("Oshi No Ko")}
              className="px-4 py-2 rounded-lg"
            >
              <img
                src="Oshi No Ko/Oshi_no_Ko_logo.png"
                alt=""
                className="h-12 pb-1 pt-1"
              />
            </button>
            <button
              onClick={() => setSelectedCategory("My Dressup Darling")}
              className="px-4 py--1 w-36 rounded-lg"
            >
              <img
                src="My Dressup Darling/my-dressup-darling-logo.jpg"
                alt=""
                className="h-16 pr-2"
              />
            </button>
            <button
              onClick={() => setSelectedCategory("Demon Slayer")}
              className="px-1 py--1 pt2 rounded-lg"
            >
              <img
                src="./Demon Slayer/Demon-Slayer-Logo.png"
                alt=""
                className="h-20"
              />
            </button>
            <button
              onClick={() => setSelectedCategory("JoJo's Bizarre Adventure")}
              className="px-4 py-1 rounded-lg"
            >
              <img
                src="JoJo/JoJo's_Bizarre_Adventure_logo.png"
                alt=""
                className="h-16"
              />
            </button>
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex w-1/2 justify-around flex-shrink-0">
            <button
              onClick={() => setSelectedCategory("To Love Ru")}
              className="px-4 py--1 rounded-lg"
            >
              <img src="To Love Ru/10265111.png" alt="" className="h-20" />
            </button>
            <button
              onClick={() => setSelectedCategory("To Love Ru Darkness")}
              className="px-4 py--1 rounded-lg"
            >
              <img
                src="To Love Ru/toloveruDarkness.png"
                alt=""
                className="h-20"
              />
            </button>
            <button
              onClick={() => setSelectedCategory("Chainsaw Man")}
              className="px-4 py--1 rounded-lg"
            >
              <img
                src="Chainsaw Man/Chainsaw-Man-Logo.png"
                alt=""
                className="h-20"
              />
            </button>
            <button
              onClick={() => setSelectedCategory("Jujutsu Kaisen")}
              className="px-4 py--1 rounded-lg"
            >
              <img
                src="Jujutsu Kaisen/Jujutsu-Kaisen-Logo.png"
                alt=""
                className="h-20"
              />
            </button>
            <button
              onClick={() => setSelectedCategory("One Piece")}
              className="px-4 py--1 rounded-lg"
            >
              <img
                src="./One Piece/One-Piece-Logo-PNG-Photo.png"
                alt=""
                className="h-20"
              />
            </button>
            <button
              onClick={() => setSelectedCategory("Kaguya-sama")}
              className="px-4 py-2 rounded-lg"
            >
              <img
                src="Kaguya-sama/Kaguya-Sama - Love is War TV Series.svg"
                alt=""
                className="h-12 pb-1 pt-1"
              />
            </button>
            <button
              onClick={() => setSelectedCategory("Oshi No Ko")}
              className="px-4 py-2 rounded-lg"
            >
              <img
                src="Oshi No Ko/Oshi_no_Ko_logo.png"
                alt=""
                className="h-12 pb-1 pt-1"
              />
            </button>
            <button
              onClick={() => setSelectedCategory("My Dressup Darling")}
              className="px-4 py--1 w-36 rounded-lg"
            >
              <img
                src="My Dressup Darling/my-dressup-darling-logo.jpg"
                alt=""
                className="h-16 pr-2"
              />
            </button>
            <button
              onClick={() => setSelectedCategory("Demon Slayer")}
              className="px-1 py--1 pt2 rounded-lg"
            >
              <img
                src="./Demon Slayer/Demon-Slayer-Logo.png"
                alt=""
                className="h-20"
              />
            </button>
            <button
              onClick={() => setSelectedCategory("JoJo's Bizarre Adventure")}
              className="px-4 py-1 rounded-lg"
            >
              <img
                src="JoJo/JoJo's_Bizarre_Adventure_logo.png"
                alt=""
                className="h-16"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 border border-black bg-black bg-opacity-70 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-4 text-shadow-lg">
          {selectedCategory === "All" ? "Manga" : selectedCategory}
        </h1>
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => {
            // Extract name and volume
            const match = product.name.match(/^(.*?)(?:Vol\.(\d+))?$/); // Match the name and volume
            const name = match?.[1]?.trim() || ""; // Extract the name
            const volume = match?.[2]; // Extract the volume number

            return (
              <div
                key={product.id}
                onClick={() => handleProductClick(product)} // Open QuickView on click
                className="group cursor-pointer animated hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <img
                  src={
                    "imageSrcEnglish" in product
                      ? product.imageSrcEnglish
                      : product.imageSrc
                  }
                  alt={product.imageAlt}
                  className="aspect-auto w-full rounded-lg bg-gray-200 object-cover xl:aspect-7/8 text-shadow-lg"
                />
                <div className="mt-4 text-white font-semibold flex justify-between">
                  <span>{name}</span> {/* Cleaned name */}
                  {volume && (
                    <span className="text-white text-shadow-lg">
                      Vol.{volume}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-lg font-medium text-green-400 text-shadow-lg">
                  {product.price}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <QuickView
        open={quickViewOpen}
        setOpen={setQuickViewOpen}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />
      {/* SlideOver Component */}
      <SlideOver open={open} setOpen={setOpen} />
    </div>
  );
}
