import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <br />
        <span className="text-purple"> Satisfied Clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 ">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <Image
                src={img}
                alt={name}
                className="md:w-10 w-5"
                width={43}
                height={29}
                layout="responsive"
              />

              <Image
                src={nameImg}
                alt={name}
                className="md:w-24 w-20"
                width={131}
                height={28}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
