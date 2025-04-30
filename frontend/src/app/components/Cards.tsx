"use client";
import React from "react";
import { FaBriefcase, FaUsers, FaChartLine } from "react-icons/fa";
const iconMap = {
    briefcase: FaBriefcase,
    users: FaUsers,
    chart: FaChartLine,
  };
export default function Card({ title, number, icon }) {
  const Icon = iconMap[icon] || FaBriefcase;
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
      {/* Icon */}
      <div className="text-blue-500">
        <Icon size={32} />
      </div>
      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{number}</p>
      </div>
    </div>
  );
}