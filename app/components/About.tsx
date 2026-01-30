import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import React from "react";
import Experience from "./Experience";

function About() {
  return (
    <>
      <section className="px-25 flex items-center justify-center w-full flex-col xl:gap-30 gap-15 lg:flex-row pb-30">
        <div className="flex flex-col w-full md:w-[60%] lg:w-[50%] xl:w-[40%]  ">
          <div className="flex items-center ">
            <img src="/nave.png" alt="" className="h-11 -ml-2 -mr-2 " />
            <h2 className="text-[#FF8C42] font-semibold sm:text-3xl italic text-2xl">
              ACERCA DE MI
            </h2>
          </div>
          <h1 className="font-extrabold sm:text-4xl pt-2 text-3xl">
            BEST PROJECT LEAD <br /> & DEVELOPER IN LATAM
          </h1>
          <p className="sm:text-xl font-medium pt-4 text-lg">
            Mi objetivo profesional es crear soluciones que impulsen el
            crecimiento y la transformación digital dentro de las organizaciones
            </p>
            <div className="flex justify-between mt-6 mb-6 gap-2">
            <div className="text-center">
              <h3 className="font-extrabold sm:text-3xl text-2xl">+15</h3>
              <p className="font-medium sm:text-lg text-base">Proyectos Completados</p>
            </div>
            <div className="text-center">
              <h3 className="font-extrabold sm:text-3xl text-2xl">+1000</h3>
              <p className="font-medium sm:text-lg text-base">Usuarios satisfechos</p>
            </div>
            <div className="text-center">
              <h3 className="font-extrabold sm:text-3xl text-2xl">98%</h3>
              <p className="font-medium sm:text-lg text-base">Clientes satisfechos</p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <Button size={"lg"} className="text-xl mt-6" variant={"secondary"}>
              <span className="font-semibold">Descargar CV</span>{" "}
              <Download className="ml-2 h-8 w-8" />
            </Button>
          </div>
        </div>
        <Experience/>
      </section>
    </>
  );
}

export default About;
