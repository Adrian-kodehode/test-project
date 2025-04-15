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
import PlaybackBar from "./components/PlaybackBar";

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
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NewHeader />
        <div className="pb-24">
          {" "}
          {/* Add padding at the bottom to account for the playback bar */}
          {children}
        </div>
        <PlaybackBar />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div>
      <Outlet />
      {location.pathname !== "/music" && location.pathname !== "/test" && <Footer />}
    </div>
  );
}
