"use client";
import Link from "next/link";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { BiSolidArrowToBottom } from "react-icons/bi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Drawer from "./Drawer";

export default function Navbar({ onToggleDrawer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, settoggle] = useState<boolean>(onToggleDrawer);
  const handleUserMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-gray-800 text-white fixed p-4 w-full border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* 🍔 Drawer toggle button */}

          <div className="flex flex-row gap-5">
            <Link href="/" className="text-xl font-bold">
              Jobster app
            </Link>
            {toggle ? (
              <button
                className="text-white text-2xl cursor-pointer"
                onClick={() => {
                  onToggleDrawer();
                  settoggle(!toggle);
                }}
              >
                <HiMenuAlt3 />
              </button>
            ) : (
              <button
                className="text-white text-2xl cursor-pointer"
                onClick={() => {
                  onToggleDrawer();
                  settoggle(!toggle);
                }}
              >
                <HiX />
              </button>
            )}
          </div>

          <h1 className="hidden sm:block">Dashboard</h1>

          <div className="relative">
            <button
              className="bg-blue-950 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              onClick={handleUserMenuToggle}
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              <IoPerson />
              User
              <BiSolidArrowToBottom />
            </button>

            {isOpen && (
              <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-md z-30">
                <Link
                  href="/logout"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
