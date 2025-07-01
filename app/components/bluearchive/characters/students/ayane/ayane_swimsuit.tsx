export const AyaneSwimsuit = () => {
  return (
    <tr className="bg-[#00bfff] border-b border-gray-700">
      <td className="py-2 px-2 flex items-center justify-center gap-2">
        <img
          src="/Blue-Archive/characters/Ayane_Swimsuit_Icon.png"
          alt=""
          className="w-40 h-30"
        />
        <span
          className="text-xl font-extrabold"
          style={{
            textShadow: "2px 2px 6px #000, 0 0 2px #000, 0 1px 0 #000",
          }}
        >
          Ayane <br /> (Swimsuit)
        </span>
      </td>
      <td className="py-2 px-6 bg-[#268ACB]">
        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-1">
            <img
              src="Blue-Archive/images/Star_Icon.png"
              alt=""
              className="w-6 h-6"
            />
          </div>
        </div>
      </td>
      <td className="py-2 px-3 text-xl font-extrabold text-black bg-[#2185f6]">
        Special
      </td>
      <td className="py-2 px-2">
        <span className="  flex items-center justify-center mx-auto">
          <img src="Blue-Archive/icons/Tactical.png" alt="" />
        </span>
      </td>
      <td className="py-2 px-2 text-xl font-extrabold text-black italic">
        BACK
      </td>
      <td className="py-2 px-2 text-2xl font-extrabold text-black">
        <img
          src="Blue-Archive/icons/Cross_1.png"
          alt=""
          className="w-14 h-14"
        />
      </td>
      <td className="py-2 px-2 text-black text-xl  font-extrabold bg-[#ffa500]">
        Penetration
      </td>
      <td className="py-2 px-2 text-black text-xl font-extrabold bg-[#ff0000]">
        Light Armor
      </td>
    </tr>
  );
};
