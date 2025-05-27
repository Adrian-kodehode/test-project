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
            <a href="/yui">Kotegawa Yui</a>
          </p>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a href="/yui" className="text-[purple]">
                Information
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a
                href="/yui_plot"
                className="text-[purple]  hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>

            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a
                href="/yui_relationships"
                className=" hover:underline hover:text-black"
              >
                Relationships
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/yui_inventions"
                className="text-[purple] hover:underline hover:text-black"
              >
                Gallery
              </a>
            </div>
          </div>

          <div className="flex-1 text-black  max-w-2xl">
            <nav className="w-60 mt-5 bg-white text-start border rounded mb-6">
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
                  <a href="#rito" className="hover:underline">
                    {" "}
                    Rito Yuuki
                  </a>
                </li>
                <li>
                  <a href="#lala" className="hover:underline">
                    Lala Satalin Deviluke
                  </a>
                </li>
                <li>
                  <a href="#yū" className="hover:underline">
                    Kotegawa Yū
                  </a>
                </li>
                <li>
                  <a href="#risa-and-mio" className="hover:underline">
                    Risa Momioka and Mio Sawade
                  </a>
                </li>
                <li>
                  <a href="#celine" className="hover:underline">
                    Celine
                  </a>
                </li>
              </ol>
            </nav>
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="rito"
            >
              <a href="/rito">Rito Yuuki</a>
            </h2>
            <p>
              Originally thinking he was just another "Shameless" boy, she
              realized how wrong she was. Her feelings for him began to change
              to move towards romance when Rito saved her from a group of
              delinquents. Throughout the series, Yui's love interest in Rito
              developed. Yui made chocolate for him on Valentine's Day, even
              though she claimed it was just "Giri (Obligatory) Chocolate," she
              really made chocolate only for him. In the OVA, at a group picnic,
              Yui told Rito "I won't let you do shameless things with anyone
              else but me!!" while she was under the influence of pollen that
              caused everyone to freely speak their minds.
            </p>
            <br />
            <div>
              <p>
                In To Love Ru: Darkness, while Momo is trying to further her
                Harem Plan, she manipulated Yui and Rito into being alone
                together at Rito's house during what appeared to be a rain.
                During a black out, Rito falls onto Yui. While Rito is on top of
                her on his bed, Yui puts her arms around him and explains how
                she has learned to accept that it is normal for boys to be
                shameless, and that they are not all bad. She then offers
                herself to him if he agrees to do shameless things only to her
                (chapter 4). Rito breaks away and explains to her that although
                he is interested, he does not do shameless things intentionally.
                Yui loves Rito even more as she sees his innocent nature and how
                he is different from what she perceived all boys to be. She
                surprised herself with what she was doing and how far she went,
                and is grateful to Rito for not seducing her.
              </p>
              <br />
            </div>
            <p>
              After a little longer she comes to realize that she loves him.
              Although she still has got to put up with a lot of his clumsiness,
              she knows most of all that he is not a boy who would intentionally
              disrespect girls or take advantage of them. When Momioka playfully
              and dishonestly explains her sexual experience with Rito, Yui
              knows immediately that it was not true, remembering Rito could
              have done it with her when they were in his bedroom but did not,
              and thinks to herself that he is indeed different from other boys,
              and that he is special. Yui would prefer for Rito to be more
              responsible for his actions. She even mentioned that because he is
              careless, he brings shameless incidents upon himself.
            </p>
            <br />
            <p>
              While Rito does not have any romantic feelings for Yui, he does,
              however, find her attractive as shown when he gets embarrassed
              when being alone with her in her room. Her growing love for Rito
              surprises even herself. However, being inexperienced with boys and
              being a typical tsundere, she has difficulty opening up to Rito
              and often hides her shyness with aggression and anger.She even
              fantasize about rito on multiple occasion the most common one is
              of her being his wife and pregnant with child.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="lala"
            >
              <a href="/lala">Lala Satalin Deviluke</a>
            </h2>
            <div>
              <p>
                While Yui is generally very uptight, and in some senses Lala's
                complete opposite, she still is her friend. Lala's outgoingness
                with Rito often leads to Yui considering it "Shameless," however
                it has become a norm with her. Yui shows a slight jealousy
                towards how close she is with Rito, but strongly denies it
                herself. While Lala likes to consider everyone to be her
                friends, Yui and Lala don't generally bond with each other
                personally.
              </p>
            </div>
            <br />
            <p>
              However, despite all their differences both sports nearly
              identical curvaceous figures and together are considered to have
              most attractive bodies on school by others girls. Whenever a
              comparison of girls' figures is brought up Yui and Lala are often
              used as sort of ideal that other girls want to achieve.
              Ironically, even though Yui and Lala have the best bodies, they
              are the only two so far who pay no real attention to their
              appearance.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="nana"
            >
              <a href="#">Kotegawa Yū</a>
            </h2>
            <p>
              Yū is Yui's older brother and a lady's man, which is something
              that Yui dislikes about him. Yuu is aware of Yui's love for Rito,
              which she denies. He is eager to see his sister grow to become
              more mature and acknowledge her love for Rito.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="sephie"
            >
              <a href="#">Risa Momioka and Mio Sawada</a>
            </h2>
            <p>
              There is little evidence that Yui is explicitly friends with Risa
              and Mio. Because they are always groping other girls, talking
              about sexual subjects, and just being "shameless", Yui would
              naturally reprimand them to stop being so shameless, which is
              clearly not well heard by them. It does not help that Yui has a
              surprisingly attractive figure, which they pointed out as having a
              pretty "shameless" body herself. They would occasionally grope her
              body as well, like they would to other girls.
            </p>
            <br />
            <p>
              Because of how Risa appears more frequently, she practically
              annoys Yui the most, because of how she always comments on how
              mischievous she can be and how she would say something about a
              situation would lead to a perverted one, mostly involving Rito.
              She even lied to her about having done something "shameless" with
              Rito.
            </p>
            <br />
            <h2
              className="text-2xl text-[purple] hover:underline hover:text-black mb-4 font-bold"
              id="mikan"
            >
              <a href="#">Celine</a>
            </h2>
            <div>
              <p>
                Celine has consistently shown a strong liking to Yui, as pointed
                out by Rito when she hugged her. Yui was once mistaken for being
                Celine's mother and in a way as Rito's wife to which she denied,
                becoming easily flustered. Despite this, Celine is typically
                portrayed while clinging to Yui in several moments during the
                manga, with her fulfilling the role of a mother figure.
                Likewise, during the events of Darkness, Celine is consistently
                depicted clinging to Yui. As for her, Yui usually day dreams of
                adopting Celine and forming a family with Rito. She has even
                dreamed of being pregnant with Rito's child on at least a couple
                of occasions.
              </p>{" "}
              <br />
            </div>
            <p>
              On some occasions Yui has babysits Celine, and has been seen
              reading to her at school in off panels of the manga. In the "What
              If" scenario, depicted in the Harem Gold Artbook, Yui is depicted
              having adopted Celine and given birth to a daughter with Rito,
              going by the name of Hana. She is also depicted as being pregnant
              with their third child.
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
