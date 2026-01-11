import React from "react";

function Experience() {
  const experiences = [
    {
      title: "Project Lead & Developer",
      company: "Calaverita.dev",
      duration: "2024 - Present",
      description:
        "Liderar equipos multifuncionales en el desarrollo de aplicaciones web escalables e implementar metodologías ágiles.",
    },
    {
      title: "Full Stack Developer",
      company: "Calaverita.dev",
      duration: "2023 - 2024",
      description:
        "Construí MVPs y soluciones escalables utilizando un stack tecnológico moderno en entornos de startups de ritmo acelerado.",
    },
    {
      title: "Ingenieria en Sistemas Computacionales",
      company: "Instituto Tecnológico de Morelia",
      duration: "2021 - 2027",
      description:
        "Aprendí los fundamentos de la ingeniería de software en el TecNM Morelia, dominando los principios de diseño de sistemas.",
    },
  ];
  return (
    <>
      <section className="flex items-center flex-col bg-white px-8 py-6 rounded-2xl shadow-lg pb-6">
        <h1 className="font-bold text-lg">EXPERIENCIA</h1>
        <div className="h-px w-30 bg-[linear-gradient(90deg,#256EFF_0%,#FFC07A_66.83%)]"></div>
        <div className="flex flex-row gap-6 mt-4">
          <div className="w-1 h-130 bg-[#256EFF]">
          </div>
          <div className="w-80 flex flex-col gap-6 mt-1 mb-2">
            {experiences.map((exp, index) => (
              <div key={index}>
                <div className="border-[#256EFF] border-2 h-5 w-5 rounded-full absolute -ml-9  flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-[#256EFF]"></div>
                </div>
                <span className="text-[#FF8C42] font-medium">
                  {exp.duration}
                </span>
                <h2 className="font-bold">{exp.title}</h2>
                <h3 className="italic font-normal text-[#256EFF]">
                  {exp.company}
                </h3>
                <p className="font-medium">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
