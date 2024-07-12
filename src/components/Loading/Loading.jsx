// LoadingPage.js
import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <AiOutlineLoading className="w-12 h-12 mx-auto text-winter-blue-dark animate-spin" />
        <p className="text-lg font-semibold mt-4">Loading...</p>
      </div>
    </div>
  );
}