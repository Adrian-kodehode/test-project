import React from "react";

interface Props {
  num: number;
}

export const Stars: React.FC<Props> = ({ num }) => {
  return (
    <>
      {num === 1 && <OneStar />}
      {num === 2 && <TwoStars />}
      {num === 3 && <ThreeStars />}
    </>
  );
};

const ThreeStars = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-1">
        <img
          src="Blue-Archive/images/Star_Icon.png"
          alt=""
          className="w-6 h-6"
        />{" "}
        <img
          src="Blue-Archive/images/Star_Icon.png"
          alt=""
          className="w-6 h-6"
        />
      </div>{" "}
      <img src="Blue-Archive/images/Star_Icon.png" alt="" className="w-6 h-6" />
    </div>
  );
};

const TwoStars = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-1">
        <img
          src="Blue-Archive/images/Star_Icon.png"
          alt=""
          className="w-6 h-6"
        />{" "}
        <img
          src="Blue-Archive/images/Star_Icon.png"
          alt=""
          className="w-6 h-6"
        />
      </div>{" "}
    </div>
  );
};

const OneStar = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-1">
        <img
          src="Blue-Archive/images/Star_Icon.png"
          alt=""
          className="w-6 h-6"
        />{" "}
      </div>{" "}
    </div>
  );
};
