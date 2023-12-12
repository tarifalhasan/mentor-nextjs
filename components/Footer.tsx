import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-black">
      <div className=" pt-10 container pb-7">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-y-4">
          <div className=" space-y-4 sm:max-w-[399px]">
            <h3 className="heading-3 text-white">BookConnect</h3>
            <p className=" text-base font-normal text-white">
              Using a mentor finder platform has several advantages. Firstly, it
              provides access to a wide network of mentors from various fields,
              ensuring that mentees can find someone who specializes in their
              area of interest.
            </p>
          </div>
          <div className="flex items-center  gap-x-4">
            <button className="btn-primary border-2 border-transparent">
              Register
            </button>
            <button className="  text-white border-white btn-outline">
              Contact Us
            </button>
          </div>
        </div>
        <div className=" bg-white opacity-[33%] h-[1px] w-full my-10" />
        <div className="flex flex-col   lg:flex-row lg:items-center justify-between gap-y-4">
          <p className=" text-sm text-white font-normal">
            © 2023 Mentor Finder.
          </p>
          <ul className="flex items-center gap-x-4">
            <li>
              <Link
                href={"/"}
                className="text-sm   hover:underline text-white font-normal"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-sm hover:underline text-white font-normal"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-sm hover:underline text-white font-normal"
              >
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
