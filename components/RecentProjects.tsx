import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of <br />
        <span className="text-purple"> recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="lg:min-h-[32.5rem] sm:h-[41rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            >
              <PinContainer title={project.link} href={project.link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13165d]">
                    <Image
                      src="/bg.png"
                      alt="pg-png"
                      width={552}
                      height={330}
                      layout="responsive"
                    />
                  </div>
                  <Image
                    src={project.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                    width={131}
                    height={28}
                    layout="responsive"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {project.title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {project.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {project.iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <Image
                          src={icon}
                          alt={icon}
                          className="p-2"
                          width={131}
                          height={28}
                          layout="responsive"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center">
                    <p className="flex  md:text-xs text-sm text-purple">
                      Checkout Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#cbacf9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;
