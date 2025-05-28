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
          <h1 className=" text-3xl">Nana Astar Deviluke/Plot</h1>
          <p className="text-[purple] hover:underline hover:text-black mb-5">
            <a href="/mea">Nana Astra Deviluke</a>
          </p>
          <div className="flex flex-row mb-3 text-black">
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold  rounded-t">
              <a href="/mea" className="text-[purple]">
                Information
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold bg-[pink] rounded-t">
              <a
                href="/mea_plot"
                className=" hover:underline hover:text-black"
              >
                Plot
              </a>
            </div>
            
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/mea_relationships"
                className="text-[purple] hover:underline hover:text-black"
              >
                Relationships
              </a>
            </div>
            <div className="pr-5 pl-5 pt-1 border flex items-center justify-center border-black font-bold rounded-t">
              <a
                href="/nana_gallery"
                className="text-[purple] hover:underline hover:text-black"
              >
                Gallery
              </a>
            </div>
          </div>

          <div className="flex-1 text-black  max-w-2xl">
            <p>
              Unlike her sister, Yami, Mea has never known anything in her life
              other than being a living weapon. Her first memories are of waking
              up in a destroyed life pod and wandering throughout the rubble of
              the destroyed research station she was born in and meeting
              Nemesis, a living weapon from another project. Nemesis raised Mea
              to be a killer and that people like her have no place with
              humanity. Mea and Nemesis came to Earth to bring Yami back into
              space as the cold-hearted assassin again. At the beginning of To
              Love-Ru Darkness, Mea enrolled in Sainan High to watch over Yami
              and introduces herself to her as the next generation
              Transformation weapon, who can be considered Yami's little sister.
              While at Sainan High, she becomes the first friend of Nana Aster
              Deviluke, who enrolled with along with Momo and Yami.
            </p>
            <br />

            <p>
              While living on Earth and attending school with Nana, Mea
              maintains the conviction she learned from her master Nemesis that
              she is really a heartless living weapon, and believes that her
              usual cheerfulness and mischief are only a facade. However,
              maintaining her friendly behavior and being around friends at
              school slowly make her open herself up more to others. At school,
              she becomes acquainted with Nana's companions, her sister Momo,
              and Rito, Yami's supposed target. While investigating Rito, she
              discovers that Momo plans on adding Yami into a harem she is
              building for Rito, which goes against her plan to bring Yami back
              into space as an assassin again. As she continues to observe Yami,
              she becomes uneasy and confused with Yami's growing relationships
              with others. Yami soon reveals to Rito and Momo that Mea is her
              little sister, and she encourages Mea to open up to others.
            </p>
            <br />

            <p>
              Dr. Tearju Lunatique arrives to Earth and begins teaching at their
              school, still caring for Yami and hoping to reunite with her.
              Although Tearju is both Yami's and Mea's creator, she has never
              actually met Mea in person until her arrival at their school.
              Because Mea is essentially Yami's little sister, Tearju was
              quickly ready to consider Mea her little sister as well. However,
              Mea rejects her due to her loyalty to Nemesis and their plan to
              bring Yami back to their lives as killers.
            </p>
            <br />

            <p>
              Mea becomes very confused by her sister's choice to remain on
              earth living a peaceful life surrounded by friends, and though she
              does slowly come around to the idea, she maintains her desire for
              her sister to join her and become an assassin again. She
              stubbornly convinces herself that deep down, she is the heartless
              weapon Nemesis claim they truly are. But when Rito questions her
              master's teachings, Mea takes control of Rito with her Psycho-dive
              ability, and forces him to lick her body as punishment. However,
              she unintentionally shared with him her deeper feelings. When Rito
              discovers and reveals that deep down she is actually lost,
              confused and lonely, she angrily denies those feelings and insists
              that she is a heartless weapon.
            </p>
            <br />
            <p>
              Nana eventually witnesses Mea using her transformation powers in a
              fight and discovers that she is a Transformation Weapon like
              Golden Darkness, much to her shock. Mea then tells her that their
              friendship was fake and that they should stop pretending to be
              friends. She then leaves, leaving Nana heartbroken and seemingly
              cutting her ties with Nana. But when Nana approaches her again to
              restore their friendship, Mea was moved by her feelings and
              realizes that she cares for Nana too, and they have since
              reconciled and become friends again. Nemesis is aware and aproves
              of their relationship and permits Mea to think more independently.
              Mea has since become more open around her friends.
            </p>
            <br />

            <p>
              Mea initially keeps her identity as a transformation weapon a
              secret because she wants to hold onto the life and friendships she
              earned as Mea Kurosaki. However, in Darkness Chapter 37, everyone
              finds out her true identity when she uses her powers to save the
              school from a micro black hole. Yami introduces her to everyone as
              her little sister, and everyone welcomes her, not caring she's a
              transformation weapon.
            </p>

            <br />
            <p>
              In Darkness Chapter 39, just when Yami and Mea felt accepted by
              everyone and accepted their new peaceful lives, Yami's "Darkness"
              transformation activates, and Mea transforms and becomes Nemesis.
              Nemesis explains that Mea is a seperate personality that Nemesis
              created in order to better adapt being around other people.
              Because Mea has always appeared to see Nemesis face to face
              before, she was not aware that she and Nemesis were two minds in
              the same body, and Mea's personality is currently being supressed
              by the darkness inside Nemesis.
            </p>
            <br />

            <p>
              As the newly transformed Yami continues to go after Rito and cause
              all kinds of perverted chaos, Mea speaks to Nemesis inside her
              subconscious, insisting that Nemesis lied about Mea being her
              alternate personality, and demands her body back. Nemesis explains
              that when they first met, she was in a physically unstable
              condition and needed a physical vessel to stabilize herself, and
              so she fused herself into Mea. She plans to leave Mea's body after
              Darkness kills Rito, and then the three of them will be together.
              Mea attempts to persuade her from allowing Rito to die, but
              Nemesis remains unpersuaded.
            </p>
            <br />

            <p>
              While Mea cannot manage to regain control of her body by herself,
              she manages to gain control of a single hair, which she used to
              call Oshizu via psycho-dive. With Oshizu restraining Nemesis, Mea
              expresses her respect and gratitude to Nemesis. After she is free
              from Nemesis, she decides to stop Yami from killing Rito, but she
              cheerfully calls Nemesis "Neme-chan" before she leaves, much to
              Nemesis' surprise.
            </p>
            <br />

            <p>
              Mea reunites with Nana and Momo, and deduces that Yami's obsession
              with Rito and newly perverted tendencies are caused by a bug
              inside her as a result of Rito's influence on her and her feelings
              for Rito. And in order to end her rampage and bring her back to
              normal, Rito must stimulate her by attacking her with all of his
              perverted powers. After Mea, Nana and Momo join together to create
              an opening, Rito desperately suppresses his usual character and
              begins his shameless assault on Yami, groping and molesting her
              relentlessly until she is overwhelmed with stimulation. Yami
              finally returns to normal.
            </p>
            <br />

            <p>
              After things soon return to normal, Mea announces to Momo that she
              will help with the Harem Plan, much to Momo's shock and suspicion.
              The ever perverted Mea wants to experience the perverted powers
              that Rito displayed that managed to take down Yami. But also, she
              believes that Yami and Nana both love Rito, and decides to help
              them become more true to their feelings.
            </p>
            <br />

            <p>
              After the Darkness event, Mea notices that Yami is more
              emotionally reactive than usual, especially in regards to Rito,
              whom she still angrily denies having any feelings for. Mea tells
              Yami that Rito is tasked to tend to the schoolyard flowers, and
              suggest that Yami helps him to become better friends with him,
              which she initially refuses to do, but reluctantly decides to try
              later.
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
