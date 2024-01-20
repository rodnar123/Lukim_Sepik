import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className=" max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className=" relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className=" absolute left-[-5px] top-[-30px] lg: w-[50px]"
        />
        <h1 className=" bold-52 lg:bold-88 text-gray-50 hover:text-gray-10 ease-in-out duration-1000">
          Em peles tasol{" "}
        </h1>

        <div className=" relative flex flex-1 items-start ">
          <div className=" relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-gray-700 px-7 py-8">
            <div className=" flex flex-col">
              <div className="flexBetween">
                <p className=" regular-16 text-gray-20">Capital</p>
                <Image src="/espflag.svg" alt="close" width={24} height={24} />
              </div>
              <p className="bold-20 text-yellow-400">Wewak</p>
            </div>

            <div className="flexBetween">
              <div className=" flex flex-col">
                <p className="regular-16 block text-gray-20">Districts</p>
                <p className="bold-20 text-yellow-400">9</p>
              </div>
              <div className=" flex flex-col">
                <p className="regular-16 block text-gray-20">Population</p>
                <p className="bold-20 text-yellow-400">300 000</p>
              </div>
            </div>
          </div>
        </div>
        <span className=" bold-20 text-gray-20 ">
          <br></br>
          Tingin Wanem Gen?
        </span>

        <p className=" regular-16 mt-6 text-gray-30 xl: max-w[520px]">
          We can't say all is well. What you hear is blur, see for yourself what
          is actual
        </p>
        <div className=" my-11 flex flex-wrap gap-5">
          <div className=" flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  className=" hover: transition-all"
                  src="/star.svg"
                  width={24}
                  height={24}
                  alt="stars"
                  key={index}
                />
              ))}
          </div>
          <p className=" bold-16 lg:bold-20 [color:#ebf0f7;]">
            198k{" "}
            <span className=" regular-16 lg:regular-20 ml-1 underline">
              Excellent Review
            </span>
          </p>
        </div>
        <div className=" flex flex-col w-full gap-3 sm:flex-row ">
          <Button type="button" title="Get In Touch" variant="btn_dark_green" />
          <Button
            type="button"
            title="Check out what we do"
            icon="/play.svg"
            variant="btn_body_sync"
          />
        </div>
      </div>

      <div className=" relative mr-10 flex-1 place-content-end ">
        <div className=" relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className=" flex flex-col">
            <div className="flexBetween">
              <p className=" regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Wewak-ESP</p>
          </div>

          <div className="flexBetween">
            <div className=" flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">170 miles</p>
            </div>
            <div className=" flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">1200 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
