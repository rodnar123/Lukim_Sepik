import { PEOPLE_URL } from "@/constants";
import { url } from "inspector";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] text-gray-20 bg-cover bg-no-repeat lg: rounded-r-5xl 2xl:rounded-5xl ${backgroundImage}`}
    >
      <div className=" flex flex-col h-full items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-gray-700 p-4">
            <Image src="/espflag.svg" alt="map" width={20} height={20} />
          </div>
          <div className=" flex flex-col gap-1 bg-green-90 rounded-md p-2">
            <h4 className=" bold-18">{title}</h4>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className=" flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                alt="people"
                width={52}
                height={52}
                className=" inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 bg-gray-700 rounded-lg text-gray-20 p-2">
            {peopleJoined}
          </p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="  2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className=" hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Sepik Spirit"
          subtitle="Sepik River Boat Cruise"
          peopleJoined="Join now!"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Sepik Spirit"
          subtitle="Sepik River Boat Cruise"
          peopleJoined="Join now!"
        />
      </div>

      <div className="flexEnd m-10 px-6 lg:-mt-60 lg:mr-6">
        <div className=" bg-green-90 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:p-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className=" regular-24 md:regular-32 2xl:regular-64 capitalize text-gray-20">
            <strong className=" text-orange-800 hover:text-green-600 ease-in-out duration-1000">
              Feeling clogged
            </strong>{" "}
            , and not knowing what to do!
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-gray-20">
            This is what we do best! Keep in touch anytime.
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
