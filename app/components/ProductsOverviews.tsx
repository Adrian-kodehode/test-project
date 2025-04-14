export default function ProductsOverviews({
  name,
  price,
}: {
  name: string;
  price: string;
}) {
return {
    name:
        name === "Travis Scott Jordans"
            ? "Travis Scott Jordans"
            : "Anime T-Shirts",
    price: name === "Travis Scott Jordans" ? "$3200" : "$149.99", // Ensure correct price for Travis Scott Jordans
    href: "/shop",
    breadcrumbs: [
        { id: 1, name: "", href: "/home" },
        { id: 2, name: "Clothing", href: "/shop" },
    ],
    images: [
        {
            src: "NOAS2436CY_death-note-misa-amane-gamer-girl-t-shirt_1.jpg",
            alt: "Death Note T-Shirt",
        },
        {
            src: "One Piece/OPAS3002CY_one-piece-luffy-scattered-devil-fruit-ss-t-shirt_1.jpg",
            alt: "One Piece T-Shirt",
        },
        {
            src: "japanese-cartoon-shirt_1.jpg",
            alt: "Japanese T-Shirt",
        },
        {
            src: "c155b477-05e8-41d9-b237-0b65e179.jpg",
            alt: " T-Shirt",
        },
        {
            src: "dm7866-001.jpg",
            alt: "Travis Scott Air Jordan 1 Low OG SP",
        },
        {
            src: "dm7866-162.jpg",
            alt: "Air Jordan 1 Low SP OG «Travis Scott Reverse Mocha»",
        },
        {
            src: "NikeAirJordanJumpmanJackTRTravis.jpg",
            alt: "Nike Air Jordan Jumpman Jack TR Travis Scott Dark Mocha",
        },
        {
            src: "1.jpg",
            alt: "Travis Scott x Jordan 1 Low OG SP 'Velvet Brown'",
        },
    ],
    colors: [
        { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
        { name: "Black", class: "bg-black", selectedClass: "ring-gray-900" },
        { name: "Gray", class: "bg-gray-900", selectedClass: "ring-gray-400" },
    ],
    sizes: [
        { name: "XXS", inStock: false },
        { name: "XS", inStock: true },
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: true },
        { name: "2XL", inStock: true },
        { name: "3XL", inStock: true },
    ],
    description:
        name === "Travis Scott Jordans"
            ? "The Travis Scott Jordans are a premium collaboration between Nike and Travis Scott, featuring a unique design with high-quality materials. These sneakers are a must-have for collectors and sneaker enthusiasts, offering a blend of style, comfort, and exclusivity."
            : "Disse unike t-skjortene kombinerer japansk og koreansk streetwear med levende anime-estetikk, perfekt for fans av moderne popkultur og alternativ mote. Hver t-skjorte har detaljerte, iøynefallende illustrasjoner inspirert av animefigurer, cyberpunk, og kawaii-stil – fra neonfargede karakterer til mørkere, gotisk-inspirerte design. Trykkene er fylt med personlighet og uttrykk, ofte kombinert med japanske eller koreanske tegn som gir et autentisk og kult preg. Passformen er avslappet, med mykt bomullsmateriale som gir både komfort og stil.",
    highlights: [
        "100% Cotton",
        "Machine Washable",
        "Comfortable Fit",
        "Available in Multiple Colors",
    ],
    details:
        "This is a detailed description of the product. It includes information about the materials used, care instructions, and any other relevant details.",
};
}
