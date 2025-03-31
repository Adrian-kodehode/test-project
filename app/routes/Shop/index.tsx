import { Products } from "~/components/Products";
import SlideOver from "~/components/Slide-over";
import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Product() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? Products
      : Products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-[url('https://images2.alphacoders.com/114/1145884.jpg')] bg-fixed bg-no-repeat bg-cover bg-center min-h-screen">
      {/* Shopping Cart Button */}
      {!open && (
        <div className="fixed bottom-4 right-4 sm:bottom-10 sm:right-10 z-20">
          <button
            onClick={() => setOpen(true)}
            className="rounded-full bg-orange-600 p-3 text-white shadow-lg hover:bg-orange-700"
          >
            <ShoppingCartIcon className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Category Buttons */}
      <div className="mx-auto max-w-5xl h-28 flex justify-center space-x-4 py-4 border border-black bg-black bg-opacity-70 rounded-lg shadow-lg mb-4">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "All"
              ? "bg-orange-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory("Chainsaw Man")}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "Chainsaw Man"
            // ? "bg-orange-600 text-white"
            // : "bg-gray-200 text-gray-800"
          }`}
        >
          {" "}
          <img src="Chainsaw-Man-Logo.png" alt="" className="h-20" />
        </button>
        <button
          onClick={() => setSelectedCategory("Jujutsu Kaisen")}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "Jujutsu Kaisen"
            // ? "bg-orange-600 text-white"
            // : "bg-gray-200 text-gray-800"
          }`}
        >
          <img src="Jujutsu-Kaisen-Logo.png" alt="" className="h-20" />
        </button>
        <button
          onClick={() => setSelectedCategory("One Piece")}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "One Piece"
            // ? "bg-orange-600 text-white"
            // : "bg-gray-200 text-gray-800"
          }`}
        >
          <img src="One-Piece-Logo-PNG-Photo.png" alt="" className="h-36 pb-14" />
        </button>
      </div>

      {/* Page Content */}
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 border border-black bg-black bg-opacity-70 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-4 text-shadow-lg">
          Manga
        </h1>
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => {
            const isOnePiece = product.category === "One Piece";
            const [name, volume] = isOnePiece
              ? [
                  product.name.replace(/Vol\.\d+:/, "").trim(),
                  product.name.match(/Vol\.(\d+)/)?.[1],
                ]
              : product.name.split("Vol.");

            return (
              <a key={product.id} href={product.href} className="group">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="aspect-auto w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8 text-shadow-lg"
                />
                <div className="mt-4 text-white font-semibold flex justify-between">
                  <span>{name.trim()}</span>
                  {volume && (
                    <span className="text-white text-shadow-lg">
                      Vol.{volume}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-lg font-medium text-green-400 text-shadow-lg">
                  {product.price}
                </p>
              </a>
            );
          })}
        </div>
      </div>

      {/* SlideOver Component */}
      <SlideOver open={open} setOpen={setOpen} />
    </div>
  );
}
