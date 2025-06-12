import video1 from "/One Piece/Luffy Gear 5 Survives a Direct Impact ｜ One Piece.mp4";
import video2 from "/My Deer Friend Nokotan _ Opening Movie _ Shikairo Days _ It's Anime - It's Anime (1080p, h264, youtube).mp4";

export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-[#FF0080] to-[#7928CA] text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive develepoment tools. Get started today and turn your
        imagination into immersice reality!
      </p>
      <div className="flex justify-center my-10 gap-6">
        <a
          href="/shop"
          className="bg-gradient-to-r from-[#FF0080] to-[#7928CA] py-3 px-6 rounded-md text-white font-semibold shadow-lg hover:opacity-90 transition duration-300 flex items-center justify-center min-w-[120px] h-[56px] text-center"
        >
          Shop
        </a>
        <a href="/test" className="flex items-center justify-center min-w-[120px] h-[56px]">
          <img
        src="/To Love Ru/Site-logo (2).png"
        alt=""
        className="object-contain h-50 w-70"
          />
        </a>
        <a href="/bluearchivehome" className="flex items-center justify-center min-w-[120px] h-[56px]">
          <img
        src="Blue-Archive/bluearchivelogo.jpg"
        alt=""
        className="object-contain h-35 w-44"
          />
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[#FF0080]
        shadow-[#7928CA] mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[#FF0080]
        shadow-[#7928CA] mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
