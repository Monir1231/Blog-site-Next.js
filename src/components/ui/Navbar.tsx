"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import { FaBlog, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

interface NavItem {
  label: string;
  href: string;
  subitems?: NavItem[];
}

const mainNavTtem: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Categories",
    href: "/categories",
    subitems: [
      { label: "Politics", href: "/categories/politics" },
      { label: "Health", href: "/categories/health" },
      { label: "Design", href: "/categories/design" },
    ],
  },
  { label: "LifeStyle", href: "/lifestyle" },
  { label: "about", href: "/about" },

  { label: "Health", href: "/health" },
  { label: "Technology", href: "/technology" },
  {
    label: "Moro",
    href: "#",
    subitems: [
      { label: "Search", href: "search" },
      { label: "About", href: "/about" },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
  { label: "Culture", href: "/culture" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathName = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [ismobileMenu, setIsmobileMenu] = useState(false);
  const Theme = "light";

  return (
    <header className=" relative bg-white font-lora text-gray-800">
      {/* top header  */}
      <div className=" hidden lg:block py-3">
        <div className="blog-container flex items-center justify-between ">
          <h1 className=" shrink-0">
            <Link
              href={"/"}
              className=" flex items-center text-2xl font-semibold text-gray-900 hover:text-primary transition-colors duration-300"
            >
              {" "}
              <FaBlog />
              <span className=" ml-1">Blogs</span>
            </Link>
          </h1>
          {/* tdq header */}
          <div className=" flex items-center space-x-3">
            <div className=" relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className=" p-2 rounded-full text-gray-500  transition-colors focus:outline-none hover:text-primary cursor-pointer"
              >
                <BsSearch size={18} />
              </button>
              {isSearchOpen && (
                <form
                  action={"/search"}
                  className=" absolute top-10 right-0 p-2 "
                >
                  <input
                    type="text"
                    name="q"
                    placeholder=" search..."
                    className=" px-3 py-2 rounded-md border border-gray-300 bg-gray-50 text-gray-500 focus:outline-none"
                  />
                </form>
              )}
            </div>
            <button className=" p-2 rounded-full text-gray-500  transition-colors focus:outline-none hover:text-primary cursor-pointer hover:border hover:border-primary  duration-300">
              {Theme === "light" ? (
                <IoMdMoon size={18} />
              ) : (
                <IoMdSunny size={18} />
              )}
            </button>
            {/* socal icon  */}
            <ul className=" flex items-center space-x-3">
              <li className=" border border-gray-300 p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none hover:border hover:border-primary duration-300">
                <Link href={"#"} className=" text-gray-500">
                  <FaTwitter size={12} />
                </Link>
              </li>

              <li className=" border border-gray-300 p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none hover:border hover:border-primary duration-300">
                <Link href={"#"} className=" text-gray-500">
                  <FaFacebook size={12} />
                </Link>
              </li>

              <li className=" border border-gray-300 p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none hover:border hover:border-primary duration-300">
                <Link href={"#"} className=" text-gray-500">
                  <FaInstagram size={12} />
                </Link>
              </li>
            </ul>

            <Link
              href={"contact"}
              className=" py-2 px-4 border border-gray-300 text-gray-800 rounded-md hover:bg-primary transition-all duration-300 hover:cursor-pointer  hover:text-white"
            >
              Contact
            </Link>
            <Link
              href={"contact"}
              className=" py-2 px-4 border border-gray-300  hover:bg-green-700 rounded-md bg-primary transition-all duration-300 hover:cursor-pointer  text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* main navition  */}
      <nav className=" py-3 border-b border-gray-200">
        {/* large menu */}
        <div className="blog-container ">
          {/* humbargger mobile  */}
          <div className=" lg:hidden flex items-center justify-between w-full">
            <h1 className=" shrink-0">
              <Link
                href={"/"}
                className=" flex items-center text-2xl font-semibold text-gray-900 hover:text-primary transition-colors duration-300"
              >
                {" "}
                <FaBlog />
                <span className=" ml-1">Blogs</span>
              </Link>
            </h1>

            <button
              onClick={() => setIsmobileMenu(!ismobileMenu)}
              className=" p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none  focus:ring-2 focus:ring-primary transition-colors duration-300 hover:cursor-pointer"
            >
              {ismobileMenu ? (
                <HiOutlineX size={24} />
              ) : (
                <HiOutlineMenu size={24} />
              )}
            </button>
          </div>

          <ul className=" hidden lg:flex items-center justify-between space-x-6">
            {mainNavTtem.map((item, index) => {
              const isActive = pathName === item.href;
              return (
                <li key={index} className=" group relative">
                  <Link
                    href={item.href}
                    className={` inline-flex items-center text-sm uppercase font-medium rounded-md text-gray-500 hover:text-primary ${isActive ? "  text-primary" : ""}`}
                  >
                    {item.label}{" "}
                    {item.subitems && (
                      <BsChevronDown
                        size={16}
                        className=" ml-1 group-hover:rotate-180 transition-transform"
                      />
                    )}
                  </Link>
                  {item.subitems && (
                    <ul className=" absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md overflow-hidden z-20 min-w-57.5  border border-gray-200">
                      {item.subitems.map((subitem, index) => (
                        <li
                          key={index}
                          className=" block px-4 py-2 text-sm uppercase text-gray-700 hover bg-gray-100 transition-colors"
                        >
                          <Link href={subitem}>{subitem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        {/* mobile */}

        {ismobileMenu && (
          <div className=" lg:hidden fixed inset-0 bg-white overflow-y-auto ">
            <div className=" flex justify-end p-4">
              <button
                onClick={() => setIsmobileMenu(false)}
                className=" p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
              >
                <HiOutlineX size={24} />
              </button>
            </div>

            <ul className=" flex flex-col p-4 space-y-3">
              {mainNavTtem.map((item, index) => {
                const isActive = pathName === item.href;
                return (
                  <li key={index} className=" group relative">
                    <Link
                      href={item.href}
                      className={` inline-flex items-center text-sm uppercase font-medium rounded-md text-gray-500 hover:text-primary ${isActive ? "  text-primary" : ""}`}
                    >
                      {item.label}{" "}
                      {item.subitems && (
                        <BsChevronDown
                          size={16}
                          className=" ml-1 group-hover:rotate-180 transition-transform"
                        />
                      )}
                    </Link>
                    {item.subitems && (
                      <ul className=" absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md overflow-hidden z-20 min-w-57.5  border border-gray-200">
                        {item.subitems.map((subitem, index) => (
                          <li
                            key={index}
                            className=" block px-4 py-2 text-sm uppercase text-gray-700 hover bg-gray-100 transition-colors"
                          >
                            <Link href={subitem}>{subitem.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
