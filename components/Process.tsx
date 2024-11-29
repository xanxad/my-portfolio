import React from "react";
import { Vortex } from "./ui/Vortex";

const Process = () => {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Crafting Your Digital Experience
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          I specialize in crafting dynamic and user-friendly web experiences
          using React and JavaScript. With Figma, I bring designs to life,
          ensuring seamless transitions from concept to code, delivering
          responsive and engaging interfaces.
        </p>
      </Vortex>
    </div>
  );
};

export default Process;
