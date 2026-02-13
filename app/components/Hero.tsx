import React from "react";
import NavSocial from "./NavSocial";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Mouse from "./Mouse";
import { scrollToSection } from "./utils/scroll";

function Hero() {
  return (
    <>
      <main className="flex h-full items-center flex-col justify-center   ">
        <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden lg:flex">
          <NavSocial />
        </div>

        <div className="flex flex-col items-center justify-center  h-full ">
          <p className="font-extralight text-2xl md:mb-6 mb-4">Hola, soy</p>
          <h1 className="text-6xl sm:text-7xl lg:text-9xl md:text-8xl font-extrabold max-w-2xs text-center md:max-w-full">SETH MILLAN</h1>
          <h2 className="lg:text-5xl font-extrabold opacity-85 text-4xl pt-4 lg:pt-0 text-center">
            Full Stack Developer
          </h2>
          <p className="sm:text-xl font-normal opacity-85 text-center mt-6 max-w-sm md:max-w-lg lg:max-w-2xl text-lg">
            Desarrollo soluciones web modernas y escalables. Especializado en
            crear experiencias digitales que combinan diseño elegante con código
            limpio.
          </p>
          <div className="pt-6 flex sm:gap-20 flex-col sm:flex-row items-center justify-center gap-8">
            <Button size={"lg"} className="text-xl " onClick={() => scrollToSection("projects")}>
              Ver Proyectos <MoveRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="text-xl" size={"lg"} variant={"outline"} onClick={()=> scrollToSection("contact")}>
              Contactar :D
            </Button>
          </div>
          <div className="animate-bounce mt-12">
            <Mouse />
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
