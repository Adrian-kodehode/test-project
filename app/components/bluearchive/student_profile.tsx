import React, { useEffect, useState } from "react";
import * as AllStudents from "./characters/students";

const studentComponents = [
  AllStudents.Hoshino,
  AllStudents.HoshinoSwimsuit,
  AllStudents.HoshinoArmed,
  AllStudents.Shiroko,
  AllStudents.ShirokoRiding,
  AllStudents.ShirokoSwimsuit,
  AllStudents.ShirokoTerror,
  AllStudents.Serika,
  AllStudents.SerikaNewYear,
  AllStudents.SerikaSwimsuit,
  AllStudents.Nonomi,
  AllStudents.NonomiSwimsuit,
  AllStudents.Ayane,
  AllStudents.AyaneSwimsuit,
  AllStudents.Makoto,
  AllStudents.Satsuki,
  AllStudents.Chiaki,
  AllStudents.Iroha,
  AllStudents.Ibuki,
  AllStudents.Hina,
  AllStudents.HinaSwimsuit,
  AllStudents.HinaDress,
  AllStudents.Ako,
  AllStudents.AkoDress,
  AllStudents.Iori,
  AllStudents.IoriSwimsuit,
  AllStudents.Chinatsu,
  AllStudents.ChinatsuHotSpring,
  AllStudents.Aru,
  AllStudents.AruNewYear,
  AllStudents.AruDress,
  AllStudents.Mutsuki,
  AllStudents.MutsukiNewYear,
  AllStudents.Kayoko,
  AllStudents.KayokoNewYear,
  AllStudents.KayokoDress,
  AllStudents.Haruka,
  AllStudents.HarukaNewYear,
  AllStudents.Haruna,
  AllStudents.HarunaNewYear,
  AllStudents.HarunaGym,
  AllStudents.Junko,
  AllStudents.JunkoNewYear,
  AllStudents.Izumi,
  AllStudents.IzumiSwimsuit,
  AllStudents.IzumiNewYear,
  AllStudents.Akari,
  AllStudents.AkariNewYear,
  AllStudents.Fuuka,
  AllStudents.FuukaNewYear,
  AllStudents.Juri,
  AllStudents.JuriPartTimer,
  AllStudents.Sena,
  AllStudents.SenaCasual,
  AllStudents.Kasumi,
  AllStudents.Megu,
  AllStudents.Kirara,
  AllStudents.Rio,
  AllStudents.Yuuka,
  AllStudents.YuukaGym,
  AllStudents.YuukaPajamas,
  AllStudents.Noa,
  AllStudents.NoaPajamas,
  AllStudents.Koyuki,
  AllStudents.Chihiro,
  AllStudents.Maki,
  AllStudents.MakiCamp,
  AllStudents.Hare,
  AllStudents.HareCamp,
  AllStudents.Kotama,
  AllStudents.KotamaCamp,
  AllStudents.Neru,
  AllStudents.NeruBunnyGirl,
  AllStudents.NeruSchoolGirl,
  AllStudents.Karin,
  AllStudents.KarinBunnyGirl,
  AllStudents.KarinSchoolgirl,
  AllStudents.Akane,
  AllStudents.AkaneBunnyGirl,
  AllStudents.Asuna,
  AllStudents.AsunaBunnyGirl,
  AllStudents.AsunaSchoolgirl,
  AllStudents.Toki,
  AllStudents.TokiBunnyGirl,
  AllStudents.Hibiki,
  AllStudents.HibikiCheerleader,
  AllStudents.Utaha,
  AllStudents.UtahaCheerleader,
  AllStudents.Kotori,
  AllStudents.KotoriCheerleader,
  AllStudents.Sumire,
  AllStudents.SumirePartTimer,
  AllStudents.Rei,
  AllStudents.Himari,
  AllStudents.Elmi,
  AllStudents.ElmiSwimsuit,
  AllStudents.Alice,
  AllStudents.AliceMaid,
  AllStudents.Yuzu,
  AllStudents.YuzuMaid,
  AllStudents.Midori,
  AllStudents.MidoriMaid,
  AllStudents.Momoi,
  AllStudents.MomoiMaid,
  AllStudents.Nagisa,
  AllStudents.Seia,
  AllStudents.Mika,
  AllStudents.Kazusa,
  AllStudents.KazusaBand,
  AllStudents.Natsu,
  AllStudents.NatsuBand,
  AllStudents.Airi,
  AllStudents.AiriBand,
  AllStudents.Yoshimi,
  AllStudents.YoshimiBand,
  AllStudents.Suzumi,
  AllStudents.Reisa,
  AllStudents.Tsurugi,
  AllStudents.TsurugiSwimsuit,
  AllStudents.Hasumi,
  AllStudents.HasumiGym,
  AllStudents.Mashiro,
  AllStudents.MashiroSwimsuit,
  AllStudents.Ichika,
  AllStudents.Mine,
  AllStudents.MineIdol,
  AllStudents.Hanae,
  AllStudents.HanaeChristmas,
  AllStudents.Serina,
  AllStudents.SerinaChristmas,
  AllStudents.Hifumi,
  AllStudents.HifumiSwimsuit,
  AllStudents.Azusa,
  AllStudents.AzusaSwimsuit,
  AllStudents.Koharu,
  AllStudents.KoharuSwimsuit,
  AllStudents.Hanako,
  AllStudents.HanakoSwimsuit,
  AllStudents.Ui,
  AllStudents.UiSwimsuit,
  AllStudents.Shimiko,
  AllStudents.Sakurako,
  AllStudents.SakurakoIdol,
  AllStudents.Mari,
  AllStudents.MariGym,
  AllStudents.MariIdol,
  AllStudents.Hinata,
  AllStudents.HinataSwimsuit,
  AllStudents.Niya,
  AllStudents.Kaho,
  AllStudents.Chise,
  AllStudents.ChiseSwimsuit,
  AllStudents.Tsubaki,
  AllStudents.TsubakiGuide,
  AllStudents.Mimori,
  AllStudents.MimoriSwimsuit,
  AllStudents.Kaede,
  AllStudents.Nagusa,
  AllStudents.Renge,
  AllStudents.RengeSwimsuit,
  AllStudents.Kikyou,
  AllStudents.KikyouSwimsuit,
  AllStudents.Yukari,
  AllStudents.YukariSwimsuit,
  AllStudents.Shizuko,
  AllStudents.ShizukoSwimsuit,
  AllStudents.Pina,
  AllStudents.PinaGuide,
  AllStudents.Umika,
  AllStudents.Michiru,
  AllStudents.Izuna,
  AllStudents.Tsukuyo,
  AllStudents.Wakamo,
  AllStudents.WakamoSwimsuit,

  AllStudents.Hikari,
  AllStudents.Nozomi,
  AllStudents.Aoba,
  AllStudents.Miku,
  AllStudents.Mikoto,
  AllStudents.Misaki,
  AllStudents.Ruiko,
];

