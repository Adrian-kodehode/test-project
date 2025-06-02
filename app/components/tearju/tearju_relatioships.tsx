import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Tearju_relationships = () => {
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
      <div className="bg-[#fcc0e9] flex flex-row items-start justify-center min-h-screen">
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
        <div className="flex-1 text-black bg-white pl-8 pr-8 pt-8 max-w-4xl">
          <h1 className="mb-5 text-5xl">Tearju Lunatique/Relationship</h1>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a href="/tearju" className="text-[purple]">
                Information
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a
                href="/tearju_plot"
                className="text-[purple]  hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a
                href="/tearju_relationships"
                className="hover:underline hover:text-black"
              >
                Relationships
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/tearju_gallery"
                className="text-[purple] hover:underline hover:text-black"
              >
                Gallery
              </a>
            </div>
          </div>
          <div className="flex items-start gap-6 mb-6"></div>
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
                <a href="#yami">Golden Darkness (Yami)</a>
              </li>
              <li>
                <a href="#rito">Rito Yuuki</a>
              </li>
              <li>
                <a href="#mea">Mea Kurosaki</a>
              </li>
              <li>
                <a href="#ryoko">Ryoko Mikado</a>
              </li>
              <li>
                <a href="#nemesis">Nemesis</a>
              </li>
            </ol>
          </nav>
          <br />

          <h3>
            <a
              href="/yami"
              className="text-[purple] text-2xl mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Golden Darkness (Yami)
            </a>
          </h3>
          <p className="mt-3">
            Tearju is Yami's creator and DNA origin, who named her Eve. Befor
            Yami's life as an assassin, Tearju treated her like a little sister
            who was always happy and child-like. She would always look up to
            Tearju, even now calling her on of the smartest beings there is and
            even eating badly mad food she cooked. Tearju planned on escaping
            the organization with Yami, but was unable to, thus forcing her to
            leave Yami behind with the people who forced her to become a weapon.
          </p>
          <br />
          <p>
            During their first encounter after being separated for a long time.
            Yami stats that she doesn't blame her for leaving her behind and
            says that she's glad the Tearju is okay. Currently, Tearju hopes to
            become closer to Yami like before but Yami usally avoids Tearju
            unless meeting each other is neesded.
          </p>
          <br />
          <p>
            Since Tearju's arrival, Yami refused to attend classes and wear her
            school uniform, which Tearju deeply wanted to see. In To-Love-Ru
            Darkness Chapter 30, Tearju becomes the homeroom teacher for Nana,
            Momo, Mea and Yami's class. Yami reveals that she still cares about
            Tearju, but is too afraid to face her after having become assassin,
            but with some persuasion from Rito and, surprisingly, Mea, Yami
            returns to school and attends class with her uniform, which made
            Tearju very happy.
          </p>
          <br />
          <p>
            Yami is also protective of Tearju, especially against Rito's bad
            habits.
          </p>
          <br />
          <h3>
            <a
              href="/rito"
              className="text-[purple] text-2xl mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Rito Yuuki
            </a>
          </h3>
          <p className="mt-3">
            Tearju became Rito's temporary homeroom teacher in To Love-Ru
            Darkness (after Honekawa-Sensei became absent with terrible back
            pain). She sees Rito as a close friend of Yami's, and has even shown
            signs of supporting Yami's hidden feelings towards him. When Rito
            greatly helped reconnect her relationship with Yami, he gained her
            eternal gratitude and trust. She understands that he is a very kind
            person, and even pointed out that it was like him to notice that
            something is troubling someone.
          </p>
          <br />
          <p>
            Tearju became Rito's temporary homeroom teacher in To Love-Ru
            Darkness (after Honekawa-Sensei became absent with terrible back
            pain). She sees Rito as a close friend of Yami's, and has even shown
            signs of supporting Yami's hidden feelings towards him. When Rito
            greatly helped reconnect her relationship with Yami, he gained her
            eternal gratitude and trust. She understands that he is a very kind
            person, and even pointed out that it was like him to notice that
            something is troubling someone.
          </p>
          <br />
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <p>
                Their relationship is however often complicated by fact that
                they share similar trait of clumsiness and bad luck. Due to him
                being a problem causer and her being a problem attractor, it
                creates a weird kind of unspoken compatibility between them,
                that increases the probability and degree of perverted accidents
                that happen to them. Where even simply walking around each other
                often results in Rito nearly or completely violating Tearju by
                some kind of accident. Luckily for Rito, Tearju shows a great
                deal of understanding and never gets mad at him for anything
                that happens between them.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://static.wikia.nocookie.net/to-loveru/images/1/10/TLRD_CH14_Cover.png"
                alt=""
                className="w-48 rounded shadow"
              />
            </div>
          </div>
          <p>
            Their compatibility was later even used by Mikado, when she tried to
            investigate Rito's clumsiness scientifically in search of a cure
            (however it was also hinted that she partially did it for her own
            amusement).
          </p>
          <br />
          <h3>
            <a
              href="/mea"
              className="text-[purple] text-2xl mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Mea Kurosaki
            </a>
          </h3>
          <p className="mt-3">
            Mea is another transformation weapon created by Tearju, but not
            created from her DNA as Yami is. Because, due to unrevealed reasons,
            Tearju was not there when Mea awakened, and Mea was all alone until
            meeting Nemesis, Tearju and Mea had no close relationship to start
            with.
          </p>
          <br />
          <p>
            Mea sees Tearju as a "barrier" for her mission to return Yami to
            being the cold assassin she once was and wants her out of the way
            for that. However, since Mea is sort of Yami's sister, Tearju
            considers Mea to be a sister to her as well, and hopes that Mea
            follows Yami's example by embracing her emotions and bonds, to which
            Mea rebuffs under her conviction that she is a weapon.
          </p>
          <br />
          <p>
            After Mea has reconciled with Nana and become more open to
            relationships, Mea is still uninterested in having any relationship
            with Tearju. In chapter 30, Mea still doesn't care about the idea of
            Tearju and Yami reuniting, but after thinking about what Rito said
            about how she and Yami are like little sisters to Tearju and how
            family is important, she surprisingly helps him persuade Yami to
            come to school as a student again and become closer to Tearju. But
            Mea still maintains her reluctance to also become close to Tearju
            herself.
          </p>
          <br />
          <h3>
            <a
              href="/ryoko"
              className="text-[purple] text-2xl mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Ryoko Mikado
            </a>
          </h3>
          <p className="mt-3">
            Tearju and Mikado have been best friends since they were in school
            together. They went their separate ways some time before Tearju was
            recruited into the suspicious organization where she would
            eventually create Eve (Yami) and Mea.
          </p>
          <br />
          <p>
            In To Love-Ru Darkness, Mikado eventually reunited with Tearju to
            tell her how Eve is doing on Earth. It was because of Mikado that
            Tearju came to Earth and became Rito's substitute teacher and the
            new homeroom teacher for Nana, Momo, Mea, and Yami's class.
          </p>
          <br />
          <h3 className="text-[purple] text-2xl mb-3 mt-3 font-bold hover:underline hover:text-black">
            <a
              href="/nemesis"
              className="text-[purple] text-2xl mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Nemesis
            </a>
          </h3>
          <p>
            Tearju seems to know a few things about Nemesis and the organization
            that created her but doesn't seem to know her in person. But Nemesis
            knows her quite well and said that Tearju is the "barrier" to Yami
            from returning to a cold heartless assassin.
          </p>
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
