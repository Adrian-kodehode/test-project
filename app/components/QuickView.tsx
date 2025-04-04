import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function QuickView({ open, setOpen, product }) {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  if (!product) {
    return null;
  }

  // Determine the image based on the selected language
  const imageSrc =
    selectedLanguage === "English"
      ? product.imageSrcEnglish
      : product.imageSrcJapanese;

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  ></Dialog.Title>
                  <div className="mt-2">
                    {/* Display the image based on the selected language */}
                    <img
                      src={imageSrc}
                      alt={product.imageAlt}
                      className="w-full rounded-lg"
                    />
                    <h3
                      className="text-lg font-medium text-gray-900 mt-4
                    "
                    >
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-4">
                      {product.description}
                    </p>
                    <p className="text-lg font-bold text-green-500 mt-4">
                      {product.price}
                    </p>
                    {/* Display Ratings */}
                    <div className="mt-4 flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((index) => (
                          <StarIcon
                            key={index}
                            className={`h-5 w-5 ${
                              product.rating > index
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="ml-2 text-sm text-gray-500">
                        {product.rating} out of 5 stars
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {product.reviewCount} reviews
                    </p>

                    {/* Language Selection */}
                    <div className="mt-6">
                      <label
                        htmlFor="language"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Choose Language
                      </label>
                      <select
                        id="language"
                        name="language"
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="English">English</option>
                        <option value="Japanese">Japanese</option>
                      </select>
                      <p className="mt-2 text-sm text-gray-500">
                        Selected: {selectedLanguage}
                      </p>
                    </div>

                    {/* Additional Details */}
                    <div className="mt-6">
                      <h4 className="text-lg font-medium text-gray-900">
                        Additional Details
                      </h4>
                      <ul className="mt-2 text-sm text-gray-500">
                        <li>
                          <strong>Chapters List:</strong> {product.chaptersList}
                        </li>
                        <li>
                          <strong>Pages:</strong> {product.pages}
                        </li>
                        <li>
                          <strong>Cover Character(s):</strong>{" "}
                          {product.coverCharacters}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