export const Students = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

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
      <main className="flex-1 mt-10 mb-10 w-[1200px] max-w-[98vw] bg-black bg-opacity-80 rounded-lg p-4 text-white shadow-lg mx-auto flex flex-col items-center justify-center">
        {/* Filter Bar */}
        {/* Top Buttons */}
        <div className="w-full flex flex-row gap-4 mb-4 justify-center">
          <button className="flex-1 max-w-xs bg-[#00bfff] border-2 border-[#0066ff] text-black rounded-lg py-2 px-4 text-lg font-bold shadow hover:bg-[#59deff] transition-colors">
            Click <span className="text-[#0066ff] underline">here</span> for the
            Limited List
          </button>
          <button className="flex-1 max-w-xs bg-[#00bfff] border-2 border-[#0066ff] text-black rounded-lg py-2 px-4 text-lg font-bold shadow hover:bg-[#59deff] transition-colors">
            Click <span className="text-[#0066ff] underline">here</span> for the
            Detailed List
          </button>
          <button className="flex-1 max-w-xs bg-[#00bfff] border-2 border-[#0066ff] text-black rounded-lg py-2 px-4 text-lg font-bold shadow hover:bg-[#59deff] transition-colors">
            Click <span className="text-[#0066ff] underline">here</span> for the
            Variant List
          </button>
        </div>
        {/* Tab Bar */}
        <div className="w-full flex flex-row gap-8 border-b-2 border-[#59deff] mb-2 text-base font-semibold justify-center items-center">
          <span className="text-[#59deff] underline cursor-pointer pb-1 border-b-2 border-[#59deff]">
            By Class
          </span>
          <span className="text-gray-300 cursor-pointer pb-1">By Terrain</span>
          <span className="text-gray-300 cursor-pointer pb-1">By Stats</span>
          <span className="text-gray-300 cursor-pointer pb-1">By UE</span>
          <span className="text-gray-300 cursor-pointer pb-1">By Bond</span>
          <span className="text-gray-300 cursor-pointer pb-1">By Material</span>
          <span className="text-gray-300 cursor-pointer pb-1">By Gift</span>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm text-center text-white border border-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-[#00bfff] text-black">
              <tr>
                <th className="py-2 px-2 cursor-pointer">Student</th>
                <th className="py-2 px-2 cursor-pointer">Rarity</th>
                <th className="py-2 px-2 cursor-pointer">Role</th>
                <th className="py-2 px-2 cursor-pointer">Class</th>
                <th className="py-2 px-2 cursor-pointer">Position</th>
                <th className="py-2 px-2 cursor-pointer">Cover</th>
                <th className="py-2 px-2 cursor-pointer">ATK TYPE</th>
                <th className="py-2 px-2 cursor-pointer">DEF TYPE</th>
              </tr>
            </thead>
            <tbody>
              {studentComponents.map((StudentComponent, index) => (
                <StudentComponent key={index} />
              ))}
            </tbody>
          </table>
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
