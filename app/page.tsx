"use client";
import Image from "next/image";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <div className="w-full flex items-center justify-center flex-col h-screen">
        <Navbar/>
        <Hero/>
      </div>
    </>
  );
}
