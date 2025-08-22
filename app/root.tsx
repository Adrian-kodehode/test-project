import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { useLocation } from "react-router-dom";

import "./tailwind.css";
import ChatCard from "./components/ChatCard";
import Buttons from "./components/Buttons";
import Contributors from "./components/Contributors";
import List from "./components/List";
import NewHeader from "./components/NewHeader";
import Footer from "./components/Footer";
// import PlaybackBar from "./components/PlaybackBar";
import CustomCursor from "./components/CustomCursor";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Choose favicon based on route
  // Map routes to favicons for easier extension
  const faviconMap: Record<string, string> = {
    "/blue_archive": "Blue-Archive/MP_BA.png",
  };
  const defaultFavicon = "To Love Ru/toloveruDarkness.png";
  const favicon = faviconMap[location.pathname] || defaultFavicon;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} type="image/png" />
        <Meta />
        <Links />
      </head>
      <body>
        {location.pathname !== "/test" &&
          location.pathname !== "/home" &&
          location.pathname !== "/yami" &&
          location.pathname !== "/momo" &&
          location.pathname !== "/yui" &&
          location.pathname !== "/mea" &&
          location.pathname !== "/mikan" &&
          location.pathname !== "/kyouko" &&
          location.pathname !== "/haruna" &&
          location.pathname !== "/rito" &&
          location.pathname !== "/nana" &&
          location.pathname !== "/lala" &&
          location.pathname !== "/rin" &&
          location.pathname !== "/run" &&
          location.pathname !== "/saki" &&
          location.pathname !== "/tearju" &&
          location.pathname !== "/to_love-ru_manga" &&
          location.pathname !== "/to_love-ru_darkness_manga" &&
          location.pathname !== "/to_love-ru_anime" &&
          location.pathname !== "/to_love-ru_darkness_anime" &&
          location.pathname !== "/motto_to_love-ru_anime" &&
          location.pathname !== "/to_love-ru_darkness2ndanime" &&
          location.pathname !== "/to_love-ru_darkness_battle_ecstasy_game" &&
          location.pathname !== "/to_love-ru_darkness_ture_princess_game" &&
          location.pathname !== "/to_love-ru_darkness_gravure_chances_game" &&
          location.pathname !== "/planets_and_locations" &&
          location.pathname !== "/to_love-ru_music" &&
          location.pathname !== "/deviluke" &&
          location.pathname !== "/sianan_town" &&
          location.pathname !== "/sainan_high" &&
          location.pathname !== "/memorze" &&
          location.pathname !== "/artbook" &&
          location.pathname !== "/toloverumanga" &&
          location.pathname !== "/anime" &&
          location.pathname !== "/games" &&
          location.pathname !== "/plants" &&
          location.pathname !== "/plot" &&
          location.pathname !== "/relationships" &&
          location.pathname !== "/lala_plot" &&
          location.pathname !== "/lala_inventions" &&
          location.pathname !== "/lala_relationships" &&
          location.pathname !== "/yami_relationships" &&
          location.pathname !== "/yami_plot" &&
          location.pathname !== "/nana_plot" &&
          location.pathname !== "/nana_relationships" &&
          location.pathname !== "/nana_animals" &&
          location.pathname !== "/yui_plot" &&
          location.pathname !== "/yui_relationships" &&
          location.pathname !== "/run_relationships" &&
          location.pathname !== "/haruna_relationships" &&
          location.pathname !== "/haruna_plot" &&
          location.pathname !== "/mikan_relationships" &&
          location.pathname !== "/rito_relationships" &&
          location.pathname !== "/rito_plot" &&
          location.pathname !== "/saki_plot" &&
          location.pathname !== "/saki_relationships" &&
          location.pathname !== "/mea_relationships" &&
          location.pathname !== "/mea_plot" &&
          location.pathname !== "/tearju_plot" &&
          location.pathname !== "/tearju_relationships" &&
          location.pathname !== "/rin_plot" &&
          location.pathname !== "/rin_relationships" &&
          location.pathname !== "/nemesis_plot" &&
          location.pathname !== "/nemesis_relationships" &&
          location.pathname !== "/oshizu" &&
          location.pathname !== "/oshizu_plot" &&
          location.pathname !== "/oshizu_relationships" &&
          location.pathname !== "/mikado" &&
          location.pathname !== "/mikado_relationships" &&
          location.pathname !== "/sephie" &&
          location.pathname !== "/blue_archive" &&
          location.pathname !== "/live" &&
          location.pathname !== "/bluearchivehome" &&
          location.pathname !== "/students" &&
          location.pathname !== "/hikari" &&
          location.pathname !== "/nozomi" &&
          location.pathname !== "/toki_bunny" &&
          location.pathname !== "/hoshino" &&
          location.pathname !== "/hoshino_swimsuit" &&
          location.pathname !== "/hina_swimsuit" &&
          location.pathname !== "/karin_bunny" &&
          location.pathname !== "/akane_bunny" &&
          location.pathname !== "/asuna_bunny" &&
          location.pathname !== "/shiroko_swimsuit" &&
          location.pathname !== "/mutsuki_new_year" &&
          location.pathname !== "/alice" &&
          location.pathname !== "/kikyou_swimsuit" &&
          location.pathname !== "/asuna_schoolgirl" &&
          location.pathname !== "/seia" &&
          location.pathname !== "/seia_swimsuit" &&
          location.pathname !== "/hanako_swimsuit" &&
          location.pathname !== "/miyu" &&
          location.pathname !== "/miyu_swimsuit" &&
          location.pathname !== "/neru_bunny" &&
          location.pathname !== "/hasumi_swimsuit" &&
          location.pathname !== "/moe" &&
          location.pathname !== "/moe_swimsuit" &&
          location.pathname !== "/nagisa_swimsuit" &&
          location.pathname !== "/mika_swimsuit" &&
          location.pathname !== "/alice_maid" &&
          location.pathname !== "/hibiki_cheerleader" &&
          location.pathname !== "/kirara" &&
          location.pathname !== "/hoshino_armed" &&
          location.pathname !== "/koharu" &&
          location.pathname !== "/koharu_swimsuit" &&
          location.pathname !== "/shiroko" &&
          location.pathname !== "/shiroko_riding" &&
          location.pathname !== "/bb_summer" &&
          location.pathname !== "/servants" &&
          location.pathname !== "/jeanne_alter" &&
          location.pathname !== "/fate_grand_order" &&
          location.pathname !== "/cait_cu_cerpriestess" &&
          location.pathname !== "/bb_dubai" &&
          location.pathname !== "/saber" &&
          location.pathname !== "/archer" &&
          location.pathname !== "/lancer" &&
          location.pathname !== "/rider" &&
          location.pathname !== "/caster" &&
          location.pathname !== "/assassin" &&
          location.pathname !== "/berserker" &&
          location.pathname !== "/ruler" &&
          location.pathname !== "/avenger" &&
          location.pathname !== "/moon_cancer" &&
          location.pathname !== "/alter_ego" &&
          location.pathname !== "/foreigner" &&
          location.pathname !== "/pretender" &&
          location.pathname !== "/shielder" &&
          location.pathname !== "/artoria_pendragon" &&
          location.pathname !== "/artoria_pendragon_alter" &&
          location.pathname !== "/passionlip_saber" &&
          location.pathname !== "/nero_claudius" &&
          location.pathname !== "/artoria_pendragon_archer" &&
          location.pathname !== "/ishtar" &&
          location.pathname !== "/jeanne_d'arc_archer" &&
          location.pathname !== "/larva_tiamat_archer" &&
          location.pathname !== "/ereshkigal" &&
          location.pathname !== "/artoria_pendragon_rider_alter" &&
          location.pathname !== "/nero_claudius_caster" &&
          location.pathname !== "/artoria_caster" &&
          location.pathname !== "/aesc_the_savior" &&
          location.pathname !== "/morgan" &&
          location.pathname !== "/artoria_caster_berserker" &&
          location.pathname !== "/jeanne_d'arc_berserker_alter" &&
          location.pathname !== "/jeanne_d'arc" &&
          location.pathname !== "/jeanne_d'arc_alter" &&
          location.pathname !== "/space_ishtar" &&
          location.pathname !== "/xu_fu_avenger" &&
          location.pathname !== "/mysterious_executor_c_i_e_l" &&
          location.pathname !== "/meltryllis" &&
          location.pathname !== "/mysterious_alter_ego" &&
          location.pathname !== "/larva_tiamat" &&
          location.pathname !== "/beast" && <NewHeader />}
        <div>{children}</div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();

  // Only show the custom cursor if not on /home
  const showCustomCursor = location.pathname !== "/home";

  return (
    <div className={showCustomCursor ? "cursor-none" : ""}>
      {showCustomCursor && <CustomCursor gifSrc="guraDance-4x.gif" size={48} />}
      <Outlet />
      {location.pathname !== "/music" &&
        location.pathname !== "/home" &&
        location.pathname !== "/test" &&
        location.pathname !== "/momo" &&
        location.pathname !== "/nana" &&
        location.pathname !== "/lala" &&
        location.pathname !== "/rito" &&
        location.pathname !== "/yami" &&
        location.pathname !== "/mea" &&
        location.pathname !== "/kyouko" &&
        location.pathname !== "/yui" &&
        location.pathname !== "/mikan" &&
        location.pathname !== "/haruna" &&
        location.pathname !== "/to_love-ru_manga" &&
        location.pathname !== "/to_love-ru_darkness_manga" &&
        location.pathname !== "/to_love-ru_anime" &&
        location.pathname !== "/to_love-ru_darkness_anime" &&
        location.pathname !== "/motto_to_love-ru_anime" &&
        location.pathname !== "/to_love-ru_darkness2ndanime" &&
        location.pathname !== "/to_love-ru_darkness_battle_ecstasy_game" &&
        location.pathname !== "/to_love-ru_darkness_ture_princess_game" &&
        location.pathname !== "/to_love-ru_darkness_gravure_chances_game" &&
        location.pathname !== "/planets_and_locations" &&
        location.pathname !== "/to_love-ru_music" &&
        location.pathname !== "/deviluke" &&
        location.pathname !== "/sianan_town" &&
        location.pathname !== "/sainan_high" &&
        location.pathname !== "/memorze" &&
        location.pathname !== "/artbook" &&
        location.pathname !== "/rin" &&
        location.pathname !== "/run" &&
        location.pathname !== "/saki" &&
        location.pathname !== "/tearju" &&
        location.pathname !== "/nemesis" &&
        location.pathname !== "/toloverumanga" &&
        location.pathname !== "/anime" &&
        location.pathname !== "/games" &&
        location.pathname !== "/plants" &&
        location.pathname !== "/plot" &&
        location.pathname !== "/lala_plot" &&
        location.pathname !== "/relationships" &&
        location.pathname !== "/lala_inventions" &&
        location.pathname !== "/lala_relationships" &&
        location.pathname !== "/yami_relationships" &&
        location.pathname !== "/yami_plot" &&
        location.pathname !== "/nana_plot" &&
        location.pathname !== "/nana_animals" &&
        location.pathname !== "/nana_relationships" &&
        location.pathname !== "/yui_plot" &&
        location.pathname !== "/yui_relationships" &&
        location.pathname !== "/run_relationships" &&
        location.pathname !== "/haruna_plot" &&
        location.pathname !== "/haruna_relationships" &&
        location.pathname !== "/mikan_relationships" &&
        location.pathname !== "/rito_relationships" &&
        location.pathname !== "/rito_plot" &&
        location.pathname !== "/saki_plot" &&
        location.pathname !== "/saki_relationships" &&
        location.pathname !== "/mea_relationships" &&
        location.pathname !== "/mea_plot" &&
        location.pathname !== "/tearju_plot" &&
        location.pathname !== "/tearju_relationships" &&
        location.pathname !== "/rin_plot" &&
        location.pathname !== "/rin_relationships" &&
        location.pathname !== "/nemesis_plot" &&
        location.pathname !== "/nemesis_relationships" &&
        location.pathname !== "/oshizu" &&
        location.pathname !== "/oshizu_plot" &&
        location.pathname !== "/oshizu_relationships" &&
        location.pathname !== "/mikado" &&
        location.pathname !== "/mikado_relationships" &&
        location.pathname !== "/sephie" &&
        location.pathname !== "/blue_archive" &&
        location.pathname !== "/bluearchivehome" &&
        location.pathname !== "/live" &&
        location.pathname !== "/students" &&
        location.pathname !== "/hikari" &&
        location.pathname !== "/nozomi" &&
        location.pathname !== "/toki_bunny" &&
        location.pathname !== "/hoshino" &&
        location.pathname !== "/hoshino_swimsuit" &&
        location.pathname !== "/hina_swimsuit" &&
        location.pathname !== "/karin_bunny" &&
        location.pathname !== "/akane_bunny" &&
        location.pathname !== "/asuna_bunny" &&
        location.pathname !== "/shiroko_swimsuit" &&
        location.pathname !== "/mutsuki_new_year" &&
        location.pathname !== "/alice" &&
        location.pathname !== "/kikyou_swimsuit" &&
        location.pathname !== "/asuna_schoolgirl" &&
        location.pathname !== "/seia" &&
        location.pathname !== "/seia_swimsuit" &&
        location.pathname !== "/hanako_swimsuit" &&
        location.pathname !== "/miyu" &&
        location.pathname !== "/miyu_swimsuit" &&
        location.pathname !== "/neru_bunny" &&
        location.pathname !== "/hasumi_swimsuit" &&
        location.pathname !== "/moe" &&
        location.pathname !== "/moe_swimsuit" &&
        location.pathname !== "/nagisa_swimsuit" &&
        location.pathname !== "/mika_swimsuit" &&
        location.pathname !== "/alice_maid" &&
        location.pathname !== "/hibiki_cheerleader" &&
        location.pathname !== "/kirara" &&
        location.pathname !== "/hoshino_armed" &&
        location.pathname !== "/koharu" &&
        location.pathname !== "/koharu_swimsuit" &&
        location.pathname !== "/shiroko" &&
        location.pathname !== "/shiroko_riding" &&
        location.pathname !== "/bb_summer" &&
        location.pathname !== "/servants" &&
        location.pathname !== "/jeanne_alter" &&
        location.pathname !== "/fate_grand_order" &&
        location.pathname !== "/cait_cu_cerpriestess" &&
        location.pathname !== "/bb_dubai" &&
        location.pathname !== "/saber" &&
        location.pathname !== "/archer" &&
        location.pathname !== "/lancer" &&
        location.pathname !== "/rider" &&
        location.pathname !== "/caster" &&
        location.pathname !== "/assassin" &&
        location.pathname !== "/berserker" &&
        location.pathname !== "/ruler" &&
        location.pathname !== "/avenger" &&
        location.pathname !== "/moon_cancer" &&
        location.pathname !== "/alter_ego" &&
        location.pathname !== "/foreigner" &&
        location.pathname !== "/pretender" &&
        location.pathname !== "/shielder" &&
        location.pathname !== "/artoria_pendragon" &&
        location.pathname !== "/artoria_pendragon_alter" &&
        location.pathname !== "/passionlip_saber" &&
        location.pathname !== "/nero_claudius" &&
        location.pathname !== "/artoria_pendragon_archer" &&
        location.pathname !== "/ishtar" &&
        location.pathname !== "/jeanne_d'arc_archer" &&
        location.pathname !== "/larva_tiamat_archer" &&
        location.pathname !== "/ereshkigal" &&
        location.pathname !== "/artoria_pendragon_rider_alter" &&
        location.pathname !== "/nero_claudius_caster" &&
        location.pathname !== "/artoria_caster" &&
        location.pathname !== "/aesc_the_savior" &&
        location.pathname !== "/morgan" &&
        location.pathname !== "/artoria_caster_berserker" &&
        location.pathname !== "/jeanne_d'arc_berserker_alter" &&
        location.pathname !== "/jeanne_d'arc" &&
        location.pathname !== "/jeanne_d'arc_alter" &&
        location.pathname !== "/space_ishtar" &&
        location.pathname !== "/xu_fu_avenger" &&
        location.pathname !== "/mysterious_executor_c_i_e_l" &&
        location.pathname !== "/meltryllis" &&
        location.pathname !== "/mysterious_alter_ego" &&
        location.pathname !== "/larva_tiamat" &&
        location.pathname !== "/beast" && <Footer />}
    </div>
  );
}
