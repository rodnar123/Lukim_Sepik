import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px] text-blue-500">
            Get in touch with us
          </h2>
          <p className="regular-16 text-yellow-500">Please send us a request</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Talk To Us-12438329"
              icon="/talk.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Come Visit Us-Wewak Hill"
              icon="/visit.svg"
              variant="btn_green"
              full
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src="/wewak.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
