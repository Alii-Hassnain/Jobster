"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import axios from "axios";

export default function Auth() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const endpoint = isLogin ? "auth/login" : "auth/register";
    const payload = isLogin ? { email, password } : { name, email, password };
    if (!isLogin && password !== confirmPassword) {
      alert("Password do not match");
    }
    if (isLogin) {
      console.log("Login:", { email, password });
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Register:", { email, password, confirmPassword });
    }

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URI}/${endpoint}`,
        payload
      );
      if(res.data?.token){
        localStorage.setItem("token", res.data.token);
        window.location.href = "/root";
        alert("Login successfully")
        return;
      }
      alert("Register successfully");
    } catch (err: any) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <main className="h-screen flex items-center justify-center ">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          {isLogin ? "Login to Jobster" : "Register for Jobster"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
                placeholder="Enter your name"
              />
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
              placeholder="Enter your password"
            />
          </div>

          {!isLogin && (
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Re-enter Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
                placeholder="Confirm your password"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 text-blue-600 hover:underline font-medium"
          >
            {isLogin ? "Register Now" : "Login Now"}
          </button>
        </p>
      </div>
    </main>
  );
}
