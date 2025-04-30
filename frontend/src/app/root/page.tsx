"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Drawer from "../components/Drawer"; // ← Don't forget this
import Card from "../components/Cards";
import Layout from "../components/Layout";

import { AnimatePresence } from "framer-motion";

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample chart data
const chartData = [
  { month: "Jan", applications: 10 },
  { month: "Feb", applications: 15 },
  { month: "Mar", applications: 25 },
  { month: "Apr", applications: 20 },
  { month: "May", applications: 30 },
  { month: "Jun", applications: 28 },
];

// Sample card data
const cardData = [
  { title: "Job Applications", number: 4, icon: "briefcase" },
  { title: "Interviews Scheduled", number: 2, icon: "calendar" },
  { title: "Jobs Declined", number: 1, icon: "x-circle" },
];

export default function Root() {
  const [areaChart, setAreaChart] = useState(true);
  const [showDrawer, setShowDrawer] = useState(true);

  return (
    
      <Layout>
     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              number={card.number}
              icon={card.icon}
            />
          ))}
        </div>
        {/* Chart Section */}
        <div className="flex flex-col items-center mt-10 gap-4">
          <h1 className="text-3xl font-semibold text-gray-800">
            Monthly Applications
          </h1>
          <button
            className={`text-xl font-medium px-4 py-2 rounded-md transition-colors ${
              areaChart
                ? "text-blue-600 hover:bg-blue-100"
                : "text-green-600 hover:bg-green-100"
            }`}
            onClick={() => setAreaChart(!areaChart)}
          >
            Switch to {areaChart ? "Bar Chart" : "Area Chart"}
          </button>

          {/* Chart Container */}
          <div className="w-full max-w-4xl mt-4">
            <ResponsiveContainer width="100%" height={300}>
              {areaChart ? (
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="applications"
                    stroke="#2563eb"
                    fill="#3b82f6"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              ) : (
                <BarChart
                  data={chartData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="applications" fill="#10b981" />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>
     
    </Layout>
    
  );
}
