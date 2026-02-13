import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!); // en variable para no hardcodear la clave jaja

/*

  Notas del autor:
  Nombres estándar de EmailJS
  name="from_name"   // o "user_name"
  name="reply_to"    // o "user_email"
  name="subject"     // asunto (opcional)
  name="message"     // mensaje

    En el template de EmailJS hice esto, se ve interesante
    si hiciera otro template, habria que cambiar los nombres
    de acuerdo al HTML del formulario, pero por ahora esto funciona bien

*/

function Contact() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [status, setStatus] = React.useState<
    "loading" | "success" | "error" | null
  >(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return; // por si acaso

    setIsLoading(true);
    setStatus("loading");

    const emailPromise = emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formRef.current,
    );

    toast.promise(emailPromise, {
      loading: "Enviando mensaje...",
      success: (response) => {
        console.log(
          "Correo enviado exitosamente : " + response.status,
          response.text,
        );
        formRef.current?.reset(); // resetear el formulario después de enviar
        setStatus("success");
        setIsLoading(false);
        return "Mensaje enviado exitosamente. ¡Gracias por contactarme!";
      },
      error: (response) => {
        console.error("Error al enviar el correo:", response);
        setStatus("error");
        setIsLoading(false);
        return "Error al enviar el mensaje. Por favor, inténtalo de nuevo.";
      },
    });
  };

  return (
    <section id="contact" className="bg-gray-200 flex items-center justify-center flex-col py-10 gap-4">
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
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <Label htmlFor="from_name">Nombre</Label>
              <Input
                id="from_name"
                name="from_name"
                type="text"
                placeholder="Tu nombre"
                disabled={isLoading}
              />

              <Label htmlFor="reply_to">Email</Label>
              <Input
                id="reply_to"
                name="reply_to"
                type="email"
                placeholder="tu@email.com"
                disabled={isLoading}
              />

              <Label htmlFor="title">Asunto</Label>
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="¿En qué puedo ayudarte?"
                disabled={isLoading}
              />

              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Cuentame sobre tu proyecto..."
                required
                rows={4}
                disabled={isLoading}
              />
              <Button type="submit">
                {isLoading ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
