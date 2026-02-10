import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const  nombre = formData.get("nombre") as string;
    const email = formData.get("email") as string;
    const asunto = formData.get("asunto") as string;
    const mensaje = formData.get("mensaje") as string;

    window.location.href = `mailto:millanseth@gmail.com?subject=${encodeURIComponent(asunto)}&body=Nombre: ${encodeURIComponent(nombre)}%0AEmail: ${encodeURIComponent(email)}%0AMensaje: ${encodeURIComponent(mensaje)}`;
    
  }
  return (
    <section className="bg-gray-200 flex items-center justify-center flex-col py-10 gap-4">
      <h1 className="font-bold text-4xl">Contacto</h1>
      <p className="font-normal text-lg">
        ¿Tienes un proyecto en mente? Hablemos sobre como podemos ayudarte.
      </p>
      <div className="flex justify-between w-[80%]">
        <div id="informacion-contacto" className="flex gap-4 flex-col">
          <div
            className="flex items-center hover:bg-gray-300 p-2 rounded-lg transition-colors duration-100 hover:cursor-pointer"
            onClick={() =>
              (window.location.href = "mailto:millanseth@gmail.com")
            }
          >
            <div className="bg-black p-3 rounded-xl size-fit">
              <Mail className="text-white" />
            </div>
            <div className="flex flex-col ml-4 justify-center">
              <p className="font-semibold text-lg">Email</p>
              <p>millanseth@gmail.com</p>
            </div>
          </div>
          <div
            className="flex  items-center hover:bg-gray-300 p-2 rounded-lg transition-colors duration-100 hover:cursor-pointer"
            onClick={() => (window.location.href = "tel:+527151665037")}
          >
            <div className="bg-black p-3 rounded-xl size-fit">
              <Phone className="text-white" />
            </div>
            <div className="flex flex-col ml-4 justify-center">
              <p className="font-semibold text-lg">Teléfono</p>
              <p>+52 715 166 50 37</p>
            </div>
          </div>
          <div
            className="flex  items-center hover:bg-gray-300 p-2 rounded-lg transition-colors duration-100 hover:cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Morelia,+Michoac%C3%A1n,+M%C3%A9xico",
              )
            }
          >
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
        <div id="mail-to" className="w-100 ">
          <div
            id="card"
            className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Label htmlFor="nombre">Nombre</Label>
              <Input id="nombre" name="nombre" type="text" placeholder="Tu nombre" />

              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="tu@email.com" />

              <Label htmlFor="asunto">Asunto</Label>
              <Input
                id="asunto"
                name="asunto"
                type="text"
                placeholder="¿En qué puedo ayudarte?"
              />

              <Label htmlFor="mensaje">Mensaje</Label>
              <Textarea
                id="mensaje"
                name="mensaje"
                placeholder="Cuentame sobre tu proyecto..."
                required
                rows={4}
              />
              <Button type="submit">Enviar Mensaje</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
