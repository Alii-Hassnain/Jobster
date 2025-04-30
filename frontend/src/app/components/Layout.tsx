"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
import { AnimatePresence } from "framer-motion";

export default function Layout({ children }) {
  const [showDrawer, setShowDrawer] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onToggleDrawer={() => setShowDrawer((prev) => !prev)} />
      <AnimatePresence>
        {showDrawer && <Drawer onClose={() => setShowDrawer(false)} />}
      </AnimatePresence>
      <main
        className={`transition-all duration-300 pt-24 p-6 ${
          showDrawer ? "ml-64" : "ml-0"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
