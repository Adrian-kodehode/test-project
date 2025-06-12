import { Divide } from "lucide-react";
import React, { useEffect, useState } from "react";
// Simple Slideshow component that cycles through images every 3 seconds
const Slideshow = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full flex justify-center items-center">
      <img src={images[index]} alt="Slideshow" className="rounded-lg w-full" />
    </div>
  );
};

export const BlueArchiveHome = () => {
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
        {/* Main Content */}
        <main className="flex-1 max-w-7xl bg-black bg-opacity-80 rounded-lg p-8 text-white shadow-lg flex flex-col gap-8">
          <h2 className="text-4xl pb-16 mt-10 text-[#06bbfa]">Home</h2>
          {/* Welcome Box */}
          <section className="border-2 border-[#02d3fb] rounded-lg p-4 ] bg-opacity-90 mb-2">
            <div className="bg-[#02d3fb] rounded px-4 py-1 text-center font-extrabold text-black text-lg tracking-wide mb-2">
              <span className="mr-2">🧑‍🏫</span> Sensei, Welcome to the Blue
              Archive Wikia! <span className="ml-2">📘</span>
            </div>
            <div className="text-center text-sm mt-2">
              This is a WIP wiki dedicated to Blue Archive (BA) that anyone can
              edit
              <br />
              There have been{" "}
              <span className="font-bold text-[#02d3fb]">118,782</span> edits
              with <span className="font-bold text-[#02d3fb]">1,458</span>{" "}
              articles since August 07th, 2020.
              <br />
              This wiki contains{" "}
              <span className="font-bold text-pink-400">Spoilers!</span> Read at
              your own risk!
            </div>
            <ul className="text-xs mt-2 list-disc list-inside space-y-1 text-center">
              <li>
                For new users, make sure to read the{" "}
                <span className="underline text-[#02d3fb] cursor-pointer">
                  Rules
                </span>{" "}
                and follow the templates
              </li>
              <li>
                Check the{" "}
                <span className="underline text-[#02d3fb] cursor-pointer">
                  History Page
                </span>{" "}
                to see what has been changed
              </li>
              <li>
                For images, please name your image appropriately and preferably
                in PNG
              </li>
              <li>
                Looking for the Wiki Theme?{" "}
                <span className="underline text-[#02d3fb] cursor-pointer">
                  Click here
                </span>
              </li>
            </ul>
            <section className=" p-4 mb-2">
              <div className="bg-[#02d3fb] rounded px-4 py-1 text-center font-extrabold text-black text-md mb-2">
                ~~ Sources ~~
              </div>
              <div className="text-xs text-center">
                This wiki uses information and images from:
                <br />
                The official BA's{" "}
                <span className="underline text-[#02d3fb] cursor-pointer">
                  Twitter
                </span>{" "}
                and{" "}
                <span className="underline text-[#02d3fb] cursor-pointer">
                  Website
                </span>
                <br />
                Japanese Fandom's{" "}
                <span className="underline text-[#02d3fb] cursor-pointer">
                  Wikiru
                </span>
                <br />
                MEGA upload provided by Alz
                <br />
                Translations by Noxy,{" "}
                <span className="underline text-[#02d3fb] cursor-pointer">
                  Yangikaze
                </span>{" "}
                and Machine Translation
              </div>
            </section>
          </section>

          {/* Upcoming Birthday */}
          <section className="border-2 border-[#02d3fb] rounded-lg p-4  bg-opacity-90 mb-2">
            <div className="bg-[#02d3fb] rounded px-4 py-1 text-center font-extrabold text-black text-md mb-2">
              Upcoming Birthday
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">June 16th</span>
              <img
                src="Blue-Archive/characters/Yukari_Icon.png"
                alt="Birthday Character"
              />
            </div>
          </section>

          {/* Anime Promo */}
          <section className="border-2 border-[#02d3fb] rounded-lg p-4 bg-[#0a223a] bg-opacity-90 mb-2 flex flex-col items-center">
            {/* Slideshow with smooth fade animation */}
            <Slideshow
              images={[
                "/Blue-Archive/images/【ブルアカ】5th_PV.jpg",
                "/Blue-Archive/images/【ブルアカTVアニメ】ティザー_PV.jpg",
                "/Blue-Archive/images/1.5th_Anniversary_Illustration_1.png",
                "/Blue-Archive/images/Arona_Room_2.png",
              ]}
            />
            <style>{`
              .slideshow-img {
                transition: opacity 0.7s ease;
                opacity: 1;
              }
              .slideshow-img.hide {
                opacity: 0;
              }
            `}</style>
          </section>
          <div className="text-center">
            <h4 className="font-bold text-lg text-[#02d3fb]">
              ブルーアーカイブ The Animation
            </h4>
            <p className="text-xs">
              2024年4月より テレビ東京・BS11ほかにて放送予定
            </p>
            <button className="mt-2 bg-[#02d3fb] text-white px-4 py-1 rounded-full text-xs font-bold hover:bg-pink-500 transition">
              ▶ Play PV
            </button>
          </div>

          {/* Main Menu */}
          <section className="border-2 border-[#02d3fb] rounded-lg p-4 bg-[#0a223a] bg-opacity-90">
            <div className=" px-4 py-1 text-center font-bold text-black text-md mb-2">
              Main Menu
            </div>
            <img
              src="/Blue-Archive/main-menu.jpg"
              alt="Main Menu"
              className="rounded-lg w-full mb-2"
            />
          </section>
        </main>

        {/* Sidebar */}
        <aside className="w-[350px] min-w-[300px] max-w-xs bg-black bg-opacity-80   border-2 border-[#02d3fb] rounded-lg p-4 shadow-lg flex flex-col gap-4">
          {/* Twitter Header */}
          <div className="border-b-4 border-[#02d3fb] pb-2 mb-2">
            <div className="bg-[#02d3fb] rounded px-4 py-1 text-center font-extrabold text-black text-lg tracking-wide">
              Twitter
            </div>
            <div className="flex mt-2 mb-1">
              <button className="flex-1 font-bold text-[#02d3fb] border-b-2 border-[#02d3fb] bg-black bg-opacity-30 py-1">
                JP
              </button>
              <button className="flex-1 font-bold text-gray-300 border-b-2 border-gray-400 bg-black bg-opacity-30 py-1">
                Global
              </button>
            </div>
            <div className="text-center text-[#02d3fb] text-sm font-semibold cursor-pointer">
              Twitter
            </div>
          </div>
          {/* Clocks */}
          <div className="text-xs text-center mb-2">
            <div className="text-[#ff0000] font-bold">
              JP Clock -{" "}
              <span className="font-extrabold text-white">
                Thu, 12 Jun 2025, 20:09:15 (JST)
              </span>
            </div>
            <div className="text-[#ff0000] font-bold">
              Global Clock -{" "}
              <span className="font-extrabold text-white">
                Thu, 12 Jun 2025, 11:09:15 (UTC)
              </span>
            </div>
            <div className="text-[#ff0000] font-bold">
              Reset Time -{" "}
              <span className="font-extrabold text-white">0d 7h 50m 44s</span>
            </div>
          </div>
          <hr className="border-gray-400 my-2" />
          {/* Event 1 */}
          <div className="flex flex-col items-center mb-4">
            <div className="text-[#02d3fb] text-xs italic font-bold">
              -ive aLIVE! (Rerun)
            </div>
            <img
              src="Blue-Archive/images/Event_35_-_Title.png"
              alt="ive aLIVE! Event"
            />
            <div className="text-xs text-white text-center">
              <div className="font-bold">
                June 04th, 2025 JST – June 18th, 2025 JST
              </div>
              <div className="font-bold">
                Event Period{" "}
                <span className="text-[#ff0000]">
                  ends in 5d 7h 50m 44s JST
                </span>
              </div>
            </div>
          </div>
          {/* Event 2 */}
          <div className="flex flex-col items-center mb-2">
            <div className="text-[#06bbfa] text-xs italic font-bold">
              Waraku Festival Special Campaign!
            </div>
            <img
              src="Blue-Archive/images/Daily_Mission_15_-_Title.png"
              alt="Waraku Festival Event"
            />
            <div className="text-xs text-white text-center">
              <div className="font-bold">
                May 21st, 2025 JST – June 25th, 2025 JST
              </div>
              <div className="font-bold">
                Daily Mission Period{" "}
                <span className="text-[#ff0000]">
                  ends in 12d 7h 50m 44s JST
                </span>
              </div>
            </div>
          </div>
          {/* Event 3 */}
          <div className="flex flex-col items-center mb-2">
            <div className="text-[#06bbfa] text-xs italic font-bold">
              Great Decisive Battle - Hieronymus (Urban Assault)
            </div>
            <img
              src="Blue-Archive/images/Great_25.png"
              alt="Waraku Festival Event"
            />
            <div className="text-xs text-white text-center">
              <div className="font-bold">
                June 11th, 2025 JST – June 18th, 2025 JST
              </div>
              <div className="font-bold">
                Great Decisive Battle Period{" "}
                <span className="text-[#ff0000]">
                  ends in 5d 7h 50m 44s JST
                </span>
              </div>
            </div>
          </div>
          {/* Event 4 */}
          <div className="flex flex-col items-center mb-2">
            <div className="text-[#06bbfa] text-xs italic font-bold">
              Unrestricted Decisive Battle - Chokmah
            </div>
            <img
              src="Blue-Archive/images/Unrestricted_15.png"
              alt="Waraku Festival Event"
            />
            <div className="text-xs text-white text-center">
              <div className="font-bold">
                May 22st, 2025 JST – June 25th, 2025 JST
              </div>
              <div className="font-bold">
                Unrestricted Decisive Battle Period{" "}
                <span className="text-[#ff0000]">
                  ends in 12d 7h 50m 44s JST
                </span>
              </div>
            </div>
          </div>
          {/* Event 5 */}
          <div className="flex flex-col items-center mb-2">
            <div className="text-[#06bbfa] text-xs italic font-bold">
              Double Drop Campaign
            </div>
            <img
              src="Blue-Archive/images/Double_Drop_Campaign_2.png"
              alt="Waraku Festival Event"
            />
            <div className="text-xs text-white text-center">
              <div className="font-bold">
                June 11st, 2025 JST – June 18th, 2025 JST
              </div>
              <div className="font-bold">
                Campaign Period{" "}
                <span className="text-[#ff0000]">
                  ends in 5d 7h 50m 44s JST
                </span>
              </div>
            </div>
          </div>
          {/* Event 6 */}
          <div className="flex flex-col items-center mb-2">
            <div className="text-[#06bbfa] text-xs italic font-bold">
              Double Drop Campaign
            </div>
            <img
              src="Blue-Archive/images/Double_Drop_Campaign_5.png"
              alt="Waraku Festival Event"
            />
            <div className="text-xs text-white text-center">
              <div className="font-bold">
                June 11st, 2025 JST – June 18th, 2025 JST
              </div>
              <div className="font-bold">
                Campaign Period{" "}
                <span className="text-[#ff0000]">
                  ends in 5d 7h 50m 44s JST
                </span>
              </div>
            </div>
          </div>
          {/* Event 7 */}
          <div className="flex flex-col items-center mb-2">
            <div className="text-[#06bbfa] text-xs italic font-bold">
              Double Drop Campaign
            </div>
            <img
              src="Blue-Archive/images/Double_Drop_Campaign_6.png"
              alt="Waraku Festival Event"
            />
            <div className="text-xs text-white text-center">
              <div className="font-bold">
                June 11st, 2025 JST – June 18th, 2025 JST
              </div>
              <div className="font-bold">
                Campaign Period{" "}
                <span className="text-[#ff0000]">
                  ends in 5d 7h 50m 44s JST
                </span>
              </div>
            </div>
          </div>
          {/* Natsu & Kazusa side by side */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            {/*Natsu*/}
            <div
              style={{ display: "inline-block" }}
              className="advanced-tooltip tooltips-init-complete"
            >
              <div
                style={{
                  background: "#fbb35a",
                  border: "2px solid #02D3FB",
                  borderRadius: "5px",
                  display: "inline-block",
                  position: "relative",
                  height: "100px",
                  width: "115px",
                  overflow: "hidden",
                  verticalAlign: "middle",
                  marginTop: "2px",
                  marginBottom: "2px",
                  transform: "skewX(-10deg)",
                  marginLeft: "7px",
                  marginRight: "-7px",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "-5px",
                    right: "-5px",
                    bottom: "-5px",
                    alignItems: "center",
                    paddingTop: "5%",
                    transform: "skewX(10deg)",
                  }}
                >
                  <span>
                    <a href="/wiki/Natsu(Band_ver.)">
                      <img
                        alt="Natsu (Band ver.)"
                        src="Blue-Archive/characters/Natsu_Band_Icon.png"
                        decoding="async"
                        loading="lazy"
                        width={125}
                        height={101}
                        className="mw-file-element lazyloaded"
                        data-image-name="Natsu Band Icon.png"
                        data-image-key="Natsu_Band_Icon.png"
                        data-relevant="1"
                        data-src="https://static.wikia.nocookie.net/blue-archive/images/7/7f/Kazusa_Band_Icon.png/revision/latest/scale-to-width-down/125?cb=20240424132857"
                      />
                    </a>
                  </span>
                </span>
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    display: "flex",
                    flexDirection: "row",
                    gap: "2px",
                    lineHeight: "10px",
                    padding: "1px",
                    background: "#9B85E6",
                    borderBottomLeftRadius: "3px",
                    fontSize: "8px",
                    color: "#000000",
                    paddingLeft: "2%",
                    paddingRight: "2%",
                  }}
                >
                  <b
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "2px",
                    }}
                  >
                    <span>
                      <a href="#" className="mw-file-description image">
                        <img
                          src="Blue-Archive/images/Star_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={15}
                          height={14}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Star Icon.png"
                          data-image-key="Star_Icon.png"
                          data-relevant="1"
                          data-src="Blue-Archive/images/Star_Icon.png"
                        />
                      </a>
                    </span>
                    <span
                      className="hidden"
                      style={{ opacity: 0, width: "0px", position: "absolute" }}
                    >
                      Star IconCategory:test
                    </span>
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/1/1f/Star_Icon.png/revision/latest?cb=20210224171150"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Star_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={15}
                          height={14}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Star Icon.png"
                          data-image-key="Star_Icon.png"
                          data-relevant="1"
                          data-src="Blue-Archive/images/Star_Icon.png"
                        />
                      </a>
                    </span>
                    <span
                      className="hidden"
                      style={{ opacity: 0, width: "0px", position: "absolute" }}
                    >
                      Star IconCategory:test
                    </span>
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/1/1f/Star_Icon.png/revision/latest?cb=20210224171150"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Star_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={15}
                          height={14}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Star Icon.png"
                          data-image-key="Star_Icon.png"
                          data-relevant="1"
                          data-src="Blue-Archive/images/Star_Icon.png"
                        />
                      </a>
                    </span>
                    <span
                      className="hidden"
                      style={{ opacity: 0, width: "0px", position: "absolute" }}
                    >
                      Star IconCategory:test
                    </span>
                  </b>
                </span>
                <span
                  style={{
                    position: "absolute",
                    top: "18px",
                    right: 0,
                    lineHeight: "10px",
                    padding: "1px",
                    background: "#FF6133",
                    borderBottomLeftRadius: "3px",
                    fontSize: "8px",
                    color: "#000000",
                    paddingLeft: "2%",
                    paddingRight: "2%",
                  }}
                >
                  <b>Striker</b>
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: "1.5px",
                    right: "1px",
                    lineHeight: "10px",
                    paddingLeft: "2%",
                    paddingRight: "2%",
                    background: "none",
                    borderRadius: "3px",
                    textAlign: "center",
                    textShadow:
                      "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
                  }}
                >
                  <a href="/wiki/Kyouyama_Kazusa_(Band_ver.)">
                    <span
                      style={{
                        fontSize: "9.5px",
                        color: "#000000",
                      }}
                    >
                      <b>Natsu (Band)</b>
                    </span>
                  </a>
                </span>
                <div
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "2px",
                    display: "inline-block",
                  }}
                >
                  <div
                    style={{
                      background: "Red",
                      borderRadius: "5px",
                      border: "2px solid #000000",
                      fontSize: "10px",
                    }}
                  >
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/3/3a/Offensive_Icon.png/revision/latest?cb=20210519154600"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Offensive_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={19}
                          height={19}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Offensive Icon.png"
                          data-image-key="Offensive_Icon.png"
                          data-relevant="0"
                          data-src="Blue-Archive/images/Offensive_Icon.png"
                        />
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      background: "#46adff",
                      borderRadius: "5px",
                      border: "2px solid #000000",
                      fontSize: "10px",
                    }}
                  >
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/5/50/Defensive_Icon.png/revision/latest?cb=20210519154625"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Defensive_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={19}
                          height={19}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Defensive Icon.png"
                          data-image-key="Defensive_Icon.png"
                          data-relevant="0"
                          data-src="Blue-Archive/images/Defensive_Icon.png"
                        />
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      background: "#fbb35a",
                      borderRadius: "5px",
                      border: "2px solid #000000",
                      fontSize: "10px",
                    }}
                  >
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/7/7e/Attacker.png/revision/latest?cb=20210714042101"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Healer.png"
                          decoding="async"
                          loading="lazy"
                          width={19}
                          height={19}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Healer.png"
                          data-image-key="Healer.png"
                          data-relevant="0"
                          data-src="Blue-Archive/images/Healer.png"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*Kazusa*/}
            <div
              style={{ display: "inline-block" }}
              className="advanced-tooltip tooltips-init-complete"
            >
              <div
                style={{
                  background: "#fbb35a",
                  border: "2px solid #02D3FB",
                  borderRadius: "5px",
                  display: "inline-block",
                  position: "relative",
                  height: "100px",
                  width: "115px",
                  overflow: "hidden",
                  verticalAlign: "middle",
                  marginTop: "2px",
                  marginBottom: "2px",
                  transform: "skewX(-10deg)",
                  marginLeft: "7px",
                  marginRight: "-7px",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "-5px",
                    right: "-5px",
                    bottom: "-5px",
                    alignItems: "center",
                    paddingTop: "5%",
                    transform: "skewX(10deg)",
                  }}
                >
                  <span>
                    <a href="/wiki/Kyouyama_Kazusa_(Band_ver.)">
                      <img
                        alt="Kyouyama Kazusa (Band ver.)"
                        src="Blue-Archive/characters/Kazusa_Band_Icon.png"
                        decoding="async"
                        loading="lazy"
                        width={125}
                        height={101}
                        className="mw-file-element lazyloaded"
                        data-image-name="Kazusa Band Icon.png"
                        data-image-key="Kazusa_Band_Icon.png"
                        data-relevant="1"
                        data-src="https://static.wikia.nocookie.net/blue-archive/images/7/7f/Kazusa_Band_Icon.png/revision/latest/scale-to-width-down/125?cb=20240424132857"
                      />
                    </a>
                  </span>
                </span>
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    display: "flex",
                    flexDirection: "row",
                    gap: "2px",
                    lineHeight: "10px",
                    padding: "1px",
                    background: "#9B85E6",
                    borderBottomLeftRadius: "3px",
                    fontSize: "8px",
                    color: "#000000",
                    paddingLeft: "2%",
                    paddingRight: "2%",
                  }}
                >
                  <b
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "2px",
                    }}
                  >
                    <span>
                      <a href="#" className="mw-file-description image">
                        <img
                          src="Blue-Archive/images/Star_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={15}
                          height={14}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Star Icon.png"
                          data-image-key="Star_Icon.png"
                          data-relevant="1"
                          data-src="Blue-Archive/images/Star_Icon.png"
                        />
                      </a>
                    </span>
                    <span
                      className="hidden"
                      style={{ opacity: 0, width: "0px", position: "absolute" }}
                    >
                      Star IconCategory:test
                    </span>
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/1/1f/Star_Icon.png/revision/latest?cb=20210224171150"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Star_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={15}
                          height={14}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Star Icon.png"
                          data-image-key="Star_Icon.png"
                          data-relevant="1"
                          data-src="Blue-Archive/images/Star_Icon.png"
                        />
                      </a>
                    </span>
                    <span
                      className="hidden"
                      style={{ opacity: 0, width: "0px", position: "absolute" }}
                    >
                      Star IconCategory:test
                    </span>
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/1/1f/Star_Icon.png/revision/latest?cb=20210224171150"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Star_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={15}
                          height={14}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Star Icon.png"
                          data-image-key="Star_Icon.png"
                          data-relevant="1"
                          data-src="Blue-Archive/images/Star_Icon.png"
                        />
                      </a>
                    </span>
                    <span
                      className="hidden"
                      style={{ opacity: 0, width: "0px", position: "absolute" }}
                    >
                      Star IconCategory:test
                    </span>
                  </b>
                </span>
                <span
                  style={{
                    position: "absolute",
                    top: "18px",
                    right: 0,
                    lineHeight: "10px",
                    padding: "1px",
                    background: "#FF6133",
                    borderBottomLeftRadius: "3px",
                    fontSize: "8px",
                    color: "#000000",
                    paddingLeft: "2%",
                    paddingRight: "2%",
                  }}
                >
                  <b>Striker</b>
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: "1.5px",
                    right: "1px",
                    lineHeight: "10px",
                    paddingLeft: "2%",
                    paddingRight: "2%",
                    background: "none",
                    borderRadius: "3px",
                    textAlign: "center",
                    textShadow:
                      "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
                  }}
                >
                  <a href="/wiki/Kyouyama_Kazusa_(Band_ver.)">
                    <span
                      style={{
                        fontSize: "9.5px",
                        color: "#000000",
                      }}
                    >
                      <b>Kazusa (Band)</b>
                    </span>
                  </a>
                </span>
                <div
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "2px",
                    display: "inline-block",
                  }}
                >
                  <div
                    style={{
                      background: "Red",
                      borderRadius: "5px",
                      border: "2px solid #000000",
                      fontSize: "10px",
                    }}
                  >
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/3/3a/Offensive_Icon.png/revision/latest?cb=20210519154600"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Offensive_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={19}
                          height={19}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Offensive Icon.png"
                          data-image-key="Offensive_Icon.png"
                          data-relevant="0"
                          data-src="Blue-Archive/images/Offensive_Icon.png"
                        />
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      background: "#46adff",
                      borderRadius: "5px",
                      border: "2px solid #000000",
                      fontSize: "10px",
                    }}
                  >
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/5/50/Defensive_Icon.png/revision/latest?cb=20210519154625"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Defensive_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={19}
                          height={19}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Defensive Icon.png"
                          data-image-key="Defensive_Icon.png"
                          data-relevant="0"
                          data-src="Blue-Archive/images/Defensive_Icon.png"
                        />
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      background: "#fbb35a",
                      borderRadius: "5px",
                      border: "2px solid #000000",
                      fontSize: "10px",
                    }}
                  >
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/7/7e/Attacker.png/revision/latest?cb=20210714042101"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Attacker.png"
                          decoding="async"
                          loading="lazy"
                          width={19}
                          height={19}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Attacker.png"
                          data-image-key="Attacker.png"
                          data-relevant="0"
                          data-src="Blue-Archive/images/Attacker.png"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Place Yoshimi and Kikyou side by side */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            {/* Yoshimi */}
            <div
              style={{ display: "inline-block" }}
              className="advanced-tooltip tooltips-init-complete"
            >
              <div
                style={{
                  background: "#fbb35a",
                  border: "2px solid #02D3FB",
                  borderRadius: "5px",
                  display: "inline-block",
                  position: "relative",
                  height: "100px",
                  width: "115px",
                  overflow: "hidden",
                  verticalAlign: "middle",
                  marginTop: "2px",
                  marginBottom: "2px",
                  transform: "skewX(-10deg)",
                  marginLeft: "7px",
                  marginRight: "-7px",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "-5px",
                    right: "-5px",
                    bottom: "-5px",
                    alignItems: "center",
                    paddingTop: "5%",
                    transform: "skewX(10deg)",
                  }}
                >
                  <span>
                    <a href="/wiki/Yoshimi(Band_ver.)">
                      <img
                        alt="Yoshimi (Band ver.)"
                        src="Blue-Archive/characters/Yoshimi_Band_Icon.png"
                        decoding="async"
                        loading="lazy"
                        width={125}
                        height={101}
                        className="mw-file-element lazyloaded"
                        data-image-name="Yoshimi Band Icon.png"
                        data-image-key="Yoshimi_Band_Icon.png"
                        data-relevant="1"
                        data-src="https://static.wikia.nocookie.net/blue-archive/images/7/7f/Kazusa_Band_Icon.png/revision/latest/scale-to-width-down/125?cb=20240424132857"
                      />
                    </a>
                  </span>
                </span>
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    display: "flex",
                    flexDirection: "row",
                    gap: "2px",
                    lineHeight: "10px",
                    padding: "1px",
                    background: "#9B85E6",
                    borderBottomLeftRadius: "3px",
                    fontSize: "8px",
                    color: "#000000",
                    paddingLeft: "2%",
                    paddingRight: "2%",
                  }}
                >
                  <b
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "2px",
                    }}
                  >
                    <span>
                      <a href="#" className="mw-file-description image">
                        <img
                          src="Blue-Archive/images/Star_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={15}
                          height={14}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Star Icon.png"
                          data-image-key="Star_Icon.png"
                          data-relevant="1"
                          data-src="Blue-Archive/images/Star_Icon.png"
                        />
                      </a>
                    </span>
                    <span
                      className="hidden"
                      style={{ opacity: 0, width: "0px", position: "absolute" }}
                    >
                      Star IconCategory:test
                    </span>
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/1/1f/Star_Icon.png/revision/latest?cb=20210224171150"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Star_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={15}
                          height={14}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Star Icon.png"
                          data-image-key="Star_Icon.png"
                          data-relevant="1"
                          data-src="Blue-Archive/images/Star_Icon.png"
                        />
                      </a>
                    </span>
                    <span
                      className="hidden"
                      style={{ opacity: 0, width: "0px", position: "absolute" }}
                    >
                      Star IconCategory:test
                    </span>
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/1/1f/Star_Icon.png/revision/latest?cb=20210224171150"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Star_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={15}
                          height={14}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Star Icon.png"
                          data-image-key="Star_Icon.png"
                          data-relevant="1"
                          data-src="Blue-Archive/images/Star_Icon.png"
                        />
                      </a>
                    </span>
                    <span
                      className="hidden"
                      style={{ opacity: 0, width: "0px", position: "absolute" }}
                    >
                      Star IconCategory:test
                    </span>
                  </b>
                </span>
                <span
                  style={{
                    position: "absolute",
                    top: "18px",
                    right: 0,
                    lineHeight: "10px",
                    padding: "1px",
                    background: "#FF6133",
                    borderBottomLeftRadius: "3px",
                    fontSize: "8px",
                    color: "#000000",
                    paddingLeft: "2%",
                    paddingRight: "2%",
                  }}
                >
                  <b>Striker</b>
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: "1.5px",
                    right: "1px",
                    lineHeight: "10px",
                    paddingLeft: "2%",
                    paddingRight: "2%",
                    background: "none",
                    borderRadius: "3px",
                    textAlign: "center",
                    textShadow:
                      "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
                  }}
                >
                  <a href="/wiki/Yoshimi(Band_ver.)">
                    <span
                      style={{
                        fontSize: "9.5px",
                        color: "#000000",
                      }}
                    >
                      <b>Yoshimi (Band)</b>
                    </span>
                  </a>
                </span>
                <div
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "2px",
                    display: "inline-block",
                  }}
                >
                  <div
                    style={{
                      background: "Red",
                      borderRadius: "5px",
                      border: "2px solid #000000",
                      fontSize: "10px",
                    }}
                  >
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/3/3a/Offensive_Icon.png/revision/latest?cb=20210519154600"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Offensive_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={19}
                          height={19}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Offensive Icon.png"
                          data-image-key="Offensive_Icon.png"
                          data-relevant="0"
                          data-src="Blue-Archive/images/Offensive_Icon.png"
                        />
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      background: "#46adff",
                      borderRadius: "5px",
                      border: "2px solid #000000",
                      fontSize: "10px",
                    }}
                  >
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/5/50/Defensive_Icon.png/revision/latest?cb=20210519154625"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Defensive_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={19}
                          height={19}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Defensive Icon.png"
                          data-image-key="Defensive_Icon.png"
                          data-relevant="0"
                          data-src="Blue-Archive/images/Defensive_Icon.png"
                        />
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      background: "#fbb35a",
                      borderRadius: "5px",
                      border: "2px solid #000000",
                      fontSize: "10px",
                    }}
                  >
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/7/7e/Attacker.png/revision/latest?cb=20210714042101"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Attacker.png"
                          decoding="async"
                          loading="lazy"
                          width={19}
                          height={19}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Attacker.png"
                          data-image-key="Attacker.png"
                          data-relevant="0"
                          data-src="Blue-Archive/images/Attacker.png"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Kikyou */}
            <div
              style={{ display: "inline-block" }}
              className="advanced-tooltip tooltips-init-complete"
            >
              <div
                style={{
                  background: "#e05289",
                  border: "2px solid #02D3FB",
                  borderRadius: "5px",
                  display: "inline-block",
                  position: "relative",
                  height: "100px",
                  width: "115px",
                  overflow: "hidden",
                  verticalAlign: "middle",
                  marginTop: "2px",
                  marginBottom: "2px",
                  transform: "skewX(-10deg)",
                  marginLeft: "7px",
                  marginRight: "-7px",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "-5px",
                    right: "-5px",
                    bottom: "-5px",
                    alignItems: "center",
                    paddingTop: "5%",
                    transform: "skewX(10deg)",
                  }}
                >
                  <span>
                    <a href="/wiki/Kikyou(Band_ver.)">
                      <img
                        alt="Kikyou (Band ver.)"
                        src="Blue-Archive/characters/Kikyou_Icon.png"
                        decoding="async"
                        loading="lazy"
                        width={125}
                        height={101}
                        className="mw-file-element lazyloaded"
                        data-image-name="Kikyou_Band Icon.png"
                        data-image-key="Kikyou_Band_Icon.png"
                        data-relevant="1"
                        data-src="https://static.wikia.nocookie.net/blue-archive/images/7/7f/Kazusa_Band_Icon.png/revision/latest/scale-to-width-down/125?cb=20240424132857"
                      />
                    </a>
                  </span>
                </span>
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    display: "flex",
                    flexDirection: "row",
                    gap: "2px",
                    lineHeight: "10px",
                    padding: "1px",
                    background: "#9B85E6",
                    borderBottomLeftRadius: "3px",
                    fontSize: "8px",
                    color: "#000000",
                    paddingLeft: "2%",
                    paddingRight: "2%",
                  }}
                >
                  <b
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "2px",
                    }}
                  >
                    <span>
                      <a href="#" className="mw-file-description image">
                        <img
                          src="Blue-Archive/images/Star_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={15}
                          height={14}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Star Icon.png"
                          data-image-key="Star_Icon.png"
                          data-relevant="1"
                          data-src="Blue-Archive/images/Star_Icon.png"
                        />
                      </a>
                    </span>
                    <span
                      className="hidden"
                      style={{ opacity: 0, width: "0px", position: "absolute" }}
                    >
                      Star IconCategory:test
                    </span>
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/1/1f/Star_Icon.png/revision/latest?cb=20210224171150"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Star_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={15}
                          height={14}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Star Icon.png"
                          data-image-key="Star_Icon.png"
                          data-relevant="1"
                          data-src="Blue-Archive/images/Star_Icon.png"
                        />
                      </a>
                    </span>
                    <span
                      className="hidden"
                      style={{ opacity: 0, width: "0px", position: "absolute" }}
                    >
                      Star IconCategory:test
                    </span>
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/1/1f/Star_Icon.png/revision/latest?cb=20210224171150"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Star_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={15}
                          height={14}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Star Icon.png"
                          data-image-key="Star_Icon.png"
                          data-relevant="1"
                          data-src="Blue-Archive/images/Star_Icon.png"
                        />
                      </a>
                    </span>
                    <span
                      className="hidden"
                      style={{ opacity: 0, width: "0px", position: "absolute" }}
                    >
                      Star IconCategory:test
                    </span>
                  </b>
                </span>
                <span
                  style={{
                    position: "absolute",
                    top: "18px",
                    right: 0,
                    lineHeight: "10px",
                    padding: "1px",
                    background: "#FF6133",
                    borderBottomLeftRadius: "3px",
                    fontSize: "8px",
                    color: "#000000",
                    paddingLeft: "2%",
                    paddingRight: "2%",
                  }}
                >
                  <b>Striker</b>
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: "1.5px",
                    right: "1px",
                    lineHeight: "10px",
                    paddingLeft: "2%",
                    paddingRight: "2%",
                    background: "none",
                    borderRadius: "3px",
                    textAlign: "center",
                    textShadow:
                      "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
                  }}
                >
                  <a href="/wiki/Kikyou(Band_ver.)">
                    <span
                      style={{
                        fontSize: "9.5px",
                        color: "#000000",
                      }}
                    >
                      <b>Kikyou</b>
                    </span>
                  </a>
                </span>
                <div
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "2px",
                    display: "inline-block",
                  }}
                >
                  <div
                    style={{
                      background: "#a17cb6",
                      borderRadius: "5px",
                      border: "2px solid #000000",
                      fontSize: "10px",
                    }}
                  >
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/3/3a/Offensive_Icon.png/revision/latest?cb=20210519154600"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Offensive_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={19}
                          height={19}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Offensive Icon.png"
                          data-image-key="Offensive_Icon.png"
                          data-relevant="0"
                          data-src="Blue-Archive/images/Offensive_Icon.png"
                        />
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      background: "#ffa500",
                      borderRadius: "5px",
                      border: "2px solid #000000",
                      fontSize: "10px",
                    }}
                  >
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/5/50/Defensive_Icon.png/revision/latest?cb=20210519154625"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Defensive_Icon.png"
                          decoding="async"
                          loading="lazy"
                          width={19}
                          height={19}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Defensive Icon.png"
                          data-image-key="Defensive_Icon.png"
                          data-relevant="0"
                          data-src="Blue-Archive/images/Defensive_Icon.png"
                        />
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      background: "#e05289",
                      borderRadius: "5px",
                      border: "2px solid #000000",
                      fontSize: "10px",
                    }}
                  >
                    <span>
                      <a
                        href="https://static.wikia.nocookie.net/blue-archive/images/7/7e/Attacker.png/revision/latest?cb=20210714042101"
                        className="mw-file-description image"
                      >
                        <img
                          src="Blue-Archive/images/Supporter.png"
                          decoding="async"
                          loading="lazy"
                          width={19}
                          height={19}
                          className="mw-file-element ls-is-cached lazyloaded"
                          data-image-name="Supporter.png"
                          data-image-key="Supporter.png"
                          data-relevant="0"
                          data-src="Blue-Archive/images/Supporter.png"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
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
