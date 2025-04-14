import { current } from "@reduxjs/toolkit";
import { features } from "node:process";

export default function Navigation() {
  return [
    { name: "Home", href: "/home", current: true },
    { name: "Team", href: "/team", current: true },
    { name: "Projects", href: "/projects", current: true },
    { name: "Reports", href: "/reports", current: true },
    { name: "Shop", href: "/shop", current: true },
    { name: "Music", href: "/music", current: true },
    { name: "Collection", href: "/image", current: true },
    { name: "Stocks", href: "/stocks", current: true },
    { name: "test", href: "/test", current: true },
    { name: "", href: "/profile", current: true },
    { name: "", href: "/shoppingcart", current: true },
    { name: "", href: "/createaccount", current: true },
    { name: "", href: "/collection", current: true },
    { name: "", href: "/ProductOverviews", current: true },
    { name: "", href: "/shoes", current: true },
  ];
}
export const navigation = {
  categories: [
    {
      id: "manga",
      name: "Manga",
      featured: [
        {
          name: "New Arrivals",
          href: "/shop",
          imageSrc: "My Dressup Darling/darling13.jpg",
          imageAlt: "",
        },
        {
          name: "Popular",
          href: "/shop",
          imageSrc: "Jujutsu Kaisen/jjken26.jpg",
          imageAlt: "",
        },
        {
          name: "Top Rated",
          href: "/shop",
          imageSrc: "One Piece/onepiecevol104.jpg",
          imageAlt: "",
        },
      ],
      sections: [
        {
          id: "series",
          name: "Series",
          items: [
            { name: "Chainsaw Man", href: "/Chainsaw Man" },
            { name: "Jujutsu kaisen", href: "/Jujutsu Kaisen" },
            { name: "One Piece", href: "One Piece" },
            { name: "My Dressup Darling", href: "My Dressup Darling" },
            { name: "Oshi No Ko", href: "/Oshi No Ko" },
            {
              name: "JoJo's Bizarre Adventure",
              href: "JoJo's Bizarre Adventure",
            },
            { name: "Demon Slayer", href: "/Demon Slayer" },
          ],
        },
      ],
    },
    {
      id: "clothing",
      name: "Clothing",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc: "NOAS2436CY_death-note-misa-amane-gamer-girl-t-shirt_1.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Popular",
          href: "#",
          imageSrc: "18399239_40770228_1000.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Shoes", href: "/shoes" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "/ProductOverviews" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Nike", href: "#" },
            { name: "Crunchyroll", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};
