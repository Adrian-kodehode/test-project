import React, { useEffect, useState } from "react";
import * as AllStudents from "./characters/students";
import { Student } from "./characters/students/Student";
import { a } from "node_modules/framer-motion/dist/types.d-DDSxwf0n";

// const studentComponents = [
//   AllStudents.Hoshino,
//   AllStudents.HoshinoSwimsuit,
//   AllStudents.HoshinoArmed,
//   AllStudents.Shiroko,
//   AllStudents.ShirokoRiding,
//   AllStudents.ShirokoSwimsuit,
//   AllStudents.ShirokoTerror,
//   AllStudents.Serika,
//   AllStudents.SerikaNewYear,
//   AllStudents.SerikaSwimsuit,
//   AllStudents.Nonomi,
//   AllStudents.NonomiSwimsuit,
//   AllStudents.Ayane,
//   AllStudents.AyaneSwimsuit,
//   AllStudents.Makoto,
//   AllStudents.Satsuki,
//   AllStudents.Chiaki,
//   AllStudents.Iroha,
//   AllStudents.Ibuki,
//   AllStudents.Hina,
//   AllStudents.HinaSwimsuit,
//   AllStudents.HinaDress,
//   AllStudents.Ako,
//   AllStudents.AkoDress,
//   AllStudents.Iori,
//   AllStudents.IoriSwimsuit,
//   AllStudents.Chinatsu,
//   AllStudents.ChinatsuHotSpring,
//   AllStudents.Aru,
//   AllStudents.AruNewYear,
//   AllStudents.AruDress,
//   AllStudents.Mutsuki,
//   AllStudents.MutsukiNewYear,
//   AllStudents.Kayoko,
//   AllStudents.KayokoNewYear,
//   AllStudents.KayokoDress,
//   AllStudents.Haruka,
//   AllStudents.HarukaNewYear,
//   AllStudents.Haruna,
//   AllStudents.HarunaNewYear,
//   AllStudents.HarunaGym,
//   AllStudents.Junko,
//   AllStudents.JunkoNewYear,
//   AllStudents.Izumi,
//   AllStudents.IzumiSwimsuit,
//   AllStudents.IzumiNewYear,
//   AllStudents.Akari,
//   AllStudents.AkariNewYear,
//   AllStudents.Fuuka,
//   AllStudents.FuukaNewYear,
//   AllStudents.Juri,
//   AllStudents.JuriPartTimer,
//   AllStudents.Sena,
//   AllStudents.SenaCasual,
//   AllStudents.Kasumi,
//   AllStudents.Megu,
//   AllStudents.Kirara,
//   AllStudents.Rio,
//   AllStudents.Yuuka,
//   AllStudents.YuukaGym,
//   AllStudents.YuukaPajamas,
//   AllStudents.Noa,
//   AllStudents.NoaPajamas,
//   AllStudents.Koyuki,
//   AllStudents.Chihiro,
//   AllStudents.Maki,
//   AllStudents.MakiCamp,
//   AllStudents.Hare,
//   AllStudents.HareCamp,
//   AllStudents.Kotama,
//   AllStudents.KotamaCamp,
//   AllStudents.Neru,
//   AllStudents.NeruBunnyGirl,
//   AllStudents.NeruSchoolGirl,
//   AllStudents.Karin,
//   AllStudents.KarinBunnyGirl,
//   AllStudents.KarinSchoolgirl,
//   AllStudents.Akane,
//   AllStudents.AkaneBunnyGirl,
//   AllStudents.Asuna,
//   AllStudents.AsunaBunnyGirl,
//   AllStudents.AsunaSchoolgirl,
//   AllStudents.Toki,
//   AllStudents.TokiBunnyGirl,
//   AllStudents.Hibiki,
//   AllStudents.HibikiCheerleader,
//   AllStudents.Utaha,
//   AllStudents.UtahaCheerleader,
//   AllStudents.Kotori,
//   AllStudents.KotoriCheerleader,
//   AllStudents.Sumire,
//   AllStudents.SumirePartTimer,
//   AllStudents.Rei,
//   AllStudents.Himari,
//   AllStudents.Elmi,
//   AllStudents.ElmiSwimsuit,
//   AllStudents.Alice,
//   AllStudents.AliceMaid,
//   AllStudents.Yuzu,
//   AllStudents.YuzuMaid,
//   AllStudents.Midori,
//   AllStudents.MidoriMaid,
//   AllStudents.Momoi,
//   AllStudents.MomoiMaid,
//   AllStudents.Nagisa,
//   AllStudents.Seia,
//   AllStudents.Mika,
//   AllStudents.Kazusa,
//   AllStudents.KazusaBand,
//   AllStudents.Natsu,
//   AllStudents.NatsuBand,
//   AllStudents.Airi,
//   AllStudents.AiriBand,
//   AllStudents.Yoshimi,
//   AllStudents.YoshimiBand,
//   AllStudents.Suzumi,
//   AllStudents.Reisa,
//   AllStudents.Tsurugi,
//   AllStudents.TsurugiSwimsuit,
//   AllStudents.Hasumi,
//   AllStudents.HasumiGym,
//   AllStudents.Mashiro,
//   AllStudents.MashiroSwimsuit,
//   AllStudents.Ichika,
//   AllStudents.Mine,
//   AllStudents.MineIdol,
//   AllStudents.Hanae,
//   AllStudents.HanaeChristmas,
//   AllStudents.Serina,
//   AllStudents.SerinaChristmas,
//   AllStudents.Hifumi,
//   AllStudents.HifumiSwimsuit,
//   AllStudents.Azusa,
//   AllStudents.AzusaSwimsuit,
//   AllStudents.Koharu,
//   AllStudents.KoharuSwimsuit,
//   AllStudents.Hanako,
//   AllStudents.HanakoSwimsuit,
//   AllStudents.Ui,
//   AllStudents.UiSwimsuit,
//   AllStudents.Shimiko,
//   AllStudents.Sakurako,
//   AllStudents.SakurakoIdol,
//   AllStudents.Mari,
//   AllStudents.MariGym,
//   AllStudents.MariIdol,
//   AllStudents.Hinata,
//   AllStudents.HinataSwimsuit,
//   AllStudents.Niya,
//   AllStudents.Kaho,
//   AllStudents.Chise,
//   AllStudents.ChiseSwimsuit,
//   AllStudents.Tsubaki,
//   AllStudents.TsubakiGuide,
//   AllStudents.Mimori,
//   AllStudents.MimoriSwimsuit,
//   AllStudents.Kaede,
//   AllStudents.Nagusa,
//   AllStudents.Renge,
//   AllStudents.RengeSwimsuit,
//   AllStudents.Kikyou,
//   AllStudents.KikyouSwimsuit,
//   AllStudents.Yukari,
//   AllStudents.YukariSwimsuit,
//   AllStudents.Shizuko,
//   AllStudents.ShizukoSwimsuit,
//   AllStudents.Pina,
//   AllStudents.PinaGuide,
//   AllStudents.Umika,
//   AllStudents.Michiru,
//   AllStudents.Izuna,
//   AllStudents.IzunaSwimsuit,
//   AllStudents.Tsukuyo,
//   AllStudents.Wakamo,
//   AllStudents.WakamoSwimsuit,
//   AllStudents.Kisaki,
//   AllStudents.Mina,
//   AllStudents.Shun,
//   AllStudents.ShunYoung,
//   AllStudents.Kokona,
//   AllStudents.Saya,
//   AllStudents.SayaCasual,
//   AllStudents.Rumi,
//   AllStudents.Reijo,
//   AllStudents.Cherino,
//   AllStudents.CherinoHotSpring,
//   AllStudents.Tomoe,
//   AllStudents.TomoeQipao,
//   AllStudents.Marina,
//   AllStudents.MarinaQipao,
//   AllStudents.Minori,
//   AllStudents.Meru,
//   AllStudents.Momiji,
//   AllStudents.Nodoka,
//   AllStudents.NodokaHotSpring,
//   AllStudents.Shigure,
//   AllStudents.ShigureHotSpring,
//   AllStudents.Kanna,
//   AllStudents.KannaSwimsuit,
//   AllStudents.Kirino,
//   AllStudents.KirinoSwimsuit,
//   AllStudents.Fubuki,
//   AllStudents.FubukiSwimsuit,
//   AllStudents.Miyako,
//   AllStudents.MiyakoSwimsuit,
//   AllStudents.Saki,
//   AllStudents.SakiSwimsuit,
//   AllStudents.Miyu,
//   AllStudents.MiyuSwimsuit,
//   AllStudents.Moe,
//   AllStudents.MoeSwimsuit,
//   AllStudents.Saori,
//   AllStudents.SaoriSwimsuit,
//   AllStudents.SaoriDress,
//   AllStudents.ImashinoMisaki,
//   AllStudents.Hiyori,
//   AllStudents.HiyoriSwimsuit,
//   AllStudents.Atsoko,
//   AllStudents.AtsokoSwimsuit,
//   AllStudents.Hikari,
//   AllStudents.Nozomi,
//   AllStudents.Aoba,
//   AllStudents.Miku,
//   AllStudents.Mikoto,
//   AllStudents.Misaki,
//   AllStudents.Ruiko,
// ];

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
              <Student
                src="/Blue-Archive/characters/Hoshino_Icon.png"
                href="/hoshino"
                name="Hoshino"
                altName=""
                role="Striker"
                classSrc="Blue-Archive/icons/Tank.png"
                classSrc2=""
                position="FRONT"
                cover="Blue-Archive/icons/Cross_1.png"
                atk="Penetration"
                def="Heavy Armor"
                numStars={3}
                bg={1}
              />
              <Student
                src="/Blue-Archive/characters/Hoshino_Swimsuit_Icon.png"
                href="/hoshino_swimsuit"
                name="Hoshino"
                altName="(Swimsuit)"
                role="Striker"
                classSrc="Blue-Archive/icons/Supporter.png"
                classSrc2=""
                position="FRONT"
                cover="Blue-Archive/icons/Cross_1.png"
                atk="Explosion"
                def="Special Armor"
                numStars={3}
                bg={1}
              />
              <Student
                src="/Blue-Archive/characters/Hoshino_Armed_Icon.png"
                href="/hoshino_armed"
                name="Hoshino"
                altName="(Armed)"
                role="Striker"
                classSrc="Blue-Archive/icons/Tank.png"
                classSrc2="Blue-Archive/icons/Attacker (1).png"
                position="FRONT"
                cover="Blue-Archive/icons/Cross_1.png"
                atk="Mystic"
                def="Heavy Armor"
                numStars={3}
                bg={1}
              />
              <Student
                src="/Blue-Archive/characters/Shiroko_Icon.png"
                href="/shiroko"
                name="Shiroko"
                altName=""
                role="Striker"
                classSrc="Blue-Archive/icons/Attacker (1).png"
                classSrc2=""
                position="MIDDLE"
                cover="Blue-Archive/icons/Cover.png"
                atk="Explosion"
                def="Light Armor"
                numStars={3}
                bg={1}
              />
              <Student
                src="/Blue-Archive/characters/Shiroko_Riding_Icon.png"
                href="/shiroko_riding"
                name="Hoshino"
                altName="(Riding)"
                role="Striker"
                classSrc="Blue-Archive/icons/Attacker (1).png"
                classSrc2=""
                position="MIDDLE"
                cover="Blue-Archive/icons/Cover.png"
                atk="Mystic"
                def="Heavy Armor"
                numStars={3}
                bg={1}
              />
              <Student
                src="/Blue-Archive/characters/Shiroko_Swimsuit_Icon.png"
                href="/shiroko_swimsuit"
                name="Shiroko"
                altName="(Swimsuit)"
                role="Special"
                classSrc="Blue-Archive/icons/Attacker (1).png"
                classSrc2=""
                position="BACK"
                cover="Blue-Archive/icons/Cross_1.png"
                atk="Mystic"
                def="Light Armor"
                numStars={3}
                bg={1}
              />
              <Student
                src="/Blue-Archive/characters/Shiroko_Terror_Icon.png"
                href="/shiroko_terror"
                name="Shiroko"
                altName="(Terror)"
                role="Striker"
                classSrc="Blue-Archive/icons/Attacker (1).png"
                classSrc2=""
                position="MIDDLE"
                cover="Blue-Archive/icons/Cross_1.png"
                atk="Mystic"
                def="Special Armor"
                numStars={3}
                bg={1}
              />
              <Student
                src="/Blue-Archive/characters/Serika_Icon.png"
                href="/serika"
                name="Serika"
                altName=""
                role="Striker"
                classSrc="Blue-Archive/icons/Attacker (1).png"
                classSrc2=""
                position="MIDDLE"
                cover="Blue-Archive/icons/Cover.png"
                atk="Explosion"
                def="Light Armor"
                numStars={2}
                bg={1}
              />
              <Student
                src="/Blue-Archive/characters/Serika_New_Year_Icon.png"
                href="/serika_newyear"
                name="Serika"
                altName="(New Year)"
                role="Special"
                classSrc="Blue-Archive/icons/Supporter.png"
                classSrc2=""
                position="BACK"
                cover="Blue-Archive/icons/Cross_1.png"
                atk="Penetration"
                def="Special Armor"
                numStars={3}
                bg={1}
              />
              <Student
                src="/Blue-Archive/characters/Serika_Swimsuit_Icon.png"
                href="/serika_swimsuit"
                name="Serika"
                altName="(Swimsuit)"
                role="Special"
                classSrc="Blue-Archive/icons/Attacker (1).png"
                classSrc2=""
                position="BACK"
                cover="Blue-Archive/icons/Cross_1.png"
                atk="Mystic"
                def="Heavy Armor"
                numStars={3}
                bg={1}
              />
              <Student
                src="/Blue-Archive/characters/Nonomi_Icon.png"
                href="/nonomi"
                name="Nonomi"
                altName=""
                role="Striker"
                classSrc="Blue-Archive/icons/Attacker (1).png"
                classSrc2=""
                position="BACK"
                cover="Blue-Archive/icons/Cross_1.png"
                atk="Penetration"
                def="Light Armor"
                numStars={2}
                bg={1}
              />
              <Student
                src="/Blue-Archive/characters/Nonomi_Swimsuit_Icon.png"
                href="/nonomi_swimsuit"
                name="Nonomi"
                altName="(Swimsuit)"
                role="Striker"
                classSrc="Blue-Archive/icons/Attacker (1).png"
                classSrc2=""
                position="BACK"
                cover="Blue-Archive/icons/Cross_1.png"
                atk="Explosion"
                def="Special Armor"
                numStars={3}
                bg={1}
              />
              <Student
                src="/Blue-Archive/characters/Ayane_Icon.png"
                href="/ayane"
                name="Ayane"
                altName=""
                role="Special"
                classSrc="Blue-Archive/icons/Healer (1).png"
                classSrc2=""
                position="BACK"
                cover="Blue-Archive/icons/Cross_1.png"
                atk="Penetration"
                def="Light Armor"
                numStars={2}
                bg={1}
              />
              <Student
                src="/Blue-Archive/characters/Ayane_Swimsuit_Icon.png"
                href="/ayane"
                name="Ayane"
                altName="(Swimsuit)"
                role="Special"
                classSrc="Blue-Archive/icons/Tactical.png"
                classSrc2=""
                position="BACK"
                cover="Blue-Archive/icons/Cross_1.png"
                atk="Penetration"
                def="Light Armor"
                numStars={1}
                bg={1}
              />
              <Student
                src="/Blue-Archive/characters/Makoto_Icon.png"
                href="/makoto"
                name="Makoto"
                altName=""
                role="Special"
                classSrc="Blue-Archive/icons/Attacker (1).png"
                classSrc2=""
                position="BACK"
                cover="Blue-Archive/icons/Cross_1.png"
                atk="Penetration"
                def="Special Armor"
                numStars={3}
                bg={2}
              />
              <Student
                src="/Blue-Archive/characters/Satsuki_Icon.png"
                href="/satsuki"
                name="Satsuki"
                altName=""
                role="Special"
                classSrc="Blue-Archive/icons/Attacker (1).png"
                classSrc2=""
                position="BACK"
                cover="Blue-Archive/icons/Cross_1.png"
                atk="Explosion"
                def="Heavy Armor"
                numStars={3}
                bg={2}
              />
              <Student
                src="/Blue-Archive/characters/Chiaki_Icon.png"
                href="/chiaki"
                name="Chiaki"
                altName=""
                role="Striker"
                classSrc="Blue-Archive/icons/Attacker (1).png"
                classSrc2=""
                position="MIDDLE"
                cover="Blue-Archive/icons/Cover.png"
                atk="Sonic"
                def="Mystic Armor"
                numStars={3}
                bg={2}
              />
              <Student
                src="/Blue-Archive/characters/Iroha_Icon.png"
                href="/iroha"
                name="Iroha"
                altName=""
                role="Special"
                classSrc="Blue-Archive/icons/Tactical.png"
                classSrc2=""
                position="BACK"
                cover="Blue-Archive/icons/Cross_1.png"
                atk="Mystic"
                def="Heavy Armor"
                numStars={3}
                bg={2}
              />

              {/* {studentComponents.map((StudentComponent, index) => (
                <StudentComponent key={index} />
              ))} */}
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
