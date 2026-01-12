"use client";
import Image from "next/image";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <div className="w-full   flex-col h-screen">
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Services/>
      </div>
    </>
  );
}
