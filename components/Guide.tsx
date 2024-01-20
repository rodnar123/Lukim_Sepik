import Image from "next/image";
import React from "react";

export const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="camp.svg" width={50} height={50} alt="guide" />
        <p className=" uppercase regular-18 -mt-1 mb-3 text-green-700">
          we are here for you
        </p>
        <div className=" flex flex-wrap justify-between gap-5 lg:gap-10 text-blue-500">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[396px] text-yellow-500">
            Guide you to your imagination
          </h2>
          <p className="regular-16 xl:max-w-[520px]">
            This is the only space for all that's required to take your enjoy to
            the next level. Turst in the capable hands for pleasure and fun
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full ">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-green-90 py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20%">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className=" h-full w-auto"
          />

          <div className="flexBetween flex-col">
            <div className="flex flex-col w-full">
              <div className="flexBetween w-full gap-2">
                <p className=" regular-16 text-blue-500">Destination</p>
                <p className=" bold-16 text-green-900">1h 30min</p>
              </div>
              <p className="bold-20 mt-2 text-yellow-500">
                Maski lukim na laikim
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className=" regular-16 text-blue-500">Journey Starts Here</p>

              <h4 className="bold-20 mt-2 text-yellow-500 whitespace-nowrap">
                Lower,Middle and Upper
              </h4>
            </div>
          </div>
        </div>

        {/* <div className="absolute flex bg-green-90 py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:right-[5%] lg:top-20%"></div> */}
      </div>
    </section>
  );
};
