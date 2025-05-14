import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Haruna = () => {
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
                        <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        </div>
                        <div className="absolute left-full top-0 min-w-[180px] bg-white text-black shadow-lg rounded z-30 opacity-0 group-hover/manga:opacity-100 group-hover/manga:pointer-events-auto pointer-events-none transition-opacity duration-200">
                        <ul>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru</li>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru Darkness</li>
                        </ul>
                        </div>
                      </li>
                      {/* Anime */}
                      <li className="relative group/anime">
                        <div className="px-4 py-2 hover:bg-pink-100 flex items-center justify-between">
                        Anime
                        <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        </div>
                        <div className="absolute left-full top-0 min-w-[200px] bg-white text-black shadow-lg rounded z-30 opacity-0 group-hover/anime:opacity-100 group-hover/anime:pointer-events-auto pointer-events-none transition-opacity duration-200">
                        <ul>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru</li>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">Motto To LOVE-Ru</li>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru Darkness</li>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru Darkness 2nd</li>
                        </ul>
                        </div>
                      </li>
                      {/* Games */}
                      <li className="relative group/games">
                        <div className="px-4 py-2 hover:bg-pink-100 flex items-center justify-between">
                        Games
                        <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        </div>
                        <div className="absolute left-full top-0 min-w-[240px] bg-white text-black shadow-lg rounded z-30 opacity-0 group-hover/games:opacity-100 group-hover/games:pointer-events-auto pointer-events-none transition-opacity duration-200">
                        <ul>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru Darkness: Battle</li>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru Darkness: True</li>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru Darkness: Idol</li>
                          <li className="px-4 py-2 hover:bg-pink-100 whitespace-nowrap">To LOVE-Ru Darkness: Gravure</li>
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
          <h1 className="mb-5 text-3xl">Sairenji Haruna</h1>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              Information
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href=""
                className="text-[purple] hover:underline hover:text-black"
              >
                Relationships
              </a>
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
            <strong>Haruna Sairenji</strong> (西連寺 春菜 Sairenji Haruna?) is
            the second female protagonist of To Love Ru. She is in{" "}
            <a href="/rito" className="text-[purple] underline">
              Rito
            </a>
            's class and is the girl of his affections. Haruna has similar
            feelings for him, having been attracted to him because of his kind,
            gentle nature since junior high, but believes them to be unrequited
            and has not built up the nerve to confess to him. Despite her
            growing love for Rito, her friendship with Lala causes her to
            suppress her feelings since she doesn't want to hurt Lala who also
            loves Rito. However, with some encouragement, she eventually tells
            Lala of her feelings for Rito which Lala accepts, stating that
            Haruna is her rival for Rito's heart, while still remaining friends.
          </p>
          <br />
          <p>
            In the anime, there is a running gag where Rito is about to confess
            to her, only for something (or someone) to come between them. They
            finally confessed to each other in Chapter 75 & 76 within gym
            storage.
          </p>
          <br />
          <p>
            Haruna is affiliated with Sainan High's tennis club and also is left
            handed.
          </p>
          <nav className="w-44 mt-5 bg-white text-start border rounded mb-6">
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
                <a href="#personaøity" className="hover:underline">
                  Personality
                </a>
              </li>
              <li>
                <a href="#history" className="hover:underline">
                  History
                </a>
              </li>
              <li>
                <a href="#power" className="hover:underline">
                  Power and Abilities
                </a>
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
                <a href="#references" className="hover:underline">
                  Refrences
                </a>
              </li>
            </ol>
          </nav>
          <h2 className="text-2xl font-bold border-b mb-4" id="appearance">
            Appearance
          </h2>
          <p>
            Haruna has blue hair and purple eyes, she has quite a cute
            complexion which most boys seem to like.
          </p>
          <br />
          <p>
            She always wears a red vertical hair clip on the left of her head.
            According to Sawada Mio, Haruna's measurements are B79-W56-H82.
            Despite being considered physically attractive for a girl her age,
            she often feels inferior being surrounded by girls like Lala and
            Yui, who are far more developed physically.
          </p>
          <br />
          <div className="flex-1 text-black max-w-2xl">
            <h2 className="text-2xl font-bold border-b mb-4" id="personality">
              Personality
            </h2>
            <p>
              A highly responsible person, Haruna's personality can sway her
              classmate's hearts to vote for her as their class representative,
              even when she did not run as a candidate.
            </p>
            <br />
            <p>
              Haruna is also a very kind, understanding and patient person, to
              the point that she's polite to everyone around her, especially to
              Rito. Despite his perverted clumsiness, she always forgives him in
              time. However, she does occasionally slap him for it out of fear,
              even though she is fully aware that he does not do it on purpose,
              but she forgives him very quickly.
            </p>
            <br />
            <p>
              In the beginning, she had feelings for Rito, but did not express
              them until she started hanging out with Lala, after which she
              started showing signs of jealousy. This did not prevent her from
              becoming good friends with Lala. Once when she was intoxicated off
              of Deviluke herbs, she couldn't help but cling on to Rito (while
              half naked and wet) and said that he's all hers for the moment
              (Darkness Chapter 26).
            </p>
            <br />
            <p>
              Haruna secretly enjoys Rito's kindness; one time he found her when
              she had been turned into a cat by one of Lala's inventions and,
              unaware that it was Haruna, started playing with her, which she
              claimed was like being in heaven. It is her genuine wish to be
              with Rito, though her shyness and Rito's clumsiness stand as the
              obstacles for her to advance.
            </p>
            <br />
            <p>
              As the series continues, she begins to fantasize the moment where
              she found herself being with Rito romantically, but quickly shakes
              them off and blushes. It is hinted that Haruna is a perverted girl
              as well, because she even thinks about ecchi moments with Rito in
              secret.
            </p>
            <br />
            <p>
              She has a severe fear of ghosts and the supernatural with the
              exception being Oshizu Murasame, but only for a while. When
              frightened, she has a habit of grabbing the nearest thing around
              her – typically Rito – and swinging wildly, in an attempt to get
              rid of whatever frightens her.
            </p>
            <br />
          </div>
        </div>
        {/* Right: Info card sidebar */}
        <div className="w-[350px] p-5 font-sans  top-8 mr-8">
          <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white shadow-lg flex flex-col items-center">
            <div className="text-center  w-full">
              <h1 className="text-white bg-[#DB49AC] text-xl font-bold p-2 ">
                Sairenji Haruna
              </h1>
            </div>
            <div className="flex justify-center  w-full">
              <img
                src="/To Love Ru/haruna.jpg"
                alt="Konjiki no Yami"
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
                      西連寺 春菜
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Name
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Sairenji Haruna
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Planet
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Earth
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Age
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      15 (first year) <br />
                      16 (second year)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Birthday
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      March 6
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Zodiac Sign
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Pisces
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
                      160 cm
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Weight
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      50 kg
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
                      Blue
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Eye Color
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Purple
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
                      School
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Sainan High School
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Class
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      1-A (chapters 1-48) <br />
                      2-A (chapters 49-present)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Education
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Currently attending Sainan High School
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Occupation
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      High school student
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Relatives
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Sairenji Akiho (sister) <br />
                      Maron (pet) <br />
                      Sairenji Fuyuhiko (father) <br />
                      Sairenji Natsumi (mother) <br />
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Martial Status
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Single
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Unusual Features
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Possesses superhuman strength and great fighting skill
                      with any blunt weapon (or Rito) when in state of panic
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
                      Chapter 1
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Anime Debut
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Episode 1
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
                      Sayuri Yahagi
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Misato Fuken
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      English VA
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Bryn Apprill (season 1-3) <br />
                      Monica Rial (season 4)
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
