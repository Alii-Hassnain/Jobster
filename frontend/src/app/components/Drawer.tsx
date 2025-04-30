"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Drawer(onClose) {
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ type: "tween", duration: 0.5 }}
      className="bg-gray-800 w-64 fixed h-screen p-4 text-white mt-16 "
    >
      <ul> 
        <li>
          <Link
            href="/root"
            className="block py-2 px-4 hover:bg-gray-700 rounded"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/all-jobs"
            className="block py-2 px-4 hover:bg-gray-700 rounded"
          >
            All Jobs
          </Link>
        </li>
        <li>
          <Link
            href="/add-jobs"
            className="block py-2 px-4 hover:bg-gray-700 rounded" 
          >
            Add Jobs
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className="block py-2 px-4 hover:bg-gray-700 rounded"
          >
            Profile
          </Link>
        </li>
      </ul>
    </motion.div>
  );
}
