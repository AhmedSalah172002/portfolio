"use client";

import Lottie from "lottie-react";
interface AnimationLottieProps {
  animationPath: any; // You can refine this type based on your animation data
  width: number | string; // Define width as a number or string
}

const AnimationLottie= ({ animationPath, width }:{animationPath:any, width:string}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width,
      margin:'auto'
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;