import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Excited to <span className="text-purple">collaborate</span> and{" "}
          <span className="text-purple">build</span> impactful projects
          together?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today, and let&apos;s chat about our ideas.
        </p>
        <a href="mailto:mehrshad.farahbakhsh@gmail.com">
          <MagicButton
            title="Get in Touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Mehrshad
        </p>
        <div className="flex items-center md:gap-3 gap-6 max-sm:mt-5">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.link} target="_blank">
                <img
                  src={profile.img}
                  alt={profile.id.toString()}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
