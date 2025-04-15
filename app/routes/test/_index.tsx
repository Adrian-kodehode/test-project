import React from "react";
import { Link } from "@remix-run/react";

export default function WikiHome() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fandom Header Bar */}
      <header className="bg-white border-b border-gray-200">
        {/* Add your header content here */}
      </header>

      {/* Content Area with Left Sidebar */}
      <div className="flex">
        {/* Left Sidebar Navigation - Updated to match the image */}
        <div className="w-64 border-r border-gray-200 bg-white fixed h-full left-0 top-0 pt-14">
          {/* Wiki Title */}
          <div className="px-4 py-3 bg-gray-100 border-b border-gray-200">
            <h2 className="font-bold text-gray-800">To LOVE-Ru Wiki</h2>
          </div>

          {/* Others Like You Viewed Section */}
          <div className="p-0">
            <h3 className="text-sm font-bold py-2 px-4 text-purple-900 border-b border-gray-200">
              Others Like You Viewed
            </h3>

            {/* Character list with square images */}
            <div className="divide-y divide-gray-200">
              {[
                {
                  name: "Kotegawa Yui",
                  image: "https://via.placeholder.com/70?text=Yui",
                },
                {
                  name: "Yuki Mikan",
                  image: "https://via.placeholder.com/70?text=Mikan",
                },
                {
                  name: "Tearju Lunatique",
                  image: "https://via.placeholder.com/70?text=Tearju",
                },
                {
                  name: "Nana Astar Deviluke",
                  image: "https://via.placeholder.com/70?text=Nana",
                },
                {
                  name: "Sairenji Haruna",
                  image: "https://via.placeholder.com/70?text=Haruna",
                },
              ].map((character, index) => (
                <div
                  key={index}
                  className="flex items-center py-2 px-4 hover:bg-gray-50"
                >
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-12 h-12 mr-3"
                  />
                  <span className="font-medium text-sm text-purple-900">
                    {character.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Top Pages this Week */}
            <h3 className="text-sm font-bold py-2 px-4 mt-2 text-purple-900 border-t border-b border-gray-200">
              Top Pages this Week
            </h3>

            <div className="p-2">
              <div className="grid grid-cols-2 gap-2">
                {[
                  {
                    name: "Lala Satalin Deviluke",
                    image: "https://via.placeholder.com/150?text=Lala",
                    number: 1,
                  },
                  {
                    name: "Yuki Rito",
                    image: "https://via.placeholder.com/150?text=Rito",
                    number: 2,
                  },
                  {
                    name: "Momo Deviluke",
                    image: "https://via.placeholder.com/150?text=Momo",
                    number: 3,
                  },
                ].map((page, index) => (
                  <div key={index} className="relative">
                    <div className="relative">
                      <img
                        src={page.image}
                        alt={page.name}
                        className="w-full aspect-square object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-purple-800 text-white w-5 h-5 flex items-center justify-center text-xs">
                        {page.number}
                      </div>
                    </div>
                    <p className="text-xs font-medium text-purple-900 mt-1 line-clamp-2">
                      {page.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1">
          {/* Wiki Logo Header */}
          {/* Add your main content here */}
        </div>
      </div>
    </div>
  );
}
