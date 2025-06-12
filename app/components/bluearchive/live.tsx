import { Divide } from "lucide-react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/Blue-Archive/bluearchive.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
      }}
    >
      {/* Header */}
      <header className="w-full  flex flex-col items-start justify-center pt-10 pl-40 relative">
        <div className="flex flex-row items-start gap-6">
          <a href="/bluearchivehome">
            <img
              src="/Blue-Archive/Site-logo (5).png"
              alt="Blue Archive Logo"
              className="h-16 w-auto drop-shadow-lg"
            />
          </a>
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
                          Aru{" "}
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
                  <div>
                    {" "}
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_June_2022.png"
                      alt="Blue Archive Live June 2022"
                    />
                    <p className="mb-5">
                      <b>Blue Archive Live! - It's Time for Final Exam SP!</b>
                      (ブルアカらいぶ！期末テストの時期ですね！SP) is the 6th
                      livestream.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      This live broadcast will focus on information about newly
                      implemented in-game events! We will also be conducting
                      some gameplay! Sensei, please look forward to it!
                    </p>
                    <p className="mb-5">
                      In addition, if you tweet on Twitter during the broadcast
                      with the hashtag "#ブルアカ期末テストSP", your tweet might
                      be shown on the live broadcast! Please tweet your thoughts
                      and comments on the program as you watch the broadcast!
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      June 17th, 2022 20:00 ~ 22:00 JST (02:00:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5">
                      <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
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
                        Gotou Ayasa (
                        <a href="#" className="text-[#357ff3]">
                          Oono Tsukuyo
                        </a>{" "}
                        ) / 後藤 彩佐（ツクヨ役）
                      </li>
                      <li>Ichiki Mitsuhiro (Guest) / 市来 光弘（ゲスト）</li>
                    </div>
                  </div>
                )}
                {selectedMonth === "july" && (
                  <div>
                    {" "}
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_July_2022.png"
                      alt="Blue Archive Live July 2022"
                    />
                    <p className="mb-5">
                      <b>
                        Summer Blue Archive Live! - 1.5 Year Anniversary
                        Special!
                      </b>{" "}
                      (夏のブルアカらいぶ！1.5周年記念すぺしゃる！) is the 7th
                      livestream.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      Blue Archive will soon celebrate the 1.5 year anniversary
                      of its release! In this live broadcast, we will bring you
                      the latest information on the in-game events that will be
                      held to celebrate the 1.5 year anniversary, as well as the
                      latest information outside of the game!
                    </p>
                    <p className="mb-5">
                      In addition, if you tweet on Twitter during the broadcast
                      with the hashtag "#夏のブルアカらいぶ", your tweet might
                      be shown on the live broadcast! Please tweet your thoughts
                      and comments on the program as you watch the broadcast!
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      July 16th, 2022 19:00 ~ 22:20 JST (03:20:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5">
                      <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
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
                        ) / 香月 はるか（チナツ役）
                      </li>
                      <li>
                        Miura Chiyuki (
                        <a href="#" className="text-[#357ff3]">
                          Izayoi Nonomi
                        </a>{" "}
                        ) / 三浦 千幸（ノノミ役）
                      </li>
                      <li>
                        Gotou Ayasa (
                        <a href="#" className="text-[#357ff3]">
                          Oono Tsukuyo
                        </a>{" "}
                        ) / 後藤 彩佐（ツクヨ役）
                      </li>
                      <li>
                        Takagawa Mina (
                        <a href="#" className="text-[#357ff3]">
                          Otose Kotama
                        </a>{" "}
                        ) / 高川 みな（コタマ役）
                      </li>
                      <li>Takatsuka Tomohito (Guest) / 高塚 智人（ゲスト）</li>
                      <li>
                        {" "}
                        <s className="line-through">
                          Ichiki Mitsuhiro (Guest) / 市来 光弘（ゲスト){" "}
                        </s>
                        <b className="text-[#ff0000] italic">
                          Unbaled to attend due to his family member caught a
                          fever
                        </b>
                      </li>
                    </div>
                  </div>
                )}
                {selectedMonth === "september" && (
                  <div>
                    {" "}
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_September_2022.png"
                      alt="Blue Archive Live September 2022"
                    />
                    <p className="mb-5">
                      <b>⁠ Arona channel Episode 38 - Special Edition</b>
                      (アロナちゃんねる 特別版 #38) is 7.5th livestream. It is a
                      pre-recorded stream and a special version of{" "}
                      <a href="#" className="text-[#357ff3]">
                        Arona Channel
                      </a>
                      . Nevertheless, it does feature upcoming content.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      Sensei! A special edition of Arona Channel will be
                      released on September 23rd at 1900 JST. Look forward to
                      it!
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      September 23rd, 2022 19:00 ~ 19:16 JST (00:16:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5">
                      <li>
                        <a href="#" className="text-[#]">
                          Arona
                        </a>{" "}
                        / アロナ
                      </li>
                    </div>
                  </div>
                )}
                {selectedMonth === "october" && (
                  <div>
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_October_2022.png"
                      alt="Blue Archive Live October 2022"
                    />
                    <p className="mb-5">
                      <b>
                        {" "}
                        Blue Archive Live - October 2022Category:test⁠ Blue
                        Archive Live! ~ Autumn of Appetite! Autumn of Art!
                        Autumn of the Blue Archive!
                      </b>
                      (ブルアカらいぶ！～食欲の秋！芸術の秋！ブルアカの秋！SP～)
                      is the 8th livestream.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      Official live broadcast "Blue Archive Live! ~ Autumn of
                      Appetite! Autumn of Art! Autumn of the Blue Archive!" will
                      be broadcast!
                    </p>
                    <p className="mb-5">
                      In this live broadcast, we will bring you the latest
                      information on newly in-game events and other updates as
                      well as the latest information outside the game!
                    </p>
                    <p className="mb-5">
                      Teachers, please look forward to the live broadcast♪
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      October 22nd, 2022 19:00 ~ 21:00 JST (02:00:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5">
                      <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
                      <li>
                        Hiromi Igarashi (
                        <a href="#" className="text-[#357ff3]">
                          Sunohara Kokona
                        </a>
                        ) / 五十嵐 裕美（ココナ役）
                      </li>
                      <li>
                        Haruka Ran (
                        <a href="#" className="text-[#357ff3]">
                          Hayase Yuuka
                        </a>
                        ) / 春花 らん（ユウカ役）
                      </li>
                      <li>
                        Takagawa Mina (
                        <a href="#" className="text-[#357ff3]">
                          Otose Kotama
                        </a>
                        ) / 高川 みな（コタマ役）
                      </li>
                      <li>Ichiki Mitsuhiro (Guest) / 市来 光弘（ゲスト）</li>
                    </div>
                  </div>
                )}
                {selectedMonth === "december" && (
                  <div>
                    {" "}
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_December_2022.png"
                      alt="Blue Archive Live December 2022"
                    />
                    <p className="mb-5">
                      <b>
                        Blue Archive Live - December 2022Category:test⁠ Blue
                        Archive Live! ~ Let's enjoy Christmas and New Year's Eve
                      </b>{" "}
                      (ブルアカらいぶ！～クリスマスも年末年始も楽しもうSP！～)
                      is the 9th livestream.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      The official live broadcast "Blue Archive Live! ~ Let's
                      enjoy Christmas and New Year's Eve".
                    </p>
                    <p className="mb-5">
                      In this live broadcast, we will bring you the latest
                      information on newly in-game events and other updates as
                      well as the latest information outside the game!
                    </p>
                    <p className="mb-5">
                      Teachers, please look forward to the live broadcast♪
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      December 22nd, 2022 20:00 ~ 21:30 JST (01:30:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5">
                      <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
                      <li>
                        Shirasu Saho (
                        <a href="#" className="text-[#357ff3]">
                          Kasuga Tsubaki
                        </a>
                        ) / 白砂 沙帆（ツバキ役）
                      </li>
                      <li>
                        Gotou Ayasa (
                        <a href="#" className="text-[#357ff3]">
                          Oono Tsukuyo
                        </a>
                        ) / 後藤 彩佐（ツクヨ役）
                      </li>
                      <li>
                        Kaihara Reina (
                        <a href="#" className="text-[#357ff3]">
                          Omagari Hare
                        </a>
                        ) / 貝原 怜奈（ハレ役）
                      </li>
                    </div>
                  </div>
                )}
              </>
            )}
            {selectedYear === "2023" && (
              <>
                {selectedMonth === "january" && (
                  <div>
                    {" "}
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_January_2023.png"
                      alt="Blue Archive Live June 2023"
                    />
                    <p className="mb-5">
                      <b>
                        ⁠Blue Archive Live! ~ Second Anniversary Special
                        (Sekando Aniba) (ブルアカらいぶ！せかんどあにばSP)
                      </b>{" "}
                      is the 10th livestream. This live stream is a real-life
                      event and took place in Bellesalle Akihabara, Tokyo.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      The Blue Archive will soon celebrate its 2nd anniversary!
                      <br />
                      We will be bringing you the official live broadcast, "Blue
                      Archive Live! ~ Second Anniversary".
                      <br />
                      This time, we will celebrate our 2nd anniversary with a
                      public live broadcast from "Bellesalle Akihabara" in
                      Akihabara, Tokyo! We will prepare various plans and
                      present 3 stages.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      January 22nd, 2023 12:00 ~ 19:00 JST (07:00:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5 mb-2">
                      <li>
                        <b>
                          Blue Archive Live! 2nd Anni SP! Last minute Assembly
                          Part 1{" "}
                        </b>
                        (12:00 ~ 13:15)
                      </li>
                      <ul className="ml-10 mt-2 list-disc">
                        <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
                        <li>
                          Kaihara Reina (
                          <a href="#" className="text-[#357ff3]">
                            Omagari Hare
                          </a>{" "}
                          ) / 貝原 怜奈（ハレ役）
                        </li>
                        <li>
                          Gotou Ayasa (
                          <a href="#" className="text-[#357ff3]">
                            Oono Tsukuyo
                          </a>{" "}
                          ) / 後藤 彩佐（ツクヨ役）
                        </li>
                        <li>
                          Takagawa Mina (
                          <a href="#" className="text-[#357ff3]">
                            Otose Kotama
                          </a>{" "}
                          ) / 高川 みな（コタマ役）
                        </li>
                        <li>
                          Haruka Ran (
                          <a href="#" className="text-[#357ff3]">
                            Hayase Yuuka
                          </a>{" "}
                          ) / 春花 らん（ユウカ役）
                        </li>
                        <li>
                          Miura Chiyuki (
                          <a href="#" className="text-[#357ff3]">
                            Izayoi Nonomi
                          </a>{" "}
                          ) / 三浦 千幸（ノノミ役）
                        </li>
                      </ul>
                      <li className="mt-3">
                        <b>
                          Blue Archive Live! 2nd Anni SP! Last minute Assembly
                          Part 2
                        </b>
                        (14:00 ~ 15:00)
                      </li>
                      <ul className="ml-10 mt-2 list-disc">
                        <li>Takatsuka Tomohito (MC) / 高塚 智人（MC）</li>
                        <li>
                          Ishigami Shizuka (
                          <a href="#" className="text-[#357ff3]">
                            Joumae Saori
                          </a>{" "}
                          ) / 石上 静香（サオリ役）
                        </li>
                        <li>
                          Reina Kaihara (
                          <a href="#" className="text-[#357ff3]">
                            Omagari Hare
                          </a>{" "}
                          ) / 貝原 怜奈（ハレ役）
                        </li>
                        <li>
                          Gotou Ayasa (O
                          <a href="#" className="text-[#357ff3]">
                            ono Tsukuyo
                          </a>{" "}
                          ) / 後藤 彩佐（ツクヨ役）
                        </li>
                        <li>
                          Sato Satomi (
                          <a href="#" className="text-[#357ff3]">
                            Amami Nodoka
                          </a>{" "}
                          ) / 佐藤 聡美（ノドカ役）
                        </li>
                        <li>
                          Shirasu Saho (
                          <a href="#" className="text-[#357ff3]">
                            Kasuga Tsubaki
                          </a>{" "}
                          ) / 白砂 沙帆（ツバキ役）
                        </li>
                        <li>
                          Takagawa Mina (
                          <a href="#" className="text-[#357ff3]">
                            Otose Kotama
                          </a>{" "}
                          ) / 高川 みな（コタマ役）
                        </li>
                        <li>
                          Miura Chiyuki (
                          <a href="#" className="text-[#357ff3]">
                            Izayoi Nonomi
                          </a>{" "}
                          ) / 三浦 千幸（ノノミ役）
                        </li>
                      </ul>
                      <li className=" mt-3">
                        <b>
                          'Blue Archive Live! 2nd Anni SP! ~Peace already!
                          Sensei!~{" "}
                        </b>
                        (16:00 ~ 19:00)
                      </li>
                      <ul className="ml-10 mt-2 list-disc">
                        <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
                        <li>
                          Reina Kaihara (
                          <a href="#" className="text-[#357ff3]">
                            Omagari Hare
                          </a>{" "}
                          ) / 貝原 怜奈（ハレ役）
                        </li>
                        <li>
                          Kouzuki Haruka (
                          <a href="#" className="text-[#357ff3]">
                            Hinomiya Chinatsu
                          </a>{" "}
                          ) / 香月 はるか（チナツ役）
                        </li>
                        <li>
                          Gotou Ayasa (
                          <a href="#" className="text-[#357ff3]">
                            Oono Tsukuyo
                          </a>{" "}
                          ) / 後藤 彩佐（ツクヨ役）
                        </li>
                        <li>
                          Shirasu Saho (
                          <a href="#" className="text-[#357ff3]">
                            Kasuga Tsubak
                          </a>{" "}
                          i) / 白砂 沙帆（ツバキ役）
                        </li>
                        <li>
                          Takagawa Mina (
                          <a href="#" className="text-[#357ff3]">
                            Otose Kotama
                          </a>{" "}
                          ) / 高川 みな（コタマ役）
                        </li>
                        <li>
                          Haruka Ran (
                          <a href="#" className="text-[#357ff3]">
                            Hayase Yuuka
                          </a>{" "}
                          ) / 春花 らん（ユウカ役）
                        </li>
                        <li>
                          Takatsuka Tomohito (Guest) / 高塚 智人（ゲスト）
                        </li>
                      </ul>
                    </div>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Highlights
                    </h4>
                    <ul className="ml-5 list-disc mb-2">
                      <li>Opening and Ending message by Arona</li>
                      <li>Animated PV4</li>
                    </ul>
                    <div className="rounded-lg  shadow-lg">
                      <h4 className="text-lg text-[#02d3fb] font-bold mb-2 border-b border-[#02d3fb] pb-1">
                        Gameplay
                      </h4>
                      <ul className="ml-5 list-disc mb-4 text-sm leading-relaxed">
                        <li>
                          <span className="font-semibold text-white">
                            New Event
                          </span>
                          <ul className="ml-5 list-disc">
                            <li>
                              <a
                                href="#"
                                className="text-[#357ff3] font-semibold hover:underline"
                              >
                                F.SCT Strategic Battle
                              </a>
                              <span className="text-gray-300 ml-1">
                                (January 24th, 2023 to February 22nd, 2023)
                              </span>
                            </li>
                            <li>
                              <span className="text-gray-300">
                                This is a{" "}
                                <a
                                  href="#"
                                  className="text-[#357ff3] font-semibold hover:underline"
                                >
                                  Union Event
                                </a>{" "}
                                that coincides with the{" "}
                                <a
                                  href="#"
                                  className="text-[#357ff3] font-semibold hover:underline"
                                >
                                  Main Story
                                </a>
                                .
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li className="mt-3">
                          <span className="font-semibold text-white">
                            New Limited Banner
                          </span>
                          <ul className="ml-5 list-disc">
                            <li>
                              <a
                                href="#"
                                className="text-[#357ff3] font-semibold hover:underline"
                              >
                                You are the hope of an innocent night
                              </a>
                              <span className="text-gray-300 ml-1">
                                (January 24th, 2023 to January 31st, 2023)
                              </span>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-[#357ff3] font-semibold hover:underline"
                              >
                                Misono Mika
                              </a>
                              <span className="text-[#ffd700] font-bold ml-1">
                                (★★★)
                              </span>
                            </li>
                          </ul>
                        </li>
                      </ul>

                      <h4 className="text-lg text-[#02d3fb] font-bold mb-2 border-b border-[#02d3fb] pb-1">
                        New Unlimited Banner
                      </h4>
                      <ul className="ml-5 list-disc mb-4 text-sm leading-relaxed">
                        <li>
                          <span className="font-semibold text-white">
                            10 free pulls till 100th
                          </span>
                          <span className="text-gray-300">
                            {" "}
                            (January 31st, 2023 to February 10th, 2023)
                          </span>
                        </li>
                        <li>
                          <span className="font-semibold text-white">
                            Righteousness is as Hot as a Hot Spring!
                          </span>
                          <span className="text-gray-300">
                            {" "}
                            (January 31st, 2023 to February 10th, 2023)
                          </span>
                          <ul className="ml-5 list-disc">
                            <li>
                              <a
                                href="#"
                                className="text-[#357ff3] font-semibold hover:underline"
                              >
                                Shimokura Megu
                              </a>
                              <span className="text-[#ffd700] font-bold ml-1">
                                (★★★)
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span className="font-semibold text-white">
                            Justice is Sweet as Coffee
                          </span>
                          <span className="text-gray-300">
                            {" "}
                            (January 31st, 2023 to February 10th, 2023)
                          </span>
                          <ul className="ml-5 list-disc">
                            <li>
                              <a
                                href="#"
                                className="text-[#357ff3] font-semibold hover:underline"
                              >
                                Ogata Kanna
                              </a>
                              <span className="text-[#ffd700] font-bold ml-1">
                                (★★★)
                              </span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <h4 className="text-lg text-[#02d3fb] font-bold mb-2 border-b border-[#02d3fb] pb-1">
                        New Login
                      </h4>
                      <ul className="ml-5 list-disc mb-4 text-sm leading-relaxed">
                        <li>
                          <span className="font-semibold text-white">
                            2nd Anniversary Login Bonus!
                          </span>
                          <span className="text-gray-300">
                            {" "}
                            (January 24th, 2023 to February 22nd, 2023)
                          </span>
                        </li>
                      </ul>
                      <h4 className="text-lg text-[#02d3fb] font-bold mb-2 border-b border-[#02d3fb] pb-1">
                        New Campaign
                      </h4>
                      <ul className="ml-5 list-disc mb-4 text-sm leading-relaxed">
                        <li className="font-semibold text-white">
                          Triple Drop Campaign
                        </li>
                        <li className="font-semibold text-white">
                          Double Exp Campaign
                        </li>
                      </ul>
                      <h4 className="text-lg text-[#02d3fb] font-bold mb-2 border-b border-[#02d3fb] pb-1">
                        New Story
                      </h4>
                      <ul className="ml-5 list-disc mb-4 text-sm leading-relaxed">
                        <li>
                          <span className="font-semibold text-white">
                            Final Chapter: Where All Miracles Begin
                          </span>
                          <ul className="ml-5 list-disc">
                            <li className="text-gray-300">
                              Part 1 (January 22nd, 2023)
                            </li>
                            <li className="text-gray-300">
                              Part 2 (January 24th, 2023)
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <h4 className="text-lg text-[#02d3fb] font-bold mb-2 border-b border-[#02d3fb] pb-1">
                        New Features{" "}
                        <span className="text-xs text-gray-300 font-normal">
                          (January 24th, 2023)
                        </span>
                      </h4>
                      <ul className="ml-5 list-disc text-sm leading-relaxed">
                        <li className="text-white">Max level increase to 85</li>
                        <li className="text-white">
                          Added Stage L on{" "}
                          <span className="text-[#357ff3]">Base Defence</span>{" "}
                          and{" "}
                          <span className="text-[#357ff3]">
                            Credit Collection
                          </span>
                        </li>
                        <li className="text-white">
                          Pyroxene Package has been reset
                        </li>
                        <li className="text-white">
                          Teachers will be able to re-purchase Limited Pyroxene
                          Packs
                        </li>
                        <li className="text-white">
                          Added more{" "}
                          <span className="text-[#357ff3]">Unique Item</span>{" "}
                          for Shiroko, Neru, Suzumi and Junko
                        </li>
                        <li className="text-white">
                          Added New Furniture:{" "}
                          <span className="text-[#357ff3]">
                            Abydos Classroom Series
                          </span>
                        </li>
                        <li className="text-white">
                          Added more furniture interactions for Mika, Megu and
                          Kanna
                        </li>
                        <li className="text-white">
                          Added and updated new artwork for Nagisa and Sakurako
                        </li>
                      </ul>
                    </div>
                    <h4 className="text-lg text-[#357ff3] font-bold mt-5 mb-2">
                      Pyroxene Package
                    </h4>
                  </div>
                )}
                {selectedMonth === "february" && (
                  <div>
                    {" "}
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_February_2023.png"
                      alt="Blue Archive Live July 2023"
                    />
                    <p className="mb-5">
                      <b>
                        {" "}
                        ⁠ Blue Archive Live! ~ We're Doing a Live Broadcast For
                        2 Months Straight ♪Special
                      </b>{" "}
                      (ブルアカらいぶ！2か月連続で生放送やっちゃいます♪SP) is
                      the 11th livestream.{" "}
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      The official live broadcast "Blue Archive Live!"
                    </p>
                    <p className="mb-5">
                      {" "}
                      In this live broadcast, we will bring you the latest
                      information on newly in-game events and other updates as
                      well as the latest information outside the game!
                    </p>
                    <p className="mb-5">
                      {" "}
                      Teachers, please look forward to the live broadcast♪
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      February 18th, 2023 19:00 ~ 20:55 JST (01:55:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div>
                      <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
                      <li>
                        Ishigami Shizuka (
                        <a href="#" className="text-[#357ff3]">
                          Joumae Saori
                        </a>{" "}
                        ) / 石上 静香（サオリ役）
                      </li>
                      <li>
                        Shirasu Saho (
                        <a href="#" className="text-[#357ff3]">
                          Kasuga Tsubaki
                        </a>{" "}
                        ) / 白砂 沙帆（ツバキ役）
                      </li>
                      <li>
                        Gotou Ayasa (
                        <a href="#" className="text-[#357ff3]">
                          Oono Tsukuyo
                        </a>{" "}
                        ) / 後藤 彩佐（ツクヨ役）
                      </li>
                      <li>Ichiki Mitsuhiro (Guest) / 市来 光弘（ゲスト）</li>
                    </div>
                  </div>
                )}
                {selectedMonth === "april" && (
                  <div>
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_April_2023.png"
                      alt="Blue Archive Live September 2023"
                    />
                    <p className="mb-5">
                      <b>Blue Archive Live! ~ Cherry Blossom Blooms Special</b>{" "}
                      (ブルアカらいぶ！サクラ咲く、はるうららSP) is the 12th
                      livestream.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      The official live broadcast "Blue Archive Live!"
                    </p>

                    <p className="mb-5">
                      In this live broadcast, we will bring you the latest
                      information on newly in-game events and other updates as
                      well as the latest information outside the game!
                    </p>

                    <p className="mb-5">
                      Teachers, please look forward to the live broadcast♪
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      April 22nd, 2023 19:00 ~ 21:40 JST (02:40:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5">
                      <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
                      <li>
                        Terasawa Momoka (
                        <a href="#" className="text-[#357ff3]">
                          Hanaoka Yuzu
                        </a>{" "}
                        ) / 寺澤 百花（ユズ役）
                      </li>
                      <li>
                        Kaihara Reina (
                        <a href="#" className="text-[#357ff3]">
                          Omagari Hare
                        </a>{" "}
                        ) / 貝原 怜奈（ハレ役）
                      </li>
                      <li>
                        Takagawa Mina (
                        <a href="#" className="text-[#357ff3]">
                          Otose Kotama
                        </a>{" "}
                        ) / 高川 みな（コタマ役）
                      </li>
                      <li>Ichiki Mitsuhiro (Guest) / 市来 光弘（ゲスト）</li>
                    </div>
                  </div>
                )}
                {selectedMonth === "june" && (
                  <div>
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_June_2023.png"
                      alt="Blue Archive Live October 2023"
                    />
                    <p className="mb-5">
                      <b>Blue Archive Live! ~ Early Summer Special</b>
                      (ブルアカらいぶ！初夏♪SP) is the 13th livestream.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      The official live broadcast "Blue Archive Live!"
                    </p>
                    <p className="mb-5">
                      In this live broadcast, we will bring you the latest
                      information on newly in-game events and other updates as
                      well as the latest information outside the game!
                    </p>
                    <p className="mb-5">
                      Teachers, please look forward to the live broadcast♪
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      June 17th, 2023 19:00 ~ 21:00 JST (02:00:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="mt-5 ml-5 mb-5">
                      <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
                      <li>
                        Shirasu Saho (
                        <a href="#" className="text-[#357ff3]">
                          Kasuga Tsubaki
                        </a>{" "}
                        ) / 白砂 沙帆（ツバキ役）
                      </li>
                      <li>
                        Aihara Arisa (
                        <a href="#" className="text-[#357ff3]">
                          Shimokura Megu
                        </a>{" "}
                        ) / 愛原 ありさ（メグ役）
                      </li>
                      <li>Takatsuka Tomohito (Guest) / 高塚 智人（ゲスト）</li>
                      <li>Ichiki Mitsuhiro (Guest) / 市来 光弘（ゲスト）</li>
                    </div>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Highlights
                    </h4>
                    <div className="ml-5 mb-2">
                      <li>Opening and Ending message by Arona</li>
                      <li className="ml-5 mt-2 mb-2">Swimsuit arona returns</li>
                      <li>New animated PV for the next event</li>
                      <li>
                        Blue Archive will participate in Aomori Nebuta Festival
                        from August 02nd, 2023 to August 07th, 2023
                      </li>
                      <li>
                        The next 2.5th Anniversary livestream will be held in
                        real-life on July 23rd, 2023 from 17:00 to 20:30
                      </li>
                    </div>
                  </div>
                )}
                {selectedMonth === "july" && (
                  <div>
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_July_2023.png"
                      alt="Blue Archive Live December 2023"
                    />
                    <p className="mb-5">
                      <b> Summer Blue Archive Live! ~ Acchicchi Special</b>
                      (夏のブルアカらいぶ！あっちっちSP) is the 14th livestream.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      The official live broadcast "Blue Archive Live!"
                    </p>
                    <p className="mb-5">
                      In this live broadcast, we will bring you the latest
                      information on newly in-game events and other updates as
                      well as the latest information outside the game!
                    </p>
                    <p className="mb-5">
                      Teachers, please look forward to the live broadcast♪
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      June 23rd, 2023 17:00 ~ 20:45 JST (03:45:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5 mb-5">
                      <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
                      <li>
                        Kaihara Reina (
                        <a href="#" className="text-[#357ff3]">
                          Omagari Hare
                        </a>{" "}
                        ) / 貝原 怜奈（ハレ役）
                      </li>
                      <li>
                        Inui Natsune (
                        <a href="#" className="text-[#357ff3]">
                          Kurosaki Koyuki
                        </a>{" "}
                        ) / 乾 夏寧（コユキ役）
                      </li>
                      <li>
                        Miura Chiyuki (
                        <a href="#" className="text-[#357ff3]">
                          Izayoi Nonomi
                        </a>{" "}
                        ) / 三浦 千幸（ノノミ役）
                      </li>
                      <li>
                        Gotou Ayasa (
                        <a href="#" className="text-[#357ff3]">
                          Oono Tsukuyo
                        </a>{" "}
                        ) / 後藤 彩佐（ツクヨ役）
                      </li>
                      <li>Takatsuka Tomohito (Guest) / 高塚 智人（ゲスト）</li>
                      <li>Ichiki Mitsuhiro (Guest) / 市来 光弘（ゲスト）</li>
                    </div>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Highlights
                    </h4>
                    <div className="ml-5 mb-2">
                      <li>Opening and Ending message by Arona and Plana</li>
                      <li className="ml-5 mt-2 mb-2">3D Plana debut</li>
                      <li>Arona and Shiroko Anime Character Design Reveal</li>
                    </div>
                  </div>
                )}
                {selectedMonth === "october" && (
                  <div>
                    {" "}
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_October_2023.png"
                      alt="Blue Archive Live January 2024"
                    />
                    <p className="mb-5">
                      <b>Blue Archive Live! Welcome to Academy City Special!</b>
                      (ブルアカらいぶ！学園都市へようこそ！SP) is the 15th
                      livestream.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      The official live broadcast "Blue Archive Live!"
                    </p>
                    <p className="mb-5">
                      In this live broadcast, we will bring you the latest
                      information on newly in-game events and other updates as
                      well as the latest information outside the game!
                    </p>
                    <p className="mb-5">
                      Teachers, please look forward to the live broadcast♪
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      October 20th, 2023 20:00 ~ 22:45 JST (02:45:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5 mb-5">
                      <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
                      <li>
                        Gotou Ayasa (
                        <a href="#" className="text-[#357ff3]">
                          Oono Tsukuyo
                        </a>{" "}
                        ) / 後藤 彩佐（ツクヨ役）
                      </li>
                      <li>
                        Sumi Tomomi Jiena (
                        <a href="#" className="text-[#357ff3]">
                          Nakamasa Ichika
                        </a>{" "}
                        ) / 鷲見 友美ジェナ（イチカ）
                      </li>
                      <li>
                        Aihara Arisa (
                        <a href="#" className="text-[#357ff3]">
                          Shimokura Megu
                        </a>{" "}
                        ) / 愛原 ありさ（メグ役）
                      </li>
                      <li>Ichiki Mitsuhiro (Guest) / 市来 光弘（ゲスト）</li>
                    </div>
                  </div>
                )}
                {selectedMonth === "december" && (
                  <div>
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_December_2023.png"
                      alt="Blue Archive Live March 2024"
                    />
                    <p className="mb-5">
                      <b>Blue Archive Live! Merikuri!</b>{" "}
                      (ブルアカらいぶ！めりくり！) is the 16th livestream.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      The official live broadcast "Blue Archive Live!"
                    </p>
                    <p className="mb-5">
                      In this live broadcast, we will bring you the latest
                      information on newly in-game events and other updates as
                      well as the latest information outside the game!
                    </p>
                    <p className="mb-5">
                      Teachers, please look forward to the live broadcast♪
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      December 24th, 2023 19:00 ~ 21:55 JST (02:55:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5 mb-5">
                      <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
                      <li>
                        Kaihara Reina (Omagari Hare) / 貝原 怜奈（ハレ役）
                      </li>
                      <li>
                        Takagawa Mina (Otose Kotama) / 高川 みな（コタマ役）
                      </li>
                      <li>
                        Shirasu Saho (Kasuga Tsubaki) / 白砂 沙帆（ツバキ役）
                      </li>
                      <li>
                        Aihara Arisa (Shimokura Megu) / 愛原 ありさ（メグ役）
                      </li>
                    </div>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Highlights
                    </h4>
                    <div className="ml-5 mb-2">
                      <li>Opening and Ending message by Arona and Plana</li>
                    </div>
                  </div>
                )}
              </>
            )}
            {selectedYear === "2024" && (
              <>
                {selectedMonth === "january" && (
                  <div>
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_January_Day_1_2024.png"
                      alt="Blue Archive Live January 2024 Day 1"
                    />
                    <p className="mb-5">
                      <b>~Thank you Very Much Sensei~ Special Stage Day 1</b>
                      (ブルアカふぇす！～3きゅーべりーまっち、先生♪～
                      スペシャルステージ Day1) is the 17th livestream. This is a
                      2 day live stream is a real-life event and will take place
                      in Makuhari Messe International Exhibition Center
                      Exhibition Halls Hall 9 ~ 11, Chiba.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      The Blue Archive will celebrate its 3rd anniversary. "Blue
                      Archive Live! ~Thank you Very Much Sensei~!"
                    </p>
                    <p className="mb-5">
                      "Blue Archive Live! ~Thank you Very Much Sensei~! -
                      Special Stage Day 1" will be broadcast live on this
                      program. There will also be a present campaign in each
                      program, so please join us!
                    </p>
                    <p className="mb-5">
                      Let's celebrate the 3rd anniversary of the Blue Archive
                      together!
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      January 20th, 2024 10:00 ~ 18:00 JST (08:00:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <li className="mb-2 ml-5 font-bold">
                      Blue Archive Fest! Start! (10:00 - 11:00)
                    </li>
                    <div className="ml-16 mb-5">
                      <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
                      <li>
                        Aihara Arisa ({" "}
                        <a href="#" className="text-[#357ff3]">
                          Shimokura Megu
                        </a>{" "}
                        ) / 愛原 ありさ（メグ役）
                      </li>
                      <li>
                        Inui Natsune ({" "}
                        <a href="#" className="text-[#357ff3]">
                          Kurosaki Koyuki
                        </a>{" "}
                        / 乾 夏寧（コユキ役）
                      </li>
                      <li>
                        Reina Kaihara ({" "}
                        <a href="#" className="text-[#357ff3]">
                          Omagari Hare
                        </a>{" "}
                        ) / 貝原 怜奈（ハレ役）
                      </li>
                      <li>
                        Gotou Ayasa ({" "}
                        <a href="#" className="text-[#357ff3]">
                          Oono Tsukuyo
                        </a>{" "}
                        ) / 後藤 彩佐（ツクヨ役）
                      </li>
                      <li>
                        Shirasu Saho ({" "}
                        <a href="#" className="text-[#357ff3]">
                          Kasuga Tsubaki
                        </a>{" "}
                        ) / 白砂 沙帆（ツバキ役）
                      </li>
                      <li>
                        Sumi Tomomi Jiena ({" "}
                        <a href="#" className="text-[#357ff3]">
                          Nakamasa Ichika
                        </a>{" "}
                        ) / 鷲見 友美ジェナ（イチカ役）
                      </li>
                      <li>
                        Takagawa Mina ({" "}
                        <a href="#" className="text-[#357ff3]">
                          Otose Kotama
                        </a>{" "}
                        ) / 高川 みな（コタマ役）
                      </li>
                      <li>Ichiki Mitsuhiro (Guest) / 市来 光弘（ゲスト）</li>
                      <li>Takatsuka Tomohito (Guest) / 高塚 智人（ゲスト）</li>
                    </div>

                    <li className="mb-2 ml-5 font-bold">
                      Let's look back together! Blue Archive Story! (11:30 -
                      13:00)
                    </li>
                    <div className="ml-16 mb-5">
                      <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
                      <li>
                        Ishigami Shizuka ({" "}
                        <a href="#" className="text-[#357ff3]">
                          Joumae Saori
                        </a>{" "}
                        ) / 石上 静香（サオリ役）
                      </li>
                      <li>
                        Inui Natsune ({" "}
                        <a href="#" className="text-[#357ff3]">
                          Kurosaki Koyuki
                        </a>{" "}
                        / 乾 夏寧（コユキ役）
                      </li>
                      <li>
                        Kaihara Reina ({" "}
                        <a href="#" className="text-[#357ff3]">
                          Omagari Hare
                        </a>{" "}
                        ) / 貝原 怜奈（ハレ役）
                      </li>
                      <li>
                        Gotou Ayasa ({" "}
                        <a href="#" className="text-[#357ff3]">
                          Oono Tsukuyo
                        </a>{" "}
                        ) / 後藤 彩佐（ツクヨ役）
                      </li>
                      <li>
                        Shirasu Saho ({" "}
                        <a href="#" className="text-[#357ff3]">
                          Kasuga Tsubaki
                        </a>{" "}
                        ) / 白砂 沙帆（ツバキ役）
                      </li>
                      <li>
                        Tanaka Minami ({" "}
                        <a href="#" className="text-[#357ff3]">
                          Tendou Alice
                        </a>{" "}
                        ) / 田中 美海（アリス役）
                      </li>
                      <li>
                        Taneda Risa ({" "}
                        <a href="#" className="text-[#357ff3]">
                          Shirasu Azusa
                        </a>{" "}
                        ) / 種田 梨沙（アズサ役）
                      </li>
                      <li>
                        Terasawa Momoka ({" "}
                        <a href="#" className="text-[#357ff3]">
                          Hanaoka Yuzu
                        </a>{" "}
                        ) / 寺澤 百花（ユズ役）
                      </li>
                      <li>
                        Tomonaga Akane ({" "}
                        <a href="#" className="text-[#357ff3]">
                          Sorai Saki
                        </a>{" "}
                        ) / 友永朱音（サキ役）
                      </li>
                      <li>
                        Hondo Kaede ({" "}
                        <a href="#" className="text-[#357ff3]">
                          Ajitani Hifumi
                        </a>{" "}
                        ) / 本渡楓（ヒフミ役）
                      </li>
                      <li>
                        <span className="line-through">
                          Miura Chiyuki ({" "}
                          <a href="#" className="text-[#357ff3]">
                            Izayoi Nonomi
                          </a>{" "}
                          ) / 三浦 千幸（ノノミ役）
                        </span>
                        <span className="text-[#ff0000] font-bold italic">
                          Unable to attend due to her poor health. Ishitobi
                          Erika ({" "}
                          <a href="#" className="text-[#357ff3]">
                            Haruka
                          </a>{" "}
                          ) will replace her role in the stream
                        </span>
                      </li>
                    </div>
                    <li className="mb-2 ml-5 font-bold">
                      Blue Archive Fest! Special DJ Stage Day 1! (13:45 - 15:15)
                    </li>
                    <div className="ml-16 mb-5">
                      <li>Mitsukiyo / ミツキヨ</li>
                      <li>KARUT</li>
                      <li>Nor</li>
                    </div>
                    <li className="mb-2 ml-5 font-bold">
                      Let's look back together! Blue Archive Story! (15:30 -
                      17:00)
                    </li>
                    <div className="ml-16 mb-5">
                      <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
                      <li>
                        Aihara Arisa (
                        <a href="#" className="text-[#357ff3]">
                          Shimokura Megu
                        </a>{" "}
                        ) / 愛原 ありさ（メグ役）
                      </li>
                      <li>
                        Ishigami Shizuka (
                        <a href="#" className="text-[#357ff3]">
                          Joumae Saori
                        </a>{" "}
                        ) / 石上 静香（サオリ役）
                      </li>
                      <li>
                        Ishitobi Erika (
                        <a href="#" className="text-[#357ff3]">
                          Igusa Haruka
                        </a>{" "}
                        ) / 石飛恵里花（ハルカ役）
                      </li>
                      <li>
                        Inui Natsune (
                        <a href="#" className="text-[#357ff3]">
                          Kurosaki Koyuki
                        </a>{" "}
                        / 乾 夏寧（コユキ役）
                      </li>
                      <li>
                        Kaihara Reina (
                        <a href="#" className="text-[#357ff3]">
                          Omagari Hare
                        </a>{" "}
                        ) / 貝原 怜奈（ハレ役）
                      </li>
                      <li>
                        Gotou Ayasa (
                        <a href="#" className="text-[#357ff3]">
                          Oono Tsukuyo
                        </a>{" "}
                        ) / 後藤 彩佐（ツクヨ役）
                      </li>
                      <li>
                        Shirasu Saho (
                        <a href="#" className="text-[#357ff3]">
                          Kasuga Tsubaki
                        </a>{" "}
                        ) / 白砂 沙帆（ツバキ役）
                      </li>
                      <li>
                        Sumi Tomomi Jiena (
                        <a href="#" className="text-[#357ff3]">
                          Nakamasa Ichika
                        </a>{" "}
                        ) / 鷲見 友美ジェナ（イチカ役）
                      </li>
                      <li>
                        Takagawa Mina (
                        <a href="#" className="text-[#357ff3]">
                          Otose Kotama
                        </a>{" "}
                        ) / 高川 みな（コタマ役）
                      </li>
                      <li>
                        Terasawa Momoka (
                        <a href="#" className="text-[#357ff3]">
                          Hanaoka Yuzu
                        </a>{" "}
                        ) / 寺澤 百花（ユズ役）
                      </li>
                      <li>Ichiki Mitsuhiro (Guest) / 市来 光弘（ゲスト）</li>
                      <li>Takatsuka Tomohito (Guest) / 高塚 智人（ゲスト）</li>
                    </div>
                  </div>
                )}
                {selectedMonth === "march" && (
                  <div>
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_March_2024.png"
                      alt="Blue Archive Live March 2024"
                    />
                    <p className="mb-5">
                      <b>
                        Blue Archive Live! Haruurara, How Are You Preparing For
                        Your New Life? SP
                      </b>
                      (ブルアカらいぶ！はるうらら、新生活の準備いかがですか？)
                      is the 16th livestream.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      The official live broadcast "Blue Archive Live! Haruurara,
                      how are you preparing for your new life?"
                    </p>
                    <p className="mb-5">
                      In this live broadcast, we will bring you the latest
                      information inside and outside of the game! Teacher,
                      please look forward to the live broadcast♪
                    </p>
                    <p className="mb-5">
                      Furthermore, if you post on X (formerly Twitter) with the
                      hashtag "#ブルアカらいぶいかがですかSP" during the
                      broadcast, your post may be displayed on the live
                      broadcast! While watching the broadcast, please feel free
                      to tweet your thoughts and comments about the program!
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      March 24th, 2024 20:00 ~ 23:20 JST (03:20:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5 mb-5">
                      <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
                      <li>
                        Ishitobi Erika (
                        <a href="#" className="text-[#357ff3]">
                          Igusa Haruka
                        </a>{" "}
                        ) / 石飛 恵里花（ハルカ役）
                      </li>
                      <li>
                        Shirasu Saho (
                        <a href="#" className="text-[#357ff3]">
                          Kasuga Tsubaki
                        </a>{" "}
                        ) / 白砂 沙帆（ツバキ役）
                      </li>
                      <li>
                        Gotō Ayasa (
                        <a href="#" className="text-[#357ff3]">
                          Oono Tsukuyo
                        </a>{" "}
                        ) / 後藤 彩佐（ツクヨ役）
                      </li>
                      <li>Ichiki Mitsuhiro (Guest) / 市来 光弘（ゲスト）</li>
                    </div>
                  </div>
                )}
                {selectedMonth === "april" && (
                  <div>
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_April_2024.png"
                      alt="Blue Archive Live April 2024"
                    />
                    <p className="mb-5">
                      <b>Archive Live! Itookashi☆Spring Trip to Kyoto SP!</b>{" "}
                      (ブルアカらいぶ！いとおかし☆春の京都旅行！) is the 17th
                      livestream.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      This time it will be broadcast live from the Kyoto
                      International Conference Centre ANNEX HALL in Kyoto!
                    </p>
                    <p className="mb-5">
                      The latest news from inside and outside the game and the
                      announcement of the winning artwork from the "3rd
                      Anniversary Fan Art" project that was being solicited on X
                      (Twitter)!
                    </p>
                    <p className="mb-5">
                      Sensei, please look forward to the live broadcast!
                    </p>
                    <p className="mb-5">
                      Furthermore, if you post on X (formerly Twitter) with the
                      hashtag "#ブルアカらいぶいとをかしSP" during the
                      broadcast, your post may be displayed on the live
                      broadcast! While watching the broadcast, please feel free
                      to tweet your thoughts and comments about the program!
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      April 20th, 2024 17:00 ~ 20:00 JST (04:08:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5 mb-5">
                      <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
                      <li>
                        Aihara Arisa (
                        <a href="#" className="text-[#357ff3]">
                          Shimokura Megu
                        </a>{" "}
                        ) / 愛原 ありさ（メグ役）
                      </li>
                      <li>
                        Inui Natsune (
                        <a href="#" className="text-[#357ff3]">
                          Kurosaki Koyuki
                        </a>{" "}
                        / 乾 夏寧（コユキ役）
                      </li>
                      <li>
                        Gotō Ayasa (
                        <a href="#" className="text-[#357ff3]">
                          Oono Tsukuyo
                        </a>{" "}
                        ) / 後藤 彩佐（ツクヨ役）
                      </li>
                      <li>
                        Shirasu Saho (
                        <a href="#" className="text-[#357ff3]">
                          Kasuga Tsubaki
                        </a>{" "}
                        ) / 白砂 沙帆（ツバキ役）
                      </li>
                      <li>Ichiki Mitsuhiro (Guest) / 市来 光弘（ゲスト）</li>
                    </div>
                  </div>
                )}
                {selectedMonth === "june" && (
                  <div>
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_June_2024 (1).png"
                      alt="Blue Archive Live June 2024"
                    />
                    <p className="mb-5">
                      <b> Blue Archive Live! Zabigining Obusama SP!</b>
                      (ブルアカらいぶ！ざびぎにんぐおぶさまーSP！) is the 18th
                      livestream.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      The official live broadcast "Blue Archive Live! Zabigining
                      Obusama SP!"
                    </p>
                    <p className="mb-5">
                      In this live broadcast, we will bring you the latest
                      information inside and outside of the game! Teacher,
                      please look forward to the live broadcast♪
                    </p>
                    <p className="mb-5">
                      Furthermore, if you post on X (formerly Twitter) with the
                      hashtag "#ブルアカらいぶいかがですかSP" during the
                      broadcast, your post may be displayed on the live
                      broadcast! While watching the broadcast, please feel free
                      to tweet your thoughts and comments about the program!
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      June 23rd, 2024 19:00 ~ 22:05 JST (03:05:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5 mb-5">
                      <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
                      <li>
                        Miura Chiyuki (
                        <a href="#" className="text-[#357ff3]">
                          Izayoi Nonomi
                        </a>{" "}
                        ) / 三浦 千幸（ノノミ役）
                      </li>
                      <li>
                        Ishitobi Erika (
                        <a href="#" className="text-[#357ff3]">
                          Igusa Haruka
                        </a>{" "}
                        ) / 石飛 恵里花（ハルカ役）
                      </li>
                      <li>
                        Aihara Arisa (
                        <a href="#" className="text-[#357ff3]">
                          Shimokura Megu
                        </a>{" "}
                        ) / 愛原 ありさ（メグ役）
                      </li>
                      <li>Takatsuka Tomohito (Guest) / 高塚 智人（ゲスト）</li>
                      <li>Ichiki Mitsuhiro (Guest) / 市来 光弘（ゲスト）</li>
                    </div>
                  </div>
                )}
                {selectedMonth === "july" && (
                  <div>
                    <img
                      src="Blue-Archive/Blue_Archive_Live_-_July_2024.png"
                      alt="Blue Archive Live July 2024"
                    />
                    <p className="mb-5">
                      <b>Summer Blue Archive Live! Happy Summer Showtime SP!</b>{" "}
                      (夏のブルアカらいぶ！はっぴ～さま～しょ～たいむ！SP) is
                      the 19th livestream.
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mb-2">
                      Synopsis
                    </h4>
                    <p className="mb-5">
                      Blue Archive will soon celebrate the 3.5th anniversary of
                      its release! In commemoration of this, we will be
                      delivering the official live broadcast "Summer Blue
                      Archive Live!".
                    </p>
                    <p className="mb-5">
                      This time, to celebrate the 3.5th anniversary, we will be
                      broadcasting live from "Belle Salle Tokyo Nihonbashi" in
                      Nihonbashi, Tokyo! We will bring you the latest
                      information inside and outside the game! Please look
                      forward to the live broadcast, Sensei!
                    </p>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Date
                    </h4>
                    <li className="ml-5">
                      July 21st, 2024 19:00 ~ 23:08 JST (04:08:00)
                    </li>
                    <h4 className="text-lg text-[#02d3fb] font-bold mt-5 mb-2">
                      Cast
                    </h4>
                    <div className="ml-5 mb-5">
                      <li>Sakamaki Manabu (MC) / 坂巻 学（MC）</li>
                      <li>
                        Gotou Ayasa (
                        <a href="#" className="text-[#357ff3]">
                          Oono Tsukuyo
                        </a>{" "}
                        ) / 後藤 彩佐（ツクヨ役）
                      </li>
                      <li>
                        Shirasu Saho (
                        <a href="#" className="text-[#357ff3]">
                          Kasuga Tsubaki
                        </a>{" "}
                        ) / 白砂 沙帆（ツバキ役）
                      </li>
                      <li>
                        Ishitobi Erika (
                        <a href="#" className="text-[#357ff3]">
                          Igusa Haruka
                        </a>{" "}
                        ) / 石飛恵里花（ハルカ役）
                      </li>
                      <li>
                        Aihara Arisa (
                        <a href="#" className="text-[#357ff3]">
                          Shimokura Megu
                        </a>{" "}
                        ) / 愛原 ありさ（メグ役）
                      </li>
                      <li>Takatsuka Tomohito (Guest) / 高塚 智人（ゲスト）</li>
                      <li>Sakata Shougo (Guest) / 坂田 将吾（ゲスト）</li>
                      <li>Ichiki Mitsuhiro (Guest) / 市来 光弘（ゲスト）</li>
                    </div>
                  </div>
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
