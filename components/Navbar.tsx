import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=" flexBetween max-container paddingContainer relative z-30 py-5 ease-in duration-500 ">
      <Link href="/">
        <Image src="/logo.svg" width={50} height={20} alt="logo" />
      </Link>
      <ul className=" hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gr-50 flexCente [color:#ebf0f7;] cursor-pointer p-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className=" lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className=" inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
