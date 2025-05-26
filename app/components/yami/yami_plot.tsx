import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Plot = () => {
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
          <h1 className=" text-3xl">Yami/Plot</h1>
          <p className="text-[purple] hover:underline hover:text-black mb-5">
            <a href="/yami">Konjiki no yami</a>
          </p>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a href="/yami" className="text-[purple]">
                Information
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a
                href="/yami_plot"
                className=" hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>

            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/yami_relationships"
                className="text-[purple] hover:underline hover:text-black"
              >
                Relationships
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/yami_gallery"
                className="text-[purple] hover:underline hover:text-black"
              >
                Gallery
              </a>
            </div>
          </div>

          <div className="flex-1 text-black  max-w-2xl">
            <p>
              When she makes her appearance in To Love-Ru, she was hired by
              Lacospo, one of Lala's arranged suitors, to kill Rito Yuuki, who
              has unwillingly become Lala's marriage candidate. But when Lacospo
              effectively annuls the job, she decides to take her time and,
              under the pretense of still needing to complete her mission to
              kill Rito, stays on Earth. As she spends more time on Earth, she
              builds a very strong relationship with Rito's mature younger
              sister, Mikan Yuuki and with Rito himself.
            </p>{" "}
            <br />
            <p>
              While Yami rediscovers her own humanity and interacts with more
              people she can call her friends, she becomes uncertain if she
              truly belongs in such a peaceful life she has found during her
              stay on Earth, or her real place is inevitably her old life as a
              cold assassin. As she continues to spend more time on Earth, she
              becomes more used to living in a more peaceful life and becomes
              more comfortable around other people, mostly around Mikan, her
              only genuine friend. Yami has grown to care greatly for Mikan that
              she would protect and save her from her enemy Tyrant Azenda, even
              going to the point to sacrifice her own life just to save her.
            </p>{" "}
            <br />
            <p>
              Yami's other most significant relationship is with Rito, with whom
              she develops a trusting but often humorously abusive relationship.
              Yami frequently puts up with Rito's perverted antics, and very
              frequently beats him up for them. Overtime, she develops mixed and
              undefined feelings for Rito, but trusts him with things she hasn't
              confided in anyone else. She tells Rito about her past with her
              creator, Tearju, who named her Eve, and how the evil organization
              tried to take advantage of her until it collapsed, at the time
              when King Gid Lucione Deviluke triumphed in the Galaxy's
              Unification Wars.
            </p>{" "}
            <br />
            <p>
              During her stay on Earth, Yami spends much of her time at taiyaki
              vendors, since taiyaki is all she ever really eats. She also
              spends much of her time at libraries and around Sainan High
              School, where she is often seen borrowing and reading books. Since
              the students are already aware that Lala and her sisters are
              aliens attending their school, it came as little surprise to the
              other students that Yami is also an alien.
            </p>{" "}
            <br />
            <p>
              In To Love-Ru Darkness, Yami decides to enroll in Sainan High,
              where Rito, Lala, and most of the main characters attend. There,
              she meets Momo, the little sister of Lala. Momo intends to protect
              Rito from any threat, but hopes for Yami to join their side.
              Unknown to Yami, Momo intends to add her into her Harem Plan, her
              plan to have multiple girls fall in love with Rito and someday all
              marry him.
            </p>{" "}
            <br />
            <p>
              At school, she also meets Mea Kurosaki, another transformation
              weapon of the same program that created Yami, hence, her little
              sister. She has been sent to Earth by her master Nemesis to take
              Yami away and revive the old heartless/murdering self that she
              once was. However, despite her cheerful facade, Mea is also
              confused and conflicted deep down, perhaps more so than Yami. Yami
              does not show much attachment to her newly discovered little
              sister, but she encourages Mea to learn to live surrounded by
              others and open up to friends.
            </p>{" "}
            <br />
            <p>
              Eventually, Tearju learns of Eve's presence on Earth, and soon
              arrives to become a teacher at Sainan High, in the hopes of
              finally reuniting with her. Although aware of each other being
              nearby, they remain reluctant to face each other directly. Yami
              forgives Tearju for escaping the organization without her, and
              says that she is relieved that Tearju is alive and well. But their
              reunion and relationship still remain hesitant and awkward at
              best. Yami did not return to school again until Tearju becomes her
              homeroom teacher, and after much convincing from Rito.
            </p>{" "}
            <br />
            <p>
              Recently, in Darkness Chapter 37, Mea was forced to use her
              transformation powers in front of many others to save the school
              from a micro black hole. Yami then appeared and introduced Mea as
              her little sister. Mea was then warmly welcomed by all of the
              students present.
            </p>{" "}
            <br />
            <p>
              In Darkness Chapter 39, just when Yami felt accepted by everyone
              and no longer sees herself as a weapon, the activation of the
              "Darkness Transformation" begins. It's stated the cause of it is
              because Yami had a "peace of mind", something a weapon should not
              have and the heartfelt acceptance of it. When the transformation
              is complete, not only has her appearance changed (much more erotic
              clothing, and the horns on her head), but her personality changes
              as well to a more psychotic and perverted attitude. Yami brings
              Rito over through a wormhole she created and desires to have him
              do more ecchi things to her. She then expresses her love for Rito,
              her target, by molesting all of the girls around him, with the
              intention of giving him a fitting and ecchi place to die.{" "}
            </p>{" "}
            <br />
            <p>
              Lala arrives to defend Rito. A fight ensues between Yami and Lala,
              and after a series of exchanges between Yami's perverted tactics
              and Lala's inventions, Yami attacks Lala with enough force to
              destroy the whole planet, which Lala's tail laser barely managed
              to deflect. After using her tail laser at full power, Lala is
              reduced to a body of a child. Mea, Nana and Momo arrive to stop
              Yami. Mea deduces that Yami's obsession with Rito and newly
              perverted tendencies are caused by a bug inside her as a result of
              Rito's influence on her and her feelings for Rito. She comes up
              with a plan to have Rito stimulate the bug inside Yami to make her
              return to normal by doing one of the few things he's good at:
              molesting her! Though Yami is confident that the innocent Rito
              wouldn't have the nerves to do shameless things to her of his own
              will. After Mea, Nana and Momo join together to create an opening,
              Rito desperately suppresses his usual character and begins his
              shameless assault on Yami, groping and molesting her relentlessly
              until she is overwhelmed with stimulation, much to her surprise.
              After a while of relentless groping, eventually Yami slaps Rito
              and reminds him that she hates ecchi, signifying that she has
              returned to normal, just in time for Mikan to arrive and find her
              in a perverted-looking outfit.{" "}
            </p>{" "}
            <br />
            <p>
              After peace returns to their lives, Yami goes around the school to
              apologize to all of the students whom she troubled during her
              Darkness transformation, including Lala, whom she gives a box full
              of milk bottles to help her grow back to her normal body size. She
              is also reluctant to thank Rito, whom she owes for returning her
              back to normal. She attempts to thank him, but his usual blunders
              and clumsiness angers her again, and she angrily reminds him that
              he is still her target and that she has no feelings for him,
              despite what she said during her Darkness transformation.{" "}
            </p>{" "}
            <br />
            <p>
              Ever since she has returned to normal from her Darkness
              transformation, Yami's personality displays significant changes.
              While she is still mostly her usual self, she now has stronger
              tsundere tendencies, mostly regarding Rito. She tries to be more
              respectful to Rito, but only to end up shouting in angry outbursts
              instead. Mea encourages her to become more friendly with him, and
              after getting unwanted advice about love from Mikado, Yami
              reluctantly approaches Rito again. As expected, her attempts to
              become friendlier with him are awkward at best, and ends with yet
              another perverted accident. Yami angrily storms off, but will
              likely try to becomes friends with him again.{" "}
            </p>{" "}
            <br />
            <p>
              Yami eventually admits to Mikan she is in love with Rito. Both
              Mikan and Mea now support her crush on him, with the latter
              telling her to stop informing him he is her target and instead
              admit to him she loves him. She is later informed by Mikan that
              Kuro is targeting Rito; she later meets up with Kuro, Rito, Mea
              and Nemesis and activates her Darkness transformation, this time
              out of her own will and more quickly than previously.
            </p>{" "}
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
