import React from "react";
import NavSocial from "./NavSocial";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Mouse from "./Mouse";

function Hero() {
  return (
    <>
      <main className="flex h-full items-center flex-col justify-center   ">
        <div className="fixed left-12">
          <NavSocial />
        </div>

        <div className="flex flex-col items-center justify-center w-4xl h-full ">
          <p className="font-extralight text-2xl -mb-6">Hola, soy</p>
          <h1 className="text-[130px] font-extrabold ">SETH MILLAN</h1>
          <h2 className="text-5xl font-extrabold opacity-85">
            Full Stack Developer
          </h2>
          <p className="text-xl font-normal opacity-85 text-center mt-6 ">
            Desarrollo soluciones web modernas y escalables. Especializado en
            crear experiencias digitales que combinan diseño elegante con código
            limpio.
          </p>
          <div className="pt-6 flex gap-20">
            <Button size={"lg"} className="text-xl ">
              Ver Proyectos <MoveRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="text-xl" size={"lg"} variant={"outline"}>
              Contactar
            </Button>
          </div>
          <div className="animate-bounce mt-12">
            <Mouse/>
          </div>
          
        </div>
      </main>
    </>
  );
}

export default Hero;
