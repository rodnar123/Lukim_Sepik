import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center g-[10%] md:flex-row">
          <Link href="/" className=" mb-10 lg:mr-10">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-blue-500">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap text-blue-500">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-500">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5 transition-colors">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 bg-indigo-700 rounded-5xl p-2">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={title}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className=" border bg-gray-20" />
        <p className="bold-18 text-gray-20 text-center w-full">
          2024 LukimSepik | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap text-yellow-500">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
