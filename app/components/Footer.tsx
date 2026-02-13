import { Separator } from "@radix-ui/react-separator";
import React from "react";
import { scrollToSection } from "./utils/scroll";

function Footer() {
  const referencias = [
    { nombre: "Sobre Mí", url: "about" },
    { nombre: "Servicios", url: "services" },
    { nombre: "Proyectos", url: "projects" },
    { nombre: "Contacto", url: "contact" },
  ];

  return (
    <section className=" flex items-center flex-col">
      <div className="flex justify-between  p-10 w-full">
        <div className="">
          <p className="font-normal">© 2026 Seth Millan. Hecho con ❤️ en México, Morelia.</p>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/SethMillan" target="_blank">
            <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/mill%C3%A1n-d-sutekh17/" target="_blank">
            <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
      <Separator className="w-[96%] bg-gray-600 h-px border" />
      <div className="flex  justify-center md:gap-16 gap-6 p-8 w-full">
        {referencias.map((ref, index) => (
          <a
            key={index}
            onClick={() => { scrollToSection(ref.url);}}
            className="text-gray-700 hover:text-black transition-colors duration-300 hover:cursor-pointer"
          >
            {ref.nombre}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Footer;
