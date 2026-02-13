import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import React from "react";

function Projects() {
  const proyectos = [
    {
      nombre: "Mezcal ElAferrado",
      descripcion: "Desarrollo de sitio web para marca de mezcal, diseño UI/UX y branding.",
      tecnologias: ["React", "TypeScript", "Tailwind CSS", "Figma", "Astro"],
      imagen: "/mezcal.png",
      repositorio:"https://github.com/SethMillan/mezcal-web",
      enlace:"https://mezcal-elaferrado.vercel.app/"
    },
    {
      nombre: "Inmobiliaria Lumina",
      descripcion: "Desarrollo de sitio web para inmobiliaria, diseño UI/UX y branding.",
      tecnologias: ["Next.js", "Tailwind CSS", "Node.js", "Figma" , "Supabase"],
      imagen: "/lumina.png",
      repositorio:"https://github.com/SethMillan/inmobiliaria-lumina",
      enlace:"https://luminainmo.com",
    },
  ];

  return (
    <>
      <section id="projects" className=" w-full flex flex-col items-center gap-4 justify-center pb-30 ">
        <h1 className="md:text-4xl font-bold text-3xl">Proyectos Destacados</h1>
        <h2 className="md:text-xl font-normal w-[60%] text-center text-md">
          Estos son algunos de los proyectos en los que he trabajado
          recientemente.
        </h2>
        <div className="flex  items-center gap-8 mt-4 flex-col md:flex-row justify-center flex-wrap">
            {
                proyectos.map((proyecto, index)=>(
                    <div key={index} className="mb-8 w-95 bg-[#D9D9D9] dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col  gap-4 hover:scale-101 transition-transform">
                        <img src={proyecto.imagen} alt={proyecto.nombre} className="rounded-lg"/>
                        <h3 className="text-2xl font-semibold">{proyecto.nombre}</h3>
                        <p className="text-md font-normal -my-2">{proyecto.descripcion}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {proyecto.tecnologias.map((tecnologia, i) => (
                                <span key={i} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-accent select-none">
                                    {tecnologia}
                                </span>
                            ))}
                        </div>
                        <Separator className="bg-gray-800 h-1" />
                        <div className="flex flex-row  justify-between items-center text-center">
                            <Button variant={"default"} size={"md"} onClick={()=> window.open(proyecto.enlace, "_blank")}>
                            <span className="text-center ">Visitar Proyecto </span>
                            <SquareArrowOutUpRight className="w-7"/>
                        </Button>
                        <Button variant={"outline"} size={"md"} onClick={()=>window.open(proyecto.repositorio, "_blank")}> 
                          <span className="text-center">Visitar Repositorio</span>
                            <Github/>
                        </Button>
                        </div>
                    </div>
                ))
            }
        </div>
      </section>
    </>
  );
}

export default Projects;
