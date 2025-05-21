import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Deviluke = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
  return (
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
                          <Link to="/to_love-ru_manga">To LOVE-Ru</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          <Link to="/to_love-ru_darkness_manga">
                            To LOVE-Ru Darkness
                          </Link>
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
                          <Link to="/to_love-ru_anime">To LOVE-Ru</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          <Link to="/motto_to_love-ru_anime">
                            Motto To LOVE-Ru
                          </Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          <Link to="/to_love-ru_darkness_anime">
                            To LOVE-Ru Darkness
                          </Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          <Link to="/to_love-ru_darkness2ndanime">
                            To LOVE-Ru Darkness 2nd
                          </Link>
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
                          <Link to="/to_love-ru_darkness_battle_ecstasy_game">
                            To Love-Ru Darkness Battle Ecstasy
                          </Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          <Link to="/to_love-ru_darkness_princess_game">
                            To LOVE-Ru Darkness: True Princess
                          </Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          To LOVE-Ru Darkness: Idol Revolution
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          To LOVE-Ru Darkness: Gravure Chances
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
      <div className="bg-white flex flex-row items-start justify-center min-h-screen">
        <div className="w-64 border-r border-gray-200 bg-white fixed left-0 top-0 h-full sidebar transition-transform duration-300">
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
        {/* Left: Main text content */}
        <div className="flex-1 text-black pl-8 pr-8 pt-8 max-w-2xl">
          <h1 className="mb-5 text-5xl">Deviluke</h1>
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-1">
              <p>
                <strong>Devilukes</strong> (デビルーク, Debirūku) is referred to
                as the center of the galaxy, though this is probably a reference
                to its importance rather than its location in the universe. The
                planet of Deviluke literally rules the galaxy after the galactic
                unification wars led by King Gid Lucione Deviluke, and as such
                they hold dominion over all the planets of the galaxy and their
                people.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <img
                src="To Love Ru/DevilukePalace.jpg"
                alt="The Royal Palace of Deviluke."
                className="w-64 h-40 object-cover rounded shadow flex-shrink-0"
              />
              <span className="mt-2 text-center text-sm font-medium">
                The Royal Palace of Deviluke
              </span>
            </div>
          </div>
          <br />
          <p>
            Little is known about the planet itself, except that it has a Gothic
            culture, a lot of many forests, really high mountains, and a high
            level of technology. Much more is known about the citizens of
            Deviluke, who are at least known to be many times stronger than
            Earthlings, and who seem to have won their wars across the galaxy
            using only their own natural powers, which seem to be of some
            variety.{" "}
          </p>
          <br />
          <p>
            The planet is considered by many to be the most powerful planet in
            the universe.
          </p>

          <nav className="w-60 mt-5 bg-white border rounded mb-6">
            <div className="flex items-center justify-between px-3 py-2 border-b">
              <span className="font-semibold text-gray-700 flex items-center text-sm">
                <svg
                  className="w-4 h-4 mr-1 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
                Contents
              </span>
              <button className="text-xs text-[purple] hover:underline font-semibold">
                [hide]
              </button>
            </div>
            <ol className="list-decimal list-inside px-5 py-3 text-gray-700 text-sm space-y-1">
              <li>
                <a href="#devilukeans" className="hover:underline">
                  Devilukeans
                </a>
                <ol className=" list-inside ml-5">
                  <li>
                    <a href="#appearance" className="hover:underline">
                      1.1 Appearance
                    </a>
                  </li>
                  <li>
                    <a href="#royal_family" className="hover:underline">
                      1.2 Royal Family
                    </a>
                  </li>
                  <li>
                    <a href="#powers_abilities" className="hover:underline">
                      1.3 Powers and Abilities
                    </a>
                  </li>
                  <li>
                    <a href="#weaknesses" className="hover:underline">
                      1.4 Weaknesses
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#trivia" className="hover:underline">
                  Trivia
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:underline">
                  Gallery
                </a>
              </li>
            </ol>
          </nav>
          <br />
          <div className="flex-1 text-black max-w-2xl">
            <h2 className="text-2xl font-bold border-b mb-4" id="devilukeans">
              Devilukeans
            </h2>
            <h3 className="text-xl mb-4" id="appearance">
              Appearance{" "}
            </h3>
            <p className="mt-2">
              Like their planet, the appearance of the Devilukeans follow a
              theme of devils and demons. All Devilukeans have tails at least
              half as long as their bodies, ending in a pointed tip of various
              shapes. Most of the Devilukeans shown have diamond-shaped tail
              tips; the Devilukean king, Gid, has a tail that ends in a
              trident-shaped tip (its metalic appearance and use as an blade in
              battle are thought to indicate that it's a weaponized
              replacement): the tails of the Devilukan princesses all end in a
              spaded-shaped tip (whether this difference is due to gender or
              their{" "}
              <a href="#" className="text-[purple] underline hover:text-black">
                Charmian
              </a>{" "}
              heritage in not revealed ).
            </p>
            <br />
            <p>
              Other than their unique tails, Devilukeans, like with many other
              alien races, greatly resemble humans and are possibly a distant
              relative of them. They can easily be mistaken for being human; one
              example is when{" "}
              <a href="#" className="text-[purple] underline hover:text-black">
                Maron
              </a>{" "}
              was confused about how a human was talking to him, though it was
              actually Nana.
            </p>
            <br />
            <p>
              Their clothing follow the devil theme as well, but also appear to
              be inspired by playing cards. Emperor Gid's true form wears a
              black outfit that could be described as resembling a Gothic dark
              prince.{" "}
              <a href="#" className="text-[purple] underline hover:text-black">
                Zastin
              </a>{" "}
              is almost always seen wearing an archaic stone-like gray armor
              with many sharp edges, which might have appeared rather sinister
              were it not for its presence in a light-hearted{" "}
              <a
                href="/to_love-ru_manga"
                className="text-[purple] underline hover:text-black"
              >
                manga
              </a>{" "}
              series, and Zastin's own comically inept character. The princesses
              often wear black devil wings on their backs, which enable them to
              fly. Their clothing seem to be inspired by playing cards, mildly
              modeled after harlequin outfit with light frills, has a slight
              diamond motif, and striped stockings.
            </p>
            <br />
            <p>
              <a
                href="/lala"
                className="text-[purple] underline hover:text-black"
              >
                Lala
              </a>
              's iconic "
              <a href="#" className="text-[purple] underline hover:text-black">
                Peke
              </a>
              " outfit is unique to herself. Besides the black wings, it does
              not seem to follow any kind of Devilukean trend, but rather is
              simply designed by Lala's goofy imagination, which is dominantly
              white, round and curvy, much like most of her other inventions.
            </p>
            <br />
            <h2 className="text-2xl font-bold border-b mb-4" id="royal_family">
              Royal Family
            </h2>
            <div className="ml-8 mt-2">
              <li>
                King of Deviluke -{" "}
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Gid Lucione Deviluke
                </a>
              </li>
              <li>
                Queen of Deviluke -{" "}
                <a
                  href="#"
                  className="text-[purple] hover:underline hover:text-black"
                >
                  Sephie Michaela Deviluke
                </a>
              </li>
              <li>
                Princesses of Deviluke{" "}
                <ol className="ml-12 mt-2 list-disc">
                  <li>
                    First Princess -{" "}
                    <a
                      href="/lala"
                      className="text-[purple] hover:underline hover:text-black"
                    >
                      Lala Satalin Deviluke
                    </a>{" "}
                  </li>
                  <li>
                    Second Princess -{" "}
                    <a
                      href="/momo"
                      className="text-[purple] hover:underline hover:text-black"
                    >
                      Nana Astar Deviluke
                    </a>{" "}
                  </li>
                  <li>
                    Third Princess -{" "}
                    <a
                      href="#"
                      className="text-[purple] hover:underline hover:text-black"
                    >
                      Momo Belia Deviluke
                    </a>{" "}
                  </li>
                </ol>
                <br />
                <li>
                  Royal Palace Guards{" "}
                  <ol className="ml-12 mt-2 list-disc">
                    <li>
                      Comannder -{" "}
                      <a
                        href="#"
                        className="text-[purple] hover:underline hover:text-black"
                      >
                        Zastin
                      </a>{" "}
                    </li>
                    <li>
                      Assistents -{" "}
                      <a
                        href="#"
                        className="text-[purple] hover:underline hover:text-black"
                      >
                        Maul
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="text-[purple] hover:underline hover:text-black"
                      >
                        Smutts
                      </a>
                    </li>
                  </ol>
                </li>
              </li>
            </div>
            <br />
            <h2
              className="text-2xl font-bold border-b mb-4"
              id="powers_abilities"
            >
              Powers and Abilities
            </h2>
            <p>
              All Devilukeans have superhuman strength. They are much stornger
              then Earthlings and most aliens of the galaxy. At one time, Lala
              even reached a stalmate against{" "}
              <a
                href="/yami"
                className="text-[purple] underline hover:text-black"
              >
                Yami
              </a>
              , a well-known assassin, with just using her brute strength.
              However, Yami admits that living peacfully on Earth has weackened
              her. Another Display of the Devilukeans strength is when Gid was
              able to hit a tennis ball so hard it caused{" "}
              <a href="#" className="text-[purple] underline hover:text-black">
                Sasuga
              </a>
              , the tennis club's adviser, to faint while standing.
            </p>
            <br />
            <p>
              Some Devilukeans have sort of blood lust emotion through fighting
              or when simply tempted by someone who gets them mad. Others like{" "}
              <a
                href="/momo"
                className="text-[purple] underline hover:text-black"
              >
                Momo
              </a>{" "}
              have a lustful desire for sexual pleasure.
            </p>
            <br />
            <div className="flex items-start gap-6 mt-4">
              <div className="flex-1">
                <p>
                  Gid and his daughters have shown the ability to shoot
                  destructive beams of energy from their tails. The most
                  poverful display of this ability have been made by Gid, who
                  used it to effortlessly destroy{" "}
                  <a
                    href="/nemesis"
                    className="text-[purple] underline hover:text-black"
                  >
                    Nemesis
                  </a>{" "}
                  body, and Lala, who canceled out an attack from{" "}
                  <a
                    href="/yami"
                    className="text-[purple] underline hover:text-black"
                  >
                    Darkness
                  </a>{" "}
                  powerful enough to destroy a planet. However, so far, no other
                  Devilukeans have shown this ability, so it is unknown whether
                  or not it is exclusive to the royal Devilukeans. Nana and
                  Momo's abilities to communicate with animals and plants are
                  unique variations of the "charm" ability inherited from their{" "}
                  <a
                    href="#"
                    className="text-[purple] underline hover:text-black"
                  >
                    mother
                  </a>
                  , and no similar abilities have been revealed by any other
                  Devilukeans.
                </p>
              </div>
              <img
                src="To Love Ru/Tail-beam-like-shock-beam.jpg"
                alt=""
                className="w-64 h-40 object-cover rounded shadow flex-shrink-0"
              />
            </div>
            <br />
            <h2 className="text-2xl font-bold border-b mb-4" id="weaknesses">
              Weaknesses
            </h2>
            <p>
              Despite the Devilukeans "perfect warrior" abilities, they stil
              have weaknesses. The overuse of their power can cause them to
              temporarily revert into their child-like forms, such as the case
              with Gid after the Galactic Unification Wars, and Lala during her
              fight against Yami in{" "}
              <a href="#" className="text-[purple] underline hover:text-black">
                Darkness Chapter 44
              </a>
              . The recuperation period can vary drasticlly depending on how
              much power was used. Lala returnd to her normal form after a few
              weeks at most, whereas Gid remaind a child for years.
            </p>
            <br />
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-start w-48">
                <img
                  src="https://static.wikia.nocookie.net/to-loveru/images/1/1a/Momo_TLRD_EP12_02.png/"
                  alt="Momo rubbing her tail."
                  className="w-48 h-60 mt-2 object-cover rounded shadow flex-shrink-0 cursor-pointer"
                  onClick={() => {
                    setSelectedImage(
                      "https://static.wikia.nocookie.net/to-loveru/images/1/1a/Momo_TLRD_EP12_02.png/"
                    );
                    setShowImageModal(true);
                  }}
                />
                <span className="mt-2 text-xs text-gray-500 text-center w-full">
                  Momo rubbing her tail.
                </span>
              </div>
              {showImageModal && selectedImage && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                  onClick={() => setShowImageModal(false)}
                >
                  <img
                    src={selectedImage}
                    alt=""
                    className="max-w-3xl max-h-[90vh] rounded shadow-lg border-4 border-[#DB49AC] bg-white"
                    onClick={(e: React.MouseEvent<HTMLImageElement>) =>
                      e.stopPropagation()
                    }
                  />
                  <button
                    className="absolute top-8 right-8 text-white text-3xl font-bold"
                    onClick={() => setShowImageModal(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                </div>
              )}
              <div className="flex-1 ml-4">
                <p className="text-base">
                  Some Devilukeans are shown to have sensitive tails, this
                  weakness is present only in women and in men this does not
                  affect them much (
                  <a
                    href="#"
                    className="text-[purple] underline hover:text-black"
                  >
                    To LOVE-Ru: chapter 117
                  </a>
                  ). When someone touches it, the Devilukean will lose power,
                  but might manage to find enough strength to throw said person
                  and let their tail go. The feeling of having their tail
                  touched gives them an "erotic" sensation. However, this
                  weakness is only shown between Lala and her sisters. When Nana
                  was asked if this applied to everyone, she mentions that
                  everyone's different (Motto To LOVE-Ru Episode 11). As seen
                  with Momo, Devilukeans with sensitive tails can pleasure
                  themselves by rubbing it.
                </p>
              </div>
            </div>
            <br />
            <h2 className="text-2xl font-bold border-b mb-4" id="trivia">
              Trivia
            </h2>
            <li>
              In the{" "}
              <a
                href="/to_love-ru_anime"
                className="text-[purple] hover:underline hover:text-black"
              >
                anime
              </a>
              , the way Devilukeans propose is by grabbing the female's breasts
              and confessing to her. Coincidentally Rito accidently did both
              without knowing it. Within the three days after the "said event",
              there is a cooling off period tp cancel the engagement by touching
              the female's breast again.
            </li>
            <li>
              In chapter 12 of the manga, Lala complains about the heat and
              tells Rito that there is no summer season in Deviluke.
            </li>
            <li>
              The second names of the Devilukean Royal Family are reference to
              demons. while the only known Royal Consort's is reference to an
              angle.{" "}
              <ol className="ml-12 mt-5 list-item list-disc">
                <li>
                  Gid "Lucione" Deviluke - Lucione comes from{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Lucifer.
                  </a>
                </li>
                <li>
                  Lala "Satalin" Deviluke - Satalin comes from{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Satan.
                  </a>
                </li>
                <li>
                  Nana "Astra" Deviluke - Astra comes from{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Astaroth.
                  </a>
                </li>
                <li>
                  Momo "Belia" Deviluke - Belia comes from{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Belial.{" "}
                  </a>
                  and Beria{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Berith
                  </a>
                </li>
                <li>
                  Sephie "Michaela" Deviluke - Michaela comes from{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Michael.
                  </a>
                </li>
              </ol>
            </li>
            <br />
            <li>
              There have been several information about Deviluke and the
              Devilukeans that resembles Planet Vegeta and the Saiyans from
              Dragon Ball. These resemblances appear to be intentional, as{" "}
              <a
                href="#"
                className="text-[purple] hover:underline hover:text-black"
              >
                Yabuki Kentarō
              </a>{" "}
              is known to be a fan of Dragon Ball.
              <ol className="ml-12 mt-5 list-item list-disc">
                <li>
                  The Devilukeans have superstrength, much like the Saiyans.
                </li>
                <li>
                  Devilukean women grow weak when their tails are touched, like
                  the Saiyans.
                </li>
                <li>
                  The Devilukean king, Gid, was originally regular sized, but
                  became small later on. The same thing happened to Goku in
                  Dragon Ball GT. However, the reason why they became small is
                  different.
                </li>
                <li>
                  In the first chapter of the manga (and the first episode of
                  the anime), when Lala was showing Rito her tail, she commented
                  "Even though I have a tail, that doesn't mean I transform when
                  I see a full moon". This was an intentional reference to
                  Dragon Ball, since Saiyans transform when they see full moons
                  because of their tails.
                </li>
                <li>
                  Both planets conquered other planets. However, in the case of
                  Planet Deviluke, the Devilukeans conquered planets in order to
                  unite them during the galactic unification wars, while the
                  Saiyans conquered other planets for bounty.
                </li>
                <li>
                  Both planets are notorious across the galaxy, and the other
                  aliens are afraid of them.
                </li>
              </ol>
            </li>
            <br />
            <div className="flex items-start gap-4 mt-4">
              <div className="flex-1">
                <li>
                  In the Deadpool Samurai manga, Thanos claimed that he went to
                  Deviluke planet and destroyed it. Later,{" "}
                  <a
                    href="#"
                    className="text-[purple] hover:underline hover:text-black"
                  >
                    Kentaro Yabuki
                  </a>{" "}
                  joked on his twitter that he checked and the planet is still
                  here.
                </li>
              </div>
              <img
                src="public/To Love Ru/DeadpoolSamuraicameo.jpg"
                alt=""
                className="w-48 h-32 object-cover rounded shadow flex-shrink-0"
                onClick={() => {
                  setSelectedImage("To Love Ru/DeadpoolSamuraicameo.jpg");
                  setShowImageModal(true);
                }}
              />
            </div>
            <br />
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
  );
};
