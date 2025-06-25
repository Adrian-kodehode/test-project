import React, { useEffect, useState, memo } from "react";

const KarinBunnyLive2D = memo(() => (
  <div className="flex flex-col space-y-2">
    <img
      src="Blue-Archive/live2d/Karin_Bunny_Girl_Live2D.gif"
      alt="Hoshino Live2D"
      className="w-full rounded-lg mx-auto "
    />
  </div>
));
const KarinBunnyEX = memo(() => (
  <div className="flex flex-col space-y-2">
    <img
      src="Blue-Archive/live2d/Karin_Bunny_Girl_EX.gif"
      alt="Hoshino Live2D"
      className="w-full rounded-lg mx-auto "
    />
  </div>
));

export const KarinBunny = () => {
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
      <main className="flex-1 mt-10 mb-10 w-[1300px] max-w-[98vw] bg-black bg-opacity-80 rounded-lg p-4 text-white shadow-lg mx-auto ">
        <h2 className="text-4xl mt-10 mb-10 ml-5 text-[#06bbfa]">
          Kakudate Karin (Bunny Girl ver.)
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
            <div className="bg-[#4f86f7] w-[400px] text-black flex flex-col items-center justify-center relative py-3 px-4 pt-5 left-40 rounded">
              <span className="block text-center w-full italic">
                “ ...Somehow, I really feel the line of sight. ”
              </span>
              <br />
              <span className="absolute right-15 bottom-1 text-xs italic">
                ~ Kakudate Karin (Bunny Girl ver.)
              </span>
            </div>
            <p className="mt-5 max-w-[600px]">
              <strong>Kakudate Karin (Bunny Girl ver.)</strong> (角楯カリン
              (バニーガール Ver.)) is the Bunny Girl Variant of{" "}
              <a href="#" className="text-[#357ff3]">
                Karin
              </a>{" "}
              and is one of the{" "}
              <a href="/students357ff3" className="text-[#357ff3]">
                students
              </a>{" "}
              studying in{" "}
              <a href="#" className="text-[#357ff3]">
                Millennium Science School
              </a>{" "}
              who wields a
              <a href="#" className="text-[#357ff3]">
                Sniper Rifle
              </a>
              .
            </p>
            <p className="mt-5">
              She is a member of the{" "}
              <a href="#" className="text-[#357ff3]">
                Cleaning&Clearing
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
              <ol className=" list-inside px-5 py-3 text-white text-sm space-y-1">
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
                  <span className="text-gray-400"> 5.</span>{" "}
                  <a href="#trivia" className="hover:underline">
                    Trivia
                  </a>
                </li>
                <li>
                  <a href="#navigation" className="hover:underline">
                    <span className="text-gray-400"> 6.</span> Navigation
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
                It's Karin, an agent of C&C who will be directly participating
                in the front line of this mission! Although she quickly changed
                into her bunny costume, saying it was for the sake of the
                mission, she was still a little concerned about the stares that
                were gathering around her more than usual...
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
                See{" "}
                <a href="#" className="text-[#3e7af2] hover:underline">
                  Kakudate Karin
                </a>
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
                Toki has hip-length pale blonde hair with a crown-styled braid,
                interspersed with random blue strands. She has sky blue eyes and
                a big navy blue bow behind her head.
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
                See{" "}
                <a href="#" className="text-[#3e7af2] hover:underline">
                  Kakudate Karin
                </a>
              </p>
            </div>

            {/* The rest of your main content goes here */}
          </div>

          {/* Aside (right) */}
          <aside className="bg-[#4f86f7] border-2 border-[#357ff3] rounded-lg shadow-lg p-6 mt-5 w-full max-w-xs mb-8 mr-5">
            <h2 className="text-2xl font-bold text-[#ccccff] mb-2 text-center">
              Asuma Toki (Bunny Girl ver.) /
            </h2>
            <div className="text-center text-sm text-[#ccccff] font-bold mb-4">
              飛鳥馬トキ (バニーガール Ver.)
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
                        className={`px-4 py-2 text-[#ccccff] font-${
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
              <div className="flex justify-center">
                <figure>
                  <a href="#">
                    <img
                      src={
                        selectedTab === "icon"
                          ? "/Blue-Archive/characters/Karin_Bunny_Girl_Icon.png"
                          : selectedTab === "portrait"
                          ? "/Blue-Archive/characters/Karin_Bunny_Girl_Portrait.png"
                          : selectedTab === "sprite"
                          ? "/Blue-Archive/characters/Karin_Bunny_Girl_Sprite.png"
                          : selectedTab === "halo"
                          ? "/Blue-Archive/characters/Karin_Halo.png"
                          : "/Blue-Archive/characters/Karin_Bunny_Girl_Icon.png"
                      }
                      alt={`Hikari ${
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
                <caption className="text-lg font-bold text-[#ccccff] rounded-t-md py-2 text-left">
                  Unit Information
                </caption>
                <tbody>
                  {/* Rarity, Bond, Cover */}
                  <tr>
                    {/* Rarity */}
                    <td className="bg-[#ccccff] px-2 py-2 text-center align-middle w-1/3">
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
                    <td className="bg-[#ccccff] px-2 py-2  text-center align-middle w-1/3">
                      <div className="flex gap-1 justify-center items-center w-full">
                        <img
                          src="/Blue-Archive/icons/Bond.png"
                          alt="Bond"
                          width={18}
                          height={18}
                          className="inline-block"
                        />
                        <img
                          src="/Blue-Archive/icons/Blue_Font_2.png"
                          alt="Bond Level"
                          width={16}
                          height={16}
                          className="inline-block"
                        />
                      </div>
                    </td>
                    {/* Cover */}
                    <td className="bg-[#ccccff] px-2 py-2 text-center align-middle w-1/3">
                      <img
                        src="/Blue-Archive/icons/Cover.png"
                        alt="Cover"
                        width={18}
                        height={18}
                        className="inline-block"
                      />
                    </td>
                  </tr>
                  {/* Role, Class, Position */}
                  <tr>
                    {/* Role */}
                    <td className="bg-[#ccccff] px-2 py-2 text-center align-middle w-1/3">
                      <img
                        src="/Blue-Archive/icons/STRIKER.png"
                        alt="STRIKER"
                        width={48}
                        height={12}
                        className="inline-block"
                      />
                    </td>
                    {/* Class */}
                    <td className="bg-[#ccccff] px-2 py-2  text-center align-middle w-1/3">
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src="/Blue-Archive/icons/Attacker (1).png"
                          alt="Attacker"
                          width={20}
                          height={20}
                          className="inline-block mb-1"
                        />
                        <span className="font-semibold text-black text-sm">
                          Attacker
                        </span>
                      </div>
                    </td>
                    {/* Position */}
                    <td className="bg-[#ccccff] px-2 py-2 text-center align-middle w-1/3">
                      <img
                        src="/Blue-Archive/icons/BACK.png"
                        alt="BACK"
                        width={50}
                        height={20}
                        className="inline-block"
                      />
                    </td>
                  </tr>
                  {/* School, Firearm */}
                  <tr>
                    {/* School */}
                    <td className="bg-[#ccccff] px-2 py-2 text-center align-middle w-1/3">
                      <img
                        src="Blue-Archive/icons/Millennium_Icon.png"
                        alt="Highlander Icon"
                        width={56}
                        height={48}
                        className="mx-auto ml-9"
                      />
                    </td>
                    {/* Firearm */}
                    <td className="bg-[#ccccff] px-2 py-2 text-center align-middle w-1/3">
                      <img
                        src="/Blue-Archive/weapons/SR_New_Icon.png"
                        alt="Handgun Icon"
                        width={80}
                        height={48}
                        className="mx-auto ml-20"
                      />
                    </td>
                    {/* Empty cell for alignment */}
                    <td className="bg-[#ccccff] px-2 py-2  text-center align-middle w-1/3"></td>
                  </tr>
                  {/* Terrain */}
                  <tr>
                    {/* City */}
                    <td className="bg-[#ccccff] text-center align-middle w-1/3 px-2 py-2">
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
                    <td className="bg-[#ccccff] text-center align-middle w-1/3 px-2 py-2">
                      <div className="relative inline-block">
                        <img
                          src="/Blue-Archive/icons/Desert_Icon.png"
                          alt="Desert Icon"
                          width={40}
                          height={40}
                          className="inline-block"
                        />
                        <img
                          src="/Blue-Archive/icons/Neutral_Icon.png"
                          alt="Neutral Icon"
                          width={24}
                          height={24}
                          className="absolute right-[-6px] bottom-[-6px] z-20"
                        />
                      </div>
                    </td>
                    {/* Indoor */}
                    <td className="bg-[#ccccff] text-center align-middle w-1/3 px-2 py-2">
                      <div className="relative inline-block">
                        <img
                          src="/Blue-Archive/icons/Indoor_Icon.png"
                          alt="Indoor Icon"
                          width={40}
                          height={40}
                          className="inline-block"
                        />
                        <img
                          src="/Blue-Archive/icons/Excellent_Icon.png"
                          alt="Excellent Icon"
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
                    <td className="bg-[#ccccff] text-center align-middle w-1/3 px-2 py-2">
                      <img
                        src="/Blue-Archive/images/Offensive_Icon.png"
                        alt="Offensive Icon"
                      />
                      <div className="border-2 border-[#02D3FB] rounded-md inline-flex h-5 w-[60px] overflow-hidden text-center justify-center items-center align-middle my-[2px] text-[10px] bg-[#46adff]">
                        <b>
                          <span className="text-black">Mystic</span>
                        </b>
                      </div>
                    </td>
                    {/* Defensive Type */}
                    <td className="bg-[#ccccff] text-center align-middle w-1/3 px-2 py-2">
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
                    <td className="bg-[#ccccff] text-center align-middle w-1/3 px-2 py-2"></td>
                  </tr>
                  {/* Equipment */}
                  <tr>
                    {/* Equipment 1: Gloves */}
                    <td className="bg-[#ccccff] text-center align-middle w-1/3 px-2 py-2">
                      <img
                        src="/Blue-Archive/icons/Hat_T1_Icon.png"
                        alt="Gloves T1 Icon"
                        width={56}
                        height={44}
                        className="mx-auto"
                      />
                    </td>
                    {/* Equipment 2: Hairpin */}
                    <td className="bg-[#ccccff] text-center align-middle w-1/3 px-2 py-2">
                      <img
                        src="/Blue-Archive/icons/Hairpin_T1_Icon.png"
                        alt="Hairpin T1 Icon"
                        width={56}
                        height={44}
                        className="mx-auto"
                      />
                    </td>
                    {/* Equipment 3: Charm */}
                    <td className="bg-[#ccccff] text-center align-middle w-1/3 px-2 py-2">
                      <img
                        src="/Blue-Archive/icons/Watch_T1_Icon.png"
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
                        className={`px-4 py-2 text-[#ccccff] font-${
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
                    <span className="font-extrabold text-[#ccccff] text-sm">
                      LEVEL 1
                    </span>
                    <span className="font-extrabold text-[#ccccff] text-sm">
                      BASE★
                    </span>
                  </div>
                  {/* Level 1 Stats */}
                  <div className="bg-[#ccccff] grid grid-cols-4 gap-2 pt-3 pb-2 mb-2">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-[#4f86f7]">
                        HP
                      </span>
                      <span className="font-bold text-lg text-black">2523</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-[#4f86f7]">
                        ATK
                      </span>
                      <span className="font-bold text-lg text-black">420</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-[#4f86f7]">
                        DEF
                      </span>
                      <span className="font-bold text-lg text-black">20</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-[#4f86f7]">
                        HEAL
                      </span>
                      <span className="font-bold text-lg text-black">1643</span>
                    </div>
                  </div>
                  {/* Level 100 Row 1 */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-[#ccccff] text-sm">
                      Level 100
                    </span>
                    <span className="font-bold text-[#ccccff] text-sm">
                      BASE★
                    </span>
                  </div>
                  {/* Level 100 Stats 1 */}
                  <div className="bg-[#ccccff] grid grid-cols-4 gap-2 mb-2 pt-3 pb-2">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">21874</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">4205</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">120</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">4928</span>
                    </div>
                  </div>
                  {/* Level 100 Row 2 (4 images) */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-[#ccccff] text-sm">
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
                  <div className="bg-[#ccccff] grid grid-cols-4 gap-2 mb-2 pt-3 pb-2">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">23632</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">4687</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">120</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">5432</span>
                    </div>
                  </div>
                  {/* Level 100 Row 3 (5 images) */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-[#ccccff] text-sm">
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
                  <div className="bg-[#ccccff] grid grid-cols-4 gap-2 mb-4 pt-3 pb-2">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">26366</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">4687</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">120</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">6061</span>
                    </div>
                  </div>
                  {/* Profile Dropdown */}

                  <details>
                    <summary className="cursor-pointer font-bold text-[#ccccff] flex items-center">
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
                    <summary className="cursor-pointer font-bold text-[#ccccff] flex items-center">
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
              Karin wears a shiny black bunny suit with a white collar, sky blue
              bow tie and shiny black bunny ears, along with matching white
              sleeve cuffs and gloves. She also wears fishnet tights and black
              high heels.
            </p>
            <p className="mt-5">
              In addition, there's a "02" tattoo on Karin's left shoulder.
            </p>
          </div>
          <h4
            className="text-[#3e7af2] text-lg font-bold ml-3 mt-4"
            id="firearm"
          >
            Firearm
          </h4>
          <div className="ml-3 mt-2">
            See{" "}
            <a href="#" className="text-[#3e7af2] hover:underline">
              Kakudate Karin
            </a>
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
          {/* Skills Tabbed Interface */}
          <section id="skills" className="mt-8">
            {/* Tabs */}
            <div className="flex border-b border-[#4f86f7]">
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
                      ? "text-[#4f86f7] border-b-2 border-[#4f86f7]"
                      : "text-gray-400 hover:text-[#4f86f7]"
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
                  <table className="w-[1000px] border-2 border-[#4f86f7] rounded-lg">
                    <thead>
                      <tr>
                        <th
                          colSpan={2}
                          className="relative bg-[#4f86f7] text-black px-4 py-3 text-sm font-bold"
                        >
                          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Quickly and Accurately
                          </span>
                          <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            Cost: 2
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1/4 bg-[#4f86f7] p-2">
                          <img
                            src="Blue-Archive/icons/FAN.png"
                            alt="Sealess: Ishbóshet icon"
                            className="w-full h-auto rounded"
                          />
                        </td>
                        <td className="w-3/4 border-l-2 border-[#4f86f7] p-4 text-xs">
                          <ul className="list-disc list-inside space-y-1">
                            <li>
                              <span className="font-bold">LV01</span> ~ Deals{" "}
                              <span className="text-[#4f86f7] font-bold">
                                325%
                              </span>{" "}
                              of ATK as DMG to enemies in a{" "}
                              <span className="text-[#4f86f7] font-bold">
                                fan-shaped
                              </span>{" "}
                              area. (This attack ignores{" "}
                              <span className="text-[#4f86f7] font-bold">
                                32%
                              </span>{" "}
                              of the enemy's DEF).
                            </li>
                            <li>
                              <span className="font-bold">LV02</span> ~ Deals{" "}
                              <span className="text-[#4f86f7] font-bold">
                                372%
                              </span>{" "}
                              of ATK as DMG to enemies in a{" "}
                              <span className="text-[#4f86f7] font-bold">
                                fan-shaped
                              </span>{" "}
                              area. (This attack ignores{" "}
                              <span className="text-[#4f86f7] font-bold">
                                32%
                              </span>{" "}
                              of the enemy's DEF).
                            </li>
                            <li>
                              <span className="font-bold">LV03</span> ~ Deals{" "}
                              <span className="text-[#4f86f7] font-bold">
                                423%
                              </span>{" "}
                              of ATK as DMG to enemies in a{" "}
                              <span className="text-[#4f86f7] font-bold">
                                fan-shaped
                              </span>{" "}
                              area. (This attack ignores{" "}
                              <span className="text-[#4f86f7] font-bold">
                                40%
                              </span>{" "}
                              of the enemy's DEF).
                            </li>
                            <li>
                              <span className="font-bold">LV04</span> ~ Deals{" "}
                              <span className="text-[#4f86f7] font-bold">
                                472%
                              </span>{" "}
                              of ATK as DMG to enemies in a{" "}
                              <span className="text-[#4f86f7] font-bold">
                                fan-shaped
                              </span>{" "}
                              area. (This attack ignores{" "}
                              <span className="text-[#4f86f7] font-bold">
                                40%
                              </span>{" "}
                              of the enemy's DEF).
                            </li>
                            <li>
                              <span className="font-bold">LV05</span> ~ Deals{" "}
                              <span className="text-[#4f86f7] font-bold">
                                521%
                              </span>{" "}
                              of ATK as DMG to enemies in a{" "}
                              <span className="text-[#4f86f7] font-bold">
                                fan-shaped
                              </span>{" "}
                              area. (This attack ignores{" "}
                              <span className="text-[#4f86f7] font-bold">
                                48%
                              </span>{" "}
                              of the enemy's DEF).
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
                  <table className="w-[1000px] border-2 border-[#4f86f7] rounded-lg">
                    <thead>
                      <tr>
                        <th
                          colSpan={2}
                          className="relative bg-[#4f86f7] text-black px-4 py-3 text-sm font-bold"
                        >
                          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Wide-area Firing, Commencing
                          </span>
                          <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            Skill Icons
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1/4 bg-[#4f86f7] p-2">
                          <img
                            src="Blue-Archive/icons/CIRCLE.png"
                            alt="Emergency First Aid icon"
                            className="w-full h-auto rounded"
                          />
                        </td>
                        <td className="w-3/4 border-l-2 border-[#4f86f7] p-4 text-xs">
                          <ul className="list-disc list-inside space-y-1">
                            {[
                              111, 117, 120, 142, 145, 150, 161, 167, 170, 192,
                            ].map((dmg, idx) => {
                              const stunDurations = [
                                20, 20, 20, 24, 24, 24, 28, 28, 28, 32,
                              ];
                              return (
                                <li key={idx}>
                                  <span className="font-bold">
                                    LV{(idx + 1).toString().padStart(2, "0")}
                                  </span>{" "}
                                  ~ Deals{" "}
                                  <span className="text-[#4f86f7] font-bold">
                                    {dmg}%
                                  </span>{" "}
                                  of ATK as DMG to enemies in a{" "}
                                  <span className="text-[#4f86f7] font-bold">
                                    Round-shaped
                                  </span>{" "}
                                  area every{" "}
                                  <span className="text-[#4f86f7] font-bold">
                                    25
                                  </span>{" "}
                                  sec. (This attack ignores{" "}
                                  <span className="text-[#4f86f7] font-bold">
                                    {stunDurations[idx].toFixed(1)}%
                                  </span>{" "}
                                  of the enemy's DEF).
                                </li>
                              );
                            })}
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
                  <table className="w-[600px] border-2 border-[#4f86f7] rounded-lg">
                    <thead>
                      <tr>
                        <th
                          colSpan={2}
                          className="relative bg-[#4f86f7] text-black px-4 py-3 text-sm font-bold"
                        >
                          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Enhanced firepower, Complete
                          </span>
                          <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            Skill Icons
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1/4 bg-[#4f86f7] p-2">
                          <img
                            src="Blue-Archive/icons/STAT-BUFF.png"
                            alt="Foreclosure Task Force President icon"
                            className="w-full h-auto rounded"
                          />
                        </td>
                        <td className="w-3/4 border-l-2 border-[#4f86f7] p-4 text-xs">
                          <ul className="list-disc list-inside space-y-1">
                            {[
                              14, 14.7, 15.4, 18.2, 18.9, 19.6, 22.4, 23.1,
                              23.8, 26.6,
                            ].map((def, i) => (
                              <li key={i}>
                                <span className="font-bold">
                                  LV{(i + 1).toString().padStart(2, "0")}
                                </span>{" "}
                                ~ Increases ATK by{" "}
                                <span className="text-[#4f86f7] font-bold">
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
                  <table className="w-[800px] border-2 border-[#4f86f7] rounded-lg">
                    <thead>
                      <tr>
                        <th
                          colSpan={2}
                          className="relative bg-[#4f86f7] text-black px-4 py-3 text-sm font-bold"
                        >
                          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Precisely and Carefully
                          </span>
                          <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            Skill Icons
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1/4 bg-[#4f86f7] p-2">
                          <img
                            src="Blue-Archive/icons/STAT-BUFF.png"
                            alt="Expert Suppression icon"
                            className="w-full h-auto rounded"
                          />
                        </td>
                        <td className="w-3/4 border-l-2 border-[#4f86f7] p-4 text-xs">
                          <ul className="list-disc list-inside space-y-1">
                            {[
                              8.7, 9.1, 9.5, 11.3, 11.7, 12.2, 13.9, 14.3, 14.8,
                              16.5,
                            ].map((bar, i) => (
                              <li key={i}>
                                <span className="font-bold">
                                  LV{(i + 1).toString().padStart(2, "0")}
                                </span>{" "}
                                ~ Increases CRIT.R by{" "}
                                <span className="text-[#4f86f7] font-bold">
                                  {bar}%
                                </span>{" "}
                                when using EX-Skills (
                                <span className="text-[#4f86f7] font-bold">
                                  40
                                </span>{" "}
                                sec).
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Skill Status Table (Tailwind) */}
              <div className="overflow-x-auto mt-8">
                <table className="w-full border-2 border-[#4f86f7] rounded-lg text-center">
                  <thead>
                    <tr>
                      <th
                        colSpan={5}
                        className="bg-[#4f86f7] border border-[#4f86f7] text-black text-sm font-bold py-2 px-4 "
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-xs">
                            <a
                              href="/wiki/Template:Skill_Status"
                              className="hover:underline"
                            >
                              V
                            </a>{" "}
                            • T •{" "}
                            <a
                              href="https://bluearchive.fandom.com/wiki/Template:Skill_Status?action=edit"
                              target="_blank"
                              rel="noreferrer noopener"
                              className="hover:underline"
                            >
                              E
                            </a>
                          </span>
                          <span>Skill Status (Hover Over)</span>
                          <a
                            href="/wiki/Status_Effect"
                            className="text-xs text-yellow-300 hover:underline"
                          >
                            Status Effect
                          </a>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      {["EX-Skill", "Normal", "Passive", "Sub", "UE"].map(
                        (label) => (
                          <th
                            key={label}
                            className="bg-[#4f86f7] text-black text-sm font-bold py-1"
                          >
                            {label}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-2 border-[#4f86f7] p-2">
                        <img
                          src="Blue-Archive/icons/Cross_2.png"
                          alt="Cross Icon"
                          className="w-9 h-9 mx-auto"
                        />
                      </td>
                      <td className="border-2 border-[#4f86f7] p-2">
                        <img
                          src="Blue-Archive/icons/Debuff_-_CRIT.DMG.RES.png"
                          alt="Stunned Icon"
                          className="w-9 h-9 mx-auto"
                        />
                      </td>
                      <td className="border-2 border-[#4f86f7] p-2">
                        <img
                          src="Blue-Archive/icons/Buff_-_ATK.png"
                          alt="Crit Buff Icon"
                          className="w-9 h-9 mx-auto"
                        />
                      </td>
                      <td className="border-2 border-[#4f86f7] p-2">
                        <img
                          src="Blue-Archive/icons/Buff_-_Enhance_Explosion.png"
                          alt="ATK Buff Icon"
                          className="w-9 h-9 mx-auto"
                        />
                      </td>
                      <td className="border-2 border-[#4f86f7] p-2">
                        <img
                          src="Blue-Archive/icons/Buff_-_ATK_SPD.png"
                          alt="CC Power Buff Icon"
                          className="w-9 h-9 mx-auto"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* EX-Skill Table Section */}
          <h3
            className="text-[#3e7af2] text-xl font-bold ml-3 mt-8"
            id="growth-material"
          >
            Growth Material
          </h3>
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
              {/* Right side - Material grid */}
              <section className="mt-8 mb-8 overflow-x-auto">
                <table className="w-[1250px] border-separate border-spacing-y-2 border-2 border-[#4f86f7] rounded-lg text-center">
                  <thead>
                    <tr>
                      <th className="bg-[#4f86f7] text-black font-bold py-2 px-3">
                        EX-Skill
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        rowSpan={7}
                        className="border border-[#4f86f7] rounded-lg  align-top"
                      >
                        <KarinBunnyEX />
                      </td>
                    </tr>
                    <tr>
                      {/* Growth‐Material Icons */}
                      <td className="border bg-[#4f86f7] border-[#4f86f7] px-2 py-2">
                        <span className="text-black font-bold">LV02</span>
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Gehenna_EX-Skill_Disc_0.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x12
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Mandragora_0.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x14
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img src="/" alt="" className="hidden w-14 h-8 mr-1" />
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img src="/" alt="" className="hidden w-14 h-8 mr-1" />
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/Gold.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x80K
                      </td>
                    </tr>
                    <tr>
                      <td className="border bg-[#4f86f7] border-[#4f86f7] px-2 py-2">
                        <span className="text-black font-bold">LV03</span>
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Gehenna_EX-Skill_Disc_1.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x12
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Gehenna_EX-Skill_Disc_0.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x18
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Mandragora_1.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x12
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Phaistos_0.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x33
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/Gold.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x500K
                      </td>
                    </tr>
                    <tr>
                      <td className="border bg-[#4f86f7] border-[#4f86f7] px-2 py-2">
                        <span className="text-black font-bold">LV04</span>
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Gehenna_EX-Skill_Disc_2.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x12
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Gehenna_EX-Skill_Disc_1.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x18
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Mandragora_2.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x8
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Phaistos_1.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x28
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/Gold.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x3M
                      </td>
                    </tr>
                    <tr>
                      <td className="border bg-[#4f86f7] border-[#4f86f7] px-2 py-2">
                        <span className="text-black font-bold">LV05</span>
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Gehenna_EX-Skill_Disc_3.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x8
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Gehenna_EX-Skill_Disc_2.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x18
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Mandragora_3.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x11
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Phaistos_2.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x23
                      </td>
                      <td className="border border-[#4f86f7] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/Gold.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x10M
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
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

          {/* Bond Section */}
          <section id="bond" className="mt-8 ml-3">
            <h3 className="text-[#3e7af2] text-xl font-bold">Bond</h3>

            <table className="w-full border-2 border-[#4f86f7] rounded-lg text-center mt-4">
              <thead>
                <tr>
                  <th
                    colSpan={4}
                    className="relative bg-[#4f86f7] text-black font-bold px-4 py-1 "
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
                  <th className="bg-[#4f86f7] text-black font-bold px-2 py-1">
                    Shooting Stars
                  </th>
                  <td colSpan={3} className="border border-[#4f86f7] px-2 py-1">
                    <audio
                      controls
                      className="w-full max-w-xs mx-auto h-8"
                      src="https://static.wikia.nocookie.net/blue-archive/images/5/59/Shooting_Stars.ogg/revision/latest?cb=20210309192025"
                    >
                      Your browser does not support the <code>audio</code>{" "}
                      element.
                    </audio>
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#4f86f7] text-black font-bold px-2 py-2">
                    Memorial Lobby
                  </th>
                  <th className="bg-[#4f86f7] text-black font-bold px-2 py-2">
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
                    className="bg-[#4f86f7] text-black font-bold px-2 py-2"
                  >
                    Total Stats ~ ATK+182 / HP+1190
                  </th>
                </tr>

                {/* Live2D & Icon column */}
                <tr>
                  <td
                    rowSpan={7}
                    className="border border-[#4f86f7] rounded-lg p-2 align-top"
                  >
                    <KarinBunnyLive2D />
                  </td>
                  <th className="bg-[#4f86f7] text-black font-bold px-2 py-2">
                    LV02 – 05
                  </th>
                  <td className="border border-[#4f86f7] text-left px-2 py-2">
                    ATK+3
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#4f86f7] text-black font-bold px-2 py-2">
                    LV06 – 10
                  </th>
                  <td className="border border-[#4f86f7] text-left px-2 py-2">
                    ATk+4
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#4f86f7] text-black font-bold px-2 py-2">
                    LV11 – 15
                  </th>
                  <td className="border border-[#4f86f7] text-left px-2 py-2">
                    ATK+5 / HP+55
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#4f86f7] text-black font-bold px-2 py-2">
                    LV16 – 20
                  </th>
                  <td className="border border-[#4f86f7] text-left px-2 py-2">
                    ATK+7 / HP+67
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#4f86f7] text-black font-bold px-2 py-2">
                    LV21 – 30
                  </th>
                  <td className="border border-[#4f86f7] text-left px-2 py-2">
                    ATK+2 / HP+12
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#4f86f7] text-black font-bold px-2 py-2">
                    LV31 – 40
                  </th>
                  <td className="border border-[#4f86f7] text-left px-2 py-2">
                    ATK+3 / HP+17
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#4f86f7] text-black font-bold px-2 py-2">
                    LV41 – 50
                  </th>
                  <td className="border border-[#4f86f7] text-left px-2 py-2">
                    ATK+4 / HP+29
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
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
