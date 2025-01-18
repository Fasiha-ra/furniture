"use client";

import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const aboutMenu = [{ name: "About Us", href: "#" }, { name: "Mission and Team", href: "#" }];
const laminateMenu = [
  { name: "SHAKER", href: "#" },
  { name: "SLAB", href: "#" },
  { name: "RAISED PANEL", href: "#" },
  { name: "3DL COLOURS", href: "#" },
];

export default function Header() {
  const [menuState, setMenuState] = useState({
    mobileMenuOpen: false, 
    openSubMenu: null, 
  });

  const toggleMobileMenu = () => {
    setMenuState((prevState) => ({
      ...prevState,
      mobileMenuOpen: !prevState.mobileMenuOpen,
    }));
  };

  const handleSubMenuHover = (menuName) => {
    setMenuState((prevState) => ({
      ...prevState,
      openSubMenu: menuName,
    }));
  };

  const closeSubMenu = () => {
    setMenuState((prevState) => ({
      ...prevState,
      openSubMenu: null,
    }));
  };

  return (
    <header className="bg-white shadow">
      <nav className="lg:container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#">
            <img src={logo} alt="Logo" className="h-24 w-32" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 items-center">
          <a href="#" className="text-gray-800 hover:text-gray-500 font-semibold">
            Home
          </a>
          {/* About Menu */}
          <div
            className="relative"
            onMouseEnter={() => handleSubMenuHover("about")}
            onMouseLeave={closeSubMenu}
          >
            <button className="flex items-center text-gray-800 hover:text-gray-500 font-semibold">
              About
              <ChevronDownIcon className="ml-1 h-5 w-5" />
            </button>
            {menuState.openSubMenu === "about" && (
              <div className="absolute left-0 z-10 mt-2 w-48 bg-white shadow-lg rounded-lg">
                {aboutMenu.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Laminate Menu */}
          <div
            className="relative"
            onMouseEnter={() => handleSubMenuHover("laminate")}
            onMouseLeave={closeSubMenu}
          >
            <button className="flex items-center text-gray-800 hover:text-gray-500 font-semibold">
              3D Laminate
              <ChevronDownIcon className="ml-1 h-5 w-5" />
            </button>
            {menuState.openSubMenu === "laminate" && (
              <div className="absolute z-10 left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                {laminateMenu.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#" className="text-gray-800 hover:text-gray-500 font-semibold">
            Contact Us
          </a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaXTwitter /></a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            {menuState.mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuState.mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 py-4 px-4">
            <a href="#" className="block text-gray-800 hover:text-gray-500 font-semibold">
              Home
            </a>
            <div>
              <button
                onClick={() =>
                  setMenuState((prevState) => ({
                    ...prevState,
                    openSubMenu: prevState.openSubMenu === "about" ? null : "about",
                  }))
                }
                className="flex w-full items-center justify-between text-gray-800 hover:text-gray-500 font-semibold"
              >
                About
                <ChevronDownIcon
                  className={`h-5 w-5 transform ${
                    menuState.openSubMenu === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {menuState.openSubMenu === "about" && (
                <div className="pl-4 mt-2 space-y-1">
                  {aboutMenu.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-700 hover:bg-gray-100 rounded-md px-2 py-1"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() =>
                  setMenuState((prevState) => ({
                    ...prevState,
                    openSubMenu: prevState.openSubMenu === "laminate" ? null : "laminate",
                  }))
                }
                className="flex w-full items-center justify-between text-gray-800 hover:text-gray-500 font-semibold"
              >
                3D Laminate
                <ChevronDownIcon
                  className={`h-5 w-5 transform ${
                    menuState.openSubMenu === "laminate" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {menuState.openSubMenu === "laminate" && (
                <div className="pl-4 mt-2 space-y-1">
                  {laminateMenu.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-700 hover:bg-gray-100 rounded-md px-2 py-1"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#" className="block text-gray-800 hover:text-gray-500 font-semibold">
              Contact Us
            </a>
            <a href="#" className="block"><FaFacebookF /></a>
          <a href="#" className="block"><FaInstagram /></a>
          <a href="#" className="block"><FaXTwitter /></a>
          </div>
        </div>
      )}
    </header>
  );
}
