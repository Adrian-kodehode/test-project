import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Oshizu = () => {
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
        <div className="flex-1 text-black pl-8 pr-8 pt-8 max-w-4xl ">
          <h1 className="mb-5 text-3xl">Murasame Shizu (Oshizu)</h1>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              Information
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="yami_plot"
                className="text-[purple] hover:underline hover:text-black"
              >
                {" "}
                Plot
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="yami_relationships"
                className="text-[purple] hover:underline hover:text-black"
              >
                Relationships
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="yami_gallery"
                className="text-[purple] hover:underline hover:text-black"
              >
                Gallery
              </a>
            </div>
          </div>
          <p>
            <strong>Murasame Shizu</strong> usually addressed as{" "}
            <strong>"Oshizu"</strong> (お静) the O (お) is an honorific used to
            refer to women, is the ghost of a girl who died in the old abandoned
            school building 400 years ago. Since her meeting with Rito and the
            others, she begins exploring the world outside the old school
            building. Oshizu is aware of Haruna's crush on Rito by her ability
            to sense feelings while possessing another person and becomes very
            supportive towards cheering Haruna into confessing her feelings to
            him. Her real name is Murasame Shizu, but she likes to be called
            Oshizu better.
          </p>
          <nav className="w-52 mt-5 bg-white border rounded mb-6">
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
                <a href="#etymology" className="hover:underline">
                  Etymology
                </a>
              </li>
              <li>
                <a href="#trivia" className="hover:underline">
                  Trivia
                </a>
              </li>
            </ol>
          </nav>
          <div className="flex-1 text-black  max-w-2xl">
            <h2 className="text-2xl font-bold mb-3 border-b" id="appearance">
              Appearance
            </h2>
            <div className="flex flex-row items-start gap-6">
              <div className="flex flex-col items-center min-w-[160px]">
                <img
                  src="To Love Ru/oshizu.jpg"
                  alt=""
                  className="w-60 h-auto rounded"
                  onClick={() => window.open("To Love Ru/oshizu.jpg", "_blank")}
                />
              </div>
              <div className="flex-1">
                <p>
                  Oshizu has long blue-violet hair and irises. In her ghost
                  form, she wears a white kimono and purple sash, she also has
                  light colored wisps floating around her, can be slightly
                  see-through and instead of legs she has a ghostly tail (though
                  during an OVA episode, her legs could be seen, though
                  comically when Yami accidentally "cut" her ghost tail down).
                  She looks the same in her human body only without any ghost
                  features, and when working at Mikado's clinic, she is seen
                  wearing a pink nurse's uniform. She always wears two beige
                  ribbons in her hair. Her artificial body's measurements are
                  82-56-81.
                </p>
              </div>
            </div>
            <br />
          </div>
          <div className="flex-1 text-black  max-w-2xl">
            <h2
              className="text-2xl font-bold mt-5 mb-3 border-b"
              id="personality"
            >
              Personality
            </h2>
            <p>
              Oshizu is sincere, kind, and very curious about the modern world
              and has a severe case of cynophobia (fear of dogs), likened to
              Sairenji Haruna's level of fear to the supernatural (who also has
              a pet dog), the cause of this is unknown. When frightened of other
              things, she can emit blasts of mental stress, blowing apart
              various objects and surroundings with her poltergeist power, she
              occasionally "disconnects" from her body during brief moments of
              excitement or being frightened by dogs. Oshizu can also be a bit
              of a blockhead because she easily misinterprets certain situations
              and can go off topic. Oshizu is quite determined about helping
              Haruna confess her love for Rito by using her powers. But that
              usually ends up in a perverted accident.
            </p>
            <br />
            <p>
              She is very old-fashioned as seen in OVA 1 and Ch. 102, when she
              used a Japanese brush to draw Japanese women.
            </p>
          </div>
          <h2 className="text-2xl font-bold mt-5 mb-3 border-b" id="history">
            History
          </h2>
          <p>
            Oshizu comes from an era that was described as a "living hell" due
            to a lot of people desperately starving from a famine due to a
            drought. The cause of her death is unknown. It is hinted in the
            4koma that she was used as a sacrifice to try to make it rain.
          </p>
          <br />
          <p>
            After 400 years, Oshizu "returns" to the living after Ryoko Mikado
            creates a prosthetic body for her to inhabit, built with biological
            qualities (looking and feeling like an actual, human body) and has
            become a recurring character in the series, even attending Sainan
            high. She currently works as an assistant for Mikado. In the first
            anime, Oshizu is not given a new body and her presence is limited,
            while in the OVA and Motto To Love-Ru and so on, she has her own
            body as she does in the manga.
          </p>
          <br />
          <h2 className="text-2xl font-bold mt-5 mb-3 border-b" id="powers">
            Powers and Abilities
          </h2>
          <div className="flex flex-row gap-6 items-start">
            <div className="flex-1">
              <p>
                Ghost Physiology: As a ghost, she is capable of flight,
                intangibility, psychokinesis, etc. while in her human body most
                of her ghost powers are limited but she is still able to use
                abilities such as psychokinesis and poltergeist. However, Mikado
                said that if Oshizu overuses her powers, her spirit would
                disappear. Although she technically has good intentional control
                over her powers, her vulnerability to distractions as well as
                her panics around dogs make her easily lose control, with
                disastrous results. Interestingly, when her powers go berserk,
                they inexplicably cause all kinds of perverted mishaps around
                Rito, such as stripping the clothes of girls in front of him, or
                throwing them over each other into a provocative position.
              </p>
            </div>
            <div className="flex flex-col items-center min-w-[200px]">
              <img
                src="https://static.wikia.nocookie.net/to-loveru/images/4/46/Ch37_pg38.jpg"
                alt=""
                className="w-48 h-auto rounded"
                onClick={() =>
                  window.open(
                    "https://static.wikia.nocookie.net/to-loveru/images/4/46/Ch37_pg38.jpg",
                    "_blank"
                  )
                }
              />
              <span className="mt-2 text-xs text-center block max-w-[12rem]">
                The usual result of Oshizu using her powers. And it will always
                be Rito who gets punished.
              </span>
            </div>
          </div>
          <br />
          <div className="ml-8">
            <li>
              <strong>Flight:</strong> A most basic ghost ability, Oshizu is
              capable of flying. However, she seems only capable of this after
              detaching herself from her artificial physical body. It is unknown
              to what height and distance she is able to fly, as she was never
              seen traveling far from the abandoned school building she was
              haunting, or from her synthetic body.
            </li>
            <li>
              <strong>Intangibility:</strong> Another basic ghost ability that
              lets her phase through walls, which she can also only do after
              detaching from her artificial body.{" "}
            </li>
            <div className="flex flex-row gap-6 items-start">
              <div className="flex-1">
                <li>
                  <strong>Possession:</strong> Oshizu is capable of possessing
                  others and control their movements. While she possesses
                  others, she can also enter their subconscious and look through
                  their memories and understand their feelings, especially
                  feelings towards others. This ability is similar to Mea's
                  Psycho-Dive. While no further details are given, it seems,
                  that this ability also brings possible danger of Oshizu
                  permanently fusing with soul of compatible person whose body
                  she possess, if she stays in that body for too long. As nearly
                  happened, when she accidentally possesed Haruna, and nearly
                  ended with Oshizu overwriting Haruna's consciousness, or
                  Oshizu herself being nearly consumed, when she tried possess
                  Mea. However in that case it could be also because Mea was
                  already possessed by Nemesis at that time.
                </li>
              </div>
              <div className="flex flex-col items-center min-w-[200px]">
                <img
                  src="To Love Ru/Haruna x Oshizu merge.jpg"
                  alt=""
                  className="w-48 h-auto rounded"
                />
                <span className="mt-2 text-xs text-center block max-w-[12rem]">
                  Oshizu accidentally possessing Haruna.
                </span>
              </div>
            </div>
            <li>
              <strong>Extrasensory Perception:</strong> Oshizu has extrasensory
              perception, which allows her to sense aura. She was able to sense
              the aura of another ghost that haunted Zastin's apartment. She was
              also able to sense the activation of Yami's Darkness
              Transformation even from a long distance.
            </li>
            <li>
              <strong>Concentrated Psychokinetic Power:</strong> By pointing
              with her fingers, she is able to move objects with her mind
              without any physical contact and create poltergeists. She can also
              use this to control the bodies of other people without possessing
              them. She can create huge forces of shockwaves that can blast
              through walls and create force fields strong enough to seal a
              micro black hole. Although when frightened she loses control over
              this power for a moment, often leading to perverted results.
            </li>
            <li>
              <strong>Psycho-Pyrokinesis:</strong> She can also use her
              psychokinesis to control the wisps floating around her (when in
              ghost form) to target her opponents and set them on fire similar
              to pyrokinesis. It's unknown if this affects other living things
              or just other spirits.{" "}
            </li>
            <li>
              <strong>Exorcism:</strong> Oshizu is also capable of exorcism,
              which she has shown by pulling out the spirit that possessed
              Zastin.
            </li>
            <li className="ml-8">
              Additionally, she can force a spirit back into its own body in a
              brief moment when it just leaves the body. Comically, she did that
              when the homeroom teacher Honekawa's spirit left his body,
              miraculously "reviving" him.
            </li>
          </div>
          <br />
          <p>
            <strong>Medical Skills:</strong> Due to being Mikado's assistant,
            Oshizu picked up some medical skills to be able to heal others. But
            she can be quite clumsy and would hurt others instead, especially
            when frightened.
          </p>
          <br />
          <h2 className="text-2xl font-bold mt-5 mb-3 border-b" id="etymology">
            Etymology
          </h2>
          <p>
            Her full name can literally be translated as "Silent Rain in the
            Village".
          </p>
          <br />
          <div className="ml-8">
            <li>
              <strong>Murasame</strong> means "town, village" (村) (
              <strong>mura</strong>) and "rain" (雨) (<strong>same</strong>),
              which literally means "passing shower" altogether; this may be a
              reference to her old-fashioned style.
            </li>
            <li>
              <strong>Shizu</strong> means "quiet" (静).
            </li>
          </div>
          <br />
          <h2 className="text-2xl font-bold mt-5 mb-3 border-b" id="trivia">
            Trivia
          </h2>
          <div className="ml-8 flex flex-row gap-6 items-start">
            <div className="flex-1">
              <li>
                She appeared in Mayoi Neko Overrun! as a customer (with Haruna).
              </li>
              <li>
                In Mayoi Neko Overrun! Murasame is the name of a family who owns
                an academy/orphanage, with excellent students and the most
                excellent would be adopted to the family. It's unknown if this is
                a connection to Oshizu's family name, though the kanji being the
                same hints towards this being the case.
              </li>
              <li>
                Being over 400 years old she is easily the oldest character of the
                series.
              </li>
              <li>
                It is unknown if she will age (and eventually die when she becomes
                old) just like any other human beings when she is in her new
                artificial body, or it is just her spirit will become feral once
                again after her "second death".
              </li>
              <li>
                In Chapter 153, when Rito inside Peke causes her to malfunction,
                Peke dresses Oshizu as Enma Ai from Hell Girl. This is a reference
                to the fact Oshizu and Enma share the same seiyuu, Noto Mamiko.
              </li>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center min-w-[200px]">
              <img
                src="https://static.wikia.nocookie.net/to-loveru/images/0/03/-MayoiNekoOverrun%21--ch06_008.png"
                alt=""
                className="w-48 h-auto rounded"
              />
            </div>
          </div>
        </div>

        {/* Right: Info card sidebar */}
        <div className="w-[350px] p-5 font-sans  top-8 mr-8">
          <div className="w-full border-4 border-[#DB49AC] rounded-lg bg-white shadow-lg flex flex-col items-center">
            <div className="text-center w-full">
              <h1 className="text-white bg-[#DB49AC] text-xl font-bold p-2 ">
                Murasame Shizu
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <img
                src="/To Love Ru/Shizu_Murasame_TLRD_Manga.png"
                alt="Murasame Shizu"
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
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      金色の闇 (イヴ)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Name
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Konjiki no Yami
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Planet
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Kurosu (2008 anime only)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Age
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      14-15 (manga) <br /> 24,000 Kurosu Years (2008 anime only)
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Birthday
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      December 24th
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Zodiac Sign
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Capricon
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Gender
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Female
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Height
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      153 cm
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Weight
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      45 kg
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Blood Type
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      AB
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Hair Color
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Blonde
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Eye Color
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Dark Red
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
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Sainan High School
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Class
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      1-B
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Education
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Currently attending Sainan High School
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Occupation
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Assassin <br />
                      Target:{" "}
                      <a href="/rito" className="text-[purple] ">
                        Yuuki Rito
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Relatives
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Doctor Tearju Lunatique <br />
                      Kurosaki Nea
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Martial Status
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Single
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Unusual Features
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Body Transformation <br />
                      "Darkness" Transformation
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
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Chapter 35
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      Anime Debut
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Episode 11
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
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Misato Fuken
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-[#DB49AC] text-white p-2 border border-[#9C2E7A] ">
                      English VA
                    </td>
                    <td className="bg-white text-center text-black p-2 border border-[#DB49AC] ">
                      Katelyn Barr
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
