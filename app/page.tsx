import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <main className="flex h-screen items-center justify-center">
          <div className="flex flex-col items-center justify-center w-4xl h-full -mt-15">
            <p className="font-extralight text-2xl -mb-6">Hola, soy</p>
            <h1 className="text-[130px] font-extrabold ">SETH MILLAN</h1>
            <h2 className="text-5xl font-extrabold opacity-85">Full Stack Developer</h2>
            <p className="text-xl font-normal opacity-85 text-center mt-6 ">
              Desarrollo soluciones web modernas y escalables. Especializado en
              crear experiencias digitales que combinan diseño elegante con
              código limpio.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
