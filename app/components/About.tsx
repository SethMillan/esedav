import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import React from "react";
import Experience from "./Experience";

function About() {
  return (
    <>
      <section className="px-25 h-screen flex items-center justify-evenly">
        <div className="flex flex-col w-[50%] ">
          <div className="flex items-center ">
            <img src="/nave.png" alt="" className="h-11 -ml-2 -mr-2 " />
            <h2 className="text-[#FF8C42] font-semibold text-3xl italic">
              ACERCA DE MI
            </h2>
          </div>
          <h1 className="font-extrabold text-4xl pt-2">
            BEST PROJECT LEAD <br /> & DEVELOPER IN LATAM
          </h1>
          <p className="text-xl font-medium pt-4">
            Mi objetivo profesional es crear soluciones que impulsen el
            crecimiento y la transformación digital dentro de las organizaciones
          </p>
          <div className="flex justify-between mt-6 mb-6">
            <div className="text-center">
              <h3 className="font-extrabold text-3xl">+15</h3>
              <p className="font-medium text-lg">Proyectos Completados</p>
            </div>
            <div className="text-center">
              <h3 className="font-extrabold text-3xl">+1000</h3>
              <p className="font-medium text-lg">Usuarios satisfechos</p>
            </div>
            <div className="text-center">
              <h3 className="font-extrabold text-3xl">98%</h3>
              <p className="font-medium text-lg">Clientes satisfechos</p>
            </div>
          </div>
          <div>
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
