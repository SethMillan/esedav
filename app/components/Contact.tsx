import { MailIcon } from "@primer/octicons-react";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <section className="bg-gray-300 flex items-center justify-center flex-col py-10 gap-4">
      <h1 className="font-bold text-4xl">Contacto</h1>
      <p className="font-normal text-lg">
        ¿Tienes un proyecto en mente? Hablemos sobre como podemos ayudarte.
      </p>
      <div className="flex justify-between w-[80%]">
        <div id="informacion-contacto" className="flex gap-4 flex-col">
          <div className="flex r items-center">
            <div className="bg-black p-3 rounded-xl size-fit">
              <Mail className="text-white" />
            </div>
            <div className="flex flex-col ml-4 justify-center">
              <p className="font-semibold text-lg">Email</p>
              <p>millanseth@gmail.com</p>
            </div>
          </div>
          <div className="flex  items-center">
            <div className="bg-black p-3 rounded-xl size-fit">
              <Phone className="text-white" />
            </div>
            <div className="flex flex-col ml-4 justify-center">
              <p className="font-semibold text-lg">Teléfono</p>
              <p>+52 715 166 50 37</p>
            </div>
          </div>
          <div className="flex  items-center">
            <div className="bg-black p-3 rounded-xl size-fit">
              <MapPin className="text-white" />
            </div>
            <div className="flex flex-col ml-4 justify-center">
              <p className="font-semibold text-lg">Ubicación</p>
              <p>Morelia, Michoacán, México</p>
            </div>
          </div>
          <div className="hidden">
            <h1 className="font-bold text-2xl">Sigueme</h1>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/" target="_blank">
                <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://www.github.com/" target="_blank">
                <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div id="mail-to">
          <div id="card" className="bg-white p-4 rounded-lg shadow-md ">
            <div id="name">
              <p>Nombre</p>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div id="name">
              <p>Email</p>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div id="name">
              <p>Asunto</p>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div id="name">
              <p>Mensaje</p>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
