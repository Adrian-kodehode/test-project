import React, { useEffect, useState } from "react";

export const Live = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const [selectedMonth, setSelectedMonth] = useState<string>("january");
  const [selectedYear, setSelectedYear] = useState<string>("2021");

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/Blue-Archive/bluearchive.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        imageRendering: "auto", // Prevents pixelation
      }}
    >
      {/* Header */}
      <header className="w-full  flex flex-col items-start justify-center pt-10 pl-40 relative">
        <div className="flex flex-row items-start gap-6">
          <img
            src="/Blue-Archive/Site-logo (5).png"
            alt="Blue Archive Logo"
            className="h-16 w-auto drop-shadow-lg"
          />
          <h1 className="text-lx pt-10 font-bold text-[#02d3fb] tracking-wide drop-shadow-md">
            Sensei Welcome to Kivotos!
          </h1>
        </div>
        <nav className="mt-4 flex gap-8 text-[#02d3fb] font-bold text-lg justify-center">
          <a href="#" className="hover:underline hover:text-white transition">
            EXPLORE
          </a>
          <a href="#" className="hover:underline hover:text-white transition">
            BLUE ARCHIVE
          </a>
          <a href="#" className="hover:underline hover:text-white transition">
            TERMINOLOGY
          </a>
          <a href="#" className="hover:underline hover:text-white transition">
            MENU
          </a>
          <a href="#" className="hover:underline hover:text-white transition">
            MISC
          </a>
        </nav>
      </header>
      <div className="flex flex-1 justify-center items-start px-8 py-8 gap-8">
        {/* Sidebar */}

        {/* Main Content */}
        <main className="flex-1 max-w-5xl bg-black bg-opacity-80 rounded-lg p-8 text-white shadow-lg">
          <div className="flex flex-col items-start mb-4">
            <h2 className="text-3xl text-[#06bbfa] mt-5 pb-20 drop-shadow">
              Blue Archive/Live
            </h2>
          </div>
          <div className="mb-6 flex justify-center items-center scale-100 ">
            <a
              href="/blue_archive"
              className="border-2 border-[#357ff3] text-[#357ff3] font-extrabold rounded px-4 py-1 text-base mr-2 hover:underline focus:outline-none"
            >
              Overview
            </a>
            <a
              href="/live"
              className="bg-[#02d3fb]  border-2 border-[#357ff3] text-black font-extrabold rounded px-4 py-1 text-base mr-2 hover:underline focus:outline-none"
            >
              Live
            </a>
            <a
              href="#shorts"
              className="border-2 border-[#357ff3] text-[#357ff3] font-extrabold rounded px-4 py-1 text-base mr-2 hover:underline focus:outline-none"
            >
              Shorts
            </a>
            <a
              href="#gallery"
              className="border-2 border-[#357ff3] text-[#357ff3] font-extrabold rounded px-4 py-1 text-base mr-2 hover:underline focus:outline-none"
            >
              Gallery
            </a>
            <a
              href="#student-profile"
              className="border-2 border-[#357ff3] text-[#357ff3] font-extrabold rounded px-4 py-1 text-base mr-2 hover:underline focus:outline-none"
            >
              Student Profile
            </a>
          </div>
          <div className="flex items-start gap-6 ">
            <div className="flex-1">
              <p className=" max-w-[500px] text-sm text-white">
                <b>Blue Archive Live</b> (ブルアカらいぶ) is a live broadcast
                that talks about upcoming events in both the game and in
                real-world.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="Blue-Archive/MP_Live.png"
                alt="First Visual"
                className="w-48 rounded mb-2 "
              />
            </div>
          </div>
          <nav className="w-52  border border-gray-700 rounded mb-6">
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
            <ol className="list-inside px-5 py-3 text-white text-sm space-y-1">
              <li>
                <a href="#general-information" className="hover:underline">
                  1. General Information
                </a>
              </li>
              <li>
                <a href="#list" className="hover:underline">
                  2. List
                </a>
                <ol className="list-inside pl-5 mt-2 space-y-1">
                  <li>
                    <a href="#episode-list" className="hover:underline">
                      2.1. Episode List
                    </a>
                  </li>
                  <li>
                    <a href="#livestream-list" className="hover:underline">
                      2.2. Livestream List
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#credits" className="hover:underline">
                  3. Credits
                </a>
              </li>
              <li>
                <a href="#references" className="hover:underline">
                  4. References
                </a>
              </li>
              <li>
                <a href="#trivia" className="hover:underline">
                  5. Trivia
                </a>
              </li>
              <li>
                <a href="#external-links" className="hover:underline">
                  6. External Links
                </a>
              </li>
              <li>
                <a href="#navigation" className="hover:underline">
                  7. Navigation
                </a>
              </li>
            </ol>
          </nav>
          {/* Add more sections/content as needed */}
          <h3
            className="text-2xl mb-3 font-bold border-b border-b-gray-700 text-[#06bbfa]"
            id="general-information"
          >
            General Information
          </h3>
          <p>
            The Livestreams usually happens when there is a major in-game
            announcement coming in the future. The stream opens and ends with
            Arona talking to sensei at the beginning and ending with the middle
            usually divided into three segments:
          </p>
          <div className="ml-5 mt-3 mb-3">
            <li>
              The first part usually talks either about recaps or upcoming
              merchandise.
            </li>
            <li>
              The second part (The best part), "New Information", will present
              upcoming features and events in the future.
            </li>
            <li>
              At the end of the announcement, a "Gameplay Corner" will be
              presented featuring one upcoming event.
            </li>
          </div>
          <p>
            The stream is hosted by a Yostar representative along with a few
            Seiyuu (Voice Actors) and Guests. The streams are scheduled randomly
            and although not stated, they usually happens around 3 months based
            on its past history.
          </p>
          <h3
            className="text-2xl font-bold mb-5 border-b border-b-gray-700 text-[#06bbfa] mt-8"
            id="list"
          >
            List
          </h3>
          <h4 className="text-xl font-bold mb-3 text-[#70caff]">
            Episode List
          </h4>
          <table
            className="w-full text-xs md:text-sm text-white border-2 border-[#02d3fb] rounded mb-8 bg-black border-separate border-spacing-0"
            id="episode-list"
          >
            <thead>
              <tr className="bg-[#02d3fb] text-black font-bold text-center">
                <th
                  colSpan={6}
                  className="px-2 py-2 border-b border-[#3e7af2] text-base text-black tracking-wide"
                >
                  Episodes List
                </th>
              </tr>
              <tr className="bg-[#02d3fb] text-black font-bold text-center">
                <th className="px-2 py-2 border border-gray-600 w-10">No.</th>
                <th className="px-2 py-2 border border-gray-600 w-72">
                  Title (Blue Archive Live!)
                </th>
                <th className="px-2 py-2 border border-gray-600 w-32">Host</th>
                <th className="px-2 py-2 border border-gray-600 w-48">Guest</th>
                <th className="px-2 py-2 border border-gray-600 w-24">
                  Duration
                </th>
                <th className="px-2 py-2 border border-gray-600 w-32">
                  Release Date
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  01
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Blue Archive Pre-Arrival Briefing – Special Live Broadcast
                  <br />
                  <span className="text-xs text-gray-300">
                    「ブルーアーカイブ」着任説明配会～特別生放送～
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Odajima Ai
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Konomi Kohara
                  <br />
                  Ogura Yui
                  <br />
                  Ohashi Ayaka
                  <br />
                  Miura Chiyuki
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  01:30:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  January 25th, 2021
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  02
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Blue Archive Live!
                  <br />
                  <span className="text-xs text-gray-300">
                    ブルアカらいぶ！
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Takatsuka Tomohito
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Kondō Reina
                  <br />
                  Haruka Ran
                  <br />
                  Shirasu Saho
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  01:30:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  March 19th, 2021
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  03
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  <span className="font-bold text-[#02d3fb] text-base">
                    0.5th Anniversary
                  </span>
                  <br />
                  <span className="font-semibold">
                    Half Anniversary Special
                  </span>
                  <br />
                  <span className="text-xs text-gray-300">
                    ブルアカらいぶ！はーふあにば記念スペシャル！
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Odajima Ai
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Kouzuki Haruka
                  <br />
                  Shirasu Saho
                  <br />
                  Ichiki Mitsuhiro
                  <br />
                  Sakamaki Manabu
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  02:00:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  July 24th, 2021
                </td>
              </tr>
              {/* Row 4 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  04
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  It's time for Supplementary Lessons SP
                  <br />
                  <span className="text-xs text-gray-300">
                    ブルアカらいぶ！ 補習のお時間です！SP
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Odajima Ai
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Shirasu Saho
                  <br />
                  Kaihara Reina
                  <br />
                  Sakamaki Manabu
                  <br />
                  Takatsuka Tomohito
                  <br />
                  Ichiki Mitsuhiro
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  01:55:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  October 18th, 2021
                </td>
              </tr>
              {/* Row 4.5*/}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  4.5
                </td>
                {/* Title*/}
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Arona channel Episode 19 - Expanded Edition
                  <br />
                  <span className="text-xs text-gray-300">
                    アロナちゃんねる 拡大版 #19
                  </span>
                </td>
                {/* Host */}
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Arona
                </td>
                {/* Guest */}
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Shiroko <br />
                  Aru <br />
                  Hifumi
                </td>
                {/* Duration */}
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  00:35:00{" "}
                </td>
                {/* Release Date */}
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  December 24th, 2021
                </td>
              </tr>
              {/* Row 05*/}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  05
                </td>
                {/* Title*/}
                <td className="px-2 py-2 border border-gray-600 text-center">
                  <span className="font-bold text-[#02d3fb] text-base">
                    1st Anniversary
                  </span>
                  <br />
                  First Anniversary SP! ~Thanks for everything, Sensei!~
                  <br />
                  <span className="text-xs text-gray-300">
                    ブルアカらいぶ！ ふぁーすとあにばSP！～いつもありが <br />
                    とう、先生！～
                  </span>
                </td>
                {/* Host */}
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Sakamaki Manabu
                </td>
                {/* Guest */}
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Shirasu Saho <br />
                  Kouzuki Haruka <br />
                  Kaihara Reina <br />
                  Takatsuka Tomohito <br />
                  Ichiki Mitsuhiro
                </td>
                {/* Duration */}
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  03:20:00
                </td>
                {/* Release Date */}
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  January 21st, 202
                </td>
              </tr>
              {/* Row 5.5 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  5.5
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Mischievous☆Straight Debut Song "To the Shining MiLie"
                  <br />
                  <span className="text-xs text-gray-300">
                    イイタズラ☆ストレート デビュー曲 「キラメクMiLieヘ」
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  N/A
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Aru
                  <br />
                  Yuuka
                  <br />
                  Alice
                  <br />
                  Hifumi
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  00:08:10
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  April 01st, 2022
                </td>
              </tr>
              {/* Row 06 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  06
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  It's Time for Final Exam SP!
                  <br />
                  <span className="text-xs text-gray-300">
                    ブルアカらいぶ！期末テストの時期ですね！SP
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Sakamaki Manabu
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Shirasu Saho
                  <br />
                  Kouzuki Haruka
                  <br />
                  Gotou Ayasa
                  <br />
                  Ichiki Mitsuhiro
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  02:00:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  June 17th, 2022
                </td>
              </tr>
              {/* Row 07 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  07
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  <span className="font-bold text-[#02d3fb] text-base">
                    1.5th Anniversary
                  </span>
                  <br />
                  <span className="font-semibold">
                    1.5 Year Anniversary Special!
                  </span>
                  <br />
                  <span className="text-xs text-gray-300">
                    夏のブルアカらいぶ！1.5周年記念すぺしゃる！
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Sakamaki Manabu
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Shirasu Saho
                  <br />
                  Kouzuki Haruka
                  <br />
                  Miura Chiyuki
                  <br />
                  Gotou Ayasa
                  <br />
                  Takagawa Mina
                  <br />
                  Takatsuka Tomohito
                  <br />
                  Ichiki Mitsuhiro
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  03:20:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  July 16th, 2022
                </td>
              </tr>
              {/* Row 7.5 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  7.5
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Arona channel Episode 38 - Special Edition
                  <br />
                  <span className="text-xs text-gray-300">
                    アロナちゃんねる 特別版 #38
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Arona
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  N/A
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  00:16:25
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  September 23rd, 2022
                </td>
              </tr>
              {/* Row 08 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  08
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Autumn of Appetite! Autumn of Art! Autumn of the Blue Archive!
                  <br />
                  <span className="text-xs text-gray-300">
                    ブルアカらいぶ！～食欲の秋！芸術の秋！ブルアカの秋！SP～
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Sakamaki Manabu
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Hiromi Igarashi
                  <br />
                  Haruka Ran
                  <br />
                  Takagawa Mina
                  <br />
                  Ichiki Mitsuhiro
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  02:00:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  October 22nd, 2022
                </td>
              </tr>
              {/* Row 09 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  09
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Let's enjoy Christmas and New Year's Eve
                  <br />
                  <span className="text-xs text-gray-300">
                    ブルアカらいぶ！～クリスマスも年末年始も楽しもうSP！～
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Sakamaki Manabu
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Shirasu Saho
                  <br />
                  Gotou Ayasa
                  <br />
                  Kaihara Reina
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  01:30:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  December 22nd, 2022
                </td>
              </tr>
              {/* Row 10 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  10
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  <span className="font-bold text-[#02d3fb] text-base">
                    2nd Anniversary
                  </span>
                  <br />
                  <span className="font-semibold">
                    Second Anniversary Special (Sekando Aniba)
                  </span>
                  <br />
                  <span className="text-xs text-gray-300">
                    ブルアカらいぶ！せかんどあにばSP
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Sakamaki Manabu
                  <br />
                  Takatsuka Tomohito
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Kaihara Reina
                  <br />
                  Gotou Ayasa
                  <br />
                  Takagawa Mina
                  <br />
                  Haruka Ran
                  <br />
                  Miura Chiyuki
                  <br />
                  Ishigami Shizuka
                  <br />
                  Sato Satomi
                  <br />
                  Shirasu Saho
                  <br />
                  Kaihara Reina
                  <br />
                  Takatsuka Tomohito
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  07:00:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  January 22nd, 2023
                </td>
              </tr>
              {/* Row 11 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  11
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  We're Doing a Live Broadcast For 2 Months Straight ♪Special
                  <br />
                  <span className="text-xs text-gray-300">
                    ブルアカらいぶ！2か月連続で生放送やっちゃいます♪SP
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Sakamaki Manabu
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Ishigami Shizuka
                  <br />
                  Shirasu Saho
                  <br />
                  Gotou Ayasa
                  <br />
                  Ichiki Mitsuhiro
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  01:55:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  February 18th, 2023
                </td>
              </tr>
              {/* Row 12 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  12
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Cherry Blossom Blooms Special
                  <br />
                  <span className="text-xs text-gray-300">
                    ブルアカらいぶ！サクラ咲く、はるうららSP
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Sakamaki Manabu
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Terasawa Momoka
                  <br />
                  Kaihara Reina
                  <br />
                  Takagawa Mina
                  <br />
                  Ichiki Mitsuhiro
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  02:40:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  April 22nd, 2023
                </td>
              </tr>
              {/* Row 13 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  13
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Early Summer Special
                  <br />
                  <span className="text-xs text-gray-300">
                    ブルアカらいぶ！初夏♪SP
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Sakamaki Manabu
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Shirasu Saho
                  <br />
                  Aihara Arisa
                  <br />
                  Takatsuka Tomohito
                  <br />
                  Ichiki Mitsuhiro
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  02:00:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  June 12th, 2023
                </td>
              </tr>
              {/* Row 14 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  14
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  <span className="font-bold text-[#02d3fb] text-base">
                    2.5th Anniversary
                  </span>
                  <br />
                  <span className="font-semibold">Acchicchi Special</span>
                  <br />
                  <span className="text-xs text-gray-300">
                    夏のブルアカらいぶ！あっちっちSP
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Sakamaki Manabu
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Kaihara Reina
                  <br />
                  Inui Natsune
                  <br />
                  Miura Chiyuki
                  <br />
                  Gotou Ayasa
                  <br />
                  Takatsuka Tomohito
                  <br />
                  Ichiki Mitsuhiro
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  03:45:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  July 23rd, 2023
                </td>
              </tr>
              {/* Row 15 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  15
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Welcome to Academy City Special
                  <br />
                  <span className="text-xs text-gray-300">
                    ブルアカらいぶ！学園都市へようこそ！SP
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Sakamaki Manabu
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Sumi Tomomi Jiena
                  <br />
                  Aihara Arisa
                  <br />
                  Gotō Ayasa
                  <br />
                  Ichiki Mitsuhiro
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  02:45:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  October 20th, 2023
                </td>
              </tr>
              {/* Row 16 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  16
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Merikuri!
                  <br />
                  <span className="text-xs text-gray-300">
                    ブルアカらいぶ！めりくり！
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Sakamaki Manabu
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Kaihara Reina
                  <br />
                  Takagawa Mina
                  <br />
                  Shirasu Saho
                  <br />
                  Aihara Arisa
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  02:55:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  December 24th, 2023
                </td>
              </tr>
              {/* Row 17 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  17
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  <span className="font-bold text-[#02d3fb] text-base">
                    3rd Anniversary
                  </span>
                  <br />
                  <span className="font-semibold">
                    ~Thank you Very Much Sensei~ Special Stage
                    <br />
                    Day 1 &amp; Day 2
                  </span>
                  <br />
                  <span className="text-xs text-gray-300">
                    ブルアカふぇす！～3きゅーべりーまっち、先生♪～
                    スペシャルステージ Day1 &amp; Day2
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Sakamaki Manabu
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Aihara Arisa
                  <br />
                  Inui Natsun
                  <br />
                  Kaihara Reina
                  <br />
                  Gotō Ayasa
                  <br />
                  Shirasu Saho
                  <br />
                  Sumi Tomomi Jiena
                  <br />
                  Takagawa Mina
                  <br />
                  Ichiki Mitsuhiro
                  <br />
                  Takatsuka Tomohito
                  <br />
                  Ishigami Shizuka
                  <br />
                  Tanaka Minami
                  <br />
                  Taneda Risa
                  <br />
                  Terasawa Momoka
                  <br />
                  Tomonaga Akane
                  <br />
                  Hondo Kaede
                  <br />
                  Miura Chiyuki
                  <br />
                  Ishitobi Erika
                  <br />
                  Haruka Ran
                  <br />
                  Akabane Kenji
                  <br />
                  Mitsukiyo
                  <br />
                  KARUT
                  <br />
                  Nor
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  08:00:00
                  <br />
                  (2 Days)
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  January 20th, 2024
                  <br />
                  January 21st, 2024
                </td>
              </tr>
              {/* Row 18 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  18
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Haruurara, How Are You Preparing For Your New Life?
                  <br />
                  <span className="text-xs text-gray-300">
                    ブルアカらいぶ！はるうらら、新生活の準備いかがですか？SP
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Sakamaki Manabu
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Ishitobi Erika
                  <br />
                  Shirasu Saho
                  <br />
                  Gotō Ayasa
                  <br />
                  Ichiki Mitsuhiro
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  03:20:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  March 24th, 2024
                </td>
              </tr>
              {/* Row 19 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  19
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Itookashi☆Spring Trip to Kyoto SP
                  <br />
                  <span className="text-xs text-gray-300">
                    ブルアカらいぶ！いとおかし☆春の京都旅行！
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Sakamaki Manabu
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Aihara Arisa
                  <br />
                  Inui Natsune
                  <br />
                  Shirasu Saho
                  <br />
                  Gotō Ayasa
                  <br />
                  Ichiki Mitsuhiro
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  04:08:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  April 20th, 2024
                </td>
              </tr>
              {/* Row 20 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  20
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Zabigining Obusama SP!
                  <br />
                  <span className="text-xs text-gray-300">
                    ブルアカらいぶ！ざびぎにんぐおぶさまーSP！
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Sakamaki Manabu
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Miura Chiyuki
                  <br />
                  Ishitobi Erika
                  <br />
                  Aihara Arisa
                  <br />
                  Takatsuka Tomohito
                  <br />
                  Ichiki Mitsuhiro
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  03:05:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  June 23rd, 2024
                </td>
              </tr>
              {/* Row 21 */}
              <tr className="text-center align-middle">
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  21
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  <span className="font-bold text-[#02d3fb] text-base">
                    3.5th Anniversary
                  </span>
                  <br />
                  <span className="font-semibold">
                    Summer Blue Archive Live ~Happy Summer Showtime~ SP!
                  </span>
                  <br />
                  <span className="text-xs text-gray-300">
                    夏のブルアカらいぶ！はっぴ～さま～しょ～たいむ！SP
                  </span>
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  Sakamaki Manabu
                </td>
                <td className="px-2 py-2 border border-gray-600 text-center">
                  Gotou Ayasa
                  <br />
                  Shirasu Saho
                  <br />
                  Ishitobi Erika
                  <br />
                  Aihara Arisa
                  <br />
                  Takatsuka Tomohito
                  <br />
                  Sakata Shougo
                  <br />
                  Ichiki Mitsuhiro
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  04:08:00
                </td>
                <td className="px-2 py-2 border border-gray-600 align-middle">
                  July 21st, 2024
                </td>
              </tr>
            </tbody>
          </table>
          <h3
            className="text-2xl mb-5 font-bold border-b border-b-gray-700 text-[#70caff] mt-8"
            id="livestreams-list"
          >
            Livestream List
          </h3>
          <div className="w-full mb-8">
            {/* Timeline Years */}
            <div className="flex justify-between items-center border-b-4 border-[#357ff3] pb-1">
              {[
                { label: "2021", value: "2021" },
                { label: "2022", value: "2022" },
                { label: "2023", value: "2023" },
                { label: "2024", value: "2024" },
              ].map((year) => (
                <button
                  key={year.value}
                  onClick={() => {
                    setSelectedYear(year.value);
                    setSelectedMonth(
                      year.value === "2021"
                        ? "january"
                        : year.value === "2022"
                        ? "january"
                        : year.value === "2023"
                        ? "january"
                        : "january"
                    );
                  }}
                  className={`font-bold text-base focus:outline-none ${
                    selectedYear === year.value
                      ? "text-[#02d3fb] underline underline-offset-4 decoration-2 decoration-[#02d3fb]"
                      : "text-gray-200"
                  }`}
                  type="button"
                >
                  {year.label}
                </button>
              ))}
            </div>
            {/* Timeline Months */}
            <div className="flex justify-evenly items-center mt-5 mb-5 border-b-4 border-[#357ff3] pt-1">
              {(selectedYear === "2021"
                ? [
                    { label: "January", value: "january" },
                    { label: "March", value: "march" },
                    { label: "July", value: "july" },
                    { label: "October", value: "october" },
                    { label: "December", value: "december" },
                  ]
                : selectedYear === "2022"
                ? [
                    { label: "January", value: "january" },
                    { label: "April", value: "april" },
                    { label: "June", value: "june" },
                    { label: "July", value: "july" },
                    { label: "September", value: "september" },
                    { label: "October", value: "october" },
                    { label: "December", value: "december" },
                  ]
                : selectedYear === "2023"
                ? [
                    { label: "January", value: "january" },
                    { label: "February", value: "february" },
                    { label: "April", value: "april" },
                    { label: "June", value: "june" },
                    { label: "July", value: "july" },
                    { label: "October", value: "october" },
                    { label: "December", value: "december" },
                  ]
                : selectedYear === "2024"
                ? [
                    { label: "January", value: "january" },
                    { label: "March", value: "march" },
                    { label: "April", value: "april" },
                    { label: "June", value: "june" },
                    { label: "July", value: "july" },
                  ]
                : []
              ).map((month) => (
                <button
                  key={month.value}
                  onClick={() => setSelectedMonth(month.value)}
                  className={`font-bold text-base focus:outline-none ${
                    selectedMonth === month.value
                      ? "text-[#02d3fb] underline underline-offset-4 decoration-2 decoration-[#02d3fb]"
                      : "text-gray-200"
                  }`}
                  type="button"
                >
                  {month.label}
                </button>
              ))}
            </div>
            {/* Timeline Images */}
            {selectedYear === "2021" && (
              <>
                {selectedMonth === "january" && (
                  <div>
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_January_2021.png"
                      alt="Blue Archive Live January 2021"
                    />
                    <p className="mb-5">
                      <b>
                        {" "}
                        Blue Archive Pre-Arrival Briefing - Special Live
                        Broadcast
                      </b>{" "}
                      (『ブルーアーカイブ』着任前説明会～特別生放送～) is the
                      1st livestream celebrating the upcoming release of Blue
                      Archive on February 5th, 2021.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p>
                      This is the first live broadcast of Blue Archive! We will
                      be introducing the world of this title, playing the game
                      for the first time using the actual machine, and many
                      other information that will be disclosed for the first
                      time. <br /> Please look forward to it, sensei.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      January 25th, 2021 20:00 ~ 21:30 JST (01:30:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5">
                      <li>
                        Odajima Ai (Public Relation, Yostar) /
                        小田島愛（Yostar広報担当）
                      </li>
                      <li>
                        Konomi Kohara (
                        <a href="#" className="text-[#]">
                          Arona
                        </a>{" "}
                        ) / 小原好美（アロナ役）
                      </li>
                      <li>
                        Ogura Yui (
                        <a href="#" className="text-[#357ff3]">
                          Sunaookami Shiroko
                        </a>{" "}
                        ) / 小倉唯（シロコ役
                      </li>
                      <li>
                        Ohashi Ayaka (
                        <a href="#" className="text-[#357ff3]">
                          Kuromi Serika
                        </a>{" "}
                        ) / 大橋彩香（セリカ役）
                      </li>
                      <li>
                        Miura Chiyuki (
                        <a href="#" className="text-[#357ff3]">
                          Izayoi Nonomi
                        </a>{" "}
                        ) / 三浦千幸（ノノミ役）
                      </li>
                    </div>
                  </div>
                )}
                {selectedMonth === "march" && (
                  <div>
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_March_2021.png"
                      alt="Blue Archive Live March 2021"
                    />
                    <p className="mb-5">
                      <b>Blue Archive Live!</b> (ブルアカらいぶ！) is the 2nd
                      livestream.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p>
                      In Blue Archive Live, we will feature a look back at Blue
                      Archive with the performers, as well as the latest
                      information on the game! I hope you're looking forward to
                      it.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      March 19th, 2021 20:00 ~ 21:30 JST (01:30:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5">
                      <li>Takatsuka Tomohito (MC) / 高塚智人（MC）</li>
                      <li>
                        Kondō Reina (
                        <a href="#" className="text-[#357ff3]">
                          Rikuhachima Aru
                        </a>{" "}
                        ) / 近藤玲奈（アル役)
                      </li>
                      <li>
                        Haruka Ran (
                        <a href="#" className="text-[#357ff3]">
                          Hayase Yuuka
                        </a>{" "}
                        ) / 春花らん（ユウカ役）
                      </li>
                      <li>
                        Shirasu Saho (
                        <a href="#" className="text-[#357ff3]">
                          Kasuga Tsubaki
                        </a>{" "}
                        ) / 白砂沙帆（ツバキ役）
                      </li>
                    </div>
                  </div>
                )}
                {selectedMonth === "july" && (
                  <div>
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_July_2021.png"
                      alt="Blue Archive Live July 2021"
                    />
                    <p className="mb-5">
                      <b> Blue Archive Live! - Half Anniversary Special</b>
                      (ブルアカらいぶ！ はーふあにばスペシャル！) is the 3rd
                      livestream celebrating the game's half anniversary as well
                      as announcing upcoming new features and merchandises,
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      The Blue Archive will soon celebrate its six months of
                      release! The official live broadcast "Blue Archive Live!
                      Half Anniversary Special has been announced. In this live
                      broadcast, we plan to bring you the latest information on
                      the game and beyond! Please look forward to it, sensei!
                    </p>
                    <p>
                      In addition, if you tweet on Twitter during the broadcast
                      with the hashtag "#ブルアカらいぶ", your tweet will be
                      displayed on the live broadcast. As you watch the
                      broadcast, be sure to tweet your thoughts and comments on
                      the show!
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      July 24th, 2021 20:00 ~ 22:00 JST (02:00:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5">
                      <li>Odajima Ai (MC) / 小田島 愛（Yostar広報担当）</li>
                      <li>
                        Kouzuki Haruka (
                        <a href="#" className="text-[#357ff3]">
                          Hinomiya Chinatsu
                        </a>{" "}
                        ) / 香月 はるか（チナツ役)
                      </li>
                      <li>
                        Shirasu Saho (
                        <a href="#" className="text-[#357ff3]">
                          Kasuga Tsubaki
                        </a>{" "}
                        ) / 白砂沙帆（ツバキ役）
                      </li>
                      <li>Ichiki Mitsuhiro (Guest) / 市来 光弘（ゲスト）</li>
                      <li>Sakamaki Manabu (Guest) / 坂巻 学（ゲスト）</li>
                    </div>
                  </div>
                )}
                {selectedMonth === "october" && (
                  <div>
                    {" "}
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_October_2021.png"
                      alt="Blue Archive Live October 2021"
                    />
                    <p className="mb-5">
                      <b>
                        {" "}
                        Blue Archive Live! - It's time for Supplementary lessons
                        SP
                      </b>{" "}
                      (ブルアカらいぶ！ 補習のお時間です！SP) is the <br /> 4th
                      livestream.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      The official live broadcast "Blue Archive Live! - It's
                      time for Supplementary Lessons SP" has been announced. In
                      this live broadcast, we'll be bringing you the latest
                      information on the game and beyond! We're also going to
                      have gameplay! Please look forward to it, sensei!
                    </p>
                    <p>
                      In addition, if you tweet on Twitter during the broadcast
                      with the hashtag "#ブルアカ補習SP", your tweet will be
                      displayed on the live broadcast. As you watch the
                      broadcast, be sure to tweet your thoughts and comments on
                      the show!
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      October 18th, 2021 20:00 ~ 21:55 JST (01:55:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5">
                      <li>
                        Shirasu Saho (
                        <a href="#" className="text-[#357ff3]">
                          Kasuga Tsubaki
                        </a>{" "}
                        ) / 白砂沙帆（ツバキ役）
                      </li>
                      <li>
                        Kaihara Reina (
                        <a href="#" className="text-[#357ff3]">
                          Omagari Hare
                        </a>{" "}
                        ) / 貝原 怜奈（ハレ役）
                      </li>
                      <li>Sakamaki Manabu (Guest) / 坂巻 学（ゲスト）</li>
                      <li>Takatsuka Tomohito (Guest) / 高塚 智人（ゲスト）</li>
                      <li>Ichiki Mitsuhiro (Guest) / 市来 光弘（ゲスト）</li>
                      <li>Odajima Ai (MC) / 小田島 愛（Yostar広報担当）</li>
                    </div>
                  </div>
                )}
                {selectedMonth === "december" && (
                  <div>
                    {" "}
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_December_2021.png"
                      alt="Blue Archive Live December 2021"
                    />
                    <p className="mb-5">
                      <b> Arona channel Episode 19 - Expanded Edition</b>
                      (アロナちゃんねる 拡大版 #19) is 4.5th livestream. It is a
                      pre-recorded stream and an expanded version of{" "}
                      <a href="#" className="text-[#357ff3]">
                        Arona Channel
                      </a>
                      . Nevertheless, it does featured upcoming contents.{" "}
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      Sensei! It's an Expanded Edition of the Arona Channel,
                      released on December 24th at 8pm JST!
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      December 24th, 2021 20:00 ~ 20:35 JST (00:35:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5">
                      <li>
                        <a href="#" className="text-[#357ff3]">
                          Arona
                        </a>{" "}
                        / アロナ
                      </li>
                      <li>
                        <a href="#" className="text-[#357ff3]">
                          Shiroko
                        </a>{" "}
                        / シロコ
                      </li>
                      <li>
                        <a href="#" className="text-[#357ff3]">
                          Aru
                        </a>{" "}
                        / アル
                      </li>
                      <li>
                        <a href="#" className="text-[#357ff3]">
                          Hifumi
                        </a>{" "}
                        / ヒフミ
                      </li>
                    </div>
                  </div>
                )}
              </>
            )}
            {selectedYear === "2022" && (
              <>
                {selectedMonth === "january" && (
                  <div>
                    {" "}
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_January_2022.png"
                      alt="Blue Archive Live January 2022"
                    />
                    <p className="mb-5">
                      <b>
                        Blue Archive Live! - First Anniversary SP! ~Thanks for
                        everything, Sensei!~
                      </b>{" "}
                      (ブルアカらいぶ！
                      ふぁーすとあにばSP！～いつもありがとう、先生！～) is the
                      5th livestream.{" "}
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      Blue Archive will soon be celebrating its first
                      anniversary! Official live broadcast "Blue Archive Live!
                      Thank you for everything, Sensei! ～The official live
                      broadcast "Blue Archive!{" "}
                    </p>
                    <p className="mb-5">
                      In this live broadcast, we will provide you with the
                      latest information on the game, both inside and outside
                      the game, as well as gameplay! We'll also be announcing
                      the winning of the "#ブルアカ1周年アート" project that
                      we've been looking for on Twitter!
                    </p>
                    <p className="mb-5">
                      In addition, if you tweet on Twitter during the broadcast
                      with the hashtag "#ブルアカらいぶ1周年SP", your tweet
                      might be shown on the live broadcast! As you watch the
                      broadcast, be sure to tweet your thoughts and comments on
                      the show!
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      January 21th, 2022 19:00 ~ 21:20 JST (03:20:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5">
                      <li>
                        Shirasu Saho (
                        <a href="#" className="text-[#357ff3]">
                          Kasuga Tsubaki
                        </a>{" "}
                        ) / 白砂沙帆（ツバキ役）
                      </li>
                      <li>
                        Kouzuki Haruka (
                        <a href="#" className="text-[#357ff3]">
                          Hinomiya Chinatsu
                        </a>{" "}
                        ) / 香月 はるか（チナツ役)
                      </li>
                      <li>
                        Kaihara Reina (
                        <a href="#" className="text-[#357ff3]">
                          Omagari Hare
                        </a>{" "}
                        ) / 貝原 怜奈（ハレ役）
                      </li>
                      <li>Sakamaki Manabu (Guest) / 坂巻 学（ゲスト）</li>
                      <li>Takatsuka Tomohito (Guest) / 高塚 智人（ゲスト）</li>
                      <li>Ichiki Mitsuhiro (Guest) / 市来 光弘（ゲスト</li>
                    </div>
                  </div>
                )}
                {selectedMonth === "april" && (
                  <div>
                    {" "}
                    <img
                      src="Blue-Archive/Mischievous☆Straight.png"
                      alt="Mischievous☆Straight April 2022"
                    />
                    <p className="mb-5">
                      <b>
                        {" "}
                        Mischievous☆Straight Debut Song "To the Shining MiLie"
                      </b>
                      (イイタズラ☆ストレート デビュー曲 「キラメクMiLieヘ」) is
                      the 5.5 livestream. It is a pre-recorded April Fool stream
                      that features the band's debut.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      Sensei, is that a letter? It says… 'Please come to the
                      specified location at 12AM tomorrow'?
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      April 1st, 2022 00:00 ~ 00:08 JST (00:08:10)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5">
                      <li>
                        <a href="#" className="text-[#357ff3]">
                          Alice{" "}
                        </a>{" "}
                        / アリス
                      </li>
                      <li>
                        <a href="#" className="text-[#357ff3]">
                          Aru {" "}
                        </a>{" "}
                        / アル
                      </li>
                      <li>
                        <a href="#" className="text-[#357ff3]">
                          Yuuka{" "}
                        </a>{" "}
                        / ユウカ
                      </li>
                      <li>
                        <a href="#" className="text-[#357ff3]">
                          Hifumi
                        </a>{" "}
                        / ヒフミ
                      </li>
                    </div>
                  </div>
                )}
                {selectedMonth === "june" && (
                  <img
                    src="Blue-Archive/Blue_Archive_Live_-_June_2022.png"
                    alt="Blue Archive Live June 2022"
                  />
                )}
                {selectedMonth === "july" && (
                  <img
                    src="Blue-Archive/Blue_Archive_Live_-_July_2022.png"
                    alt="Blue Archive Live July 2022"
                  />
                )}
                {selectedMonth === "september" && (
                  <img
                    src="Blue-Archive/Blue_Archive_Live_-_September_2022.png"
                    alt="Blue Archive Live September 2022"
                  />
                )}
                {selectedMonth === "october" && (
                  <img
                    src="Blue-Archive/Blue_Archive_Live_-_October_2022.png"
                    alt="Blue Archive Live October 2022"
                  />
                )}
                {selectedMonth === "december" && (
                  <img
                    src="Blue-Archive/Blue_Archive_Live_-_December_2022.png"
                    alt="Blue Archive Live December 2022"
                  />
                )}
              </>
            )}
            {selectedYear === "2023" && (
              <>
                {selectedMonth === "january" && (
                  <img
                    src="Blue-Archive/Blue_Archive_Live_-_January_2023.png"
                    alt="Blue Archive Live June 2023"
                  />
                )}
                {selectedMonth === "february" && (
                  <img
                    src="Blue-Archive/Blue_Archive_Live_-_February_2023.png"
                    alt="Blue Archive Live July 2023"
                  />
                )}
                {selectedMonth === "april" && (
                  <img
                    src="Blue-Archive/Blue_Archive_Live_-_April_2023.png"
                    alt="Blue Archive Live September 2023"
                  />
                )}
                {selectedMonth === "june" && (
                  <img
                    src="Blue-Archive/Blue_Archive_Live_-_June_2023.png"
                    alt="Blue Archive Live October 2023"
                  />
                )}
                {selectedMonth === "july" && (
                  <img
                    src="Blue-Archive/Blue_Archive_Live_-_July_2023.png"
                    alt="Blue Archive Live December 2023"
                  />
                )}
                {selectedMonth === "october" && (
                  <img
                    src="Blue-Archive/Blue_Archive_Live_-_October_2023.png"
                    alt="Blue Archive Live January 2024"
                  />
                )}
                {selectedMonth === "december" && (
                  <img
                    src="Blue-Archive/Blue_Archive_Live_-_December_2023.png"
                    alt="Blue Archive Live March 2024"
                  />
                )}
              </>
            )}
            {selectedYear === "2024" && (
              <>
                {selectedMonth === "january" && (
                  <img
                    src="Blue-Archive/Blue_Archive_Live_-_January_Day_1_2024.png"
                    alt="Blue Archive Live January 2024"
                  />
                )}
                {selectedMonth === "march" && (
                  <img
                    src="Blue-Archive/Blue_Archive_Live_-_March_2024.png"
                    alt="Blue Archive Live March 2024"
                  />
                )}
                {selectedMonth === "april" && (
                  <img
                    src="Blue-Archive/Blue_Archive_Live_-_April_2024.png"
                    alt="Blue Archive Live April 2024"
                  />
                )}
                {selectedMonth === "june" && (
                  <img
                    src="Blue-Archive/Blue_Archive_Live_-_June_2024 (1).png"
                    alt="Blue Archive Live June 2024"
                  />
                )}
                {selectedMonth === "july" && (
                  <img
                    src="Blue-Archive/Blue_Archive_Live_-_July_2024.png"
                    alt="Blue Archive Live July 2024"
                  />
                )}
              </>
            )}
          </div>
        </main>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-40 right-6 z-50 bg-[#59deff] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-pink-500 focus:outline-none"
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
