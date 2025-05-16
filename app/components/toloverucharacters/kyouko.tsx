import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Kyouko = () => {
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
          <h1 className="mb-5 text-3xl">Kirisaki Kyōko</h1>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              Information
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Gallery
              </a>
            </div>
          </div>
          <p>
            <strong>Kirisaki Kyōko</strong> is a half-human half-Flamian (alien)
            hybrid girl, who has the ability to create and control fire at will,
            which she uses in her TV show. Kyouko is a famous idol, best known
            for her role as Magical Kyouko, the fictional magical girl character
            and star of her television series, which Lala Satalin Deviluke loves
            watching. The producers of her show know about her alien heritage,
            some being aliens themselves.
          </p>
          <nav className="w-44 mt-5 bg-white border rounded mb-6">
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
                <a href="#appearance" className="hover:underline">
                  {" "}
                  Appearance
                </a>
              </li>
              <li>
                <a href="#personality" className="hover:underline">
                  Personality
                </a>
              </li>
              <li>
                <a href="#plot" className="hover:underline">
                  Plot
                </a>
              </li>
              <li>
                <a href="#powers" className="hover:underline">
                  Powers and Abilities
                </a>
              </li>
              <li>
                <a href="#relationship" className="hover:underline">
                  Relationship with Other Characters
                </a>
                <ol className="list-decimal list-inside pl-5 text-gray-600 text-xs mt-1">
                  <li>
                    <a href="#run" className="hover:underline">
                      Run Elsie Jewelria
                    </a>
                  </li>
                  <li>
                    <a href="#ren" className="hover:underline">
                      Ren Elsie Jewelria
                    </a>
                  </li>
                  <li>
                    <a href="#rito" className="hover:underline">
                      Yūki Rito
                    </a>
                  </li>
                  <li>
                    <a href="#lala" className="hover:underline">
                      Lala Satalin Deviluke
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#etymology" className="hover:underline">
                  Etymology
                </a>
              </li>
              <li>
                <a href="#trivia" className="hover:underline">
                  Trivia
                </a>
              </li>
              <li>
                <a href="#navigation" className="hover:underline">
                  Navigation
                </a>
              </li>
            </ol>
          </nav>
          <h2 className="text-2xl font-bold border-b mb-4" id="appearance">
            Appearance
          </h2>
          <div className="flex flex-row items-start gap-6 mt-4">
            <div className="flex-shrink-0 flex flex-col items-center w-32">
              <img
                src="To Love Ru/Kyōko.jpg"
                alt="Kyouko in her school uniform and glasses"
                className="w-full h-auto rounded"
                onClick={() => {
                  window.open("To Love Ru/Kyōko.jpg", "_blank");
                }}
              />
              <span className="block text-xs text-gray-600 mt-2 leading-snug">
                Kyouko in her school uniform and glasses
              </span>
            </div>
            <div className="flex-1">
              <p>
                Kyouko has short black hair (purple hair in the original series)
                and purple eyes.{" "}
                <a href="/rito" className="text-[purple] underline">
                  Yūki Rito
                </a>{" "}
                once noted that she looks like{" "}
                <a href="/haruna" className="text-[purple] underline">
                  Sairenji Haruna
                </a>{" "}
                when Haruna lets her hair lose.[1]
              </p>
              <p className="mt-2">
                She is most often seen wearing her magical girl costume on her
                show: a red pointy hat and cape, a white top and a blue skirt.
                On some other occasions she is wearing clothing typical of Idols
                in Japan when performing on stage. In chapter 154, she appear
                wearing causal outfit first time. In chapter 58 of To Love-Ru
                Darkness, she is seen in her school uniform, and it's revealed
                that she wears glasses in her days off while during work, she
                wears contacts.
              </p>
              <p className="mt-2">Her 3-sizes are 85-56-85.</p>
            </div>
          </div>
          <h2
            className="text-2xl font-bold border-b mb-4 mt-8"
            id="personality"
          >
            Personality
          </h2>
          <p>
            Kyouko is quite kind, modest and friendly to those around her and
            also cute. She genuinely hates perverts who assault her like the
            Principal and doesn't hesitate to use her fire abilities to burn
            them. Kyouko is also quite understandable, especially to{" "}
            <a href="/rito" className="text-[purple] underline">
              Yūki Rito
            </a>
            , whom she never burned whenever he sees her naked; she also finds
            his blushed face cute. Sometimes, she tends to play with his
            shyness, such as asking him on a date as a joke. Eventually, she
            starts to develop feelings for him after he saves her from a swarm
            of fans and running in a princess carry style.
          </p>
          <h2 className="text-2xl font-bold border-b mb-4 mt-8" id="plot">
            Plot
          </h2>
          <p>
            At first, Kyouko was seen as a minor character, only appearing on
            her TV show as fictional character.
          </p>
          <br />
          <p>
            When Nana Astar Deviluke and Momo Belia Deviluke bring Yūki Rito,
            Lala Satalin Deviluke and their friends into their virtual reality
            game (Chapter 93-98, OVA 4 of first anime), they created a scantily
            clad virtual Kyouko as the demon king, where she temps Rito to
            become her boyfriend and forget Lala. Rito and the others manage to
            defeat her and return to the real world, where Lala and the others
            go back to watching the real Magical Kyouko on TV.
          </p>
          <br />
          <p>
            In Chapter 123, she made her appearance in person when Run Elsie
            Jewelria began starring as an antagonist at her show. At the same
            time, it was revealed that she is an human/alien hybrid with actual
            fire abilities. Ever since their first meeting on her show, she and
            Run have done many projects together, such as debuting many songs
            together.
          </p>
          <br />
          <p>
            Kyouko reappears again when Run asks Rito to pretend to be her
            boyfriend (Chapter 154), however, Kyouko is able to tell they aren't
            really dating, but she is aware of her feelings for him and wishes
            her luck on getting him.
          </p>
          <br />
          <p>
            Later, she shows up at Rito's school for a lecture while Run is at a
            recording and asks Rito to show her around. This was actually a plan
            to get information on him for Run. However, after she gets swarmed
            by fans and Rito saves her, she appears to start developing her own
            feelings towards Rito.
          </p>
          <br />
          <p>
            In Chapter 58 of To Love-Ru Darkness, when Run becomes worried about
            Rito and Lala's relationship, Kyouko asks Rito to hang out with her
            so that she can learn about his feelings for Lala. Momo attempts to
            get Rito and Kyouko into a romantic situation while the two are
            together in a row boat. Instead, her plan backfires when her and
            Mea's boat collides with a boat being rowed by Ren, causing her to
            drop her D-Dial, summoning the Chucchu Weed (a mass of plant
            tentacles with lips). As usual, Rito gets caught in a perverted
            incident with the girl he is with. However, Kyouko blows fire over
            the plants, torching them. She is then carried off by Rito for the
            second time in the series.
          </p>
          <h2 className="text-2xl font-bold border-b mb-4 mt-8" id="powers">
            Powers and Abilities
          </h2>
          <p>
            <strong>Flamian Hybrid Physiology:</strong>
          </p>
          <br />
          <div className="ml-8">
            <p>
              • <strong>Pyrokinesis</strong>: Being half-Flamian, Kyouko
              possesses the ability of fire manipulation, the power to control
              ambient heat energy and burn whatever she may desire. She usually
              passes this off as magic tricks and special effects on her show
              during her acting role as Magical Kyōko TV series, or to defend
              herself from perverts like the Principal.{" "}
            </p>
            <p>
              • <strong>Flame Constructs</strong>: Kyouko is also able to create
              constructs made of fire, such as streams, spheres or even
              skywriting. These flames require her concentrations to maintain
              their current shape and will burn out in approximately 3 minutes
              unless infused with additional flame.
            </p>
            <p>
              • <strong>Fire Breath</strong>: Kyouko can breathe fire, which she
              can project as either intense concentrated streams of flame or
              wide range blasts.
            </p>
            <p>
              • <strong>Heat Resistance</strong>: Kyouko is immune to heat and
              fire both from herself and from outside sources that is below her
              own maximum output, for it doesn't seem to hurt her when holding
              flames in her hands or blowing it out of her mouth.
            </p>
          </div>
        </div>
        {/* Right: Info card sidebar */}
        <div className="w-[350px] p-5 font-sans  top-8 mr-8">
          <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white shadow-lg flex flex-col items-center">
            <div className="text-center  w-full">
              <h1 className="text-white bg-[#DB49AC] text-xl font-bold p-2 ">
                Kirisaki Kyōko
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <img
                src="To Love Ru/kyouko.jpg"
                alt="Kirisaki Kyōko"
                className="w-80 h-80 object-cover border-2 border-[#DB49AC] "
              />
            </div>
            <div className="w-full overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-0">
                <tbody>
                  {/* Characteristics */}
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-[#DB49AC] w-full text-center text-white font-bold p-2"
                    >
                      Characteristics
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 w-1/3 border border-[#9C2E7A] ">
                      Kanji
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      霧崎 恭子
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Name
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Kirisaki Kyōko
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Planet
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Earth/Flame hybrid
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Age
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      17
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Birthday
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      August 25
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Zodiac Sign
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Virgo
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Gender
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Female
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Height
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      162.5 cm
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Weight
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      49.5 kg
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Blood Type
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      O
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Hair Color
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Black
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Eye Color
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Light Purple
                    </td>
                  </tr>
                  {/* Personal Status */}
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-[#DB49AC] w-full text-center text-white font-bold p-2"
                    >
                      Personal Status
                    </td>
                  </tr>

                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Education
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Currently attending Private Madou Girl's Highschool
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Occupation
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Idol <br />
                      Singer <br />
                      Actress <br />
                      Magician <br />
                      Campaign Girl <br />
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Relatives
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Unknown
                    </td>
                  </tr>

                  {/* First Appearance */}
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-[#DB49AC] w-full text-center text-white font-bold p-2"
                    >
                      First Appearance
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Manga Debut
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Chapter 21 (tv character) <br />
                      Chapter 123 (real)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Anime Debut
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Episode 10 from To LOVE-Ru (anime) (tv character) <br />
                      Episode 07 from Motto To LOVE-Ru (real)
                    </td>
                  </tr>
                  {/* Voice Actors */}
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-[#DB49AC] w-full text-center text-white font-bold p-2"
                    >
                      Voice Actors
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Japanese VA
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Chiemi Chiba
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      English VA
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Christine Auten (temporary)
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-[#DB49AC] w-full text-center text-white font-bold p-2"
                    >
                      Gallery
                    </td>
                  </tr>
                </tbody>
              </table>
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
  );
};
