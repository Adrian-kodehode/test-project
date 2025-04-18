import React from "react";
import { Link } from "@remix-run/react";

export default function ToLoveRuWiki() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const images = [
    "public/To Love Ru/670.jpg",
    "https://images7.alphacoders.com/700/700001.png",
    "https://images6.alphacoders.com/674/thumb-1920-674018.jpg",
    "https://images7.alphacoders.com/696/696152.png",
    "https://c4.wallpaperflare.com/wallpaper/353/851/796/anime-anime-girls-to-love-ru-kotegawa-yui-wallpaper-preview.jpg",
  ];
  const currentImage = images[currentImageIndex];

  function handleImageChange(direction: string): void {
    if (direction === "prev") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else if (direction === "next") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  }

  return (
    <div className="min-h-screen bg-pink-600">
      {/* Fandom Header Bar */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="92"
              height="24"
              viewBox="0 0 92 24"
              className="h-6"
            ></svg>
          </div>
          <div className="flex items-center">
            <Link
              to="/test/characters/lala"
              className="bg-pink-500 text-white px-3 py-1 rounded text-xs font-medium mr-2 hover:bg-pink-600"
            >
              View Lala
            </Link>
            <div className="relative mr-2">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 rounded-full text-sm py-1 px-4 w-64"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 absolute right-3 top-2 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-medium mr-2">
              START A WIKI
            </button>
            <button className="bg-purple-800 text-white px-3 py-1 rounded text-xs font-medium">
              SIGN IN
            </button>
          </div>
        </div>
      </header>

      {/* Content Area with Left Sidebar */}
      <div className="flex">
        {/* Left Sidebar Navigation - Updated to match the image */}
        <div className="w-64 border-r border-gray-200 bg-white fixed sidebar">
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
                  image:
                    "https://static.wikia.nocookie.net/to-loveru/images/1/19/Yui_Kotegawa_TLRD_Manga.png",
                },
                {
                  name: "Yūki Mikan",
                  image:
                    "https://static.wikia.nocookie.net/to-loveru/images/0/08/Mikan_Yuuki_TLRD_Manga.png",
                },
                {
                  name: "Tearju Lunatique",
                  image:
                    "https://static.wikia.nocookie.net/to-loveru/images/e/e9/Tearju_Lunatique_TLRD_Manga.png",
                },
                {
                  name: "Nana Astar Deviluke",
                  image:
                    "https://static.wikia.nocookie.net/to-loveru/images/1/1a/Nana_Astar_Deviluke_TLRD_Manga.png",
                },
                {
                  name: "Sairenji Haruna",
                  image:
                    "https://static.wikia.nocookie.net/to-loveru/images/c/c8/Haruna_Sairenji_TLRD_Manga.png",
                },
              ].map((character, index) => (
                <div
                  key={index}
                  className="flex items-center py-2 px-4 hover:bg-gray-50"
                >
                  <div className="w-12 h-12 mr-3 flex-shrink-0 bg-pink-100 rounded overflow-hidden">
                    {character.image ? (
                      <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-pink-200 flex items-center justify-center">
                        <span className="text-pink-500 font-medium text-xs">
                          {character.name.split(" ")[0][0]}
                        </span>
                      </div>
                    )}
                  </div>
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
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/2/2c/Lala_Satalin_Deviluke_TLRD_Manga.png",
                    number: 1,
                  },
                  {
                    name: "Yuki Rito",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/6/6d/Rito_Yuuki_TLRD_Manga.png",
                    number: 2,
                  },
                  {
                    name: "Momo Deviluke",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/8/80/Momo_Belia_Deviluke_TLRD_Manga.png",
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
          <div className="h-44 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 relative">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images7.alphacoders.com/700/700001.png"
                alt="To Love-Ru Background"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              <img
                src="To Love Ru/toloveruDarkness.png"
                alt="To LOVE-Ru Wiki"
                className="h-32"
              />
            </div>
          </div>

          {/* Wiki Navigation */}
          <nav className="bg-pink-500 text-white shadow">
            <div className="container mx-auto px-4">
              <ul className="flex">
                <li className="py-3 px-4 hover:bg-pink-600 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                  EXPLORE
                </li>
                <li className="py-3 px-4 hover:bg-pink-600">MEDIA</li>
                <li className="py-3 px-4 hover:bg-pink-600">CHARACTERS</li>
                <li className="py-3 px-4 hover:bg-pink-600">COMMUNITY</li>
                <li className="py-3 px-4 hover:bg-pink-600">TOOLS</li>
              </ul>
            </div>
          </nav>

          {/* Page Content */}
          <div className="container mx-auto px-4 py-6 bg-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <h1 className="text-2xl font-medium">Home</h1>
              </div>
              <div className="flex items-center">
                <button className="text-purple-800 mr-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  VIEW SOURCE
                </button>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Main Article */}
              <div className="lg:w-2/3">
                {/* Welcome Section */}
                <div className="border border-pink-300 rounded mb-6">
                  <div className="bg-pink-400 text-yellow-300 text-center py-2 font-extrabold">
                    Welcome
                  </div>
                  <div className="p-4 bg-white">
                    <div className="relative flex justify-center mb-4">
                      <button
                        onClick={() => handleImageChange("prev")}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300"
                      >
                        &#8249;
                      </button>
                      <img
                        src={currentImage}
                        alt="To LOVE-Ru Characters"
                        className="max-w-full"
                      />
                      <button
                        onClick={() => handleImageChange("next")}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300"
                      >
                        &#8250;
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <img
                        src="To Love Ru/to_love_ru_darkness.jpg"
                        alt="To LOVE-Ru Logo"
                        className="max-w-full"
                      />
                    </div>
                    <p className="text-center mt-4 text-black">
                      Welcome to the To LOVE-Ru Wiki, a wiki dedicated to
                      everything about <strong>To LOVE-Ru</strong> that anyone
                      can edit.
                      <br />
                      We are currently editing <strong>666 articles</strong> and
                      we have <strong>4,083 images</strong> on this wiki since
                      April 11, 2009.
                    </p>
                  </div>
                </div>

                {/* Characters Section */}
                <div className="border border-pink-300 rounded mb-6">
                  <div className="bg-pink-400 text-yellow-300 text-center py-2 font-extrabold">
                    Characters
                  </div>
                  <div className="p-4 grid grid-cols-5 gap-2 bg-white">
                    {[
                      {
                        name: "Nana",
                        image:
                          "https://static.wikia.nocookie.net/to-loveru/images/1/1a/Nana_Astar_Deviluke_TLRD_Manga.png",
                      },
                      {
                        name: "Lala",
                        image:
                          "https://static.wikia.nocookie.net/to-loveru/images/2/2c/Lala_Satalin_Deviluke_TLRD_Manga.png",
                      },
                      {
                        name: "Rito",
                        image:
                          "https://static.wikia.nocookie.net/to-loveru/images/6/6d/Rito_Yuuki_TLRD_Manga.png",
                      },
                      {
                        name: "Haruna",
                        image:
                          "https://static.wikia.nocookie.net/to-loveru/images/c/c8/Haruna_Sairenji_TLRD_Manga.png",
                      },
                      {
                        name: "Momo",
                        image:
                          "https://static.wikia.nocookie.net/to-loveru/images/8/80/Momo_Belia_Deviluke_TLRD_Manga.png",
                      },
                      {
                        name: "Mikan",
                        image:
                          "https://static.wikia.nocookie.net/to-loveru/images/0/08/Mikan_Yuuki_TLRD_Manga.png",
                      },
                      {
                        name: "Yami",
                        image:
                          "https://static.wikia.nocookie.net/to-loveru/images/3/30/Yami_TLRD_Manga.png",
                      },
                      {
                        name: "Mea",
                        image:
                          "https://static.wikia.nocookie.net/to-loveru/images/6/61/Mea_TLRD_Manga.png",
                      },
                      {
                        name: "Nemesis",
                        image:
                          "https://static.wikia.nocookie.net/to-loveru/images/2/2b/Nemesis_TLRD_Manga.png",
                      },
                      {
                        name: "Yui",
                        image:
                          "https://static.wikia.nocookie.net/to-loveru/images/1/19/Yui_Kotegawa_TLRD_Manga.png",
                      },
                      {
                        name: "Run",
                        image:
                          "https://static.wikia.nocookie.net/to-loveru/images/d/d8/Run_Elsie_Jewelria_TLRD_Manga.png",
                      },
                      {
                        name: "Kyouko",
                        image:
                          "https://static.wikia.nocookie.net/to-loveru/images/4/46/Kyouko_Kirisaki_TLRD_Manga.png",
                      },
                      {
                        name: "Saki",
                        image:
                          "https://static.wikia.nocookie.net/to-loveru/images/6/67/Saki_Tenjouin_TLRD_Manga.png",
                      },
                      {
                        name: "Rin",
                        image:
                          "https://static.wikia.nocookie.net/to-loveru/images/5/5f/Rin_Kujou_TLRD_Manga.png",
                      },
                      {
                        name: "Tearju",
                        image:
                          "https://static.wikia.nocookie.net/to-loveru/images/e/e9/Tearju_Lunatique_TLRD_Manga.png",
                      },
                    ].map((character, index) => (
                      <div key={index} className="text-center">
                        <img
                          src={character.image}
                          alt={character.name}
                          className="w-full h-auto"
                        />
                        <div className="bg-pink-500 text-white text-sm mt-1 py-1">
                          {character.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Side Content */}
              <div className="lg:w-1/3">
                {/* Latest Chapters */}
                <div className="border border-pink-300 rounded mb-6">
                  <div className="bg-pink-400 text-yellow-300 text-center py-2 font-extrabold">
                    Latest Chapters
                  </div>
                  <div className="p-4 bg-white">
                    <p className="mb-2 text-purple-600">
                      Newest chapters of <em>To LOVE-Ru Darkness</em>:
                    </p>
                    <p className="mb-2 text-purple-600">
                      April 2019 one-shot - <strong>SB - B24 - B25 - 77</strong>
                    </p>
                    <p className="text-center mt-4">
                      <Link to="#" className="text-purple-800">
                        All Chapters
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Featured Article */}
                <div className="border border-pink-300 rounded mb-6">
                  <div className="bg-pink-400 text-yellow-300 text-center py-2 font-extrabold">
                    Featured Article
                  </div>
                  <div className="p-4 bg-white">
                    <div className="flex justify-center mb-4">
                      <img
                        src="https://static.wikia.nocookie.net/to-loveru/images/6/61/Mea_TLRD_Manga.png"
                        alt="Kurosaki Mea"
                        className="max-w-full"
                      />
                    </div>
                    <p className="text-sm text-black">
                      <strong>Kurosaki Mea</strong> is one of the main
                      antagonists in the <em>Darkness</em> arc. She later
                      switched to the good side after taking a liking on{" "}
                      <Link to="#" className="text-purple-800">
                        Yuki Rito
                      </Link>
                      .
                    </p>
                    <p className="text-center mt-4">
                      <Link to="#" className="text-purple-800">
                        Read More...
                      </Link>
                    </p>
                    <p className="text-center text-xs text-gray-500 mt-2">
                      Previous Featured Articles
                    </p>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="border border-pink-300 rounded">
                  <div className="bg-pink-400 text-yellow-300 text-center py-2 font-extrabold">
                    Featured Image
                  </div>
                  <div className="p-4 bg-white">
                    <div className="flex justify-center">
                      <img
                        src="https://static.wikia.nocookie.net/to-loveru/images/f/f5/TLR_CH63_Cover.png"
                        alt="Featured Image"
                        className="max-w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
