import React, { useEffect, useState } from "react";

export const BlueArchive = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="bg-[url(Blue-Archive/bluearchive.jpg)] bg-cover bg-no-repeat bg-fixed min-h-screen flex flex-col">
      {/* Header */}

      <h1 className="text-2xl font-bold">Sensei Welcome to Kivtek!</h1>
      <nav className="mr-auto flex gap-6">
        <a href="#" className="hover:underline">
          Explore
        </a>
        <a href="#" className="hover:underline">
          Blue Archive
        </a>
        <a href="#" className="hover:underline">
          Technology
        </a>
        <a href="#" className="hover:underline">
          Menu
        </a>
      </nav>

      <div className="flex flex-1 justify-center items-start px-8 py-8 gap-8">
        {/* Sidebar */}

        {/* Main Content */}
        <main className="flex-1 max-w-5xl bg-black bg-opacity-80 rounded-lg p-8 text-white shadow-lg">
          <div className="flex flex-col items-start mb-4">
            <img
              src="https://static.wikia.nocookie.net/blue-archive/images/e/e6/Site-logo.png/"
              alt="Blue Archive"
              className="h-12 w-auto mb-2"
            />

            <h2 className="text-3xl text-[#06bbfa]">Blue Archive</h2>
          </div>
          <div className="mb-4 flex justify-center items-center">
            <span className="bg-[#02d3fb]  border-2  border-[#357ff3] text-black font-extrabold rounded px-2 py-1 text-xs mr-2">
              Overview
            </span>
            <span className="  border-2  border-[#357ff3] text-[#357ff3] font-extrabold rounded px-2 py-1 text-xs mr-2">
              Live
            </span>
            <span className=" border-2  border-[#357ff3] text-[#357ff3] font-extrabold rounded px-2 py-1 text-xs mr-2">
              Shorts
            </span>
            <span className="  border-2  border-[#357ff3] text-[#357ff3] font-extrabold rounded px-2 py-1 text-xs mr-2">
              Gallery
            </span>
          </div>
          <div className="flex justify-center mb-4">
            <img
              src="Blue-Archive/Blue_Archive_KR_logo_(white_text).png"
              alt=""
            />
          </div>
          <div className="flex items-start gap-6 ">
            <div className="flex-1">
              <p className="mb-8 max-w-[500px] text-sm text-white">
                <b>Blue Archive</b> (블루 아카이브) is a Real-time Strategy
                Gacha RPG developed by MX Studio under the NEXON GAMES label and
                first published by Yostar in Japan. It was released in 04
                February 2021.
              </p>
              <p className="mb-8 max-w-[500px] text-sm text-white">
                The Global version of the game was self-published by Nexon on
                November 8th, 2021, with language support available in English,
                Traditional Chinese, Thai and the original Korean text.
              </p>
              <p className=" max-w-[500px] text-sm text-white">
                A Chinese version of the game was released in August 3rd, 2023
                in Simplified Chinese, published by Yostar.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="Blue-Archive/bluearchiveart.jpg"
                alt="First Visual"
                className="w-48 rounded mb-2 mr-16"
              />
              <span className="text-xs flex flex-col items-center text-white text-center mr-16">
                First Visual <br /> Constant Moderato
              </span>
            </div>
          </div>
          <nav className="w-72 mt-5 border border-gray-700 rounded mb-6">
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-700">
              <span className="font-semibold text-white flex items-center text-sm">
                <svg
                  className="w-4 h-4 mr-1 text-white"
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
              <button className="text-xs text-[#357ff3] hover:underline font-semibold">
                [hide]
              </button>
            </div>
            <ol className=" list-inside px-5 py-3 text-white text-sm space-y-1">
              <li>
                <a href="#general-information" className="hover:underline">
                  1. General Information
                </a>
              </li>
              <li>
                <a href="#staff" className="hover:underline">
                  2. Staff
                </a>
              </li>
              <li>
                <a href="#history" className="hover:underline">
                  3. History
                </a>
                <ol className=" list-inside pl-5 mt-2 space-y-1">
                  <li>
                    <a href="#pre-registration" className="hover:underline">
                      3.1. Pre-Registration
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#gameplay" className="hover:underline">
                  4. Gameplay
                </a>
              </li>
              <li>
                <a href="#trivia" className="hover:underline">
                  5. Trivia
                </a>
              </li>
              <li>
                <a href="#see-also" className="hover:underline">
                  6. See Also
                </a>
              </li>
              <li>
                <a href="#external-links" className="hover:underline">
                  7. External Links
                </a>
                <ol className=" list-inside pl-5 mt-2 space-y-1">
                  <li>
                    <a href="#official-websites" className="hover:underline">
                      7.1. Official Websites
                    </a>
                  </li>
                  <li>
                    <a
                      href="#official-social-medias"
                      className="hover:underline"
                    >
                      7.2. Official Social Medias
                    </a>
                    <ol className=" list-inside pl-5 mt-2 space-y-1">
                      <li>
                        <a href="#jp" className="hover:underline">
                          7.2.1. JP
                        </a>
                      </li>
                      <li>
                        <a
                          href="#global-korea-thailand-taiwan"
                          className="hover:underline"
                        >
                          7.2.2. Global/Korea/Thailand/Taiwan
                        </a>
                      </li>
                      <li>
                        <a href="#china" className="hover:underline">
                          7.2.3. China
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a
                      href="#known-staffs-social-medias"
                      className="hover:underline"
                    >
                      7.3. Known Staffs Social Medias
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#navigation" className="hover:underline">
                  8. Navigation
                </a>
              </li>
            </ol>
          </nav>
          {/* Add more sections/content as needed */}
          <h3
            className="text-2xl font-bold border-b border-b-gray-700 text-[#06bbfa]"
            id="general-information"
          >
            General Information
          </h3>
          <p className="mt-3">
            Producer{" "}
            <a href="#" className="text-[#3e7af2] hover:underline">
              Kim Yong-ha's
            </a>{" "}
            (who made Qurare : MAGIC LIBRARY), new collective mobile game that
            was being developed under the name 'Project MX' by a company called
            NEXON GAMES in Korea.
          </p>
          <p className="mt-8">
            The game is described as "An RPG about finding miracles in everyday
            life."
          </p>
          <h3
            className="text-2xl font-bold border-b border-b-gray-700 text-[#06bbfa] mt-8"
            id="staff"
          >
            Staff
          </h3>
          <div className="mt-3 ">
            <li>
              <strong>Story Scenario Writer</strong> ~ Isakusan
            </li>
            <li>
              <strong>Illustrators</strong> ~ Mx2j, Hwansang, DoReMi and many
              more.
            </li>
            <li>
              <strong>Four-cut Manga</strong> ~ 純粋な不純物
            </li>
          </div>
          <h3
            className="text-2xl font-bold border-b border-b-gray-700 text-[#06bbfa] mt-8"
            id="history"
          >
            History
          </h3>
          <p className="mt-8">
            The game was first introduced by NAT Games (later known as Nexon
            Games) and Yostar by its initial name, Project MX. The announcement,
            alongside the first promotion video and arts was released in
            February 2020. Yostar announced the mobile game and held closed beta
            tests for the Android version in July 2020, where it is now known by
            its current name as Blue Archive. Initially scheduled to be released
            in 2020, it was later moved to February 4, 2021.
          </p>
          <p className="mt-8">
            A worldwide version of the game was announced in August 2021,
            surpassing one million pre-registrations ahead of its release. The
            version, which includes English as well as Korean, Traditional
            Chinese and Thai language support was released on November 8 of the
            same year by Nexon.
          </p>
          <p className="mt-8">
            On November 11, 2022, Nexon updated the ratings of the worldwide
            version of the game to "Mature" from the original "Teen" rating,
            while releasing a separate "Teen"-rated version of the game,
            particularly due to its rating issues in Korea. The "Teen" rating
            version has some content changes compared to the original release.
          </p>
          <p className="mt-8">
            A Simplified Chinese version of the game was revealed to be in
            development in March 2023, as the Chinese authority released a
            statement allowing the game to be released in China. The game
            website went live alongside the first preview on March 31, 2023,
            with pre-registrations opening the same day. A closed beta test
            happened between June and July 2023, and on August 3, 2023, the game
            finally went live in China as an open beta. The Chinese version is
            published by Yostar.
          </p>
          <p className="mt-8">
            In October 2023, Nexon announced that the Global version would be
            available in the Galaxy Store for Samsung phones. This version was
            released on October 31.
          </p>
          <p className="mt-8">
            On April 11, 2025, it was announced that Blue Archive would be
            receiving a PC port, complete with intents to fully voice the main
            story in Korean.
          </p>
          <h3
            className="text-2xl font-bold  border-b-gray-700 text-[#06bbfa] mt-8"
            id="pre-registration"
          >
            Pre-Registration
          </h3>
        </main>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-40 right-6 z-50 bg-[#DB49AC] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-pink-500 focus:outline-none"
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
      )}
    </div>
  );
};
