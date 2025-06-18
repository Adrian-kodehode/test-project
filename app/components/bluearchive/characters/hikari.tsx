import React, { useEffect, useState } from "react";

export const Hikari = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [selectedTab, setSelectedTab] = useState("icon");

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
          Tachibana Hikari
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
          <div className="ml-5">
            <p className="mt-5 max-w-[600px]">
              <strong>Tachibana Hikari</strong> (橘ヒカリ) is one of the{" "}
              <a href="#" className="text-[#357ff3] underline">
                students
              </a>{" "}
              studying in{" "}
              <a href="#" className="text-[#357ff3] underline">
                Highlander Railroad Academy
              </a>{" "}
              who wields a{" "}
              <a href="#" className="text-[#357ff3] underline">
                Handgun
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
          </div>
          {/* Main content (left) */}
          <div className="flex-1">
            {/* The rest of your main content goes here */}
          </div>
          {/* Aside (right) */}
          <aside className="bg-[#63929C] border-2 border-[#357ff3] rounded-lg shadow-lg p-6 mt-5 w-full max-w-xs mb-8 mr-5">
            <h2 className="text-2xl font-bold text-[#414360] mb-2 text-center">
              Tachibana Hikari
            </h2>
            <div className="text-center text-sm text-[#414360] font-bold mb-4">
              橘ヒカリ
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
                        className={`px-4 py-2 text-[#414360] font-${
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
                          ? "/Blue-Archive/characters/Hikari_Icon.png"
                          : selectedTab === "portrait"
                          ? "/Blue-Archive/characters/Hikari_Portrait.png"
                          : selectedTab === "sprite"
                          ? "/Blue-Archive/characters/Hikari_Sprite.png"
                          : selectedTab === "halo"
                          ? "/Blue-Archive/characters/Hikari_Halo.png"
                          : "/Blue-Archive/characters/Hikari_Icon.png"
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
                <caption className="text-lg font-bold text-[#414360] rounded-t-md py-2 text-left">
                  Unit Information
                </caption>
                <tbody>
                  <tr>
                    {/* Rarity */}
                    <td className="bg-[#414360] px-4 py-2 border-b border-[#357ff3] text-center align-middle w-1/3">
                      <div className="flex gap-1 justify-center w-full">
                        <img
                          src="Blue-Archive/images/Star_Icon.png"
                          alt="Star"
                          width={20}
                          height={20}
                          className="inline-block"
                        />
                        <img
                          src="Blue-Archive/images/Star_Icon.png"
                          alt="Star"
                          width={20}
                          height={20}
                          className="inline-block"
                        />
                        <img
                          src="Blue-Archive/images/Star_Icon.png"
                          alt="Star"
                          width={20}
                          height={20}
                          className="inline-block"
                        />
                      </div>
                    </td>
                    {/* Bond */}
                    <td className="bg-[#414360] px-4 py-2 border-b border-[#357ff3] text-center align-middle w-1/3">
                      <div className="flex gap-1 justify-center items-center w-full">
                        <a
                          href="https://static.wikia.nocookie.net/blue-archive/images/d/df/Bond.png/revision/latest?cb=20210522055230"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="Blue-Archive/icons/Bond.png"
                            alt="Bond"
                            width={20}
                            height={19}
                            className="inline-block"
                          />
                        </a>
                        <a
                          href="https://static.wikia.nocookie.net/blue-archive/images/0/01/Blue_Font_6.png/revision/latest?cb=20210617065701"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="Blue-Archive/icons/Blue_Font_6.png"
                            alt="Bond Level"
                            width={18}
                            height={17}
                            className="inline-block"
                          />
                        </a>
                      </div>
                    </td>
                    {/* Cover */}
                    <td className="bg-[#414360] px-4 py-2 border-b border-[#357ff3] text-center align-middle w-1/3">
                      <div className="flex justify-center w-full">
                        <a
                          href="https://static.wikia.nocookie.net/blue-archive/images/0/03/Cross_1.png/revision/latest?cb=20210718063255"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="Blue-Archive/icons/Cross_1.png"
                            alt="Cover"
                            width={20}
                            height={20}
                            className="inline-block"
                          />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    {/* Role */}
                    <td className="bg-[#414360] px-4 py-2 border-b border-[#357ff3] text-center align-middle w-1/3">
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/7/78/STRIKER.png/revision/latest?cb=20210519181041"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="Blue-Archive/icons/STRIKER.png"
                          alt="STRIKER"
                          width={60}
                          height={15}
                          className="inline-block"
                        />
                      </a>
                      <span className="sr-only">STRIKER</span>
                    </td>
                    {/* Class */}
                    <td className="bg-[#414360] px-4 py-2 border-b border-[#357ff3] text-center align-middle w-1/3">
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/b/b6/Supporter.png/revision/latest?cb=20210714042151"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="Blue-Archive/icons/Supporter.png"
                          alt="Supporter"
                          width={20}
                          height={20}
                          className="inline-block"
                        />
                      </a>
                      <span className="ml-2 font-semibold text-white">
                        Supporter
                      </span>
                    </td>
                    {/* Position */}
                    <td className="bg-[#414360] px-4 py-2 border-b border-[#357ff3] text-center align-middle w-1/3">
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/5/5f/MIDDLE.png/revision/latest?cb=20210519183318"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="Blue-Archive/icons/MIDDLE.png"
                          alt="MIDDLE"
                          width={60}
                          height={14}
                          className="inline-block"
                        />
                      </a>
                      <span className="sr-only">MIDDLE</span>
                    </td>
                  </tr>
                  <tr>
                    {/* School */}
                    <td className="bg-[#414360] px-4 py-2 border-b border-[#357ff3] text-center align-middle w-1/3">
                      <a
                        href="/wiki/Highlander"
                        title="Highlander"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center"
                      >
                        <img
                          src="Blue-Archive/icons/Highlander_Icon.png"
                          alt="Highlander Icon"
                          width={40}
                          height={36}
                          className="mx-auto"
                        />
                      </a>
                    </td>
                    {/* Firearm */}
                    <td className="bg-[#414360] px-4 py-2 border-b border-[#357ff3] text-center align-middle w-1/3">
                      <a
                        href="/wiki/Firearm#Handgun"
                        title="Firearm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center"
                      >
                        <img
                          src="Blue-Archive/weapons/HG_New_Icon.png"
                          alt="Handgun Icon"
                          width={80}
                          height={38}
                          className="mx-auto"
                        />
                      </a>
                    </td>
                    {/* Empty cell for alignment */}
                    <td className="bg-[#414360] px-4 py-2 border-b border-[#357ff3] text-center align-middle w-1/3"></td>
                  </tr>
                  <tr>
                    {/* City */}
                    <td className="bg-[#414360] text-center align-middle w-1/3">
                      <div className="relative inline-block">
                        {/* Overlay Icon */}
                        <div className="absolute right-[-4px] bottom-[-6px] z-20">
                          <a
                            href="https://static.wikia.nocookie.net/blue-archive/images/7/7d/Terrible_Icon.png/revision/latest?cb=20210202121855"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="Blue-Archive/icons/Terrible_Icon.png"
                              alt="Terrible Icon"
                              width={20}
                              height={20}
                              className="inline-block"
                            />
                          </a>
                        </div>
                        {/* Base Icon */}
                        <div className="z-10">
                          <a
                            href="https://static.wikia.nocookie.net/blue-archive/images/0/06/City_Icon.png/revision/latest?cb=20210706150801"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="Blue-Archive/icons/City_Icon.png"
                              alt="City Icon"
                              width={35}
                              height={35}
                              className="inline-block"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    {/* Desert */}
                    <td className="bg-[#414360] text-center align-middle w-1/3">
                      <div className="relative inline-block">
                        {/* Overlay Icon */}
                        <div className="absolute right-[-4px] bottom-[-6px] z-20">
                          <a
                            href="https://static.wikia.nocookie.net/blue-archive/images/9/94/Neutral_Icon.png/revision/latest?cb=20210202121856"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="Blue-Archive/icons/Neutral_Icon.png"
                              alt="Neutral Icon"
                              width={20}
                              height={20}
                              className="inline-block"
                            />
                          </a>
                        </div>
                        {/* Base Icon */}
                        <div className="z-10">
                          <a
                            href="https://static.wikia.nocookie.net/blue-archive/images/d/d1/Desert_Icon.png/revision/latest?cb=20210706150712"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="Blue-Archive/icons/Desert_Icon.png"
                              alt="Desert Icon"
                              width={35}
                              height={35}
                              className="inline-block"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    {/* Indoor */}
                    <td className="bg-[#414360] text-center align-middle w-1/3">
                      <div className="relative inline-block">
                        {/* Overlay Icon */}
                        <div className="absolute right-[-4px] bottom-[-6px] z-20">
                          <a
                            href="https://static.wikia.nocookie.net/blue-archive/images/4/46/Excellent_Icon.png/revision/latest?cb=20210202121852"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="Blue-Archive/icons/Excellent_Icon.png"
                              alt="Excellent Icon"
                              width={20}
                              height={20}
                              className="inline-block"
                            />
                          </a>
                        </div>
                        {/* Base Icon */}
                        <div className="z-10">
                          <a
                            href="https://static.wikia.nocookie.net/blue-archive/images/e/e1/Indoor_Icon.png/revision/latest?cb=20210706150751"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="Blue-Archive/icons/Indoor_Icon.png"
                              alt="Indoor Icon"
                              width={35}
                              height={35}
                              className="inline-block"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    {/* Offensive Type */}
                    <td
                      className="bg-[#414360] pi-horizontal-group-item pi-data-value pi-font pi-border-color pi-item-spacing"
                      data-source="offensive"
                    >
                      <div className="border-2 border-[#02D3FB] rounded-md inline-flex h-5 w-[70px] overflow-hidden text-center justify-center items-center align-middle my-[2px] text-[10px] bg-[#9b57aa]">
                        <b>
                          <span className="text-black">Sonic</span>
                        </b>
                      </div>
                    </td>
                    {/* Defensive Type */}
                    <td
                      className="bg-[#414360] pi-horizontal-group-item pi-data-value pi-font pi-border-color pi-item-spacing"
                      data-source="defensive"
                    >
                      <div className="border-2 border-[#02D3FB] rounded-md inline-flex h-5 w-[70px] overflow-hidden text-center justify-center items-center align-middle my-[2px] text-[10px] bg-red-600">
                        <b>
                          <span className="text-black">Light</span>
                        </b>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    {/* Equipment 1: Gloves */}
                    <td
                      className="bg-[#414360] pi-horizontal-group-item pi-data-value pi-font pi-border-color pi-item-spacing text-center align-middle"
                      data-source="equipment1"
                    >
                      <a
                        href="/wiki/Equipment#Gloves"
                        title="Equipment"
                        className="flex justify-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="Blue-Archive/icons/Gloves_T1_Icon.png"
                          alt="Gloves T1 Icon"
                          width={50}
                          height={39}
                          className="mx-auto"
                        />
                      </a>
                    </td>
                    {/* Equipment 2: Hairpin */}
                    <td
                      className="bg-[#414360] pi-horizontal-group-item pi-data-value pi-font pi-border-color pi-item-spacing text-center align-middle"
                      data-source="equipment2"
                    >
                      <a
                        href="/wiki/Equipment#Hairpin"
                        title="Equipment"
                        className="flex justify-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="Blue-Archive/icons/Hairpin_T1_Icon.png"
                          alt="Hairpin T1 Icon"
                          width={50}
                          height={39}
                          className="mx-auto"
                        />
                      </a>
                    </td>
                    {/* Equipment 3: Charm */}
                    <td
                      className="bg-[#414360] pi-horizontal-group-item pi-data-value pi-font pi-border-color pi-item-spacing text-center align-middle"
                      data-source="equipment3"
                    >
                      <a
                        href="/wiki/Equipment#Charm"
                        title="Equipment"
                        className="flex justify-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="Blue-Archive/icons/Charm_T1_Icon.png"
                          alt="Charm T1 Icon"
                          width={50}
                          height={39}
                          className="mx-auto"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </aside>
        </div>
      </main>

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
