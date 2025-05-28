import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Relationships = () => {
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
                          Motto To LOVE-Ru
                        </li>
                        <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">
                          <Link to="/to_love-ru_darkness_anime">
                            To LOVE-Ru Darkness
                          </Link>
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
      <div className="bg-white flex flex-row items-start justify-center min-h-screen">
        <div className="w-64 border-r border-gray-200 bg-white text-center fixed left-0 top-0 h-full sidebar transition-transform duration-300">
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
          <h1 className=" text-3xl">Kotegawa Yui/Relationships</h1>
          <p className="text-[purple] hover:underline hover:text-black mb-5">
            <a href="/saki">Kotegawa Yui</a>
          </p>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a href="/saki" className="text-[purple]">
                Information
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a
                href="/saki_plot"
                className="text-[purple]  hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>

            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a
                href="/saki_relationships"
                className=" hover:underline hover:text-black"
              >
                Relationships
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="#"
                className="text-[purple] hover:underline hover:text-black"
              >
                Gallery
              </a>
            </div>
          </div>

          <div className="flex-1 text-black  max-w-2xl">
            <nav className="w-[300px] mt-5 bg-white text-start border rounded mb-6">
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
              <ol className=" list-inside px-5 py-3 text-gray-700 text-sm space-y-1">
                <li>
                  <a href="#relationships" className="hover:underline">
                    1. Relationships with Other Characters
                  </a>
                  <ol className=" list-inside pl-4 mt-1 space-y-1">
                    <li>
                      <a href="#rin" className="hover:underline">
                        1.1. Kujō Rin
                      </a>
                    </li>
                    <li>
                      <a href="#aya" className="hover:underline">
                        1.2. Ayako "Aya" Fujisaki
                      </a>
                    </li>
                    <li>
                      <a href="#ryuga" className="hover:underline">
                        1.3. Tenjōin Ryūga
                      </a>
                    </li>
                    <li>
                      <a href="#lala" className="hover:underline">
                        1.4. Lala Satalin Deviluke
                      </a>
                    </li>
                    <li>
                      <a href="#zastin" className="hover:underline">
                        1.5. Zastin
                      </a>
                    </li>
                    <li>
                      <a href="#rito" className="hover:underline">
                        1.6. Rito Yuuki
                      </a>
                    </li>
                    <li>
                      <a href="#run" className="hover:underline">
                        1.7. Run Elise Jewelria
                      </a>
                    </li>
                  </ol>
                </li>
              </ol>
            </nav>
            <h2 className="text-2xl mb-4 border-b font-bold">
              Relationships with Other Characters
            </h2>
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="rito"
            >
              <a href="/rito">Kujō Rin</a>
            </h2>
            <p>
              Rin is Saki's bodyguard and friend. Her frien has served the
              Tenjouin family for generations.
            </p>
            <br />
            <p>
              Saki considers both Rin and Aya to be her closest friends, to the
              point that she ran away from home rather than be forced by her
              father to study aboard without her friends. Rin on the other hand,
              while caring for and greatly respecting her, is a little more
              divided between her loyalty to her Saki-sama and obedience to her
              family, who serve Saki's family. This was seen when Saki ran away
              from home, and Rin arrived to bring her back by force rather than
              supporting her. Ultimately, Saki did not leave to study aboard,
              and they were able to remain together.
            </p>
            <br />
            <p>
              Recently, Saki noticed Rin's more bashful expression around Rito
              Yuuki, which she has never expected from Rin for as long as they
              have known each other. Claiming that she also understand what love
              is like, Saki is very supportive of Rin's growing feelings, even
              if it's towards someone like Rito.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="aya"
            >
              <a href="/aya">Ayako "Aya" Fujisaki</a>
            </h2>
            <p>
              Aya is Saki's close friend. As a child, she was often bullied and
              Saki protected her. So far, Aya has served little purpose
              throughout the series besides following and supporting her
              Saki-sama, whom she idolizes. She has never been seen without
              accompanying her friends, being something of an extra to their
              group. But Saki does care greatly for Aya as well as Rin, and
              wouldn't take the chance to study abroad if it meant leaving her
              friends.
            </p>
            <br />
            <p>
              {" "}
              Being weak-willed and nothing truly remarkable, Aya is perhaps one
              of the few evidences that the usually arrogant Saki Tenjouin has a
              good and kinder side towards lesser people.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="ryuga"
            >
              <a href="/ryuga">Tenjōin Ryūga</a>
            </h2>
            <p>
              Her father who she loves and respects his every demand until
              Chapter 131, where she ran away from home when he told her she was
              going to study overseas thus she would not be able to be with her
              friends. But after some encouragement from Lala, she confronted
              and stood up to her father, Ryuuga had respected her wishes and
              felt proud at how much his daughter has matured. Oddly, like Saki
              he also has a proverbial laughter.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="lala"
            >
              <a href="/lala">Lala Satalin Deviluke</a>
            </h2>
            <p>
              Saki considers Lala to be her eternal rival, and goes through any
              means to prove that she is better than her, even though her plans
              usually backfire and she sometimes ends up naked in the process.
              Lala remains totally oblivious that Saki holds a competitive
              grudge against her and considers Saki a good friend of hers.
            </p>
            <br />
            <p>
              However Saki was grateful to Lala for helping her at the time she
              had tried to run away from home.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="zastin"
            >
              <a href="/zastin">Zastin</a>
            </h2>
            <p>
              Saki has been in love with Zastin ever since he helped her get her
              limo out of a small hole on the ground (by lifting it with one
              arm). She was frustrated when she found out that he is Lala's
              servant. She tries to get closer to him and gain his affections,
              but with little success. While Zastin is always formal and polite
              towards her as he is with everyone else, it is unknown how he
              feels towards her as he seems slightly oblivious to her feelings,
              and there is little evidence that he has romantic feelings towards
              her.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="rito"
            >
              <a href="/rito">Rito Yuuki</a>
            </h2>
            <p>
              At first she tried seducing him to make Lala jealous, but this did
              not last long. Since then, any and most of her appearances seem to
              only serve the purpose of being a victim to the perverted mishaps
              that surround Rito.
            </p>
            <br />
            <p>
              Due to her feelings for Zastin, she along with two of her close
              friends (later just Aya) are the only ones in the female cast who
              have absolutely no romantic feelings towards Rito and she gets mad
              at him whenever he accidentally does something perverted to any of
              them. She also thinks that his sister is more reliable than he is.
              In To Love-Ru Darkness Chapter 31, Momo didn't consider her or Aya
              for her harem plan.
            </p>
            <br />
            <p>
              Saki unintentionally showed Rito a warmer side to her when she
              showed kindness and hospitality to Riko Yuusaki, until Riko's
              shocking revelation, which only added to Rito's already perverted
              history around Saki and her friends. Even though she hates him,
              Rito would still try his best to help her, like when she ran away
              from home and he allowed her shelter in his home, for which she
              showed little gratitude toward him.
            </p>
            <br />
            <p>
              Despite her general dislike of Rito, she nonetheless supports
              Rin's recent crush towards him, noting that, of all people, Rito
              is the first to make Rin feel this way.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="run"
            >
              <a href="/run">Run Elise Jewelria</a>
            </h2>
            <p>
              Because Run also held a grudge against Lala, on one occasion, Saki
              has teamed up with Run to humiliate Lala, but as always it would
              ultimately fail and backfire. They don't team up anymore due to
              Run's busy schedule as an idol and has no more intention in doing
              so.
            </p>
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
