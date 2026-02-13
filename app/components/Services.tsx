import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import React from "react";
import { Open_Sans } from "next/font/google";
import { scrollToSection } from "./utils/scroll";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

function Services() {
  const services = [
    {
      title: "Desarrollo de Software",
      icon: "code_blocks",
      description:
        "Crear aplicaciones web y móviles personalizadas que se adapten perfectamente a las necesidades de tu negocio.",
      checks: [
        "Aplicaciones web responsivas",
        "Desarrollo de APIs REST",
        "Integraciones de sistemas",
        "Optimización de rendimiento",
      ],
      color: "256EFF",
    },
    {
      title: "Diseño UI/UX",
      icon: "palette",
      description:
        "Diseñar experiencias digitales intuitivas y atractivas que los usuarios amen y recuerden.",
      checks: [
        "Diseño de interfaces",
        "Prototipado",
        "Usabilidad",
        "Accesibilidad",
      ],
      color: "FF8C42",
    },
  ];

  return (
    <section id="services" className="pb-8">
      <h1 className="md:text-4xl font-bold text-3xl text-center mb-8">Servicios</h1>
      <div className="flex justify-evenly w-full flex-col md:flex-row items-center flex-wrap gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className=" relative w-95 bg-[#ffffff] dark:bg-gray-800 p-8 rounded-2xl hover:shadow-xl  transition-shadow duration-300 shadow-lg flex flex-col gap-4 "
          >
            <div
              className="w-full h-4 absolute top-0 left-0 rounded-t-2xl "
              style={{ backgroundColor: `#${service.color}` }}
            ></div>
            <h2 className="text-4xl font-extrabold flex items-center gap-2 pt-4 justify-evenly">
              {service.title}
              {service.icon && (
                <div className="w-38 flex items-center justify-end h-25">
                  <span
                    className="material-symbols-outlined text-4xl w-20 h-20"
                    style={{ fontSize: "58px" }}
                    aria-hidden
                  >
                    {service.icon}
                  </span>
                </div>
              )}
            </h2>
            <p className={`${openSans.className} text-lg font-light`}>
              {service.description}
            </p>
            <ul className="list-disc list-inside mt-2">
              {service.checks.map((check, i) => (
                <div
                  key={i}
                  className={`${openSans.className} md:text-xl text-lg font-normal flex flex-row gap-4`}
                >
                  <span
                    style={{ color: `#${service.color}` }}
                    className="font-bold"
                  >
                    ✔
                  </span>
                  {check}
                </div>
              ))}
            </ul>
            <div className="flex items-end justify-end pt-2 h-full">
              <Button
                variant={service.color === "FF8C42" ? "orange" : "secondary"}
                size={"lg"}
              >
                <span className="text-lg md:text-xl" onClick={() => scrollToSection("contact")}>CONTRATAME</span>

                <MoveUpRight />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
