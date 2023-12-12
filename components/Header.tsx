"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
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
      </div>
    </header>
  );
};

export default Header;
