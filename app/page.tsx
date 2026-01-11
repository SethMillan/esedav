"use client";
import Image from "next/image";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <div className="w-full   flex-col h-screen">
        <Navbar/>
        <Hero/>
        <About/>
      </div>
    </>
  );
}
