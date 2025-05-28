import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Mea_relationships = () => {
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
          <h1 className="mb-5 text-5xl">Kurosaki Mea/Relationship</h1>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a href="/mea" className="text-[purple]">
                Information
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a
                href="/mea_plot"
                className="text-[purple]  hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>

            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a
                href="/mea_relationships"
                className="hover:underline hover:text-black"
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
          <div className="flex items-start gap-6 mb-6"></div>
          <nav className="w-72 mt-5 bg-white border rounded mb-6">
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
                <a href="#relationships" className="hover:underline">
                  Relationships with Other Characters
                </a>
                <ol className="list-inside ml-5">
                  <li>
                    <a href="#golden-darkness" className="hover:underline">
                      1.1 Golden Darkness (Yami)
                    </a>
                  </li>
                  <li>
                    <a href="#tearju-lunatique" className="hover:underline">
                      1.2 Tearju Lunatique
                    </a>
                  </li>
                  <li>
                    <a href="#nemesis" className="hover:underline">
                      1.3 Nemesis
                    </a>
                  </li>
                  <li>
                    <a href="#rito-yuuki" className="hover:underline">
                      1.4 Rito Yuuki
                    </a>
                  </li>
                  <li>
                    <a href="#nana-astar-deviluke" className="hover:underline">
                      1.5 Nana Aster Deviluke
                    </a>
                  </li>
                  <li>
                    <a href="#momo-belia-deviluke" className="hover:underline">
                      1.6 Momo Belia Deviluke
                    </a>
                  </li>
                  <li>
                    <a href="#oshizu-murasame" className="hover:underline">
                      1.7 Oshizu Murasame
                    </a>
                  </li>
                </ol>
              </li>
            </ol>
          </nav>
          <br />
          <h2 className="text-2xl font-bold border-b mb-4" id="relationships">
            Relationships with Other Characters
          </h2>
          <h2
            className="text-[purple] hover:underline hover:text-black text-2xl font-bold mb-4"
            id="golden-darkness"
          >
            Golden Darkness (Yami)
          </h2>
          <p className="mb-6">
            Like Yami, Mea is a transformation weapon that was created by
            Tearju.
          </p>
          <div className="flex flex-row items-start gap-6">
            <div className="flex-1">
              <p>
                Though not also created from Tearju's DNA, she is still
                considered to be their younger sister. Mea came to Earth by
                orders of her master Nemesis to bring Yami back into space as
                her cold-hearted assassin old self and wants her to be the
                ultimate weapon that is unstoppable by anything and anyone, but
                Yami encouraged her to try and embrace humanity, which she
                slowly does with the help of Rito, Tearju, Momo and Nana. Yami
                shows a slight care and understanding towards Mea. She deeply
                cares for Yami which is shown when she was desperately trying to
                return Yami from the way she was before becoming "Darkness."
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="To Love Ru/meayami.jpg"
                alt=""
                className="w-56 h-auto rounded shadow"
                style={{ maxWidth: "220px" }}
                onClick={() => {
                  setSelectedImage("To Love Ru/meayami.jpg");
                  setShowImageModal(true);
                }}
              />
              {showImageModal && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                  onClick={() => setShowImageModal(false)}
                >
                  <img
                    src={selectedImage || ""}
                    alt="Selected"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
              <span className="text-xs text-center mt-2 text-gray-600 italic block max-w-[220px]">
                The first time Yami admits out loud that Mea is her sister
              </span>
            </div>
          </div>
          <br />
          <h2
            className="text-[purple] hover:underline hover:text-black text-2xl font-bold  mb-4"
            id="tearju-lunatique"
          >
            Tearju Lunatique
          </h2>
          <p>
            Tearju is Mea's creator. As stated by Nemesis, Tearju is the
            "barrier" for Yami to become her cold-hearted old self, which is why
            Mea wants her out of the way, but Tearju considers her a sister like
            Yami, which she rejects.
          </p>
          <br />
          <p>
            Perhaps because she feels able to find a sister and family in an
            assassin like Yami to ease the loneliness she denies having, she
            rejects Tearju, whom she cannot accept as her family without
            betraying her stubborn belief that she is a weapon.
          </p>
          <br />
          <p>
            As of To Love-Ru Darkness chapter 30, Mea has begun to allow Yami to
            reunite with Tearju. But she still maintains her reluctance to
            become closer to Tearju.
          </p>
          <br />
          <h2
            className="text-[purple] hover:underline hover:text-black text-2xl font-bold  mb-4"
            id="nemesis"
          >
            Nemesis
          </h2>
          <p>
            Nemesis was the first person Mea ever met after waking up. Nemesis
            guided Mea and teaches her what it means to be a transformation
            weapon and about who Yami is. Mea looks up to and trusts Nemesis,
            calling her master and gets mad at anyone who disrespects her in any
            way. It is Nemesis' teachings and Mea's strict adherence to them
            that put her directly at odds with the other characters of the
            series, and the friendships they offer to her.
          </p>
          <br />
          <p>
            Mea would become uneasy when Nemesis is not there to help her
            reaffirm her beliefs by reminding her not to be swayed by friends.
            However, Mea has decided to think more independently and become more
            open and understanding with her newfound friendships, which her
            master has decided to permit.
          </p>
          <br />
          <p>
            In Darkness chapter 40, Nemesis explains that the dark conscience
            within Mea was really Nemesis herself, and that Mea is actually an
            alternate personality of Nemesis. She explains that she created Mea
            as an artificial personality to sneak into Seinan, and that the two
            share the same body. However, after this revelation, while Nemesis
            is in control, Mea still retains her personality and awareness, and
            believes that Nemesis lied about Mea being an alternate personality.{" "}
          </p>
          <br />
          <p>
            To Mea, Nemesis instead reveals that she was in unstable physical
            condition and needed to temporarily fuse with Mea to continue to
            exist. While Mea continues to fight back for control of her own
            body, she still expresses her respect and gratitude to her master
            for being with her and teaching her when she was alone. After
            managing to free herself from Nemesis' control, she still acts
            cheerful towards her, but has earned a newfound sense of
            independence from her former master, which she signifies by calling
            her "Neme-chan", surprising her.
          </p>
          <br />
          <h2
            className="text-[purple] hover:underline hover:text-black text-2xl font-bold  mb-4"
            id="rito-yuuki"
          >
            Rito Yuuki
          </h2>
          <p>
            Mea is interested in Rito especially when Nana told her that he is a
            beast. Mea has a desire for Rito to lick her body and at times
            teases him by asking him to do it to her despite being in front of
            people. While their thoughts and feelings are synchronized, Rito
            notices a feeling inside her, saying it's "like a lost child all on
            your own", which she angrily denies.
          </p>
          <br />
          <p>
            On some level Mea cares for Rito, viewing him as something more than
            a casual acquaintance and showing a great interest in his life. She
            continues to toy with his shyness and tries to do lewd things with
            him. It's unknown if it's love or lust, or even if it's for her
            enjoyment, to attempt to please him, or both. Rito truly cares for
            Mea and tries to make her embrace humanity, which she slowly begins
            to accept and appreciate from him. After having spoken to Rito, Mea
            allows Yami to reunite with Tearju, and even assists Rito in
            convincing her to attend school again, grudgingly accepting Rito's
            advice about filling the gap between them.
          </p>
          <br />
          <p>
            She once mentioned to her master Nemesis that Rito is a fool for
            easily trusting, she also thinks of him weak, although Mea is
            curious to see how far a weak earthling would go in helping others
            against more frightening foes.
          </p>
          <br />
          <p>
            After Rito saves Yami from her inner "darkness", Mea acknowledges
            her newfound feelings for Rito and declares her intention to assist
            in Momo's Harem Plan, albeit in her own way.
          </p>
          <br />
          <h2
            className="text-[purple] hover:underline hover:text-black text-2xl font-bold  mb-4"
            id="nana-astar-deviluke"
          >
            Nana Astar Deviluke
          </h2>
          <p>
            Nana is the first friend Mea made when she came to Earth. They seem
            like best friends. Nana introduced Mea to some of her animal
            friends, and Mea even tried to save Nana from an oncoming truck.
          </p>
          <br />
          <p>
            Once Nana saw Mea in her semi-weapon form, realizing she's just like
            Yami, Mea states that their friendship was all a lie. Nana felt
            saddened and heartbroken by this. Rito encouraged Nana to fearlessly
            embrace Mea to prove to her that it wasn't a lie. In the end, Mea
            accepted it, and they became friends again.
          </p>
          <br />
          <h2
            className="text-[purple] hover:underline hover:text-black text-2xl font-bold  mb-4"
            id="momo-belia-deviluke"
          >
            Momo Belia Deviluke
          </h2>
          <p>
            Mea gets on Momo's nerves when she interferes with her plan to make
            Rito's harem, even when talking about it around others. But other
            than that, they get on good terms, and hang out together with Nana
            on some occasions. They are also similarly perverted whenever Rito
            is involved, like how when Momo tries to bring Run closer to Rito
            they both get excited and imagine an ecchi moment is going to happen
            to them, and they both even enjoy licking on Rito's female body.
          </p>
          <br />
          <h2
            className="text-[purple] hover:underline hover:text-black text-2xl font-bold  mb-4"
            id="oshizu-murasame"
          >
            Oshizu Murasame
          </h2>
          <p>
            Oshizu was one of the girls who knows about Mea's true self. While
            wanting to get more information on Mea and her Master, she took
            possesion on her to find anything important. As Oshizu dived deeper
            inside Mea's mind, she discovered a deep darkness that almost
            consumed her making her to unable to trust Mea.
          </p>
          <br />
          <p>
            After seeing Mea convincing Yami to open up with Tearju, Oshizu
            starts seeing a kind side of Mea and considers to become friends
            with her. She starts following her and ends up getting teased by
            Mea. Irritated, she said that she hates her but Mea replies that she
            does not hate her, as Oshizu was easy to be teased and how she feels
            comfortable to be her real self in front of Oshizu.
          </p>
          <br />
          <p>
            Oshizu asked her why she hides her identity even when she was
            comfrotable with it. Mea tells Oshizu that acting as an earthling is
            no use no more but at the same time, she does not want to discard
            her identity as Kurosaki Mea. She has shown some care for Oshizu as
            she helped her destroy a black hole before her spirit has completely
            disappeared with the latter revealing her true identity in Darkness
            Chapter 37. They have become closer friends, but Mea likes taking
            adventage of her power and fear of dogs which causes something ecchi
            to happen.
          </p>
          <br />
          <p>
            Mea now considers Oshizu as a friend whom she can depend on. When
            she was being controlled by Nemesis, Mea called to Oshizu for help,
            and together, they successfully freed Mea from Nemesis' control.
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
