import { Divide } from "lucide-react";
import React, { useEffect, useState } from "react";
// Simple Slideshow component that cycles through images every 3 seconds
const Slideshow = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="w-full flex justify-center items-center">
      <img
        src={images[index]}
        alt={`Slideshow ${index + 1}`}
        className="rounded-lg w-full"
        style={{ display: "block" }}
      />
    </div>
  );
};

export const BlueArchiveHome = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [selectedGacha, setSelectedGacha] = useState<number>(1);

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
      style={{
        backgroundImage: "url('/Blue-Archive/Site-background-dark (1).jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="min-h-screen flex flex-col"
    >
      {/* Header */}
      <header className="w-full flex flex-col items-start justify-center pt-10 pl-40 relative">
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
          <a
            href="/blue_archive"
            className="hover:underline hover:text-white transition"
          >
            EXPLORE
          </a>
          <a href="#" className="hover:underline hover:text-white transition">
            BLUE ARCHIVE
          </a>
          <a href="#" className="hover:underline hover:text-white transition">
            TERMINOLOGY
          </a>
          <a
            href="/students"
            className="hover:underline hover:text-white transition"
          >
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
          {/* <div className="flex justify-center mb-4">
            <img
              src="Blue-Archive/Blue_Archive_KR_logo_(white_text).png"
              alt="/students"
            />
          </div> */}
          <div className="mb-6 flex justify-center items-center scale-100 ">
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
          {/* Welcome Box */}
          <section className="border-2 border-[#02d3fb] rounded-lg p-4 ] bg-opacity-90 mb-2">
            <div className="bg-[#02d3fb] rounded px-4 py-1 text-center font-extrabold text-black text-lg tracking-wide mb-2">
              <span className="mr-2">
                <img
                  src="/Blue-Archive/icons/Abydos_Icon.png"
                  alt="Abydos"
                  className="w-6 h-6 inline-block"
                />
                <img
                  src="/Blue-Archive/icons/Gehenna_Icon.png"
                  alt="Gehenna"
                  className="w-6 h-6 inline-block"
                />
                <img
                  src="/Blue-Archive/icons/Millennium_Icon.png"
                  alt="Millennium"
                  className="w-6 h-6 inline-block"
                />
                <img
                  src="/Blue-Archive/icons/Trinity_Icon.png"
                  alt="Trinity"
                  className="w-6 h-6 inline-block"
                />
                <img
                  src="/Blue-Archive/icons/Hyakkiyako_Icon.png"
                  alt="Hyakkiyako"
                  className="w-6 h-6 inline-block"
                />
              </span>
              Sensei, Welcome to the Blue Archive Wikia!
              <span className="ml-2">
                <img
                  src="/Blue-Archive/icons/Shanhaijing_Icon.png"
                  alt="Shanhaijing"
                  className="w-6 h-6 inline-block"
                />
                <img
                  src="/Blue-Archive/icons/Red_Winter_Icon.png"
                  alt="Red Winter"
                  className="w-6 h-6 inline-block"
                />
                <img
                  src="/Blue-Archive/icons/Valkyrie_Icon.png"
                  alt="Valkyrie"
                  className="w-6 h-6 inline-block"
                />
                <img
                  src="/Blue-Archive/icons/ARIUS_Icon.png"
                  alt="Arius"
                  className="w-6 h-6 inline-block"
                />
                <img
                  src="/Blue-Archive/icons/SRT_Icon.png"
                  alt="SRT"
                  className="w-6 h-6 inline-block"
                />
              </span>
            </div>
            <div className="text-center mt-2 mb-5">
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
            <ul className=" mt-2 list-disc list-inside space-y-1 text-center mb-5">
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
            <section>
              <div className="bg-[#02d3fb] rounded px-4  text-center font-extrabold text-black text-md ">
                ~~ Sources ~~
              </div>
              <div className=" mt-2 text-center">
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
                <div className="flex flex-wrap justify-center ">
                  {[
                    "AR_New_Icon.png",
                    "DualSG_New_Icon.png",
                    "DualSMG_New_Icon.png",
                    "FT_New_Icon.png",
                    "GL_New_Icon.png",
                    "HG_New_Icon.png",
                    "MG_New_Icon.png",
                    "ML_New_Icon.png",
                    "MountMG_New_Icon.png",
                    "RF_New_Icon.png",
                    "RG_New_Icon.png",
                    "RL_New_Icon.png",
                    "SG_New_Icon.png",
                    "SMG_New_Icon.png",
                    "SR_New_Icon.png",
                  ].map((img) => (
                    <img
                      key={img}
                      src={`/Blue-Archive/weapons/${img}`}
                      alt={img.replace("_New_Icon.png", "")}
                      className="w-12 h-12 object-contain "
                      title={img.replace("_New_Icon.png", "")}
                    />
                  ))}
                </div>
              </div>
            </section>
          </section>
          {/* Upcoming Birthday */}
          <section className="border-2 border-[#02d3fb] rounded-lg  bg-opacity-90 mb-2">
            <div className="bg-[#02d3fb] rounded px-4 py-1 text-center font-extrabold text-black text-md mb-2">
              Upcoming Birthday
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">June 16th</span>
              <img
                src="Blue-Archive/characters/Yukari_Icon.png"
                alt="Birthday Character"
                className="w-24 h-24 object-contain mb-2"
              />
            </div>
          </section>
          {/* Anime Promo */}
          {/* <section className="max-w-[800px] rounded-lg p-4 mb-2 flex flex-col items-center justify-center mx-auto">

            <div className="w-[800px] h-[450px] flex items-center justify-center">
              <Slideshow
                images={[
                  "/Blue-Archive/images/【ブルアカ】5th_PV.jpg",
                  "/Blue-Archive/images/【ブルアカTVアニメ】ティザー_PV.jpg",
                  "/Blue-Archive/images/1.5th_Anniversary_Illustration_1.png",
                  "/Blue-Archive/images/Arona_Room_2.png",
                ]}
              />
            </div>
            </section> */}
          {/* Fandom Slider - Improved Styling */}
          {/* Slideshow - replaces static fandom slider */}
          <section className="w-full max-w-3xl mx-auto my-8">
            <img
              src="/Blue-Archive/images/1.5th_Anniversary_Illustration_1.png"
              alt="Blue Archive Promo"
              className="rounded-lg w-full"
              style={{ display: "block" }}
            />
          </section>
          {/* "/Blue-Archive/images/【ブルアカ】5th_PV.jpg",
          "/Blue-Archive/images/【ブルアカTVアニメ】ティザー_PV.jpg",
          "/Blue-Archive/images/1.5th_Anniversary_Illustration_1.png",
          "/Blue-Archive/images/Arona_Room_2.png", */}
          {/* Main Menu */}
          <section className="border-2 border-[#02d3fb] rounded-lg p-4  bg-opacity-90 mb-2">
            <div className="bg-[#02d3fb] rounded px-4 py-1 text-center font-extrabold text-black text-md mb-2">
              Main Menu
            </div>
            <div className="flex flex-col items-center">
              <img src="Blue-Archive/images/MP_Work.png" alt="Main Menu" />
            </div>
            <div className="bg-[#02d3fb] rounded mt-3 px-4 py-1 text-center font-extrabold text-black text-md mb-2">
              Content
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                "MP_Student.png",
                "MP_Achievement.png",
                "MP_Circle.png",
                "MP_FAQ.png",
                "MP_Gacha.png",
                "MP_School.png",
                "MP_Club.png",
                "MP_Shop.png",
                "MP_BA.png",
                "MP_Soundtrack.png",
                "MP_4-Koma.png",
                "MP_Arona_Channel.png",
                "MP_Firearm.png",
                "MP_Equipment.png",
                "MP_Terrain.png",
                "MP_Type.png",
                "MP_Cafe.png",
                "MP_Crafting.png",
                "MP_Bond.png",
                "MP_Schedule.png",
                "MP_UE.png",
                "MP_TailorMade.png",
                "",
                "",
                "",
              ].map((img, i) =>
                img ? (
                  <div
                    key={img}
                    className="flex flex-col justify-center items-center"
                  >
                    <img
                      src={`Blue-Archive/icons/${img}`}
                      alt={img.replace(".png", "")}
                      className="w-56 h-56 object-contain"
                    />
                    <span className="mt-2 text-xs text-white text-center font-semibold">
                      {img
                        .replace("MP_", "")
                        .replace(".png", "")
                        .replace(/_/g, " ")}
                    </span>
                  </div>
                ) : (
                  <div key={i} />
                )
              )}
            </div>
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
                Thu, 26 Jun 2025, 21:09:15 (JST)
              </span>
            </div>
            <div className="text-[#ff0000] font-bold">
              Global Clock -{" "}
              <span className="font-extrabold text-white">
                Thu, 26 Jun 2025, 12:09:15 (UTC)
              </span>
            </div>
            <div className="text-[#ff0000] font-bold">
              Reset Time -{" "}
              <span className="font-extrabold text-white">0d 6h 50m 44s</span>
            </div>
          </div>
          <hr className="border-gray-400 my-2" />
          {/* Event 1 */}
          <div className="flex flex-col items-center mb-4">
            <div className="text-[#02d3fb] text-xs italic font-bold">
              A Hundred Years of One Flower
            </div>
            <img
              src="Blue-Archive/images/Event_46_-_Title.png"
              alt="ive aLIVE! Event"
            />
            <div className="text-xs text-white text-center">
              <div className="font-bold">
                June 25th, 2025 JST – July 09th, 2025 JST
              </div>
              <div className="font-bold">
                Event Period{" "}
                <span className="text-[#ff0000]">
                  ends in 12d 6h 50m 44s JST
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
          <div>
            <div className="bg-[#02d3fb] rounded px-4 py-1 text-center font-extrabold text-[#417ef3] border-2 border-[#417ef3] text-md mb-2">
              Featured Gatch
            </div>
            <div className="flex justify-center gap-4 mb-2">
              {[1, 2].map((num) => (
                <button
                  key={num}
                  className={`text-xl font-bold px-4 py-1 relative ${
                    selectedGacha === num
                      ? "text-white bg-[#02d3fb] rounded"
                      : "text-[#02d3fb]"
                  }`}
                  style={{ minWidth: 32, textAlign: "center" }}
                  onClick={() => setSelectedGacha(num)}
                >
                  {num}
                </button>
              ))}
            </div>
            <div className="w-full flex justify-center">
              <div className="h-1 w-full bg-[#02d3fb] rounded-full" />
            </div>
            <div className="flex justify-center mt-2">
              <img
                src={
                  [
                    "Blue-Archive/gacha/Gacha_Banner_165.png",
                    "Blue-Archive/gacha/Gacha_Banner_166.png",
                  ][(selectedGacha ?? 1) - 1]
                }
                alt="Featured Gacha Banner"
                className="rounded-lg max-w-full"
                style={{ maxHeight: 200 }}
              />
            </div>
          </div>
          {/* Natsu & Kazusa side by side */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "3px",
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
                    <a href="/wiki/Natsu(Band_ver.)">
                      <img
                        alt="Natsu (Band ver.)"
                        src="Blue-Archive/images/Yukari_Swimsuit_Icon.png"
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
                  <b className="font-extrabold">Striker</b>
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
                      <b>Yukari (Swimsuit)</b>
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
                      background: "#ffa500",
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
                      background: "red",
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
                          src="Blue-Archive/icons/Attacker (1).png"
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
                    <a href="/wiki/Kyouyama_Kazusa_(Band_ver.)">
                      <img
                        alt="Kikyou (Swimsuit ver.)"
                        src="Blue-Archive/images/Kikyou_Swimsuit_Icon.png"
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
                    background: "#2185f6",
                    borderBottomLeftRadius: "3px",
                    fontSize: "8px",
                    color: "#000000",
                    paddingLeft: "2%",
                    paddingRight: "2%",
                  }}
                >
                  <b className="font-extrabold">Special</b>
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
                      <b>Kikyou (Swimsuit)</b>
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
                          src="Blue-Archive/icons/Supporter.png"
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
          <div>
            {/* Kikyou */}
            <div className="flex justify-center">
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
                          alt="Kikyou (Swimsuit ver.)"
                          src="Blue-Archive/images/Renge_Swimsuit_Icon.png"
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
                      background: "#e68f16",
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
                        style={{
                          opacity: 0,
                          width: "0px",
                          position: "absolute",
                        }}
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
                        style={{
                          opacity: 0,
                          width: "0px",
                          position: "absolute",
                        }}
                      >
                        Star IconCategory:test
                      </span>

                      <span
                        className="hidden"
                        style={{
                          opacity: 0,
                          width: "0px",
                          position: "absolute",
                        }}
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
                    <b className="font-extrabold">Striker</b>
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
                        <b>Renge (Swimsuit)</b>
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
                            src="Blue-Archive/icons/Attacker (1).png"
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
          </div>
          <div className="text-xs text-white text-center">
            <div>June 11st, 2025 JST – June 18th, 2025 JST</div>
            <div className="font-bold">
              Gacha Period{" "}
              <span className="text-[#ff0000]">ends in 1d 18h 37m 44s JST</span>
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
