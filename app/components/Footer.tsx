import { Separator } from "@radix-ui/react-separator";
import React from "react";

function Footer() {
  const referencias = [
    { nombre: "Sobre Mí", url: "#" },
    { nombre: "Servicios", url: "#" },
    { nombre: "Proyectos", url: "#" },
    { nombre: "Contacto", url: "#" },
  ];

  return (
    <section className=" flex items-center flex-col">
      <div className="flex justify-between  p-10 w-full">
        <div className="">
          <p className="font-normal">© 2026 Seth Millan. Hecho con ❤️ en México, Morelia.</p>
        </div>
        <div className="flex gap-4">
          <a href="https://www.github.com/" target="_blank">
            <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
      <Separator className="w-[96%] bg-gray-600 h-px border" />
      <div className="flex  justify-center gap-16 p-8 w-full">
        {referencias.map((ref, index) => (
          <a
            key={index}
            href={ref.url}
            className="text-gray-700 hover:text-black transition-colors duration-300"
          >
            {ref.nombre}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Footer;
