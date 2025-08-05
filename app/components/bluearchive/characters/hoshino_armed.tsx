import React, { useEffect, useState, memo } from "react";

const Hoshino_ArmedLive2D = memo(() => (
  <div className="flex flex-col space-y-2">
    <img
      src="Blue-Archive/live2d/Hoshino_Armed_Live2D.gif"
      alt="Hoshino Live2D"
      className="w-full rounded-lg mx-auto "
    />
  </div>
));
const Hoshino_ArmedEX = memo(() => (
  <div className="flex flex-col space-y-2">
    <img
      src="Blue-Archive/live2d/Hoshino_Armed_EX.gif"
      alt="Hoshino_Armed EX Live2D"
      className="w-full rounded-lg mx-auto "
    />
  </div>
));

export const Hoshino_Armed = () => {
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
        backgroundImage: "url('/Blue-Archive/Site-background-dark (4).jpg')",
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
          Takanashi Hoshino (Armed ver.)
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
            <div className="bg-[#06bbfa] w-[300px] text-black flex flex-col items-center justify-center relative py-3 px-4 pt-5 left-20 right-20 rounded">
              <span className="block text-center w-full italic">
                “ I'm going to be serious for a minute. Uhe~, I'm a little
                embarrassed. ”
              </span>
              <br />
              <span className="absolute right-30 bottom-1 text-xs italic">
                ~ Takanashi Hoshino (Armed ver.)
              </span>
            </div>
            <p className="mt-5 max-w-[600px]">
              <strong>
                Takanashi Hoshino (Armed ver.) (小鳥遊ホシノ (臨戦Ver.))
              </strong>
              or Takanashi Hoshino (Battle ver.) is the Armed Variant of{" "}
              <a className="text-[#357ff3]" href="/hoshino">
                Hoshino
              </a>{" "}
              and is one of the{" "}
              <a href="/students" className="text-[#357ff3]">
                students
              </a>{" "}
              studying in{" "}
              <a href="#" className="text-[#357ff3]">
                Abydos High School
              </a>{" "}
              who wields a{" "}
              <a href="#" className="text-[#357ff3]">
                Shotgun
              </a>
              .
            </p>
            <p className="mt-5">
              She is the president of the{" "}
              <a href="#" className="text-[#357ff3]">
                Abydos Student Council
              </a>{" "}
              and the chairwoman of the{" "}
              <a href="#" className="text-[#357ff3]">
                Countermeasures Committee
              </a>
              .
            </p>
            <p className="mt-5">
              Hoshino can switch between Offensive and Defensive Mode.
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
                Belonging to Abydos High School, she is a lazy girl who is the
                president of the Abydos Student Council and the Chairwoman of
                the Countermeasures Committee.
              </p>
              <p className="mt-5">
                She has equipped herself with weapons that had been in storage,
                and her style has become more suitable for combat. Other than
                that, she is no different from the usual Hoshino, but now that
                she is armed, a glimpse of seriousness can be seen in her eyes.
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
                Hoshino_Armed is rather philosophical when she talks. This is
                possibly caused by her ability to see the future. Thanks to this
                ability of hers, she often chooses to not do anything about the
                dreams she sees as she believes that the future can't be
                changed.
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
                Hoshino has a pink waist-length ponytail, two longer strands
                that frame her face, some middle longer bangs that cover her
                forehead, and a long cowlick. She has heterochromia with one
                blue eye and one orange eye.
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
                <a className="text-[#3e7af2]" href="/hoshino#halo">
                  Takanashi Hoshino
                </a>
                .
              </p>
            </div>

            {/* The rest of your main content goes here */}
          </div>

          {/* Aside (right) */}
          <aside className="bg-[#06bbfa] border-2 border-[#357ff3] rounded-lg shadow-lg p-6 mt-5 w-full max-w-xs mb-8 mr-5">
            <h2 className="text-2xl font-bold text-[#aae5f8] mb-2 text-center">
              Takanashi Hoshino (Armed ver.)
            </h2>
            <div className="text-center text-sm text-[#aae5f8] font-bold mb-4">
              小鳥遊ホシノ (臨戦)
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
                    { label: "2", key: "2" },
                    { label: "3", key: "3" },
                    { label: "4", key: "4" },
                    { label: "5", key: "5" },
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
                          ? "/Blue-Archive/characters/Hoshino_Armed_Portrait.png"
                          : selectedTab === "sprite"
                          ? "/Blue-Archive/characters/Hoshino_Armed_Sprite.png"
                          : selectedTab === "halo"
                          ? "/Blue-Archive/characters/Hoshino_Halo.png"
                          : selectedTab === "4"
                          ? "/Blue-Archive/characters/Hoshino_Armed_Portrait_4.png"
                          : selectedTab === "5"
                          ? "/Blue-Archive/characters/Hoshino_Armed_Portrait_5.png"
                          : selectedTab === "2"
                          ? "/Blue-Archive/characters/Hoshino_Armed_Portrait_2.png"
                          : selectedTab === "3"
                          ? "/Blue-Archive/characters/Hoshino_Armed_Portrait_3.png"
                          : selectedTab === "default" ||
                            selectedTab === "Default"
                          ? "/Blue-Archive/characters/Hoshino_Armed_Portrait.png"
                          : "/Blue-Archive/characters/Hoshino_Armed_Icon.png"
                      }
                      alt={`Hoshino ${
                        selectedTab.charAt(0).toUpperCase() +
                        selectedTab.slice(1)
                      }`}
                      className="w-70 h-70 object-cover"
                    />
                  </a>
                </figure>
                {selectedTab === "sprite" && (
                  <figure>
                    <a href="#">
                      <img
                        src="/Blue-Archive/characters/Hoshino_Armed_Sprite_2.png"
                        alt={`Hoshino ${
                          selectedTab.charAt(0).toUpperCase() +
                          selectedTab.slice(1)
                        }`}
                        className="w-70 h-70 object-cover"
                      />
                    </a>
                  </figure>
                )}
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
                          src="/Blue-Archive/icons/Blue_Font_3.png"
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
                        src="Blue-Archive/icons/Abydos_Icon.png"
                        alt="Abydos Icon"
                        width={56}
                        height={48}
                        className="mx-auto ml-9"
                      />
                    </td>
                    {/* Firearm */}
                    <td className="bg-[#aae5f8] px-2 py-2 text-center align-middle w-1/3">
                      <img
                        src="/Blue-Archive/weapons/SG_New_Icon.png"
                        alt="Shotgun Icon"
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
                        {/* <img
                          src="/Blue-Archive/icons/City_Icon.png"
                          alt=""
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
                        /> */}
                      </div>
                    </td>
                    {/* Desert */}
                    <td className="bg-[#aae5f8] text-center align-middle w-1/3 px-2 py-2">
                      <div className="relative inline-block">
                        <img
                          src="/Blue-Archive/icons/Indoor_Icon.png"
                          alt="Desert Icon"
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
                    {/* Indoor */}
                    <td className="bg-[#aae5f8] text-center align-middle w-1/3 px-2 py-2">
                      <div className="relative inline-block">
                        {/* <img
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
                        /> */}
                      </div>
                    </td>
                  </tr>
                  {/* Offensive/Defensive Type */}
                  <tr>
                    {/* Offensive Type */}
                    <td className="bg-[#aae5f8] text-center align-middle w-1/3 px-2 py-2">
                      <div className="inline-flex items-center justify-center h-5 w-[70px] border-2 border-[#02D3FB] rounded-md text-[10px] bg-[#46adff]">
                        <b>
                          <span className="text-black">Mystic</span>
                        </b>
                      </div>
                    </td>
                    <td className="bg-[#aae5f8] px-2 py-2  text-center align-middle w-1/3"></td>
                    <td className="bg-[#aae5f8] text-center align-middle w-1/3 px-2 py-2">
                      <div className="inline-flex items-center justify-center h-5 w-[70px] border-2 border-[#02D3FB] rounded-md text-[10px] bg-[orange]">
                        <b>
                          <span className="text-black">Heavy</span>
                        </b>
                      </div>
                    </td>
                    {/* Empty */}
                  </tr>

                  {/* Equipment */}
                  <tr>
                    {/* Equipment 1: Gloves */}
                    <td className="bg-[#aae5f8] text-center align-middle w-1/3 px-2 py-2">
                      <img
                        src="/Blue-Archive/icons/Hat_T1_Icon.png"
                        alt="Shoe T1 Icon"
                        width={56}
                        height={44}
                        className="mx-auto"
                      />
                    </td>
                    {/* Equipment 2: Hairpin */}
                    <td className="bg-[#aae5f8] text-center align-middle w-1/3 px-2 py-2">
                      <img
                        src="/Blue-Archive/icons/Bag_T1_Icon.png"
                        alt="Bag T1 Icon"
                        width={56}
                        height={44}
                        className="mx-auto"
                      />
                    </td>
                    {/* Equipment 3: Charm */}
                    <td className="bg-[#aae5f8] text-center align-middle w-1/3 px-2 py-2">
                      <img
                        src="/Blue-Archive/icons/Necklace_T1_Icon.png"
                        alt="Necklace T1 Icon"
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
                      <span className="font-bold text-lg text-black">3352</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-[#06bbfa]">
                        ATK
                      </span>
                      <span className="font-bold text-lg text-black">148</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-[#06bbfa]">
                        DEF
                      </span>
                      <span className="font-bold text-lg text-black">179</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-[#06bbfa]">
                        HEAL
                      </span>
                      <span className="font-bold text-lg text-black">1319</span>
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
                      <span className="font-bold text-black">56023</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">1486</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">1077</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">3957</span>
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
                      <span className="font-bold text-black">60525</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">1657</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">1077</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">4361</span>
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
                      <span className="font-bold text-black">67527</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">1864</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">1077</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-black">4866</span>
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
              Hoshino wears an oversized, white dress shirt with raised sleeves,
              with a loose cyan tie and a grey pleated skirt. She also wears a
              pair of fingerless gloves and wears a buckled, tactical brace.
              Below she tucks her shirt into her pleated skirt, but that can't
              be seen due to her black MTV01 bulletproof vest in a military
              uniform.
            </p>
          </div>
          <h4
            className="text-[#3e7af2] text-lg font-bold ml-3 mt-4"
            id="firearm"
          >
            Firearm
          </h4>
          <div className="ml-3 mt-2">
            <p>
              See{" "}
              <a className="text-[#3e7af2]" href="/hoshino#firearm">
                Takanashi Hoshino
              </a>
              .
            </p>
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
            <h2 className="text-2xl font-bold text-[#06bbfa] ml-3 mt-4">
              Offensive Mode
            </h2>
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
                  <table className="w-[1000px] border-2 border-[#06bbfa] rounded-lg">
                    <thead>
                      <tr>
                        <th
                          colSpan={2}
                          className="relative bg-[#06bbfa] text-black px-4 py-3 text-sm font-bold"
                        >
                          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Concentrated Beaktrough
                          </span>
                          <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            Cost: 6
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1/4 bg-[#06bbfa] p-2">
                          <img
                            src="Blue-Archive/icons/CIRCLE.png"
                            alt="Sealess: Ishbóshet icon"
                            className="w-full h-auto rounded"
                          />
                        </td>
                        <td className="w-3/4 border-l-2 border-[#06bbfa] p-4 text-xs">
                          <ul className="list-disc list-inside space-y-1">
                            <li>
                              <span className="font-bold">LV01</span> ~ Deals{" "}
                              <span className="text-[#06bbfa] font-bold">
                                78.5%
                              </span>{" "}
                              of ATK as DMG to{" "}
                              <span className="text-[#06bbfa] font-bold">
                                1
                              </span>{" "}
                              enemy and{" "}
                              <span className="text-[#06bbfa] font-bold">
                                264%
                              </span>{" "}
                              of ATK as DMG to{" "}
                              <span className="text-[#06bbfa] font-bold">
                                all
                              </span>{" "}
                              enemies within a{" "}
                              <span className="text-[#06bbfa] font-bold">
                                round-shaped
                              </span>{" "}
                              area around the target.
                            </li>
                            <li>
                              <span className="font-bold">LV02</span> ~ Deals{" "}
                              <span className="text-[#06bbfa] font-bold">
                                90.3%
                              </span>{" "}
                              of ATK as DMG to{" "}
                              <span className="text-[#06bbfa] font-bold">
                                1
                              </span>{" "}
                              enemy and{" "}
                              <span className="text-[#06bbfa] font-bold">
                                304%
                              </span>{" "}
                              of ATK as DMG to{" "}
                              <span className="text-[#06bbfa] font-bold">
                                all
                              </span>{" "}
                              enemies within a{" "}
                              <span className="text-[#06bbfa] font-bold">
                                round-shaped
                              </span>{" "}
                              area around the target.
                            </li>
                            <li>
                              <span className="font-bold">LV03</span> ~ Deals{" "}
                              <span className="text-[#06bbfa] font-bold">
                                113%
                              </span>{" "}
                              of ATK as DMG to{" "}
                              <span className="text-[#06bbfa] font-bold">
                                1
                              </span>{" "}
                              enemy and{" "}
                              <span className="text-[#06bbfa] font-bold">
                                383%
                              </span>{" "}
                              of ATK as DMG to{" "}
                              <span className="text-[#06bbfa] font-bold">
                                all
                              </span>{" "}
                              enemies within a{" "}
                              <span className="text-[#06bbfa] font-bold">
                                round-shaped
                              </span>{" "}
                              area around the target.
                            </li>
                            <li>
                              <span className="font-bold">LV04</span> ~ Deals{" "}
                              <span className="text-[#06bbfa] font-bold">
                                123%
                              </span>{" "}
                              of ATK as DMG to{" "}
                              <span className="text-[#06bbfa] font-bold">
                                1
                              </span>{" "}
                              enemy and{" "}
                              <span className="text-[#06bbfa] font-bold">
                                423%
                              </span>{" "}
                              of ATK as DMG to{" "}
                              <span className="text-[#06bbfa] font-bold">
                                all
                              </span>{" "}
                              enemies within a{" "}
                              <span className="text-[#06bbfa] font-bold">
                                round-shaped
                              </span>{" "}
                              area around the target.
                            </li>
                            <li>
                              <span className="font-bold">LV05</span> ~ Deals{" "}
                              <span className="text-[#06bbfa] font-bold">
                                149%
                              </span>{" "}
                              of ATK as DMG to{" "}
                              <span className="text-[#06bbfa] font-bold">
                                1
                              </span>{" "}
                              enemy and{" "}
                              <span className="text-[#06bbfa] font-bold">
                                503%
                              </span>{" "}
                              of ATK as DMG to{" "}
                              <span className="text-[#06bbfa] font-bold">
                                all
                              </span>{" "}
                              enemies within a{" "}
                              <span className="text-[#06bbfa] font-bold">
                                round-shaped
                              </span>{" "}
                              area around the target.
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
                  <table className="w-[1000px] border-2 border-[#06bbfa] rounded-lg">
                    <thead>
                      <tr>
                        <th
                          colSpan={2}
                          className="relative bg-[#06bbfa] text-black px-4 py-3 text-sm font-bold"
                        >
                          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Handgun Rapid Fire
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
                            src="Blue-Archive/icons/TARGET.png"
                            alt="Emergency First Aid icon"
                            className="w-full h-auto rounded"
                          />
                        </td>
                        <td className="w-3/4 border-l-2 border-[#06bbfa] p-4 text-xs">
                          <ul className="list-disc list-inside space-y-1">
                            {[
                              211, 221, 232, 274, 284, 295, 337, 348, 358, 400,
                            ].map((dmg, idx) => {
                              return (
                                <li key={idx}>
                                  <span className="font-bold">
                                    LV{(idx + 1).toString().padStart(2, "0")}
                                  </span>{" "}
                                  ~ When ammo reaches{" "}
                                  <span className="text-[#06bbfa] font-bold">
                                    0
                                  </span>{" "}
                                  , deals{" "}
                                  <span className="text-[#06bbfa] font-bold">
                                    {dmg}%
                                  </span>{" "}
                                  of ATK as DMG to{" "}
                                  <span className="text-[#06bbfa] font-bold">
                                    1
                                  </span>{" "}
                                  enemy.
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
                  <table className="w-[600px] border-2 border-[#06bbfa] rounded-lg">
                    <thead>
                      <tr>
                        <th
                          colSpan={2}
                          className="relative bg-[#06bbfa] text-black px-4 py-3 text-sm font-bold"
                        >
                          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Expanded Tactical Vision
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
                            src="Blue-Archive/icons/WEAPON-BUFF.png"
                            alt="Foreclosure Task Force President icon"
                            className="w-full h-auto rounded"
                          />
                        </td>
                        <td className="w-3/4 border-l-2 border-[#06bbfa] p-4 text-xs">
                          <ul className="list-disc list-inside space-y-1">
                            {[
                              11.2, 11.7, 12.3, 14.5, 15.1, 15.6, 17.8, 18.4,
                              19.0, 21.2,
                            ].map((def, i) => (
                              <li key={i}>
                                <span className="font-bold">
                                  LV{(i + 1).toString().padStart(2, "0")}
                                </span>{" "}
                                ~ Increases RANGE by{" "}
                                <span className="text-[#06bbfa] font-bold">
                                  300
                                </span>
                                <span> and CRIT.DMG by </span>
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
                  <table className="w-[920px] border-2 border-[#06bbfa] rounded-lg">
                    <thead>
                      <tr>
                        <th
                          colSpan={2}
                          className="relative bg-[#06bbfa] text-black px-4 py-3 text-sm font-bold"
                        >
                          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Suppression Attacks
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
                            src="Blue-Archive/icons/HOSHINO_ARMED_SUB-SKILL.png"
                            alt="Expert Suppression icon"
                            className="w-full h-auto rounded"
                          />
                        </td>
                        <td className="w-3/4 border-l-2 border-[#06bbfa] p-4 text-xs">
                          <ul className="list-disc list-inside space-y-1">
                            {[
                              7.4, 7.7, 8.1, 9.6, 9.9, 10.3, 11.8, 12.2, 12.5,
                              14.0,
                            ].map((bar, i) => {
                              const stunDurations = [
                                79, 83, 86.9, 102, 106, 110, 126, 130, 134, 150,
                              ];
                              return (
                                <li key={i}>
                                  <span className="font-bold">
                                    LV{(i + 1).toString().padStart(2, "0")}
                                  </span>{" "}
                                  ~ All attacks ignore{" "}
                                  <span className="text-[#06bbfa] font-bold">
                                    60%
                                  </span>{" "}
                                  <span> of DEF. Increases ATK by </span>
                                  <span className="text-[#06bbfa] font-bold">
                                    {bar}%
                                  </span>
                                  .{" "}
                                  <span>
                                    When using EX-Skill or Normal Skill, reloads
                                    instantly. The first Normal Attack after
                                    this effect deals{" "}
                                  </span>
                                  <span className="text-[#06bbfa] font-bold">
                                    {stunDurations[i]}%
                                  </span>{" "}
                                  <span>of ATK as DMG to </span>
                                  <span className="text-[#06bbfa] font-bold">
                                    all
                                  </span>{" "}
                                  <span>enemies within a </span>
                                  <span className="text-[#06bbfa] font-bold">
                                    fan-shaped
                                  </span>{" "}
                                  <span>area.</span>
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

              {/* Skill Status Table (Tailwind) */}
              <div className="overflow-x-auto mt-8">
                <table className="w-full border-2 border-[#06bbfa] rounded-lg text-center">
                  <thead>
                    <tr>
                      <th
                        colSpan={5}
                        className="bg-[#06bbfa] border border-[#06bbfa] text-black text-sm font-bold py-2 px-4 "
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
                            className="bg-[#06bbfa] text-black text-sm font-bold py-1"
                          >
                            {label}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-2 border-[#06bbfa] p-2 ">
                        <img
                          src="Blue-Archive/icons/Cross_2.png"
                          alt="Cross Icon"
                          className="w-9 h-10 mx-auto"
                        />
                      </td>
                      <td className="border-2 border-[#06bbfa] p-2">
                        <img
                          src="Blue-Archive/icons/Cross_2.png"
                          alt="Cross Icon"
                          className="w-9 h-10 mx-auto"
                        />
                      </td>
                      <td className="border-2 border-[#06bbfa] p-2">
                        <div className="flex items-center justify-center">
                          <img
                            src="Blue-Archive/icons/Buff_-_RANGE.png"
                            alt="Range Buff Icon"
                            className="w-9 h-10"
                          />
                          <img
                            src="Blue-Archive/icons/Buff_-_CRIT.DMG.png"
                            alt="Crit Icon"
                            className="w-9 h-10"
                          />
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa] p-2">
                        <div className="flex items-center justify-center">
                          <img
                            src="Blue-Archive/icons/Buff_-_ATK.png"
                            alt="Crit Buff Icon"
                            className="w-9 h-10"
                          />
                          <img
                            src="Blue-Archive/icons/Special_-_Suppressive_Fire.png"
                            alt="Attack Buff Icon"
                            className="w-9 h-10"
                          />
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa] p-2">
                        <img
                          src="Blue-Archive/icons/Buff_-_ATK.png"
                          alt="Attack Buff Icon"
                          className="w-9 h-10 mx-auto"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section id="skills" className="mt-8">
            <h3 className="text-[#06bbfa] text-xl font-bold ml-3 mt-4">
              Defensive Mode
            </h3>
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
                  <table className="w-[1000px] border-2 border-[#06bbfa] rounded-lg">
                    <thead>
                      <tr>
                        <th
                          colSpan={2}
                          className="relative bg-[#06bbfa] text-black px-4 py-3 text-sm font-bold"
                        >
                          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Strengthened Defensive Stances
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
                            src="Blue-Archive/icons/BARRIER_OBSTACLE.png"
                            alt="BARRIER_OBSTACLE icon"
                            className="w-full h-auto rounded"
                          />
                        </td>
                        <td className="w-3/4 border-l-2 border-[#06bbfa] p-4 text-xs">
                          <ul className="list-disc list-inside space-y-1">
                            <li>
                              <span className="font-bold">LV01</span> ~ Moves to
                              a designated location, then uses her shield as
                              cover with{" "}
                              <span className="text-[#06bbfa] font-bold">
                                39.5%
                              </span>{" "}
                              of Hoshino (Armed)'s HP (The cover has the same
                              Defense Type as Hoshino (Armed)). Increases ATK by{" "}
                              <span className="text-[#06bbfa] font-bold">
                                50%
                              </span>{" "}
                              (
                              <span className="text-[#06bbfa] font-bold">
                                40
                              </span>{" "}
                              sec).
                            </li>
                            <li>
                              <span className="font-bold">LV02</span> ~ Moves to
                              a designated location, then uses her shield as
                              cover with{" "}
                              <span className="text-[#06bbfa] font-bold">
                                39.5%
                              </span>{" "}
                              of Hoshino (Armed)'s HP (The cover has the same
                              Defense Type as Hoshino (Armed)). Increases ATK by{" "}
                              <span className="text-[#06bbfa] font-bold">
                                82.5%
                              </span>{" "}
                              (
                              <span className="text-[#06bbfa] font-bold">
                                40
                              </span>{" "}
                              sec).
                            </li>
                            <li>
                              <span className="font-bold">LV03</span> ~ Moves to
                              a designated location, then uses her shield as
                              cover with{" "}
                              <span className="text-[#06bbfa] font-bold">
                                42.4%
                              </span>{" "}
                              of Hoshino (Armed)'s HP (The cover has the same
                              Defense Type as Hoshino (Armed)). Increases ATK by{" "}
                              <span className="text-[#06bbfa] font-bold">
                                94.9%
                              </span>{" "}
                              (
                              <span className="text-[#06bbfa] font-bold">
                                40
                              </span>{" "}
                              sec).
                            </li>
                            <li>
                              <span className="font-bold">LV04</span> ~ Moves to
                              a designated location, then uses her shield as
                              cover with{" "}
                              <span className="text-[#06bbfa] font-bold">
                                54.3%
                              </span>{" "}
                              of Hoshino (Armed)'s HP (The cover has the same
                              Defense Type as Hoshino (Armed)). Increases ATK by{" "}
                              <span className="text-[#06bbfa] font-bold">
                                119%
                              </span>{" "}
                              (
                              <span className="text-[#06bbfa] font-bold">
                                40
                              </span>{" "}
                              sec).
                            </li>
                            <li>
                              <span className="font-bold">LV05</span> ~ Moves to
                              a designated location, then uses her shield as
                              cover with{" "}
                              <span className="text-[#06bbfa] font-bold">
                                69.1%
                              </span>{" "}
                              of Hoshino (Armed)'s HP (The cover has the same
                              Defense Type as Hoshino (Armed)). Increases ATK by{" "}
                              <span className="text-[#06bbfa] font-bold">
                                156%
                              </span>{" "}
                              (
                              <span className="text-[#06bbfa] font-bold">
                                40
                              </span>{" "}
                              sec).
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
                  <table className="w-[1000px] border-2 border-[#06bbfa] rounded-lg">
                    <thead>
                      <tr>
                        <th
                          colSpan={2}
                          className="relative bg-[#06bbfa] text-black px-4 py-3 text-sm font-bold"
                        >
                          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Plate Replacement
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
                            src="Blue-Archive/icons/HOSHINO_ARMED_NORMAL_SKILL.png"
                            alt="Emergency First Aid icon"
                            className="w-full h-auto rounded"
                          />
                        </td>
                        <td className="w-3/4 border-l-2 border-[#06bbfa] p-4 text-xs">
                          <ul className="list-disc list-inside space-y-1">
                            {[
                              12.7, 13.3, 13.9, 16.5, 17.1, 17.8, 20.3, 20.9,
                              21.6, 24.1,
                            ].map((dmg, idx) => {
                              return (
                                <li key={idx}>
                                  <span className="font-bold">
                                    LV{(idx + 1).toString().padStart(2, "0")}
                                  </span>{" "}
                                  ~ Wears a bulletproof plate every{" "}
                                  <span className="text-[#06bbfa] font-bold">
                                    40
                                  </span>{" "}
                                  sec, decreasing DMG taken by{" "}
                                  <span className="text-[#06bbfa] font-bold">
                                    {dmg}%
                                  </span>{" "}
                                  (This effect will be removed after taking{" "}
                                  <span className="text-[#06bbfa] font-bold">
                                    25
                                  </span>{" "}
                                  hits).
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
                  <table className="w-[600px] border-2 border-[#06bbfa] rounded-lg">
                    <thead>
                      <tr>
                        <th
                          colSpan={2}
                          className="relative bg-[#06bbfa] text-black px-4 py-3 text-sm font-bold"
                        >
                          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Close-Ranged Combat System
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
                            src="Blue-Archive/icons/DUAL_BUFF.png"
                            alt="Foreclosure Task Force President icon"
                            className="w-full h-auto rounded"
                          />
                        </td>
                        <td className="w-3/4 border-l-2 border-[#06bbfa] p-4 text-xs">
                          <ul className="list-disc list-inside space-y-1">
                            {[
                              11.2, 11, 4, 11.7, 12.8, 13.1, 13.4, 14.5, 14.8,
                              15.1, 16.2,
                            ].map((def, i) => (
                              <li key={i}>
                                <span className="font-bold">
                                  LV{(i + 1).toString().padStart(2, "0")}
                                </span>{" "}
                                ~ Increases ATK and HP by{" "}
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
                  <table className="w-[920px] border-2 border-[#06bbfa] rounded-lg">
                    <thead>
                      <tr>
                        <th
                          colSpan={2}
                          className="relative bg-[#06bbfa] text-black px-4 py-3 text-sm font-bold"
                        >
                          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Effective Tactics
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
                            src="Blue-Archive/icons/STAT-DEBUFF.png"
                            alt="Expert Suppression icon"
                            className="w-full h-auto rounded"
                          />
                        </td>
                        <td className="w-3/4 border-l-2 border-[#06bbfa] p-4 text-xs">
                          <ul className="list-disc list-inside space-y-1">
                            {[
                              10.1, 10.6, 11.1, 13.2, 13.7, 14.2, 16.2, 16.7,
                              17.2, 19.3,
                            ].map((bar, i) => (
                              <li key={i}>
                                <span className="font-bold">
                                  LV{(i + 1).toString().padStart(2, "0")}
                                </span>{" "}
                                ~ Has a{" "}
                                <span className="text-[#06bbfa] font-bold">
                                  20%
                                </span>{" "}
                                of decreasing DEF by{" "}
                                <span className="text-[#06bbfa] font-bold">
                                  {bar}%
                                </span>{" "}
                                when attacking an enemy (
                                <span className="text-[#06bbfa] font-bold">
                                  20
                                </span>{" "}
                                sec) (CD:{" "}
                                <span className="text-[#06bbfa] font-bold">
                                  <span> 5 </span>
                                </span>
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
                <table className="w-full border-2 border-[#06bbfa] rounded-lg text-center">
                  <thead>
                    <tr>
                      <th
                        colSpan={5}
                        className="bg-[#06bbfa] border border-[#06bbfa] text-black text-sm font-bold py-2 px-4 "
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
                            className="bg-[#06bbfa] text-black text-sm font-bold py-1"
                          >
                            {label}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-2 border-[#06bbfa] p-2">
                        <img
                          src="Blue-Archive/icons/Buff_-_ATK.png"
                          alt="Cross Icon"
                          className="w-9 h-10 mx-auto"
                        />
                      </td>
                      <td className="border-2 border-[#06bbfa] p-2">
                        <div className="flex items-center justify-center">
                          <img
                            src="Blue-Archive/icons/Buff_-_DMG_Reduced.png"
                            alt="Cross Icon"
                            className="w-9 h-10"
                          />
                          <img
                            src="Blue-Archive/icons/Special_-_Bulletproof.png"
                            alt="Cost Regen Icon"
                            className="w-9 h-10"
                          />
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa] p-2">
                        <div className="flex items-center justify-center">
                           <img
                            src="Blue-Archive/icons/Buff_-_ATK.png"
                            alt="Cross Icon"
                            className="w-9 h-10"
                          />
                          <img
                            src="Blue-Archive/icons/Buff_-_HP.png"
                            alt="Cost Regen Icon"
                            className="w-9 h-10"
                          />
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa] p-2">
                        <img
                          src="Blue-Archive/icons/Debuff_-_DEF.png"
                          alt="Crit Buff Icon"
                          className="w-9 h-10 mx-auto"
                        />
                      </td>
                    <td className="border-2 border-[#06bbfa] p-2">
                        <div className="flex items-center justify-center">
                          <img
                            src="Blue-Archive/icons/Buff_-_ATK.png"
                            alt="Cross Icon"
                            className="w-9 h-10"
                          />
                          <img
                            src="Blue-Archive/icons/Buff_-_HP.png"
                            alt="Cost Regen Icon"
                            className="w-9 h-10"
                          />
                        </div>
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
              <button
                className={`w-1/2 ${
                  activeSkillTab === "ex"
                    ? "bg-[#06bbfa] text-white"
                    : "bg-gray-700 text-gray-300"
                } text-center py-2 font-bold hover:bg-gray-600 transition-colors`}
                onClick={() => setActiveSkillTab("ex")}
              >
                EX-Skill
              </button>
              <button
                className={`w-1/2 ${
                  activeSkillTab === "normal"
                    ? "bg-[#06bbfa] text-white"
                    : "bg-gray-700 text-gray-300"
                } text-center py-2 font-bold hover:bg-gray-600 transition-colors`}
                onClick={() => setActiveSkillTab("normal")}
              >
                Growth Material
              </button>
            </div>
            {activeSkillTab === "normal" && (
              <div className="wds-tab__content wds-is-current">
                <table className="w-full text-center rounded-md border-2 border-[#06bbfa]">
                  <thead>
                    <tr className="bg-[#06bbfa] text-black">
                      <th colSpan={7} className="font-bold py-2">
                        Other-Skills (Normal / Passive / Sub)
                        <span className="float-left text-xs ml-2">
                          <a
                            href="/wiki/Template:Detailed_Growth_Material"
                            title="Template:Detailed Growth Material"
                          >
                            V • T •{" "}
                          </a>
                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text"
                            href="https://bluearchive.fandom.com/wiki/Detailed_Growth_Material?action=edit"
                          >
                            E
                          </a>
                        </span>
                        <span className="float-right mr-2 text-yellow-300">
                          <a
                            href="/wiki/Growth_Material"
                            className="mw-redirect"
                            title="Growth Material"
                          >
                            Growth Material
                          </a>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th
                        rowSpan={3}
                        className="bg-[#06bbfa] text-black font-bold w-2/5"
                      >
                        <div className="relative inline-block">
                          <div>
                            <img
                              src="Blue-Archive/icons/TARGET.png"
                              alt=""
                              className="w-24 h-24"
                            />
                          </div>
                        </div>
                      </th>
                      <th className="bg-[#06bbfa] text-black font-bold w-1/12">
                        LV02
                      </th>
                      <td className="border-2 border-[#06bbfa] w-1/12">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x5
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Abydos_Skill_Book_0.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa] w-1/12"></td>
                      <td className="border-2 border-[#06bbfa] w-1/12"></td>
                      <td className="border-2 border-[#06bbfa] w-1/12"></td>
                      <th className="bg-[#06bbfa] text-black font-bold w-1/12">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x5000
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/Gold.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="bg-[#06bbfa] text-black font-bold">
                        LV03
                      </th>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x8
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Abydos_Skill_Book_0.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]"></td>
                      <td className="border-2 border-[#06bbfa]"></td>
                      <td className="border-2 border-[#06bbfa]"></td>
                      <th className="bg-[#06bbfa] text-black font-bold">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x7500
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/Gold.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="bg-[#06bbfa] text-black font-bold">
                        LV04
                      </th>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x5
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Abydos_Skill_Book_1.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x12
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Abydos_Skill_Book_0.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x5
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Nebra_0.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]"></td>
                      <th className="bg-[#06bbfa] text-black font-bold">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x60K
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/Gold.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th
                        rowSpan={3}
                        className="bg-[#06bbfa] text-black font-bold"
                      >
                        <div className="relative inline-block">
                          <div>
                            <img
                              src="Blue-Archive/icons/WEAPON-BUFF.png"
                              alt=""
                              className="w-24 h-24"
                            />
                          </div>
                        </div>
                      </th>
                      <th className="bg-[#06bbfa] text-black font-bold">
                        LV05
                      </th>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x8
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Abydos_Skill_Book_1.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x7
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Nebra_1.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x15
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Ancient_Rocket_0.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]"></td>
                      <th className="bg-[#06bbfa] text-black font-bold">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x90K
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/Gold.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="bg-[#06bbfa] text-black font-bold">
                        LV06
                      </th>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x5
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Abydos_Skill_Book_2.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x12
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Abydos_Skill_Book_1.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x8
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Nebra_1.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x16
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Ancient_Rocket_0.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <th className="bg-[#06bbfa] text-black font-bold">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x300K
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/Gold.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="bg-[#06bbfa] text-black font-bold">
                        LV07
                      </th>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x8
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Abydos_Skill_Book_2.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x5
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Nebra_2.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x16
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Ancient_Rocket_1.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]"></td>
                      <th className="bg-[#06bbfa] text-black font-bold">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x450K
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/Gold.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th
                        rowSpan={3}
                        className="bg-[#06bbfa] text-black font-bold"
                      >
                        <div className="relative inline-block">
                          <div>
                            <img
                              src="Blue-Archive/icons/HOSHINO_ARMED_SUB-SKILL.png"
                              alt=""
                              className="w-24 h-24"
                            />
                          </div>
                        </div>
                      </th>
                      <th className="bg-[#06bbfa] text-black font-bold">
                        LV08
                      </th>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x8
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Abydos_Skill_Book_3.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x12
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Abydos_Skill_Book_2.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x5
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Nebra_3.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x11
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Ancient_Rocket_2.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <th className="bg-[#06bbfa] text-black font-bold">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x1.5M
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/Gold.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="bg-[#06bbfa] text-black font-bold">
                        LV09
                      </th>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x12
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Abydos_Skill_Book_3.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x6
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Nebra_3.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x12
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Ancient_Rocket_2.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]"></td>
                      <th className="bg-[#06bbfa] text-black font-bold">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x2.4M
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/Gold.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="bg-[#06bbfa] text-black font-bold">
                        LV10
                      </th>
                      <td className="border-2 border-[#06bbfa]">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x1
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/icons/Ultimate_Skill_Book.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border-2 border-[#06bbfa]"></td>
                      <td className="border-2 border-[#06bbfa]"></td>
                      <td className="border-2 border-[#06bbfa]"></td>
                      <th className="bg-[#06bbfa] text-black font-bold">
                        <div className="relative inline-block">
                          <div className="absolute right-0 bottom-0 text-white font-bold text-xs text-shadow">
                            x4M
                          </div>
                          <div>
                            <img
                              src="Blue-Archive/Gold.png"
                              alt=""
                              className="w-12 h-10"
                            />
                          </div>
                        </div>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {/* Table Content */}
            <div className="flex w-full">
              {/* Right side - Material grid */}
              <section className="mt-8 mb-8 overflow-x-auto">
                <table className="w-[1250px] border-separate border-spacing-y-1 border-2 border-[#06bbfa] rounded-lg text-center">
                  <thead>
                    <tr>
                      <th className="bg-[#06bbfa] text-black font-bold py-2 px-3">
                        EX-Skill
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        rowSpan={7}
                        className="border border-[#06bbfa] rounded-lg  align-top"
                      >
                        <Hoshino_ArmedEX />
                      </td>
                    </tr>
                    <tr>
                      {/* Growth‐Material Icons */}
                      <td className="border bg-[#06bbfa] border-[#06bbfa] px-2 py-2">
                        <span className="text-black font-bold">LV02</span>
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Abydos_EX-Skill_Disc_0.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x12
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Nebra_0.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x13
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img src="/" alt="" className="hidden w-14 h-8 mr-1" />
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img src="/" alt="" className="hidden w-14 h-8 mr-1" />
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/Gold.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x80K
                      </td>
                    </tr>
                    <tr>
                      <td className="border bg-[#06bbfa] border-[#06bbfa] px-2 py-2">
                        <span className="text-black font-bold">LV03</span>
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Abydos_EX-Skill_Disc_1.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x12
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Abydos_EX-Skill_Disc_0.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x18
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Nebra_1.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x11
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Ancient_Rocket_0.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x31
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/Gold.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x500K
                      </td>
                    </tr>
                    <tr>
                      <td className="border bg-[#06bbfa] border-[#06bbfa] px-2 py-2">
                        <span className="text-black font-bold">LV04</span>
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Abydos_EX-Skill_Disc_2.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x12
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Abydos_EX-Skill_Disc_1.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x18
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Nebra_2.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x10
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Ancient_Rocket_1.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x32
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/Gold.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x3M
                      </td>
                    </tr>
                    <tr>
                      <td className="border bg-[#06bbfa] border-[#06bbfa] px-2 py-2">
                        <span className="text-black font-bold">LV05</span>
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Abydos_EX-Skill_Disc_3.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x8
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Abydos_EX-Skill_Disc_2.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x18
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Nebra_3.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x12
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
                        <img
                          src="/Blue-Archive/icons/Ancient_Rocket_2.png"
                          alt=""
                          className="inline w-14 h-12 mr-1 "
                        />
                        x15
                      </td>
                      <td className="border border-[#06bbfa] px-2 py-2 font-extrabold">
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
                    Breaking Silence
                  </th>
                  <td colSpan={3} className="border border-[#06bbfa] px-2 py-1">
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
                        src="/Blue-Archive/icons/Blue_Font_2.png"
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
                    Total Stats ~ HEAL+291 / HP+1145
                  </th>
                </tr>

                {/* Live2D & Icon column */}
                <tr>
                  <td
                    rowSpan={7}
                    className="border border-[#06bbfa] rounded-lg p-2 align-top"
                  >
                    <Hoshino_ArmedLive2D />
                  </td>
                  <th className="bg-[#06bbfa] text-black font-bold px-2 py-2">
                    LV02 – 05
                  </th>
                  <td className="border border-[#06bbfa] text-left px-2 py-2">
                    HEAL+3
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#06bbfa] text-black font-bold px-2 py-2">
                    LV06 – 10
                  </th>
                  <td className="border border-[#06bbfa] text-left px-2 py-2">
                    HEAL+7
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#06bbfa] text-black font-bold px-2 py-2">
                    LV11 – 15
                  </th>
                  <td className="border border-[#06bbfa] text-left px-2 py-2">
                    HEAL+9 / HP+55
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#06bbfa] text-black font-bold px-2 py-2">
                    LV16 – 20
                  </th>
                  <td className="border border-[#06bbfa] text-left px-2 py-2">
                    HEAL+11 / HP+66
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#06bbfa] text-black font-bold px-2 py-2">
                    LV21 – 30
                  </th>
                  <td className="border border-[#06bbfa] text-left px-2 py-2">
                    HEAL+3 / HP+11
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#06bbfa] text-black font-bold px-2 py-2">
                    LV31 – 40
                  </th>
                  <td className="border border-[#06bbfa] text-left px-2 py-2">
                    HEAL+4 / HP+16
                  </td>
                </tr>
                <tr>
                  <th className="bg-[#06bbfa] text-black font-bold px-2 py-2">
                    LV41 – 50
                  </th>
                  <td className="border border-[#06bbfa] text-left px-2 py-2">
                    HEAL+7 / HP+27
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
