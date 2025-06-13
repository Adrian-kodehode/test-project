export const blueArchiveCharacterImages: { [name: string]: string } = {
  Arona: "/images/bluearchive/arona.png",
  Hoshino: "/images/bluearchive/hoshino.png",
  Shiroko: "/images/bluearchive/shiroko.png",
  Serika: "/images/bluearchive/serika.png",
  Nonomi: "/images/bluearchive/nonomi.png",
  Ayane: "/images/bluearchive/ayane.png",
  Haruna: "/images/bluearchive/haruna.png",
  Izuna: "/images/bluearchive/izuna.png",
  Hikari: "Blue-Archive/characters/Hikari_Icon.png",
  Nozomi: "Blue-Archive/characters/Nozomi_Icon.png",
};
// Updated character array with 'rarity' and other required properties
const blueArchiveCharacters = [
  {
    name: "Hoshino",
    student: "Hoshino",
    role: "Striker",
    school: "Abydos",
    rarity: 3,
    image: "/public/Blue-Archive/characters/Hoshino_Icon.png",
    position: "FRONT",
    cover: false,
    atkType: "Penetration",
    defType: "Heavy Armor",
  },
  {
    name: "Hikari",
    student: "Hikari",
    role: "Support",
    school: "Highlander",
    rarity: 3,
    image: "/public/Blue-Archive/characters/Hikari_Icon.png",
    position: "MIDDLE",
    cover: false,
    atkType: "Sonic",
    defType: "Light Armor",
  },
  {
    name: "Nozomi",
    student: "Nozomi",
    role: "Attacker",
    school: "Highlander",
    rarity: 3,
    image: "/public/Blue-Archive/characters/Nozomi_Icon.png",
    position: "MIDDLE",
    cover: false,
    atkType: "Sonic",
    defType: "Light Armor",
  },
  // ...other characters with the same structure
];

export default blueArchiveCharacters;
