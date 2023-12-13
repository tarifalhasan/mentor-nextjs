"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const pathName = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const DATA = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "FInd Mentors",
      href: "#find_mentors",
    },
    {
      label: "Become a Mentor",
      href: "#become_mentor",
    },

    {
      label: "About Us",
      href: "#about_us",
    },
    {
      label: "Contact Us",
      href: "#contact_us",
    },
  ];

  return (
    <>
      <header className=" py-6 flex items-center border-b border-border b">
        <div className=" container flex items-center justify-between">
          <Link className="heading-3  text-brand-main font-bold" href={"/"}>
            Mentor
          </Link>
          <ul className=" hidden lg:flex items-center gap-x-14">
            {DATA.map((link, index) => (
              <li
                key={index}
                className={cn(
                  " text-lg",
                  pathName === link.href
                    ? "text-content-primary font-semibold"
                    : "text-content-secondary font-normal"
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <button className=" hidden btn-primary lg:block">Get Started</button>
          <button
            onClick={() => setIsOpenMenu((prev) => !prev)}
            className=" lg:hidden"
          >
            <FiMenu className="w-6 h-6 text-brand-main" />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "z-[999] w-full min-h-screen h-full fixed bg-black top-0 duration-500 transition ",

          isOpenMenu ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className=" pt-5 flex items-center justify-between container">
          <Link className="heading-3  text-brand-main font-bold" href={"/"}>
            Mentor
          </Link>
          <button onClick={() => setIsOpenMenu(false)}>
            <AiOutlineClose className="w-6 h-6 text-white" />
          </button>
        </div>
        <ul className=" container pt-5 flex flex-col items-center gap-y-14">
          {DATA.map((link, index) => (
            <li
              key={index}
              onClick={() => setIsOpenMenu(false)}
              className={cn(
                " text-lg",
                pathName === link.href
                  ? " text-brand-main font-semibold"
                  : "text-white font-normal"
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
