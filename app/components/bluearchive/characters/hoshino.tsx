import React, { useEffect, useState, memo } from "react";
import hoshinoSkills from "./hoshino_skills";
import { s } from "node_modules/framer-motion/dist/types.d-DDSxwf0n";
import { motion } from "framer-motion";

const HoshinoLive2D = memo(() => (
  <div className="flex flex-col space-y-2">
    <img
      src="Blue-Archive/live2d/Hoshino_Live2D.gif"
      alt="Hoshino Live2D"
      className="w-full rounded-lg mx-auto "
    />
  </div>
));

export const Hoshino = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [selectedTab, setSelectedTab] = useState("icon");
  const [selectedTabStats, setSelectedTabStats] = useState("main");
  const [activeSkillTab, setActiveSkillTab] = useState("ex");

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });


  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/Blue-Archive/Site-background-dark.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        imageRendering: "auto", // Prevents pixelation
      }}
    >
      {/* Header */}

      {/* Main Content */}
      <header className="w-full  flex flex-col items-start justify-center pt-10 pl-40 relative">
        <div className="flex flex-row items-start gap-6">
          <a href="/bluearchivehome">
            <img
              src="/Blue-Archive/Site-logo (5).png"
              alt="Blue Archive Logo"
              className="h-24 w-auto drop-shadow-lg"
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
      <main className="flex-1 mt-10 mb-10 w-[1200px] max-w-[98vw] bg-black bg-opacity-80 rounded-lg p-4 text-white shadow-lg mx-auto ">
        <h2 className="text-4xl mt-10 mb-10 ml-5 text-[#06bbfa]">
          Takanashi Hoshino
        </h2>
        <div className="flex justify-center items-center scale-100 ">
          <a
            href="/blue_archive"
            className="border-2 border-[#357ff3] text-[#357ff3] font-extrabold rounded px-4 py-1 text-base mr-2 hover:underline focus:outline-none"
          >
            Overview
          </a>
          <a
            href="/live"
            className="border-2 border-[#357ff3] text-[#357ff3] font-extrabold rounded px-4 py-1 text-base mr-2 hover:underline focus:outline-none"
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
            href="/students"
            className="border-2 border-[#357ff3] text-[#357ff3] font-extrabold rounded px-4 py-1 text-base mr-2 hover:underline focus:outline-none"
          >
            Student Profile
          </a>
        </div>
        <div className="flex flex-row gap-8">
          {/* Main content (left) */}
          <div className="flex-1 mt-5 ml-3">
            <div className="bg-[#06bbfa] w-[250px] left-36 text-black flex flex-col items-center justify-center relative py-3 px-4 pt-5 rounded">
              <span className="block text-center w-full italic">
                “ Alright, alright-”
              </span>
              <br />
              <span className="absolute right-18 bottom-1 text-xs italic">
                ~ Takanashi Hoshino
              </span>
            </div>
            <p className="mt-5 max-w-[600px]">
              <strong>Takanashi Hoshino (小鳥遊 ホシノ)</strong> is one of the
              <a href="#" className="text-[#357ff3] hover:underline">
                students
              </a>{" "}
              <br />
              studying in{" "}
              <a href="#" className="text-[#357ff3] hover:underline">
                Abydos High School
              </a>{" "}
              who wields a{" "}
              <a href="#" className="text-[#357ff3] hover:underline">
                Shotgun
              </a>
              .
            </p>
            <p className="mb-5 mt-6">
              She is the president of the{" "}
              <a href="#" className="text-[#357ff3] hover:underline">
                Abydos Student Council
              </a>{" "}
              and the chairwoman of the{" "}
              <a href="#" className="text-[#357ff3] hover:underline">
                Countermeasures Committee
              </a>
              .
            </p>
            <nav className="w-56 mt-5 text-start border border-gray-700 rounded mb-6">
              <div className="flex items-center justify-between px-3 py-2 border-b border-gray-700">
                <span className="font-semibold text-white flex items-center text-sm">
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
                <button className="text-xs text-[#357ff3] hover:underline font-semibold">
                  [hide]
                </button>
              </div>
              <ol className="list-inside px-5 py-3 text-white text-sm space-y-1">
                <li>
                  <a href="#profile" className="hover:underline">
                    <span className="text-gray-400"> 1.</span> Profile
                  </a>
                  <ol className="list-inside ml-5 space-y-1">
                    <li>
                      <a href="#introduction" className="hover:underline">
                        <span className="text-gray-400"> 1.1.</span>{" "}
                        Introduction
                      </a>
                    </li>
                    <li>
                      <a href="#personality" className="hover:underline">
                        <span className="text-gray-400"> 1.2.</span> Personality
                      </a>
                    </li>
                    <li>
                      <a href="#appearance" className="hover:underline">
                        <span className="text-gray-400"> 1.3.</span> Appearance
                      </a>
                      <ol className="list-inside ml-5 space-y-1">
                        <li>
                          <a href="#halo" className="hover:underline">
                            <span className="text-gray-400">1.3.1.</span> Halo
                          </a>
                        </li>
                        <li>
                          <a href="#uniform" className="hover:underline">
                            <span className="text-gray-400">1.3.2.</span>{" "}
                            Uniform
                          </a>
                        </li>
                        <li>
                          <a href="#firearm" className="hover:underline">
                            <span className="text-gray-400">1.3.3.</span>{" "}
                            Firearm
                          </a>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  <a href="#combat" className="hover:underline">
                    <span className="text-gray-400"> 2.</span> Combat
                  </a>
                  <ol className="list-inside ml-5 space-y-1">
                    <li>
                      <a href="#skills" className="hover:underline">
                        <span className="text-gray-400"> 2.1.</span> Skills
                      </a>
                    </li>
                    <li>
                      <a href="#growth-material" className="hover:underline">
                        <span className="text-gray-400"> 2.2.</span> Growth
                        Material
                      </a>
                    </li>
                    <li>
                      <a href="#unique-equipment" className="hover:underline">
                        <span className="text-gray-400"> 2.3.</span> Unique
                        Equipment
                      </a>
                    </li>
                    <li>
                      <a href="#unique-item" className="hover:underline">
                        <span className="text-gray-400"> 2.4.</span> Unique Item
                      </a>
                    </li>
                    <li>
                      <a href="#bond" className="hover:underline">
                        <span className="text-gray-400"> 2.5.</span> Bond
                      </a>
                    </li>
                  </ol>
                </li>
                <li>
                  <a href="#etymology" className="hover:underline">
                    <span className="text-gray-400"> 3.</span> Etymology
                  </a>
                </li>
                <li>
                  <a href="#poll" className="hover:underline">
                    <span className="text-gray-400"> 4.</span> Poll
                  </a>
                </li>
                <li>
                  <a href="#trivia" className="hover:underline">
                    <span className="text-gray-400"> 5.</span> Trivia
                  </a>
                </li>
                <li>
                  <a href="#see-also" className="hover:underline">
                    <span className="text-gray-400"> 6.</span> See Also
                  </a>
                </li>
                <li>
                  <a href="#navigation" className="hover:underline">
                    <span className="text-gray-400"> 7.</span> Navigation
                  </a>
                </li>
              </ol>
            </nav>
            <h2
              className="text-3xl font-bold text-[#06bbfa] ml-3 border-b border-gray-700"
              id="profile"
            >
              Profile
            </h2>
            <h3
              className="text-[#3e7af2] text-xl font-bold ml-3 mt-4"
              id="introduction"
            >
              Introduction
            </h3>
            <div className="ml-3 mt-2">
              <p>
                Takanashi Hoshino is the president of the{" "}
                <a href="#" className="text-[#3e7af2]">
                  Abydos Student Council
                </a>{" "}
                and the only third-year of{" "}
                <a href="#" className="text-[#3e7af2]">
                  Abydos High School
                </a>
                , and the current chairwoman for the{" "}
                <a href="#" className="text-[#3e7af2]">
                  Countermeasures Commitee
                </a>
                .
              </p>
            </div>
            <h3
              className="text-[#3e7af2] text-xl font-bold ml-3 mt-4"
              id="personality"
            >
              Personality
            </h3>
            <div className="ml-3 mt-2">
              <p>
                Speaking like a senile aunt, she enjoys playing around and
                napping more than work. Because of this, she usually gets
                scolded by the rest of the Committee. But, once the mission
                starts, she protects her comrades by fighting valiantly on the
                front lines. Since accepting the title of student council
                president, she has gradually brightened up. Perhaps this is the
                real Hoshino.
              </p>
            </div>
            <h3
              className="text-[#3e7af2] text-xl font-bold ml-3 mt-4"
              id="appearance"
            >
              Appearance
            </h3>
            <div className="ml-3 mt-2">
              <p>
                She has pink hair with a cowlick reaching to her legs. She has
                heterochromia of blue and orange eyes.
              </p>
            </div>
            <h4
              className="text-[#3e7af2] text-lg font-bold ml-3 mt-4"
              id="halo"
            >
              Halo
            </h4>
            <div className="ml-3 mt-2">
              <p>
                Hoshino's halo has a pink eye-like circle with an outer line
                curved around and ends with a strip line.
              </p>
            </div>

            {/* The rest of your main content goes here */}
          </div>

          {/* Aside (right) */}
          <aside className="bg-[#06bbfa] border-2 border-[#357ff3] rounded-lg shadow-lg p-6 mt-5 w-full max-w-xs mb-8 mr-5">
            <h2 className="text-2xl font-bold text-[#aae5f8] mb-2 text-center">
              Takanashi Hoshino /
            </h2>
            <div className="text-center text-sm text-[#aae5f8] font-bold mb-4">
              小鳥遊 ホシノ
            </div>
            <section>
              <div className="flex justify-center">
                <ul className="flex justify-between">
                  {[
                    { label: "Icon", key: "icon" },
                    { label: "Portrait", key: "portrait" },
                    { label: "Sprite", key: "sprite" },
                    { label: "Halo", key: "halo" },
                  ].map((tab) => (
                    <li key={tab.key}>
                      <button
                        type="button"
                        className={`px-4 py-2 text-[#aae5f8] font-${
                          tab.key === selectedTab ? "extrabold" : "semibold"
                        } cursor-pointer ${
                          tab.key === selectedTab
                            ? "border-b-2 border-[#357ff3]"
                            : ""
                        } focus:outline-none`}
                        onClick={() => setSelectedTab(tab.key)}
                      >
                        {tab.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center ">
                <ul className="flex w-full justify-between flex-wrap">
                  {[
                    { label: "Default", key: "default" },
                    { label: "Robber", key: "robber" },
                    { label: "Gym", key: "gym" },
                    { label: "Young", key: "young" },
                    { label: "Winter", key: "winter" },
                  ].map((tab) => (
                    <li key={tab.key} className="flex-1 text-center">
                      <button
                        type="button"
                        className={`w-full px-2 py-1 text-xs text-[#aae5f8] font-${
                          tab.key === selectedTab ? "extrabold" : "semibold"
                        } focus:outline-none`}
                        onClick={() => setSelectedTab(tab.key)}
                      >
                        <span
                          className={`block ${
                            tab.key === selectedTab
                              ? "border-b-2 border-[#357ff3] pb-1"
                              : ""
                          }`}
                        >
                          {tab.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <figure>
                  <a href="#">
                    <img
                      src={
                        selectedTab === "portrait"
                          ? "/Blue-Archive/characters/Hoshino_Portrait.png"
                          : selectedTab === "sprite"
                          ? "/Blue-Archive/characters/Hoshino_Sprite.png"
                          : selectedTab === "halo"
                          ? "/Blue-Archive/characters/Hoshino_Halo.png"
                          : selectedTab === "young"
                          ? "/Blue-Archive/characters/Hoshino_Young_Portrait.png"
                          : selectedTab === "winter"
                          ? "/Blue-Archive/characters/Hoshino_Winter_Portrait.png"
                          : selectedTab === "robber"
                          ? "/Blue-Archive/characters/Hoshino_Robber_Portrait.png"
                          : selectedTab === "gym"
                          ? "/Blue-Archive/characters/Hoshino_Gym_Portrait.png"
                          : selectedTab === "default" ||
                            selectedTab === "Default"
                          ? "/Blue-Archive/characters/Hoshino_Portrait.png"
                          : "/Blue-Archive/characters/Hoshino_Icon.png"
                      }
                      alt={`Hoshino ${
                        selectedTab.charAt(0).toUpperCase() +
                        selectedTab.slice(1)
                      }`}
                      className="w-70 h-70 object-cover"
                    />
                  </a>
                </figure>
              </div>
            </section>
            <section>
              <table className="w-full border-separate border-spacing-y-2">
                <caption className="text-lg font-bold text-[#aae5f8] rounded-t-md py-2 text-left">
                  Unit Information
                </caption>
                <tbody>
                  {/* Rarity, Bond, Cover */}
                  <tr>
                    {/* Rarity */}
                    <td className="bg-[#aae5f8] px-2 py-2 text-center align-middle w-1/3">
                      <div className="flex gap-1 justify-center w-full">
                        {[1, 2, 3].map((i) => (
                          <img
                            key={i}
                            src="/Blue-Archive/images/Star_Icon.png"
                            alt="Star"
                            width={18}
                            height={18}
                            className="inline-block"
                            style={{ minWidth: 18, minHeight: 18 }}
                          />
                        ))}
                      </div>
                    </td>
                    {/* Bond */}
                    <td className="bg-[#aae5f8] px-2 py-2  text-center align-middle w-1/3">
                      <div className="flex gap-1 justify-center items-center w-full">
                        <img
                          src="/Blue-Archive/icons/Bond.png"
                          alt="Bond"
                          width={18}
                          height={18}
                          className="inline-block"
                        />
                        <img
                          src="/Blue-Archive/icons/Blue_Font_9.png"
                          alt="Bond Level"
                          width={16}
                          height={16}
                          className="inline-block"
                        />
                      </div>
                    </td>
                    {/* Cover */}
                    <td className="bg-[#aae5f8] px-2 py-2 text-center align-middle w-1/3">
                      <img
                        src="/Blue-Archive/icons/Cross_1.png"
                        alt="Cross"
                        width={18}
                        height={18}
                        className="inline-block"
                      />
                    </td>
                  </tr>
                  {/* Role, Class, Position */}
                  <tr>
                    {/* Role */}
                    <td className="bg-[#aae5f8] px-2 py-2 text-center align-middle w-1/3">
                      <img
                        src="/Blue-Archive/icons/STRIKER.png"
                        alt="STRIKER"
                        width={48}
                        height={12}
                        className="inline-block"
                      />
                    </td>
                    {/* Class */}
                    <td className="bg-[#aae5f8] px-2 py-2  text-center align-middle w-1/3">
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src="/Blue-Archive/icons/Tank.png"
                          alt="Tank"
                          width={20}
                          height={20}
                          className="inline-block mb-1"
                        />
                        <span className="font-semibold text-black text-sm">
                          Tank
                        </span>
                      </div>
                    </td>
                    {/* Position */}
                    <td className="bg-[#aae5f8] px-2 py-2 text-center align-middle w-1/3">
                      <img
                        src="/Blue-Archive/icons/FRONT.png"
                        alt="FRONT"
                        width={50}
                        height={20}
                        className="inline-block"
                      />
                    </td>
                  </tr>
                  {/* School, Firearm */}
                  <tr>
                    {/* School */}
                    <td className="bg-[#aae5f8] px-2 py-2 text-center align-middle w-1/3">
                      <img
                        src="/Blue-Archive/icons/Abydos_Icon.png"
                        alt="Highlander Icon"
                        width={56}
                        height={48}
                        className="mx-auto ml-9"
                      />
                    </td>
                    {/* Firearm */}
                    <td className="bg-[#aae5f8] px-2 py-2 text-center align-middle w-1/3">
                      <img
                        src="/Blue-Archive/weapons/SG_Icon.png"
                        alt="Handgun Icon"
                        width={80}
                        height={48}
                        className="mx-auto ml-20"
                      />
                    </td>
                    {/* Empty cell for alignment */}
                    <td className="bg-[#aae5f8] px-2 py-2  text-center align-middle w-1/3"></td>
                  </tr>
                  {/* Terrain */}
                  <tr>
                    {/* City */}
                    <td className="bg-[#aae5f8] text-center align-middle w-1/3 px-2 py-2">
                      <div className="relative inline-block">
                        <img
                          src="/Blue-Archive/icons/City_Icon.png"
                          alt="City Icon"
                          width={40}
                          height={40}
                          className="inline-block"
                        />
                        <img
                          src="/Blue-Archive/icons/Terrible_Icon.png"
                          alt="Terrible Icon"
                          width={24}
                          height={24}
                          className="absolute right-[-6px] bottom-[-6px] z-20"
                        />
                      </div>
                    </td>
                    {/* Desert */}
                    <td className="bg-[#aae5f8] text-center align-middle w-1/3 px-2 py-2">
                      <div className="relative inline-block">
                        <img
                          src="/Blue-Archive/icons/Desert_Icon.png"
                          alt="Desert Icon"
                          width={40}
                          height={40}
                          className="inline-block"
                        />
                        <img
                          src="/Blue-Archive/icons/Excellent_Icon.png"
                          alt="Excellent Icon"
                          width={24}
                          height={24}
                          className="absolute right-[-6px] bottom-[-6px] z-20"
                        />
                      </div>
                    </td>
                    {/* Indoor */}
                    <td className="bg-[#aae5f8] text-center align-middle w-1/3 px-2 py-2">
                      <div className="relative inline-block">
                        <img
                          src="/Blue-Archive/icons/Indoor_Icon.png"
                          alt="Indoor Icon"
                          width={40}
                          height={40}
                          className="inline-block"
                        />
                        <img
                          src="/Blue-Archive/icons/Neutral_Icon.png"
                          alt="Neutral Icon"
                          width={24}
                          height={24}
                          className="absolute right-[-8px] bottom-[-8px] z-20"
                        />
                      </div>
                    </td>
                  </tr>
                  {/* Offensive/Defensive Type */}
                  <tr>
                    {/* Offensive Type */}
                    <td className="bg-[#aae5f8] text-center align-middle w-1/3 px-2 py-2">
                      <img
                        src="Blue-Archive/images/Offensive_Icon.png"
                        alt=""
                      />
                      <div className="border-2 border-[#02D3FB] rounded-md inline-flex h-5 w-[60px] overflow-hidden text-center justify-center items-center align-middle my-[2px] text-[10px] bg-[#ffa500]">
                        <b>
                          <span className="text-black">Penetration</span>
                        </b>
                      </div>
                    </td>
                    {/* Defensive Type */}
                    <td className="bg-[#aae5f8] text-center align-middle w-1/3 px-2 py-2">
                      <img
                        src="Blue-Archive/images/Defensive_Icon.png"
                        alt=""
                      />

                      <div className="border-2 border-[#02D3FB] rounded-md inline-flex h-5 w-[60px] overflow-hidden text-center justify-center items-center align-middle my-[2px] text-[10px] bg-[#ffa500]">
                        <b>
                          <span className="text-black">Heavy</span>
                        </b>
                      </div>
                    </td>
                    {/* Empty */}
                    <td className="bg-[#aae5f8] text-center align-middle w-1/3 px-2 py-2"></td>
                  </tr>
                  {/* Equipment */}
                  <tr>
                    {/* Equipment 1: Gloves */}
                    <td className="bg-[#aae5f8] text-center align-middle w-1/3 px-2 py-2">
                      <img
                        src="/Blue-Archive/icons/Shoe_T1_Icon.png"
                        alt="Gloves T1 Icon"
                        width={56}
                        height={44}
                        className="mx-auto"
                      />
                    </td>
                    {/* Equipment 2: Hairpin */}
                    <td className="bg-[#aae5f8] text-center align-middle w-1/3 px-2 py-2">
                      <img
                        src="/Blue-Archive/icons/Bag_T1_Icon.png"
                        alt="Hairpin T1 Icon"
                        width={56}
                        height={44}
                        className="mx-auto"
                      />
                    </td>
                    {/* Equipment 3: Charm */}
                    <td className="bg-[#aae5f8] text-center align-middle w-1/3 px-2 py-2">
                      <img
                        src="/Blue-Archive/icons/Charm_T1_Icon.png"
                        alt="Charm T1 Icon"
                        width={56}
                        height={44}
                        className="mx-auto"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section>
              <div className="flex justify-center">
                <ul className="flex justify-between">
                  {[
                    { label: "Main Stats", key: "main" },
                    { label: "Other Stats", key: "other" },
                  ].map((tab) => (
                    <li key={tab.key}>
                      <button
                        type="button"
                        className={`px-4 py-2 text-[#aae5f8] font-${
                          tab.key === selectedTabStats
                            ? "extrabold"
                            : "semibold"
                        } cursor-pointer ${
                          tab.key === selectedTabStats
                            ? "border-b-2 border-[#357ff3]"
                            : ""
                        } focus:outline-none`}
                        onClick={() => setSelectedTabStats(tab.key)}
                      >
                        {tab.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Stats Tab Content */}
              {selectedTabStats === "main" && (
                <div className="mt-4">
                  {/* Level 1 Row */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-[#aae5f8] text-sm">
                      LEVEL 1
                    </span>
                    <span className="font-extrabold text-[#aae5f8] text-sm">
                      BASE★
                    </span>
                  </div>
                  {/* Level 1 Stats */}
                  <div className="bg-[#aae5f8] grid grid-cols-4 gap-2 pt-3 pb-2 mb-2">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-[#06bbfa]">
                        HP
                      </span>
                      <span className="font-bold text-lg text-black">3275</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-[#06bbfa]">
                        ATK
                      </span>
                      <span className="font-bold text-lg text-black">213</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-[#06bbfa]">
                        DEF
                      </span>
                      <span className="font-bold text-lg text-black">175</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-[#06bbfa]">
                        HEAL
                      </span>
                      <span className="font-bold text-lg text-black">1687</span>
                    </div>
                  </div>
                  {/* Level 100 Row 1 */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-[#aae5f8] text-sm">
                      Level 100
                    </span>
                    <span className="font-bold text-[#aae5f8] text-sm">
                      BASE★
                    </span>
                  </div>
                  {/* Level 100 Stats 1 */}
                  <div className="bg-[#aae5f8] grid grid-cols-4 gap-2 mb-2 pt-3 pb-2">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">54746</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">2134</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">1052</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">5059</span>
                    </div>
                  </div>
                  {/* Level 100 Row 2 (4 images) */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-[#aae5f8] text-sm">
                      Level 100
                    </span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4].map((i) => (
                        <img
                          key={i}
                          src="/Blue-Archive/images/Star_Icon.png"
                          alt="Star"
                          width={16}
                          height={16}
                          className="inline-block"
                        />
                      ))}
                    </div>
                  </div>
                  {/* Level 100 Stats 2 */}
                  <div className="bg-[#aae5f8] grid grid-cols-4 gap-2 mb-2 pt-3 pb-2">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">59145</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">2579</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">1052</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">5575</span>
                    </div>
                  </div>
                  {/* Level 100 Row 3 (5 images) */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-[#aae5f8] text-sm">
                      Level 100
                    </span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <img
                          key={i}
                          src="/Blue-Archive/images/Star_Icon.png"
                          alt="Star"
                          width={16}
                          height={16}
                          className="inline-block"
                        />
                      ))}
                    </div>
                  </div>
                  {/* Level 100 Stats 3 */}
                  <div className="bg-[#aae5f8] grid grid-cols-4 gap-2 mb-4 pt-3 pb-2">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">65988</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">2676</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">1052</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">6221</span>
                    </div>
                  </div>
                  {/* Profile Dropdown */}

                  <details>
                    <summary className="cursor-pointer font-bold text-[#aae5f8] flex items-center">
                      Profile
                      <svg
                        className="w-4 h-4 ml-1 inline"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="mt-2 text-sm text-white">
                      {/* Profile content here */}
                      <p>
                        Hikari is a student at Highlander Railroad Academy,
                        known for her energetic personality and support role in
                        combat.
                      </p>
                    </div>
                  </details>
                  <details className="mt-2">
                    <summary className="cursor-pointer font-bold text-[#aae5f8] flex items-center">
                      Other Information
                      <svg
                        className="w-4 h-4 ml-1 inline"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="mt-2 text-sm text-white">
                      {/* Other information content here */}
                      <ul className="list-disc ml-5">
                        <li>Birthday: March 3</li>
                        <li>Height: 156cm</li>
                        <li>Likes: Trains, Sweets</li>
                      </ul>
                    </div>
                  </details>
                </div>
              )}
              {selectedTabStats === "other" && (
                <div className="mt-4 text-sm text-white">
                  {/* Other stats content here */}
                  <ul className="list-disc ml-5">
                    <li>Critical Rate: 200</li>
                    <li>Critical Damage: 200%</li>
                    <li>Accuracy: 800</li>
                    <li>Evasion: 100</li>
                    <li>Attack Speed: 100</li>
                    <li>Stability: 1000</li>
                    <li>Range: 600</li>
                  </ul>
                </div>
              )}
            </section>
          </aside>
        </div>
        <div className="ml-3">
          <h4
            className="text-[#3e7af2] text-lg font-bold ml-3 mt-4"
            id="uniform"
          >
            Uniform
          </h4>
          <div className="ml-3 mt-2">
            <p>
              She wears the Abydos uniform although in a relaxed, lazy style in
              comparison to her fellow pupils. Unlike Shiroko, Serika, and
              Ayane, Hoshino Forgets the blazer and has the top two shirt
              buttons undone and her tie quite loose. She also wears a pair of
              fingerless gloves and wears a buckled, tactical brace. Below she
              tucks her shirt into a black and grey pleated skirt, a pair of
              white socks, and a pair of navy blue sneakers with white laces and
              soles.
            </p>
          </div>
          <h4
            className="text-[#3e7af2] text-lg font-bold ml-3 mt-4"
            id="firearm"
          >
            Firearm
          </h4>
          <div className="ml-3 mt-2 space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <p className="mb-2">
                  She uses a two-tone Beretta 1301 Tactical semi-automatic{" "}
                  <br />
                  shotgun with a black vent ribbed 21" Comp barrel, bolt
                  carrier, and <br /> tubular magazine with a +3 Nordic
                  Extension Tube. The rest of the <br /> firearm is painted
                  white with pink accents. It has an extended <br /> choke tube
                  along with a Mesa Tactical top rail and polymer side <br />{" "}
                  saddle located on the left holding spare buckshot rounds. The{" "}
                  <br /> Abydos insignia is imprinted on the cheek rest.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.36, 0.66, 0.04, 1] }}
                className="flex-shrink-0 text-center"
              >
                <motion.img
                  src="Blue-Archive/images/Hoshino_UE_Schematic.png"
                  alt="Eye of Horus"
                  className="max-w-xs rounded-lg cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{
                    scale: 0.97,
                    transition: { duration: 0.2, ease: "easeIn" },
                  }}
                />
                <motion.span
                  className="block mt-2 text-sm text-gray-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                >
                  Eye of Horus
                </motion.span>
              </motion.div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <p className="mb-2">
                  For her EX-Skill she deploys the "Iron Horus". A collapsible
                  ballistic <br />
                  shield that houses several more buckshot rounds and a backup{" "}
                  <br /> Beretta 92FS pistol.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.36, 0.66, 0.04, 1] }}
                className="flex-shrink-0 text-center"
              >
                <motion.img
                  src="Blue-Archive/images/Iron_Horus_Concept.png"
                  alt="Iron Horus Concept"
                  className="max-w-xs rounded-lg cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{
                    scale: 0.97,
                    transition: { duration: 0.2, ease: "easeIn" },
                  }}
                />
                <motion.span
                  className="block mt-2 text-sm text-gray-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                >
                  Iron Horus Concept Art
                </motion.span>
              </motion.div>
            </div>
          </div>
          <h2
            className="text-3xl font-bold text-[#06bbfa] ml-3 mt-5 border-b border-gray-700"
            id="combat"
          >
            Combat
          </h2>
          <h3
            className="text-[#3e7af2] text-xl font-bold ml-3 mt-4"
            id="skills"
          >
            Skills
          </h3>
          {/* $SELECTION_PLACEHOLDER$ */}
          <section id="skills" className="mt-8">
            {/* Tabs */}
            <div className="flex border-b border-[#06bbfa]">
              {[
                { key: "ex", label: "EX Skill" },
                { key: "normal", label: "Normal Skill" },
                { key: "passive", label: "Passive Skill" },
                { key: "sub", label: "Sub Skill" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveSkillTab(tab.key)}
                  className={`px-4 py-2 text-sm font-bold transition-colors ${
                    activeSkillTab === tab.key
                      ? "text-[#06bbfa] border-b-2 border-[#06bbfa]"
                      : "text-gray-400 hover:text-[#06bbfa]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="mt-4 space-y-6">
              {/* EX Skill */}
              {activeSkillTab === "ex" && (
                <div className="overflow-x-auto rounded">
                  <table className="w-[600px] border-2 border-[#06bbfa] rounded-lg">
                    <thead>
                      <tr>
                        <th
                          colSpan={2}
                          className="relative bg-[#06bbfa] text-black px-4 py-3 text-sm font-bold"
                        >
                          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Tactical Suppression
                          </span>
                          <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            Cost: 4
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1/4 bg-[#06bbfa] p-2">
                          <img
                            src="Blue-Archive/icons/FAN.png"
                            alt="Tactical Suppression icon"
                            className="w-full h-auto rounded"
                          />
                        </td>
                        <td className="w-3/4 border-l-2 border-[#06bbfa] p-4 text-xs">
                          <ul className="list-disc list-inside space-y-1">
                            <li>
                              <span className="font-bold">LV01</span> ~ Deals{" "}
                              <span className="text-[#06bbfa] font-bold">
                                435%
                              </span>{" "}
                              of ATK as DMG to enemies in a{" "}
                              <span className="text-[#06bbfa] font-bold">
                                fan-shaped
                              </span>{" "}
                              area.
                            </li>
                            <li>
                              <span className="font-bold">LV02</span> ~ Deals{" "}
                              <span className="text-[#06bbfa] font-bold">
                                501%
                              </span>{" "}
                              of ATK as DMG to enemies in a{" "}
                              <span className="text-[#06bbfa] font-bold">
                                fan-shaped
                              </span>{" "}
                              area.
                            </li>
                            <li>
                              <span className="font-bold">LV03</span> ~ Deals{" "}
                              <span className="text-[#06bbfa] font-bold">
                                566%
                              </span>{" "}
                              of ATK as DMG + inflicts{" "}
                              <span className="text-[#06bbfa] font-bold">
                                STUN
                              </span>{" "}
                              (1 s).
                            </li>
                            <li>
                              <span className="font-bold">LV04</span> ~ Deals{" "}
                              <span className="text-[#06bbfa] font-bold">
                                632%
                              </span>{" "}
                              of ATK as DMG + inflicts{" "}
                              <span className="text-[#06bbfa] font-bold">
                                STUN
                              </span>{" "}
                              (1 s).
                            </li>
                            <li>
                              <span className="font-bold">LV05</span> ~ Deals{" "}
                              <span className="text-[#06bbfa] font-bold">
                                697%
                              </span>{" "}
                              of ATK as DMG + inflicts{" "}
                              <span className="text-[#06bbfa] font-bold">
                                STUN
                              </span>{" "}
                              (1.4 s).
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Normal Skill */}
              {activeSkillTab === "normal" && (
                <div className="overflow-x-auto">
                  <table className="w-[600px] border-2 border-[#06bbfa] rounded-lg">
                    <thead>
                      <tr>
                        <th
                          colSpan={2}
                          className="relative bg-[#06bbfa] text-black px-4 py-3 text-sm font-bold"
                        >
                          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Emergency First Aid
                          </span>
                          <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            Skill Icons
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1/4 bg-[#06bbfa] p-2">
                          <img
                            src="Blue-Archive/icons/DOT-HEAL.png"
                            alt="Emergency First Aid icon"
                            className="w-full h-auto rounded"
                          />
                        </td>
                        <td className="w-3/4 border-l-2 border-[#06bbfa] p-4 text-xs">
                          <ul className="list-disc list-inside space-y-1">
                            {[
                              100, 105, 110, 130, 135, 140, 160, 165, 171, 191,
                            ].map((heal, i) => (
                              <li key={i}>
                                <span className="font-bold">
                                  LV{(i + 1).toString().padStart(2, "0")}
                                </span>{" "}
                                ~ Continuously recovers{" "}
                                <span className="text-[#06bbfa] font-bold">
                                  {heal}%
                                </span>{" "}
                                of HEAL when HP ≤{" "}
                                <span className="text-[#06bbfa] font-bold">
                                  30%
                                </span>
                                . Lasts 20 s (1× per battle).
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Passive Skill */}
              {activeSkillTab === "passive" && (
                <div className="overflow-x-auto">
                  <table className="w-[600px] border-2 border-[#06bbfa] rounded-lg">
                    <thead>
                      <tr>
                        <th
                          colSpan={2}
                          className="relative bg-[#06bbfa] text-black px-4 py-3 text-sm font-bold"
                        >
                          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Foreclosure Task Force President
                          </span>
                          <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            Skill Icons
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1/4 bg-[#06bbfa] p-2">
                          <img
                            src="Blue-Archive/icons/STAT-BUFF.png"
                            alt="Foreclosure Task Force President icon"
                            className="w-full h-auto rounded"
                          />
                        </td>
                        <td className="w-3/4 border-l-2 border-[#06bbfa] p-4 text-xs">
                          <ul className="list-disc list-inside space-y-1">
                            {[
                              14, 14.7, 15.4, 18.2, 18.9, 19.6, 22.4, 23.1,
                              23.8, 26.6,
                            ].map((def, i) => (
                              <li key={i}>
                                <span className="font-bold">
                                  LV{(i + 1).toString().padStart(2, "0")}
                                </span>{" "}
                                ~ Increases DEF by{" "}
                                <span className="text-[#06bbfa] font-bold">
                                  {def}%
                                </span>
                                .
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Sub Skill */}
              {activeSkillTab === "sub" && (
                <div className="overflow-x-auto">
                  <table className="w-[600px] border-2 border-[#06bbfa] rounded-lg">
                    <thead>
                      <tr>
                        <th
                          colSpan={2}
                          className="relative bg-[#06bbfa] text-black px-4 py-3 text-sm font-bold"
                        >
                          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Expert Suppression
                          </span>
                          <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            Skill Icons
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1/4 bg-[#06bbfa] p-2">
                          <img
                            src="Blue-Archive/icons/SHIELD.png"
                            alt="Expert Suppression icon"
                            className="w-full h-auto rounded"
                          />
                        </td>
                        <td className="w-3/4 border-l-2 border-[#06bbfa] p-4 text-xs">
                          <ul className="list-disc list-inside space-y-1">
                            {[
                              108, 113, 118, 140, 145, 151, 172, 178, 183, 205,
                            ].map((bar, i) => (
                              <li key={i}>
                                <span className="font-bold">
                                  LV{(i + 1).toString().padStart(2, "0")}
                                </span>{" "}
                                ~ Casts{" "}
                                <span className="text-[#06bbfa] font-bold">
                                  {bar}%
                                </span>{" "}
                                of HEAL as a{" "}
                                <span className="text-[#06bbfa] font-bold">
                                  BARRIER
                                </span>{" "}
                                when using EX-Skills.
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>

          {/* EX-Skill Table Section */}
          <div className="mt-10">
            {/* Table Header with tabs */}
            <div className="flex w-full">
              <div className="w-1/2 bg-[#4f86f7] text-white text-center py-2 font-bold">
                EX-Skill
              </div>
              <div className="w-1/2 bg-gray-700 text-gray-300 text-center py-2 font-bold">
                Growth Material
              </div>
            </div>

            {/* Table Content */}
            <div className="flex w-full">
              {/* Left side - EX Skill image */}
              <div className="w-1/3 bg-black bg-opacity-50 p-4 flex items-center justify-center">
              
              </div>

              {/* Right side - Material grid */}
              <div className="w-2/3 font-bold">
                {/* Material rows */}
                {[
                  {
                    level: "LV02",
                    materials: [
                      {
                        src: "Blue-Archive/icons/Millennium_EX-Skill_Disc_0.png",
                        amount: 12,
                      },
                      { src: "/Blue-Archive/icons/Nebra_0.png", amount: 10 },
                    ],
                  },
                  {
                    level: "LV03",
                    materials: [
                      {
                        src: "/Blue-Archive/icons/Millennium_EX-Skill_Disc_1.png",
                        amount: 12,
                      },
                      {
                        src: "Blue-Archive/icons/Millennium_EX-Skill_Disc_0.png",
                        amount: 18,
                      },
                      { src: "/Blue-Archive/icons/Nebra_1.png", amount: 17 },
                      {
                        src: "/Blue-Archive/icons/Antikythera_0.png",
                        amount: 10,
                      },
                      { src: "/Blue-Archive/Gold.png", amount: "500K" },
                    ],
                  },
                  {
                    level: "LV04",
                    materials: [
                      {
                        src: "/Blue-Archive/icons/Millennium_EX-Skill_Disc_2.png",
                        amount: 12,
                      },
                      {
                        src: "/Blue-Archive/icons/Millennium_EX-Skill_Disc_1.png",
                        amount: 18,
                      },
                      { src: "/Blue-Archive/icons/Nebra_2.png", amount: 25 },
                      {
                        src: "/Blue-Archive/icons/Antikythera_1.png",
                        amount: 20,
                      },
                      { src: "/Blue-Archive/Gold.png", amount: "3M" },
                    ],
                  },
                  {
                    level: "LV05",
                    materials: [
                      {
                        src: "/Blue-Archive/icons/Millennium_EX-Skill_Disc_3.png",
                        amount: 8,
                      },
                      {
                        src: "/Blue-Archive/icons/Millennium_EX-Skill_Disc_2.png",
                        amount: 18,
                      },
                      { src: "/Blue-Archive/icons/Nebra_3.png", amount: 6 },
                      {
                        src: "/Blue-Archive/icons/Antikythera_2.png",
                        amount: 17,
                      },
                      { src: "/Blue-Archive/Gold.png", amount: "10M" },
                    ],
                  },
                ].map((row, index, array) => (
                  <div
                    key={row.level}
                    className={`flex items-center bg-black bg-opacity-70 ${
                      index !== array.length - 1
                        ? "border-b border-gray-800"
                        : ""
                    }`}
                  >
                    <div className="w-16 bg-[#4f86f7] text-center py-3 px-2">
                      <span className="text-sm font-bold text-white">
                        {row.level}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1 py-1 px-2">
                      {row.materials.map((material, idx) => (
                        <div key={idx} className="flex items-center">
                          <img
                            src={material.src}
                            alt={`Material ${idx + 1}`}
                            className="h-14 w-16"
                          />
                          <span className="text-xs text-white ml-0">
                            ×{material.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        

          {/* Unique Equipment Section */}
          <h3
            className="text-[#3e7af2] text-xl font-bold ml-3 mt-8"
            id="unique-equipment"
          >
            Unique Equipment
          </h3>
          <div className="ml-3 mt-4">
            <div className="flex gap-4 bg-black bg-opacity-60 p-4 rounded-lg border border-gray-800 max-w-2xl">
              <div className="flex-shrink-0">
                <img
                  src="/Blue-Archive/weapons/Toki_UE.png"
                  alt="Smart Combat Handgun"
                  className="w-36 h-36 object-contain"
                />
              </div>
              <div>
                <h4 className="text-[#06bbfa] font-bold">
                  Smart Combat Handgun
                </h4>
                <p className="text-sm text-white mt-2">
                  A handgun designed for undercover operations that can
                  accurately locate and neutralize targets. Its firepower has
                  been enhanced with special technology to maintain stealth
                  while maximizing effectiveness.
                </p>
                <div className="mt-3">
                  <span className="text-xs text-gray-400">Stats Bonus: </span>
                  <span className="text-xs text-white">
                    ATK +340 / HP +1580 / CRIT +120
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Unique Item Section */}
          <h3
            className="text-[#3e7af2] text-xl font-bold ml-3 mt-8"
            id="unique-item"
          >
            Unique Item
          </h3>
          <div className="ml-3 mt-4">
            <div className="flex gap-4 bg-black bg-opacity-60 p-4 rounded-lg border border-gray-800 max-w-2xl">
              <div className="flex-shrink-0">
                <img
                  src="/Blue-Archive/icons/BunnyEars_Icon.png"
                  alt="Secret Agent Bunny Ears"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div>
                <h4 className="text-[#06bbfa] font-bold">
                  Secret Agent Bunny Ears
                </h4>
                <p className="text-sm text-white mt-2">
                  Special bunny ears with advanced listening technology. While
                  appearing as a simple costume accessory, they actually enhance
                  Toki's ability to detect enemies and improve mission success
                  rates.
                </p>
                <div className="mt-3">
                  <span className="text-xs text-gray-400">Effect: </span>
                  <span className="text-xs text-white">
                    Increases Stealth by 15% and Critical Rate by 8% when
                    initiating combat
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bond Section */}
          <section id="bond" className="mt-8 ml-3">
            <h3 className="text-[#3e7af2] text-xl font-bold">Bond</h3>

            <table className="w-full border-2 border-[#06bbfa] rounded-lg text-center mt-4">
              <thead>
                <tr>
                  <th
                    colSpan={4}
                    className="relative bg-[#06bbfa] text-black font-bold px-4 py-1 "
                  >
                    Affection Rank Bonus
                    <span className="absolute left-4 top-2 text-xs">
                      <a href="/wiki/Template:Bond">V</a> • T •{" "}
                      <a
                        href="https://bluearchive.fandom.com/wiki/Bond?action=edit"
                        target="_blank"
                        rel="noreferrer"
                      >
                        E
                      </a>
                    </span>
                    <span className="absolute right-4 top-2 text-xs text-yellow-300">
                      <a href="/wiki/Affection">Affection</a>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-[#06bbfa] text-black font-bold px-2 py-1">
                    Shooting Stars
                  </th>
                  <td colSpan={3} className="border border-[#06bbfa] px-2 py-1">
                    <audio
                      controls
                      className="w-full max-w-xs mx-auto h-8"
                      src="https://static.wikia.nocookie.net/blue-archive/images/5/59/Shooting_Stars.ogg/revision/latest?cb=20210309192025"
                    >
                      Your browser does not support the <code>audio</code> element.
                    </audio>
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#06bbfa] text-black font-bold px-2 py-2">
                    Memorial Lobby
                  </th>
                  <th className="bg-[#06bbfa] text-black font-bold px-2 py-2">
                    <div className="flex items-center justify-center space-x-1">
                      <img
                        src="/Blue-Archive/icons/Bond.png"
                        alt="Bond"
                        width={20}
                        height={19}
                      />
                      <img
                        src="/Blue-Archive/icons/Blue_Font_9.png"
                        alt="Bond Level"
                        width={18}
                        height={17}
                      />
                    </div>
                  </th>
                  <th
                    colSpan={2}
                    className="bg-[#06bbfa] text-black font-bold px-2 py-2"
                  >
                    Total Stats ~ DEF+79 / HP+2625
                  </th>
                </tr>

                {/* Live2D & Icon column */}
                <tr>
                  <td
                    rowSpan={7}
                    className="border border-[#06bbfa] rounded-lg p-2 align-top"
                  >
                  <HoshinoLive2D />
                  </td>
                  <th className="bg-[#06bbfa] text-black font-bold px-2 py-2">
                    LV02 – 05
                  </th>
                  <td className="border border-[#06bbfa] text-left px-2 py-2">
                    DEF +1
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#06bbfa] text-black font-bold px-2 py-2">
                    LV06 – 10
                  </th>
                  <td className="border border-[#06bbfa] text-left px-2 py-2">
                    DEF +2
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#06bbfa] text-black font-bold px-2 py-2">
                    LV11 – 15
                  </th>
                  <td className="border border-[#06bbfa] text-left px-2 py-2">
                    DEF +2 / HP +122
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#06bbfa] text-black font-bold px-2 py-2">
                    LV16 – 20
                  </th>
                  <td className="border border-[#06bbfa] text-left px-2 py-2">
                    DEF +3 / HP +147
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#06bbfa] text-black font-bold px-2 py-2">
                    LV21 – 30
                  </th>
                  <td className="border border-[#06bbfa] text-left px-2 py-2">
                    DEF +1 / HP +26
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#06bbfa] text-black font-bold px-2 py-2">
                    LV31 – 40
                  </th>
                  <td className="border border-[#06bbfa] text-left px-2 py-2">
                    DEF +1 / HP +38
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#06bbfa] text-black font-bold px-2 py-2">
                    LV41 – 50
                  </th>
                  <td className="border border-[#06bbfa] text-left px-2 py-2">
                    DEF +2 / HP +64
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* <div className="ml-3 mt-4">
            <div className="bg-black bg-opacity-60 border border-gray-800 rounded-lg p-4 max-w-3xl">
              <div className="border-b border-gray-700 pb-3 mb-3">
                <div className="flex items-center">
                  <img
                    src="/Blue-Archive/icons/Bond.png"
                    alt="Bond Icon"
                    className="w-6 h-6 mr-2"
                  />
                  <h4 className="text-[#06bbfa] font-bold">
                    Affection Rank Bonus
                  </h4>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#06bbfa] p-3 rounded">
                  <div className="flex justify-between mb-2">
                    <span className="text-black text-sm">Midsummer cat</span>
                  </div>
                </div>

                <div className="bg-[#06bbfa] p-3 rounded">
                  <div className="flex justify-between mb-2">
                    <span className="text-black text-sm">Memorial Lobby</span>
                    <div className="flex items-center">
                      <span className="text-pink-500 mr-1">♥</span>
                      <span className="text-black">5</span>
                    </div>
                  </div>
                  <div className="text-xs text-black mt-1">
                    Total Stats - ATK+182 / HP+1190
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4">
                {[
                  { level: "LV02 - 05", bonus: "ATK+3" },
                  { level: "LV06 - 10", bonus: "ATK+4" },
                  { level: "LV11 - 15", bonus: "ATK+5 / HP+55" },
                  { level: "LV16 - 20", bonus: "ATK+7 / HP+67" },
                  { level: "LV21 - 30", bonus: "ATK+2 / HP+12" },
                  { level: "LV31 - 40", bonus: "ATK+3 / HP+17" },
                  { level: "LV41 - 50", bonus: "ATK+4 / HP+29" },
                ].map((bond, index) => (
                  <div
                    key={index}
                    className="bg-[#06bbfa] p-2 rounded flex justify-between"
                  >
                    <span className="text-xs text-black">{bond.level}</span>
                    <span className="text-xs text-black font-bold">
                      {bond.bonus}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <img
                  src="Blue-Archive/live2d/Hoshino_Live2D.gif"
                  alt=""
                  className="w-full mt-4 rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div> */}
        </div>
      </main>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-40 right-6 z-50 bg-[#02d3fb] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 focus:outline-none"
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
