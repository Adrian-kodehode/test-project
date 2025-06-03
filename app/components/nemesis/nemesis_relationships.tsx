import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Nemesis_relationships = () => {
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
          <h1 className="mb-5 text-5xl">Nemesis/Relationship</h1>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a href="/nemesis" className="text-[purple]">
                Information
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a
                href="/nemesis_plot"
                className="text-[purple]  hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>

            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a
                href="/nemesis_relationships"
                className="hover:underline hover:text-black"
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
                <a href="#mea" className="hover:underline">
                  Mea Kurosaki
                </a>
              </li>
              <li>
                <a href="#yami" className="hover:underline">
                  Yami (Golden Darkness)
                </a>
              </li>
              <li>
                <a href="#tearju" className="hover:underline">
                  Tearju Lunatique
                </a>
              </li>
              <li>
                <a href="#rito" className="hover:underline">
                  Rito Yuuki
                </a>
              </li>
              <li>
                <a href="#momo" className="hover:underline">
                  Momo Belia Deviluke
                </a>
              </li>
            </ol>
          </nav>
          <br />
          <h3>
            <a
              href="/mea"
              className="text-[purple] text-2xl mb-3 mt-3 font-bold hover:underline hover:text-black"
              id="mea"
            >
              Mea Kurosaki
            </a>
          </h3>
          <p className="mt-3">
            Mea is another transformation weapon and Nemesis' personal spy whom
            she used to watch over Yami. Both she and Mea share a close
            relationship. Mea is very obedient to her as she is the first person
            to confront her after the end of the Galactic War. However, it is
            not known how much Nemesis truly cares for Mea. Although she
            ultimately permits Mea to pursue her friendships on Earth, Nemesis
            previously persuaded Mea that her nature as a weapon is to
            ultimately be heartless and alone. And Nemesis seems to choose not
            to inform everything she knows to Mea, such as the true nature of
            the "Darkness" ability inside Yami. Nemesis appears to somewhat care
            for Mea, and she wants Mea, Yami, and herself to be together in the
            end, but because of her domineering personality, she is not above
            keeping secrets and using and manipulating others to her own ends,
            not even Mea.
          </p>
          <br />
          <p>
            In Darkness Chapter 40, Nemesis takes over Mea's body and claims to
            everyone else that Mea is an alternate personality that Nemesis
            created. But to Mea, she reveals that she was in instable condition
            and needed to temporarily fuse with Mea's body to keep existing. Mea
            is still in control of her personality, but Nemesis is in control of
            her body. Nemesis wishes for Yami, in her Darkness form, to finish
            her mission to kill Rito, and then she will remove herself from Mea,
            and the three living weapons will be together, but until then, she
            keeps her control of Mea's body against Mea's will.
          </p>{" "}
          <br />
          <p>
            Mea manages to break free from Nemesis' control and expelled Nemesis
            from her body. Mea bears no hatred towards Nemesis and is still
            grateful to her for being there when Mea was alone, but has become
            more independent from her former master, which she expresses by
            calling her "Neme-chan", which surprises her.
          </p>
          <br />
          <h3>
            <a
              href="/haruna"
              className="text-[purple] text-2xl mb-3 mt-3 font-bold hover:underline hover:text-black"
            >
              Yami (Golden Darkness)
            </a>
          </h3>
          <p className="mt-3">
            Yami is a transformation weapon like Nemesis, and the center of
            Nemesis' plans. Nemesis and Yami seem to know each other, though
            they meet each other for the first time in Chapter 23-24. Nemesis
            wants Yami to return to her old life as an assassin. She plans to
            make Yami use a transformation ability called "Darkness" (an ability
            unique to Yami), and with it, she believes that Yami will naturally
            revert back to her old self. Once Yami becomes Darkness and finishes
            off Rito, the three living weapons will be together. But after
            Yami's Darkness transformation is defeated by Rito, it is now
            unknown if Nemesis has anymore plans with Yami.
          </p>
          <br />
          <h3 className="text-[purple] text-2xl mb-3 mt-3 font-bold">
            <a
              href="/tearju"
              className="hover:underline hover:text-black"
              id="tearju"
            >
              Tearju Lunatique
            </a>
          </h3>
          <p>
            Nemesis and Tearju seem to know about each other, but nevermet each
            other in the past. Nemesis stats that Tearju is the "barrier" to her
            and Yami. The to officially meet in Darkness Chapter 40.{" "}
          </p>
          <br />
          <h3 className="text-[purple] text-2xl mb-3 mt-3 font-bold">
            <a
              href="/rito"
              className="hover:underline hover:text-black"
              id="rito"
            >
              Rito Yuuki
            </a>
          </h3>
          <p>
            {" "}
            Originally Nemesis planned on having Yami finish her previous job to
            kill Rito, until she notices how he is the human who draws both Yami
            and Mea to humanity. As such, to observe more closely how their
            lives progress, she decides to become friendly with him, in her own
            erotic way.
          </p>
          <br />
          <p>
            She seems to be very (sexually) interested with Rito, and finds his
            nervous expressions towards her arousing. In her first appearance,
            she offered to train him to be her 'pet'. She playfully considers
            him as her servant, and essentially enjoys treating him as her boy
            toy.
          </p>
          <br />
          <p>
            While Nemesis enjoys toying with Rito in her spare time, she seems
            to still maintain her plan to have Yami transform into Darkness and
            finally kill Rito. But after Rito and his friends manage to defeat
            Yami's Darkness transformation and return her to normal, and now
            that Mea is no longer subservient to her, she now calls Rito her
            only servant and continues to go to him for mischief and amusement.
          </p>
          <br />
          <p>
            After she battles King Gid Lucione Deviluke in her attempt to begin
            a new galactic war, Nemesis was left in fatal condition, fading away
            into nothing. However, Rito, out of compassion and the belief that
            she has the capacity to change like Yami and Mea, offered to let her
            live inside his body until she mostly recovered. Believing that he
            has no obligation to help her, Nemesis finds Rito's willingness to
            save her and trust her with his own body very perplexing, but
            nevertheless accepts his offer, which she used to survive for future
            entertainment. Despite her mischievous behavior in Rito's body, she
            showed some slight respect towards his charity and did not refer to
            him as her "servant" and treated him more as a friend/roommate. She
            also refers to him by his first name ever since she started living
            in his body, and still does after leaving. She now refers to him and
            Mea as her "ex-servants".
          </p>{" "}
          <br />
          <p>
            After the fight against Kuro, Nemesis admits to Yami that she saved
            Rito because Rito is an interesting fellow. Later on in Chapter 75,
            Nemesis reveals that she loves Rito. It's unknown if she actually
            love him or if it's just part of her plan.
          </p>{" "}
          <br />
          <h3 className="text-[purple] text-2xl mb-3 mt-3 font-bold">
            <a
              href="/momo"
              className="hover:underline hover:text-black"
              id="momo"
            >
              Momo Belia Deviluke
            </a>
          </h3>
          <p>
            {" "}
            On first meeting, Nemesis plays with Momo's tail weakness in front
            of Rito and decides that she is worth torturing as well. They both
            share erotic and mischievous tendencies especially towards Rito,
            something they can relate to, but her's are so strong and sadistic,
            even Momo has considered her a threat.{" "}
          </p>
          <p>
            Despite Momo's plan to build a harem of girls around Rito, Nemesis
            is apparently the only female whom Momo does not want near Rito, and
            apparently the only one who can stir up feelings of jealousy in
            Momo, other than Nana as seen on several occasions. Nemesis very
            much now enjoys getting on Momo's nerves, and Momo considers Nemesis
            her natural enemy. She even told Momo to give up on the harem plan
            because she wants Rito all to herself as her servant.{" "}
          </p>
          <br />
          <p>
            Momo generally dislikes Nemesis, and Nemesis scarcely misses the
            opportunity to tease Momo. But their relationship is not all
            antagonistic. After a fierce battle against King Gid Lucione
            Deviluke left her slowly fading away, Nemesis appears to show
            appreciation for the fun she had with Momo, and Momo thought to
            herself that despite circumstances, she did not want things between
            them to end with Nemesis disappearing.{" "}
          </p>
          <br />
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
