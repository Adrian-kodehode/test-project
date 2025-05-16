import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Rito = () => {
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
          <h1 className="mb-5 text-3xl">Yūki Rito</h1>
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
            <strong>Yūki Rito</strong> is the main male protagonist of the To
            Love-Ru series, and its sequel, To Love-Ru Darkness. He is a normal
            16-year-old student of Sainan High, who has a big crush on Sairenji
            Haruna, to whom he attempted numerous times to confess to but has
            met failure each time. It was only by accident that he met Lala
            Satalin Deviluke, an alien princess he accidentally became engaged
            to.
          </p>
          <br />
          <p>
            Rito used to be on the soccer team in junior high and was fairly
            good, but quit because he was constantly helping his father with his
            manga duties, and did not want to leave his little sister Yūki Mikan
            alone in the house. Mikan comments he is very good at the most
            "useless little things", like crane and festival games (e.g. hoops,
            catching fish, squirt guns). Along with the many useless little
            things Rito is good at, he is also an accomplished florist, gardener
            and horticulturist.
          </p>
          <br />
          <p>
            Rito's nature is an extremely loving one, yet also somewhat clumsy,
            where he always ends up unintentionally molesting or groping the
            many girls in the series. He is generally very kind, thoughtful and
            has a lot of respect for women, though mostly by intention, and not
            so much by a success. Due to his shyness around girls, he is very
            awkward around women and has great difficulty maintaining his
            composure around any sort of stimulating situation. Even without
            interference from Lala's inventions, Oshizu's psychic powers, or
            Celine jumping into his face, Rito is individually clumsy enough to
            trip over absolutely nothing, and possesses extraordinary skill in
            accidentally reaching his hands or face into the breasts or other
            private parts of any girl within reach when he is falling. He is
            constantly viewed as a "pervert" but unknowingly, his kindliness is
            what wins him the affections of most of the girls in the series.
          </p>
          <br />{" "}
          <p>
            Over time he also comes to love Lala and knowing his feelings for
            Haruna, she suggests for him to be with both of them, because due to
            being engaged to her, he is next in line for the throne of Deviluke,
            which would make polygamy legal for him. In{" "}
            <strong>To Love-Ru Darkness</strong>, Lala's little sister Momo also
            falls in love with Rito and expands Lala's initial idea into her
            harem plan, where she and all the other girls who love Rito can be
            with him.
          </p>
          <br />
          <p>
            As of Chapter 61 of Darkness, Rito became Nemesis' Trans-Fusion host
            after he offered her his body as a temporary home until she
            recovered enough power to retain a physical form. Nemesis inside
            Rito knew that he has feelings for Haruna, so she created an
            atmosphere so under such circumstances they finally confessed to
            each other (Chapter 75 & 76).
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
                <a href="#powers" className="hover:underline">
                  Powers and Abilities
                </a>
              </li>
              <li>
                <a href="#indecency" className="hover:underline">
                  Rito's Godly Indecency
                </a>
              </li>
              <li>
                <a href="#hobbies" className="hover:underline">
                  Hobbies and Interests
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:underline">
                  Transformations
                </a>
              </li>

              <li>
                <a href="#appellations" className="hover:underline">
                  Appellations
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
            Rito has golden brown eyes and orange-brown hair. In the original
            series the spikes on his hair were sharp and seemingly sticking out,
            but in To-Love-Ru Darkness his hair seems to be a lot neater and
            softer. He is shown to be of average height, if compared to other
            male students in his class and is taller than most of the female
            cast.
          </p>
          <br />
          <h2 className="text-2xl font-bold border-b mb-4" id="personality">
            Personality
          </h2>
          <p>
            Rito is kind and sweet and he always cares about people. He is
            virtuous, righteous, and withholds an incredible deal of respect
            towards others that surpasses his own idea of self-worth. He is
            courageous and persistent enough to risk his life to protect his
            friends well being, like when he protected Lala from her strong
            bodyguards Maul and Smutts or the hitman Kuro, saved Haruna from Ghi
            Bree and stood up to his deceptively monstrous form, traveled to a
            dangerous planet to find a cure for Celine when she was sick, and
            tried to save Rin from Bladix's control and broke her free from it,
            nearly having his own mind being taken.
          </p>
          <br />
          <p>
            Rito is especially caring and considerate towards women in
            particular, as he has shown disgust multiple times towards the
            concept of assaulting girls in any way (though he once violently
            threw Momo off his bed), and refuses to take advantage of and/or
            demean them intentionally, even if they give him permission to do
            so, unless it is absolutely necessary (such as when he had to bring
            Yami back to her old self when she was in her Darkness Form).
            Despite whatever struggles may come his way, he never gives up on
            those in danger. For these reasons, Lala stated that he's "the most
            dependable person in the universe". Rito also tends to help out
            those who dislike him, such as Yami, before she developed feelings
            for him, like when she was sick from over-using her powers and he
            carried her to Mikado's clinic. He has also shown his sympathy for
            her when he learned of her past, and expressed anger towards the
            organization that created and raised her to become a weapon, going
            as far as to say he will never "forgive them".
          </p>
          <br />
          <p>
            Being a normal boy, though, he initially can also easily and
            somewhat frequently lose his temper and snap at people when annoyed
            by their actions or words, even when he doesn't mean to. At first,
            he has shown to be angry and upset with Lala quite often, since he
            does have to put up with a lot of her hijinks, and even punched Ren
            in the face for thoughtlessly ruining what could have been a moment
            between him and Haruna, as well as for accidentally kissing him. His
            humble nature, in turn, can often have low self esteem about
            himself, building off of his rare short fuse. He rarely gives
            himself credit for his good deeds, tends to dwell on his mistakes
            more than anything when sad, hardly ever speaks up for or voices
            himself and, in general, doesn't do anything to truly stand up for
            himself.
          </p>
          <br />
          <p>
            His personality as a kind and loyal friend makes him quite
            trustworthy, and very persuasive which enables him to sway and
            befriend other people. Girls tend to feel a certain "warmth" when
            close to him or when he comforts them. He is a very charismatic
            person, always trying to make people feel better and understand
            others' points of view and changing it to a more positive outlook.
            He cares for plants and animals, as shown when he was the only one
            who didn't neglect to care for the school flowers, and when he
            rescued a cat from a tree, both of which persuaded Haruna and Yui
            that he is really a kind person.
          </p>
          <br />
          <p>
            Unfortunately, while girls appreciate and cherish his innocent
            nature, his innocence is arguably one of his worst traits. He
            rejects sexual pleasure often due to his nervous and celibacy-filled
            nature towards it, and he easily loses his composure around
            provocative situations being pushed into his face due to a moral
            sense of chivalrous respect for the opposite sex. As a result, he
            has grown to become very clumsy and shy around women, often getting
            flustered when faced with sudden upfront, erotic situations either
            out of guilt, unsure panic, confusion, or all three. Due to his
            unique clumsiness, his flustered reactions always lead to
            accidentally violating them in absurdly over-the-top ways. For these
            reasons, he is either regarded by other girls as an innocent boy and
            suitable love interest, or as an insolent boy and 'pervert', though
            never anything worse than this.
          </p>
          <br />
          <p>
            While sleeping, Rito acts as what Momo describes as a true Harem
            King. He has dreams about ice creams and marshmallows, and starts to
            grope and lick those who are sleeping next to him (mostly Momo),
            thinking them as marshmallows and/or ice cream. He even was about to
            kiss Momo, but she stopped him telling him their first kiss must be
            of his free will.
          </p>
          <br />
          <p>
            He seems to start getting more interested in sexual activities as
            seen in Darkness Chapter 73 where he has a dream about pushing Momo
            down and grabbing her breasts on purpose, while it actually was Lala
            in his futon at the time.
          </p>
          <br />
          <h2 className="text-2xl font-bold border-b mb-4" id="history">
            History
          </h2>
          <p>
            As a child, Rito would often go out and play football/soccer with
            friends, but because his parents weren't always around, which would
            leave Mikan all alone at home. Feeling bad for her as any good
            family member would, Rito would stay in to look after her. When he
            was thirteen, he took Mikan to the public pool that was crowded at
            the time, which caused the two to separate (although Mikan unaware
            of it). Rito was so worried that by the time he found her, his
            T-shirt was covered in sweat which Mikan noticed how desperately he
            searched for her, though she thought it was stupid of him she was
            also happy.
          </p>
          <br />
          <p>
            Rito has always assisted his father's work as a manga artist, and
            then would take Mikan to a shrine nearby to play. One time, during
            his fifth grade, while Yui was also at the shrine, Rito climbed a
            tree to help a cat who was stuck. This was the first time that Yui
            met Rito, although it was years later during a déjà vu that Yui
            remembered that the boy was, in fact, Rito. The cat that Rito saved
            from the tree was the same cat that Yui tried but couldn't save
            prior to Rito and Mikan's arrival at the shrine. She tried to ask
            some of the boys from her class to help her, but they rejected her
            because they hated Yui's strictness as their class representative,
            and left to play games instead. Because of that, Yui had the
            impression that all boys are bad. However, due to Rito's bravery,
            Yui's perception of boys changed, and she realized that not all of
            them are bad. Rito isn't aware that Yui was the same girl he met at
            the shrine.
          </p>
          <br />
          <p>
            During Rito's eighth grade, Rito became classmates with Haruna
            Sairenji. It was stated that this was the last time that Haruna and
            Rito became classmates (prior to the start of the series). In the
            anime, Rito has been in love with her when she was the only one who
            believed he did not vandalize the plants in the school garden.
            Haruna stated that she first noticed him during a school
            competition, when their class was lagging behind the other classes
            in a race, and he never gave up, and ended up winning the race for
            his class and won the trophy. Haruna also noticed Rito's care for
            the plants in the school, and noticed that Rito would always refill
            the water in the flower vase while no one else cared, and concluded
            that he must be a kind person.
          </p>
          <br />
          <p>
            Before Rito met Lala, it was stated that Rito had difficulty talking
            to girls, which led to his lack of confidence and clumsiness around
            them. However, because of Lala's friendliness, and Rito's growing
            relationship with Lala, most of Lala's female friends became Rito's
            as well, especially Haruna Sairenji (whom Rito had a crush on and
            could not even talk to prior to Lala's "descent") and is now able to
            have a proper conversation with them.
          </p>
          <br />
        </div>
        {/* Right: Info card sidebar */}
        <div className="w-[350px] p-5 font-sans  top-8 mr-8">
          <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white shadow-lg flex flex-col items-center">
            <div className="text-center  w-full">
              <h1 className="text-white bg-[#DB49AC] text-xl font-bold p-2 ">
                Yūki Rito
              </h1>
            </div>
            <div className="flex justify-center  w-full">
              <img
                src="To Love Ru/rito.jpg"
                alt="Yūki Rito"
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
                      結城 リト(梨斗)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Name
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Yūki Rito
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
                      October 16
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Zodiac Sign
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Libra
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Gender
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Male
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Height
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      164.5 cm
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Weight
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      62 kg
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
                      Light brown (manga, Motto To Love-Ru onwards in anime)
                      Brownish orange (First To Love-Ru anime and OVAs)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Eye Color
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Gold Brown
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
                      Sainan High
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
                      Currently attending Sainan High
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Occupation
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Highschool student
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Relatives
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Yūki Mikan (sister) <br />
                      Yūki Saibai (father) <br />
                      Yūki Ringo (mother) <br />
                      Celine (adoptive daughter/sister) <br />
                      Yuusaki Riko (female alter-ego) <br />
                      Gid Lucione Deviluke (father-in-law)(Pending) <br />
                      Sephie Michaela Deviluke (mother-in-law)(Pending) <br />
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Martial Status
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Lala Satalin Deviluke (fiancée) / (future wife) Momo Belia
                      Deviluke (harem plan candidate and mastermind)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Unusual Features
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      - Always grabs girl's private parts by accident <br />
                      - Frequently does perverted things in sleep <br />
                      - High agility beyond Earthling level <br />
                      - Immune to Charmian power <br />
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
                      To LOVE-Ru Chapter 1
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Anime Debut
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      To LOVE-Ru Episode 1
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
                      Akeno Watanabe
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      English VA
                    </td>
                    <td className="bg-white text-black text-center p-2 border border-[#DB49AC] ">
                      Ry McKeand
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
