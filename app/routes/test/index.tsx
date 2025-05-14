import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { shonenJumpWikis } from "app/components/shonenJumpWikis";
import { a } from "node_modules/framer-motion/dist/types.d-DDSxwf0n";

// Add these styles at the beginning of your file
const slideStyles = {
  slideIn: {
    opacity: 1,
    transform: "translateX(0)",
    transition: "all 0.5s ease-in-out",
  },
  slideOut: {
    opacity: 0,
    transform: "translateX(-100%)",
    transition: "all 0.5s ease-in-out",
  },
  slideNext: {
    opacity: 0,
    transform: "translateX(100%)",
    transition: "all 0.5s ease-in-out",
  },
};

export default function ToLoveRuWiki() {

    const [showTopBtn, setShowTopBtn] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setShowTopBtn(window.scrollY > 100);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const images = [
    "To Love Ru/670.jpg",
    "https://c4.wallpaperflare.com/wallpaper/353/851/796/anime-anime-girls-to-love-ru-kotegawa-yui-wallpaper-preview.jpg",
    "To Love Ru/toloveru.jpg",
    "To Love Ru/toloveruclass.jpg",
    "https://images7.alphacoders.com/696/696152.png",
    "To Love Ru/nanalalamomo.jpg",
  ];

  // Simulate loading and handle image preloading
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const loadImage = (src: string) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
          });
        };

        await Promise.all(images.map((src) => loadImage(src)));
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, [images]);

  // Auto-rotate images
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (autoPlay) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }

    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [autoPlay, images.length]);

  // Update the handleImageChange function
  function handleImageChange(direction: string): void {
    setAutoPlay(false);

    const nextIndex =
      direction === "prev"
        ? currentImageIndex === 0
          ? images.length - 1
          : currentImageIndex - 1
        : currentImageIndex === images.length - 1
        ? 0
        : currentImageIndex + 1;

    setCurrentImageIndex(nextIndex);

    // Resume auto-rotation after 4 seconds of inactivity
    setTimeout(() => setAutoPlay(true), 4000);
  }

  // Update the animatedImages constant
  const animatedImages = (
    <div className="relative w-full h-full max-h-[600px] overflow-hidden">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {images.map((image, idx) => (
            <div
              key={idx}
              className="absolute w-full h-full"
              style={{
                ...slideStyles[
                  idx === currentImageIndex
                    ? "slideIn"
                    : idx ===
                      (currentImageIndex - 1 + images.length) % images.length
                    ? "slideOut"
                    : "slideNext"
                ],
              }}
            >
              <img
                src={image}
                alt={`Slide ${idx}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentImageIndex ? "bg-pink-500" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>To LOVE-Ru Wiki | Comprehensive Guide to the Series</title>
        <meta
          name="description"
          content="The ultimate fan resource for To LOVE-Ru manga and anime series. Find character info, episode guides, manga chapters, and more!"
        />
        <meta
          name="keywords"
          content="To LOVE-Ru, Lala Satalin Deviluke, Rito Yuuki, manga, anime, Darkness, Kentaro Yabuki"
        />
        <meta property="og:title" content="To LOVE-Ru Wiki" />
        <meta
          property="og:description"
          content="Comprehensive guide to To LOVE-Ru anime and manga series"
        />
        <meta property="og:image" content="/To Love Ru/toloveruDarkness.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/toloveru" />
      </Helmet>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: 'url("/To Love Ru/672584.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Content Area with Left Sidebar */}
        <div className="flex">
          {/* Left Sidebar Navigation - Updated to match the image */}
          <div className="w-64 border-r border-gray-200 bg-white fixed sidebar transition-transform duration-300">
            {/* Wiki Title */}
            <div className="px-4 py-3 bg-gray-100 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-gray-800">To LOVE-Ru Wiki</h2>
                <button
                  onClick={() => {
                    const sidebar = document.querySelector(".sidebar");
                    const mainContent = document.querySelector(".ml-64");
                    sidebar?.classList.toggle("-translate-x-full");
                    mainContent?.classList.toggle("ml-0");
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Others Like You Viewed Section */}
            <div className="p-0">
              <h3 className="text-sm font-bold py-2 px-4 text-purple-900 border-b border-gray-200">
                Others Like You Viewed
              </h3>

              <div>
                <a href="/nana">
                  <img src="To Love Ru/nana.jpg" alt=""></img>
                </a>
                <p className="text-xs text-center font-medium text-purple-900 mt-1 line-clamp-2">
                  Nana Astar Deviluke
                </p>
              </div>
              {/* Character list with square images */}
              <div className="divide-y divide-gray-200">
                {[
                  {
                    name: "Kotegawa Yui",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/1/19/Yui_Kotegawa_TLRD_Manga.png",
                    route: "/yui",
                  },
                  {
                    name: "Yūki Mikan",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/0/08/Mikan_Yuuki_TLRD_Manga.png",
                    route: "/mikan",
                  },
                  {
                    name: "Tearju Lunatique",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/e/e9/Tearju_Lunatique_TLRD_Manga.png",
                    route: "/tearju",
                  },
                  {
                    name: "Lala Satalin Deviluke",
                    image: "To Love Ru/lala.jpg",
                    route: "/lala",
                  },
                  {
                    name: "Sairenji Haruna",
                    image:
                      "https://static.wikia.nocookie.net/to-loveru/images/c/c8/Haruna_Sairenji_TLRD_Manga.png",
                    route: "/haruna",
                  },
                ].map((character, index) => (
                  <a
                    key={index}
                    href={character.route}
                    className="flex items-center py-2 px-4 hover:bg-gray-50 transition-colors"
                    style={{ textDecoration: "none" }}
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
                  </a>
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
                      route: "/lala",
                    },
                    {
                      name: "Yuki Rito",
                      image:
                        "https://static.wikia.nocookie.net/to-loveru/images/6/6d/Rito_Yuuki_TLRD_Manga.png",
                      number: 2,
                      route: "/rito",
                    },
                    {
                      name: "Momo Deviluke",
                      image:
                        "https://static.wikia.nocookie.net/to-loveru/images/8/80/Momo_Belia_Deviluke_TLRD_Manga.png",
                      number: 3,
                      route: "/momo",
                    },
                  ].map((page, index) => (
                    <Link
                      key={index}
                      to={page.route}
                      className="relative block"
                      style={{ textDecoration: "none" }}
                    >
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
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
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
                <a href="/test">
                  <img
                    src="To Love Ru/Site-logo (2).png"
                    alt="To LOVE-Ru Wiki"
                    className="h-20"
                  />
                </a>
              </div>
            </div>

            {/* Wiki Navigation */}
            <nav className="bg-[#DB49AC] text-white shadow">
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
                  <li className="py-3 px-4 hover:bg-pink-600 relative group cursor-pointer">
                    MEDIA
                    <div className="absolute left-0 top-full min-w-[180px] bg-white text-black shadow-lg rounded z-20 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity duration-200">
                      <ul>
                        {/* Manga */}
                        <li className="relative group/manga">
                          <div className="px-4 py-2 hover:bg-pink-100 flex items-center justify-between">
                            Manga
                            <svg
                              className="w-3 h-3 ml-2"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                          <div className="absolute left-full top-0 min-w-[180px] bg-white text-black shadow-lg rounded z-30 opacity-0 group-hover/manga:opacity-100 group-hover/manga:pointer-events-auto pointer-events-none transition-opacity duration-200">
                            <ul>
                              <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                                To LOVE-Ru
                              </li>
                              <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                                To LOVE-Ru Darkness
                              </li>
                            </ul>
                          </div>
                        </li>
                        {/* Anime */}
                        <li className="relative group/anime">
                          <div className="px-4 py-2 hover:bg-pink-100 flex items-center justify-between">
                            Anime
                            <svg
                              className="w-3 h-3 ml-2"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                          <div className="absolute left-full top-0 min-w-[200px] bg-white text-black shadow-lg rounded z-30 opacity-0 group-hover/anime:opacity-100 group-hover/anime:pointer-events-auto pointer-events-none transition-opacity duration-200">
                            <ul>
                              <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                                To LOVE-Ru
                              </li>
                              <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                                Motto To LOVE-Ru
                              </li>
                              <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                                To LOVE-Ru Darkness
                              </li>
                              <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                                To LOVE-Ru Darkness 2nd
                              </li>
                            </ul>
                          </div>
                        </li>
                        {/* Games */}
                        <li className="relative group/games">
                          <div className="px-4 py-2 hover:bg-pink-100 flex items-center justify-between">
                            Games
                            <svg
                              className="w-3 h-3 ml-2"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                          <div className="absolute left-full top-0 min-w-[240px] bg-white text-black shadow-lg rounded z-30 opacity-0 group-hover/games:opacity-100 group-hover/games:pointer-events-auto pointer-events-none transition-opacity duration-200">
                            <ul>
                              <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                                To LOVE-Ru Darkness: Battle
                              </li>
                              <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                                To LOVE-Ru Darkness: True
                              </li>
                              <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                                To LOVE-Ru Darkness: Idol
                              </li>
                              <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                                To LOVE-Ru Darkness: Gravure
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="py-3 px-4 hover:bg-pink-600">
                    <Link to="/toloveru">CHARACTERS</Link>
                  </li>
                  <li className="py-3 px-4 hover:bg-pink-600">COMMUNITY</li>
                  <li className="py-3 px-4 hover:bg-pink-600">TOOLS</li>
                  <li className="py-3 px-4 hover:bg-pink-600">
                    <Link to="/shop">SHOP</Link>
                  </li>
                  <li className="py-3 px-4 hover:bg-pink-600">
                    <Link to="/video">VIDEO</Link>
                  </li>
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
                  <h1 className="text-2xl font-medium text-black">Home</h1>
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
                  <div className="border-2 border-[#DB49AC] rounded-t pt-1 pr-1 pl-1">
                    <div className="bg-[#DB49AC] text-[#F9D910] text-center py-1 text-xl font-extrabold">
                      Welcome
                    </div>
                    <div className="p-4 bg-white">
                      {/* Carousel: responsive height and controls */}
                      <div className="relative flex justify-center mb-4 overflow-hidden">
                        <button
                          onClick={() => handleImageChange("prev")}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 z-10"
                          aria-label="Previous Slide"
                        >
                          &#8249;
                        </button>
                        <div className="w-full h-[40vw] max-h-[400px] min-h-[200px] sm:h-[300px] md:h-[400px]">
                          {animatedImages}
                        </div>
                        <button
                          onClick={() => handleImageChange("next")}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 z-10"
                          aria-label="Next Slide"
                        >
                          &#8250;
                        </button>
                      </div>
                      {/* Logo: responsive sizing */}
                      <div className="flex justify-center">
                        <img
                          src="public/To Love Ru/Site-logo (2).png"
                          alt="To LOVE-Ru Logo"
                          className="max-w-[180px] w-full h-auto"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      {/* Welcome text: responsive font and spacing */}
                      <p className="text-center mt-4 text-black text-base sm:text-lg">
                        Welcome to the To LOVE-Ru Wiki, a wiki dedicated to
                        everything about <strong>To LOVE-Ru</strong> that anyone
                        can edit.
                        <br />
                        We are currently editing <strong>
                          666 articles
                        </strong>{" "}
                        and we have <strong>4,083 images</strong> on this wiki
                        since April 11, 2009.
                      </p>
                    </div>
                  </div>

                  {/* Characters Section */}
                  <div className="border-2 border-[#DB49AC]  pt-1 pr-1 pl-1">
                    <div className="bg-[#DB49AC] text-[#F9D910] text-center text-xl py-1 font-extrabold">
                      Characters
                    </div>
                    <div className="p-4 grid grid-cols-5 gap-2 bg-white border">
                      {[
                        {
                          name: "Nana",
                          image:
                            "https://static.wikia.nocookie.net/to-loveru/images/1/1a/Nana_Astar_Deviluke_TLRD_Manga.png",
                          route: "/nana",
                        },
                        {
                          name: "Lala",
                          image:
                            "https://static.wikia.nocookie.net/to-loveru/images/2/2c/Lala_Satalin_Deviluke_TLRD_Manga.png",
                          route: "/lala",
                        },
                        {
                          name: "Rito",
                          image:
                            "https://static.wikia.nocookie.net/to-loveru/images/6/6d/Rito_Yuuki_TLRD_Manga.png",
                          route: "/rito",
                        },
                        {
                          name: "Haruna",
                          image:
                            "https://static.wikia.nocookie.net/to-loveru/images/c/c8/Haruna_Sairenji_TLRD_Manga.png",
                          route: "/haruna",
                        },
                        {
                          name: "Momo",
                          image:
                            "https://static.wikia.nocookie.net/to-loveru/images/8/80/Momo_Belia_Deviluke_TLRD_Manga.png",
                          route: "/momo",
                        },
                        {
                          name: "Mikan",
                          image:
                            "https://static.wikia.nocookie.net/to-loveru/images/0/08/Mikan_Yuuki_TLRD_Manga.png",
                          route: "/mikan",
                        },
                        {
                          name: "Yami",
                          image:
                            "https://static.wikia.nocookie.net/to-loveru/images/3/30/Yami_TLRD_Manga.png",
                          route: "/yami",
                        },
                        {
                          name: "Mea",
                          image:
                            "https://static.wikia.nocookie.net/to-loveru/images/6/61/Mea_TLRD_Manga.png",
                          route: "/mea",
                        },
                        {
                          name: "Nemesis",
                          image:
                            "https://static.wikia.nocookie.net/to-loveru/images/2/2b/Nemesis_TLRD_Manga.png",
                          route: "/nemesis",
                        },
                        {
                          name: "Yui",
                          image:
                            "https://static.wikia.nocookie.net/to-loveru/images/1/19/Yui_Kotegawa_TLRD_Manga.png",
                          route: "/yui",
                        },
                        {
                          name: "Run",
                          image:
                            "https://static.wikia.nocookie.net/to-loveru/images/d/d8/Run_Elsie_Jewelria_TLRD_Manga.png",
                          route: "/run",
                        },
                        {
                          name: "Kyouko",
                          image:
                            "https://static.wikia.nocookie.net/to-loveru/images/4/46/Kyouko_Kirisaki_TLRD_Manga.png",
                          route: "/kyouko",
                        },
                        {
                          name: "Saki",
                          image:
                            "https://static.wikia.nocookie.net/to-loveru/images/6/67/Saki_Tenjouin_TLRD_Manga.png",
                          route: "/saki",
                        },
                        {
                          name: "Rin",
                          image:
                            "https://static.wikia.nocookie.net/to-loveru/images/5/5f/Rin_Kujou_TLRD_Manga.png",
                          route: "/rin",
                        },
                        {
                          name: "Tearju",
                          image:
                            "https://static.wikia.nocookie.net/to-loveru/images/e/e9/Tearju_Lunatique_TLRD_Manga.png",
                          route: "/tearju",
                        },
                      ].map((character, index) => (
                        <Link
                          key={index}
                          to={character.route}
                          className="relative text-center block group"
                          style={{ textDecoration: "none" }}
                        >
                          <img
                            src={character.image}
                            alt={character.name}
                            className="w-full h-auto border-4 border-[purple] rounded-lg group-hover:opacity-80 transition"
                          />
                          <div
                            className={`
                                absolute bottom-1 right-0.5
                                px-2 py-1 rounded
                                text-white text-base font-bold
                                transition-all duration-300
                                bg-[purple]
                                group-hover:scale-110 group-hover:bg-[purple]
                              `}
                          >
                            <strong>{character.name}</strong>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="border-2 border-[#DB49AC]  pt-1 pr-1 pl-1">
                    <div className="bg-[#DB49AC] text-[#F9D910] text-center py-1 text-xl font-extrabold">
                      Content
                    </div>
                    <div className="pt-4 grid grid-cols-4 gap-1 justify-center justify-items-center">
                      {[
                        {
                          name: "Characters",
                          image: "To Love Ru/characters.jpg",
                        },
                        {
                          name: "Manga",
                          image: "To Love Ru/manga.jpg",
                        },
                        {
                          name: "Anime",
                          image: "To Love Ru/anime.jpg",
                        },
                        {
                          name: "Music",
                          image: "To Love Ru/music.jpg",
                        },
                        {
                          name: "Video Games",
                          image: "To Love Ru/video_games.jpg",
                        },
                        {
                          name: "Artbooks",
                          image: "To Love Ru/artbooks.jpg",
                        },
                        {
                          name: "Images",
                          image: "To Love Ru/images.jpg",
                        },
                        {
                          name: "Planets and Locations",
                          image: "To Love Ru/planets_and_locations.jpg",
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="text-center p-2 rounded text-purple-800 flex flex-col items-center"
                          style={{ maxWidth: 160 }}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="mb-2 w-48 h-48 rounded object-contain"
                          />
                          <span className="text-base">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Forums */}
                  <div className="border-2 border-[#DB49AC] pt-1 pr-1 pl-1">
                    <div className="bg-[#DB49AC] text-[#F9D910] text-center py-1 text-xl font-extrabold">
                      Forums
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-black text-center">
                        Join the discussion about your favorite characters and
                        episodes in our forums!
                      </p>
                      <p className="text-center mt-4">
                        <Link to="#" className="text-purple-800">
                          Visit Forums
                        </Link>
                      </p>
                    </div>
                  </div>

                  {/* Blogroll */}
                  <div className="border-2 border-[#DB49AC] rounded-b pt-1 pr-1 pl-1">
                    <div className="bg-[#DB49AC] text-[#F9D910] text-center py-1 text-xl font-extrabold">
                      Blogroll
                    </div>
                    <h2 className="border mt-6"></h2>
                    <div className="p-4 bg-gray-100 rounded-lg mt-6">
                      <div className="flex items-start space-x-3 mb-4">
                        <img
                          src="To Love Ru/rin.jpg"
                          alt="Rin avatar"
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold text-purple-800">
                                Kujō Rin
                              </span>
                              <span className="text-gray-500">
                                • 11 January 2023
                              </span>
                            </div>
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="ml-1 text-gray-500">2</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-extrabold text-purple-900">
                            New To Love Ru One-shot 2023
                          </h3>
                          <p className="text-gray-600 text-sm mt-1 pt-3">
                            Confirmation that To Love Ru is getting a new
                            One-shot manga on January 13, 2023.
                          </p>
                          <br />
                          <p className="text-gray-500 mt-1 text-sm">
                            Link: https://www...
                          </p>
                          <button className="mt-3 text-purple-800 font-semibold border border-purple-800 px-4 py-1 rounded text-sm hover:bg-purple-800 hover:text-white transition-colors">
                            READ FULL POST
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-100 rounded-lg mt-6">
                      <div className="flex items-start space-x-3 mb-4">
                        <img
                          src="https://static.wikia.nocookie.net/to-loveru/images/6/67/Saki_Tenjouin_TLRD_Manga.png"
                          alt="Saki avatar"
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold text-purple-800">
                                Tenjōin Saki
                              </span>
                              <span className="text-gray-500">
                                • 23 June 2022
                              </span>
                            </div>
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="ml-1 text-gray-500">0</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-extrabold text-purple-900">
                            To Love Ru Darkness 3rd episode 13 vs To Love Ru
                            Darkness Chapter 77
                          </h3>
                          <p className="text-gray-600 text-sm mt-1 pt-3"></p>
                          <br />
                          <p className="text-gray-500 mt-1 text-sm">
                            We get to see the ending scene from To Love Ru
                            Darkness 3rd episode 13. This final scene who what
                            c…
                          </p>
                          <button className="mt-3 text-purple-800 font-semibold border border-purple-800 px-4 py-1 rounded text-sm hover:bg-purple-800 hover:text-white transition-colors">
                            READ FULL POST
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-100 rounded-lg mt-6">
                      <div className="flex items-start space-x-3 mb-4">
                        <img
                          src="To Love Ru/nemisis.jpg"
                          alt="Nemesis avatar"
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold text-purple-800">
                                Nemesis
                              </span>
                              <span className="text-gray-500">
                                • 11 January 2023
                              </span>
                            </div>
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="ml-1 text-gray-500">0</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-extrabold text-purple-900">
                            New To Love Ru Origins: Konjiki no Yami (To Love Ru
                            Spin Off) (TBA)
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            Dear To Love Ru Fans.
                          </p>
                          <p className="text-gray-500 mt-1 text-sm">
                            I Know that this is the newest series from To Love
                            Ru and This is the characte...
                          </p>
                          <button className="mt-3 text-purple-800 font-semibold border border-purple-800 px-4 py-1 rounded text-sm hover:bg-purple-800 hover:text-white transition-colors">
                            READ FULL POST
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="text-[purple] pt-5 pb-5 hover:underline">
                      <a href="">See more &gt;</a>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="w-full pt-10">
                    <div className="border-2 border-[#DB49AC]  pt-1 pb-1 pr-1 pl-1">
                      <div className="bg-[#DB49AC] text-[#F9D910] text-center py-1 text-xl font-extrabold">
                        Recent Activity
                      </div>
                      <div className="p-4 mt-3 border border-[#DB49AC] bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 h-[400px] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4"></div>
                        <div className="text-black text-sm mb-8">
                          Track the most recent changes to the wiki on this
                          page.
                        </div>

                        {/* Wiki Activity Navigation */}
                        <nav className="flex border-b border-gray-200 mb-4">
                          <button className="text-purple-800 border-b-2 border-purple-800 px-4 py-2 text-sm font-medium">
                            Wiki Activity
                          </button>
                          <button className="text-gray-500 px-4 py-2 text-sm font-medium">
                            Social Activity
                          </button>
                          <button className="text-gray-500 px-4 py-2 text-sm font-medium">
                            Image Activity
                          </button>
                        </nav>

                        {/* Activity List */}
                        <div className="space-y-4">
                          <div className="text-sm text-gray-600 font-bold">
                            4 May 2025
                          </div>

                          {/* Legend */}
                          <div className="mt-4 p-4 bg-gray-50 text-black rounded-lg">
                            <div className="font-medium mb-2">
                              List of abbreviations:
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-start">
                                <span className="font-bold w-8">N</span>
                                <span className="flex-1">
                                  This edit created a new page (also see{" "}
                                  <Link
                                    to="#"
                                    className="text-purple-800 hover:underline"
                                  >
                                    list of new pages
                                  </Link>
                                  )
                                </span>
                              </div>
                              <div className="flex items-start">
                                <span className="font-bold w-8">m</span>
                                <span className="flex-1">
                                  This is a minor edit
                                </span>
                              </div>
                              <div className="flex items-start">
                                <span className="font-bold w-8">b</span>
                                <span className="flex-1">
                                  This edit was performed by a bot
                                </span>
                              </div>
                              <div className="flex items-start">
                                <span className="font-bold w-13 text-green-600">
                                  (±123)
                                </span>
                                <span className="flex-1">
                                  The page size changed by this number of bytes
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Activity Item */}
                          <div className="flex items-start space-x-2">
                            <div className="text-xs text-gray-500 w-16">
                              02:22
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-1">
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  Tearju Lunatique/Relationships
                                </Link>
                                <span className="text-gray-500">(</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  diff
                                </Link>
                                <span className="text-gray-500">|</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  hist
                                </Link>
                                <span className="text-gray-500">)</span>
                                <span className="text-red-500">(-81)</span>
                                <span className="text-gray-500">. .</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  Crackerjack94
                                </Link>
                              </div>
                              <div className="text-gray-600 text-sm">
                                <span className="text-gray-500">(</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  Message Wall
                                </Link>
                                <span className="text-gray-500">|</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  contribs
                                </Link>
                                <span className="text-gray-500">)</span>
                                <em className="text-gray-500">
                                  (Undo revision 46386 by Skyisfallingdown
                                  (talk))
                                </em>
                                <span className="text-gray-500">(</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  Tag: Undo
                                </Link>
                                <span className="text-gray-500">)</span>
                              </div>
                            </div>
                          </div>

                          <div className="text-sm text-gray-600 font-bold">
                            3 May 2025
                          </div>

                          {/* Activity Item */}
                          <div className="flex items-start space-x-2">
                            <div className="text-xs text-gray-500 w-16">
                              23:04
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-1">
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  Tearju Lunatique
                                </Link>
                                <span className="text-gray-500">(</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  diff
                                </Link>
                                <span className="text-gray-500">|</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  hist
                                </Link>
                                <span className="text-gray-500">)</span>
                                <span className="text-green-500">(+28)</span>
                                <span className="text-gray-500">. .</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  Skyisfallingdown
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="text-sm text-gray-600 font-bold">
                            2 May 2025
                          </div>

                          {/* Activity Item */}
                          <div className="flex items-start space-x-2">
                            <div className="text-xs text-gray-500 w-16">
                              23:04
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-1">
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  Tearju Lunatique
                                </Link>
                                <span className="text-gray-500">(</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  diff
                                </Link>
                                <span className="text-gray-500">|</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  hist
                                </Link>
                                <span className="text-gray-500">)</span>
                                <span className="text-green-500">(+28)</span>
                                <span className="text-gray-500">. .</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  Skyisfallingdown
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="text-sm text-gray-600 font-bold">
                            1 May 2025
                          </div>

                          {/* Activity Item */}
                          <div className="flex items-start space-x-2">
                            <div className="text-xs text-gray-500 w-16">
                              23:04
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-1">
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  Tearju Lunatique
                                </Link>
                                <span className="text-gray-500">(</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  diff
                                </Link>
                                <span className="text-gray-500">|</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  hist
                                </Link>
                                <span className="text-gray-500">)</span>
                                <span className="text-green-500">(+28)</span>
                                <span className="text-gray-500">. .</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  Skyisfallingdown
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="text-sm text-gray-600 font-bold">
                            30 April 2025
                          </div>

                          {/* Activity Item */}
                          <div className="flex items-start space-x-2">
                            <div className="text-xs text-gray-500 w-16">
                              23:04
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-1">
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  Tearju Lunatique
                                </Link>
                                <span className="text-gray-500">(</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  diff
                                </Link>
                                <span className="text-gray-500">|</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  hist
                                </Link>
                                <span className="text-gray-500">)</span>
                                <span className="text-green-500">(+28)</span>
                                <span className="text-gray-500">. .</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  Skyisfallingdown
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-600 font-bold">
                            29 April 2025
                          </div>

                          {/* Activity Item */}
                          <div className="flex items-start space-x-2">
                            <div className="text-xs text-gray-500 w-16">
                              23:04
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-1">
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  Tearju Lunatique
                                </Link>
                                <span className="text-gray-500">(</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  diff
                                </Link>
                                <span className="text-gray-500">|</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  hist
                                </Link>
                                <span className="text-gray-500">)</span>
                                <span className="text-green-500">(+28)</span>
                                <span className="text-gray-500">. .</span>
                                <Link
                                  to="#"
                                  className="text-purple-800 hover:underline"
                                >
                                  Skyisfallingdown
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Affiliates */}
                  <div className="border-2 border-[#DB49AC] rounded-b pt-1 pb-1 pr-1 pl-1">
                    <div className="bg-[#DB49AC] text-[#F9D910] text-center py-1 text-xl font-extrabold">
                      Affiliates
                    </div>
                    <div className="p-4 mt-3 border border-[#DB49AC] bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 h-[400px] overflow-y-auto">
                      <div className="grid grid-cols-3">
                        <img
                          src="public/To Love Ru/latest (1).jpg"
                          alt=""
                        ></img>
                        <img src="public/Site-logo.png" alt=""></img>
                        <img src="public/Wiki-wordmark.png" alt=""></img>
                        <img src="public/Wiki-wordmark (1).png" alt=""></img>
                        <img src="public/Wiki-wordmark (2).png" alt=""></img>
                        <img src="public/Wiki-wordmark (3).png" alt=""></img>
                        <img src="public/Wiki-wordmark (4).png" alt=""></img>
                        <img src="public/Wiki-wordmark (5).png" alt=""></img>
                        <img src="public/Wiki-wordmark (6).png" alt=""></img>
                        <img src="public/Wiki-wordmark (7).png" alt=""></img>
                        <img src="public/Wiki-wordmark (8).png" alt=""></img>
                        <img src="public/Wiki-wordmark (9).png" alt=""></img>
                        <img src="public/Wiki-wordmark (10).png" alt=""></img>
                        <img src="public/Wiki-wordmark (11).png" alt=""></img>
                        <img src="public/Wiki-wordmark (12).png" alt=""></img>
                        <img src="public/Wiki-wordmark (13).png" alt=""></img>
                        <img src="public/Wiki-wordmark (14).png" alt=""></img>
                        <img src="public/Wiki-wordmark (15).png" alt=""></img>
                        <img src="public/Wiki-wordmark (16).png" alt=""></img>
                        <img src="public/Site-logo (1).png" alt=""></img>
                        <img src="public/Wiki-wordmark (17).png" alt=""></img>
                        <img src="public/Wiki-wordmark (18).png" alt=""></img>
                        <img src="public/Wiki-wordmark (19).png" alt=""></img>
                        <img src="public/Wiki-wordmark (20).png" alt=""></img>
                        <img src="public/Wiki-wordmark (21).png" alt=""></img>
                        <img src="public/Wiki-wordmark (22).png" alt=""></img>
                        <img src="public/Wiki-wordmark (23).png" alt=""></img>
                        <img src="public/Wiki-wordmark (24).png" alt=""></img>
                        <img src="public/Wiki-wordmark (25).png" alt=""></img>
                        <img src="public/Wiki-wordmark (26).png" alt=""></img>
                        <img src="public/Wiki-wordmark (27).png" alt=""></img>
                        <img src="public/Wiki-wordmark (28).png" alt=""></img>
                        <img src="public/Wiki-wordmark (29).png" alt=""></img>
                        <img src="public/Wiki-wordmark (30).png" alt=""></img>
                        <img src="public/Wiki-wordmark (31).png" alt=""></img>
                        <img src="public/Wiki-wordmark (32).png" alt=""></img>
                        <img src="public/Wiki-wordmark (33).png" alt=""></img>
                        <img src="public/Wiki-wordmark (34).png" alt=""></img>
                        <img src="public/Wiki-wordmark (35).png" alt=""></img>
                        <img src="public/Wiki-wordmark (36).png" alt=""></img>
                        <img src="public/Wiki-wordmark (37).png" alt=""></img>
                        <img src="public/Wiki-wordmark (38).png" alt=""></img>
                        <img src="public/Wiki-wordmark (39).png" alt=""></img>
                        <img src="public/Wiki-wordmark (40).png" alt=""></img>
                        <img src="public/Wiki-wordmark (41).png" alt=""></img>
                        <img src="public/Wiki-wordmark (42).png" alt=""></img>
                        <img src="public/Wiki-wordmark (43).png" alt=""></img>
                        <img src="public/Wiki-wordmark (44).png" alt=""></img>
                        <img src="public/Wiki-wordmark (45).png" alt=""></img>
                        <img src="public/Wiki-wordmark (46).png" alt=""></img>
                        <img src="public/Wiki-wordmark (47).png" alt=""></img>
                        <img src="public/Wiki-wordmark (48).png" alt=""></img>
                        <img src="public/Wiki-wordmark (49).png" alt=""></img>
                        <img src="public/Wiki-wordmark (50).png" alt=""></img>
                        <img src="public/Wiki-wordmark (51).png" alt=""></img>
                        <img src="public/Wiki-wordmark (52).png" alt=""></img>
                        <img src="public/Wiki-wordmark (53).png" alt=""></img>
                        <img src="public/Wiki-wordmark (54).png" alt=""></img>
                      </div>
                    </div>
                    <div className="flex items-center justify-center text-black">
                      If you'd like to affiliate with us, please contact{" "}
                      <strong className="text-[purple] ml-1">
                        Aministrator.
                      </strong>
                    </div>
                  </div>

                  {/* Spotlight */}
                  <div className="border border-gray-200 mt-10 mb-10 rounded-lg bg-[#faf6ff] p-4">
                    <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
                      {/* Left Logo and Links */}
                      <div className="flex flex-col items-center md:w-1/4 min-w-[180px]">
                        <img
                          src="To Love Ru/Wiki.png"
                          alt="Animanga Wiki"
                          className="w-32 mb-2"
                        />
                        <div className="text-center font-bold text-[#1a1a1a] text-lg md-2">
                          ANIMANGA WIKI
                        </div>
                        <div className="flex flex-col items-center space-y-1 text-[purple] font-semibold">
                          <a href="#" className="hover:underline">
                            Discuss
                          </a>
                          <a href="#" className="hover:underline">
                            Wiki List
                          </a>
                          <a href="#" className="hover:underline">
                            Spotlight Request
                          </a>
                        </div>
                      </div>
                      {/* Center: Season and Lists */}
                      <div className="flex-1 px-4 flex flex-col justify-center">
                        <div className="font-bold text-gray-800 mb-2 text-base">
                          Spring Season 2025 Anime Wikis
                        </div>
                        <div className="font-semibold text-gray-700 mb-2 text-sm">
                          TV Anime
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-black text-sm">
                          <li>
                            <span className="font-bold">
                              #Compass 2.0 Sentō Setsuri Kaiseki System
                            </span>
                          </li>
                          <li>
                            <span className="font-bold">
                              Aharen-san wa Hakarenai Season 2
                            </span>
                          </li>
                          <li>
                            <span className="font-bold">
                              Ballpark de Tsukamaete!
                            </span>
                          </li>
                        </ul>
                      </div>
                      {/* Right: Spotlights */}
                      <div className="flex flex-col items-center md:w-1/3 min-w-[220px]">
                        <div className="text-center font-bold text-lg text-[#7c1fa0] mb-2">
                          Anime / Manga Hub{" "}
                          <span className="font-normal text-black">May</span>
                          <span className="text-[purple]"> Spotlighta:</span>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-8 mb-4">
                          {/* Center image */}
                          <div className="flex flex-col items-center order-2 md:order-1">
                            <img
                              src="To Love Ru/Site-logo (3).png"
                              alt="Space Battleship Yamato"
                              className="h-12 mb-1"
                            />
                            <span className="font-semibold text-gray-800">
                              Space Battleship Yamato
                            </span>
                          </div>
                          {/* Right images */}
                          <div className="flex flex-col items-center order-3 md:order-2">
                            <img
                              src="To Love Ru/Site-logo (4).png"
                              alt="HENNEKO"
                              className="h-12 mb-1"
                            />
                            <span className="font-semibold text-gray-800">
                              HENNEKO
                            </span>
                          </div>
                          <div className="flex flex-col items-center order-4 md:order-3">
                            <img
                              src="public/To Love Ru/Wiki-wordmark (57).png"
                              alt="Centuria"
                              className="h-12 mb-1"
                            />
                            <span className="font-semibold text-gray-800">
                              Centuria
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-2 text-xs text-[purple] font-medium">
                          <span>All</span>・<span>Action</span>・
                          <span>Adventure</span>・<span>Comedy</span>・
                          <span>Drama</span>・<span>Fantasy</span>・
                          <span>Horror</span>・<span>Mecha</span>・
                          <span>Mystery</span>・<span>Romance</span>・
                          <span>Sci-fi</span>・<span>Slice of Life</span>・
                          <span>Sports</span>・<span>Supernatural</span>・
                          <span>Memes</span>・<span>Funimation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Weekly Shonen Jump Wikis*/}
                  <div className="mt-10 h-[60px] font-extrabold p-4 relative rounded-t-md text-[#F5F5F5] bg-gradient-to-r from-[#FD9A01] via-[#F00505] to-[#FEF001]">
                    Weekly Shōnen Jump Wikis
                  </div>
                  <div className="bg-gray-50 border-l-4 border-[#abe7df] p-4">
                    <div className="flex flex-row items-center space-x-6">
                      <img
                        src="Weekly_Shonen_Jump_Logo.png"
                        alt="Shonen Jump Logo"
                        className="w-auto h-32 md:mx-0"
                      />
                      <div className="flex-1">
                        <div className="flex flex-row flex-wrap items-center gap-x-3 gap-y-2 text-[purple] font-medium text-sm">
                          {shonenJumpWikis.map((title, idx) => (
                            <React.Fragment key={title}>
                              {idx > 0 && (
                                <span className="mx-1 text-gray-400">•</span>
                              )}
                              <a href="#" className="hover:underline">
                                {title}
                              </a>
                            </React.Fragment>
                          ))}
                        </div>
                        <div className="text-right mt-2">
                          <button className="text-xs text-purple-800 font-extrabold hover:underline">
                            [Expand]
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-[#B197FC] pt-6 mt-6 rounded-b-md">
                    <div className="felx flex-col items-center">
                      <div className="mb-4 flex justify-center items-center">
                        <span className="text-black">
                          Ongoing Anime Spotlights
                        </span>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-center md:space-x-16 w-full">
                        <div className="flex flex-col items-center md-6 md:mb-0">
                          <img
                            src="Wiki-wordmark (55).png"
                            alt="One Piece Wiki"
                            className="h-14 mb-2"
                          />
                          <span className="font-bold text-purple-900">
                            One Piece
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <img
                            src="Wiki-wordmark (56).png"
                            alt="Witch Watch Wiki"
                            className="h-14 mb-2"
                          />
                          <span className="font-bold text-purple-900">
                            Witch Watch
                          </span>
                        </div>
                      </div>
                      <div className="mt-8 text-center w-full">
                        <span className="font-bold text-gray-700 text-lg">
                          Upcoming Anime Spotlights
                        </span>
                        <span className="italic text-gray-500 ml-2 text-base">
                          <a href="#"> [Click to Expand]</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Side Content */}
                <div className="lg:w-1/4  lg:top-4 lg:self-start">
                  <div className="border-2 border-[#DB49AC] rounded">
                    {/* Latest Chapters */}
                    <div className="pt-1 pr-1 pl-1">
                      <div className="bg-[#DB49AC] text-[#F9D910] text-center py-1 text-xl font-extrabold">
                        Latest Chapters
                      </div>
                      <div className="p-4 bg-white">
                        <p className="mb-2 text-[purple]">
                          Newest chapters of <em>To LOVE-Ru Darkness</em>:
                        </p>
                        <p className="mb-2 text-[purple]">
                          April 2019 one-shot -{" "}
                          <strong>SB - B24 - B25 - 77</strong>
                        </p>
                        <p className="text-center mt-4">
                          <Link to="#" className="text-[purple] ">
                            All Chapters
                          </Link>
                        </p>
                      </div>
                    </div>

                    {/* Featured Article */}
                    <div className="pt-1 pr-1 pl-1">
                      <div className="bg-[#DB49AC] text-[#F9D910] text-center py-1 text-xl font-extrabold">
                        Featured Article
                      </div>
                      <div className="p-4 bg-white">
                        <div className="flex justify-center mb-4">
                          <div className="w-full max-w-xs aspect-[3/4] relative">
                            <img
                              src="To Love Ru/mae.jpg"
                              alt="Kurosaki Mea"
                              className="w-full h-full object-cover rounded"
                              style={{ maxHeight: 320 }}
                            />
                          </div>
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
                          <Link to="#" className="text-[purple]">
                            Read More...
                          </Link>
                        </p>
                        <p className="text-center text-xs text-gray-500 mt-2">
                          Previous Featured Articles
                        </p>
                      </div>
                    </div>

                    {/* Featured Image */}
                    <div className="pt-1 pr-1 pl-1">
                      <div className="bg-[#DB49AC] text-[#F9D910] text-center py-1 text-xl font-extrabold">
                        Featured Image
                      </div>
                      <div className="p-4 bg-white">
                        <div className="flex justify-center">
                          <div className="w-full max-w-xs aspect-[3/4] relative">
                            <img
                              src="To Love Ru/lalafeatured.jpg"
                              alt="Featured Image"
                              className="w-full h-full object-cover rounded"
                              style={{ maxHeight: 420 }}
                            />
                          </div>
                        </div>
                        <p className="text-black text-center">
                          Lala from To LOVE-Ru Chapter 63.
                        </p>
                        <h3 className="text-[purple] text-center mt-4 font-extrabold">
                          Previous Featured Images
                        </h3>
                      </div>
                    </div>

                    {/* Featured Video */}
                    <div className="pt-1 pr-1 pl-1">
                      <div className="bg-[#DB49AC] text-[#F9D910] text-center py-1 text-xl font-extrabold">
                        Featured Video
                      </div>
                      <div className="pt-3 bg-white">
                        <div className="relative">
                          <iframe
                            src="https://www.youtube.com/embed/cc-abnvIgRs"
                            title="To LOVE-Ru Featured Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full aspect-video rounded"
                            style={{ minHeight: 200, background: "#000" }}
                            onError={() => {
                              console.log("Video failed to load");
                            }}
                          ></iframe>
                        </div>
                      </div>
                    </div>

                    {/* Poll */}
                    <div className="pt-1 pr-1 pl-1">
                      <div className="bg-[#DB49AC] text-[#F9D910] text-center py-1 text-xl font-extrabold">
                        Poll
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-black text-center">
                          Who is your favorite character in To LOVE-Ru?
                        </p>
                        <div className="flex justify-center mt-4 space-x-4">
                          <button className="bg-purple-800 text-white px-3 py-1 rounded text-xs font-medium">
                            Vote
                          </button>
                          <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded text-xs font-medium">
                            View Results
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Community */}
                    <div className="pt-1 pr-1 pl-1">
                      <div className="bg-[#DB49AC] text-[#F9D910] text-center py-1 text-xl font-extrabold">
                        Community
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-black text-center">
                          Join the To LOVE-Ru community and share your love for
                          the series!
                        </p>
                        <p className="text-center mt-4">
                          <Link to="#" className="text-purple-800">
                            Join Now
                          </Link>
                        </p>
                      </div>
                    </div>

                    {/* External Links */}
                    <div className="pt-1 pr-1 pl-1">
                      <div className="bg-[#DB49AC] text-[#F9D910] text-center py-1 text-xl font-extrabold">
                        External Links
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-black text-center">
                          Check out our official social media pages:
                        </p>
                        <div className="flex flex-col mt-4 items-center space-y-2">
                          <a
                            href="https://syougeki-utikiri.com/anime/toloveru/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-800 hover:text-purple-600 flex items-center"
                          >
                            Manga Official Website
                            <span className="ml-1 w-4 h-4 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">
                              i
                            </span>
                          </a>
                          <a
                            href="http://www.tbs.co.jp/anime/to-love-ru/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-800 hover:text-purple-600 flex items-center"
                          >
                            Anime Official Website
                            <span className="ml-1 w-4 h-4 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">
                              i
                            </span>
                          </a>
                          <a
                            href="http://www.mmv.co.jp/special/game/to-love-ru/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-800 hover:text-purple-600 flex items-center"
                          >
                            Xebec's Website for the Anime
                            <span className="ml-1 w-4 h-4 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">
                              i
                            </span>
                          </a>
                          <a
                            href="http://www.animenewsnetwork.com/encyclopedia/manga.php?id=7949"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-800 hover:text-purple-600 flex items-center"
                          >
                            TBS's Website for the Anime
                            <span className="ml-1 w-4 h-4 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">
                              i
                            </span>
                          </a>
                          <a
                            href="http://en.wikipedia.org/wiki/To_Love-Ru"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-800 hover:text-purple-600 flex items-center"
                          >
                            To Love-Ru at Wikipedia
                            <span className="ml-1 w-4 h-4 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">
                              i
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-40 right-6 z-50 bg-[#DB49AC] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-pink-500 focus:outline-none ${
          showTopBtn ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
      </div>
    </>
  );
}
