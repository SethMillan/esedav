// Hice esto reutilisable para que varias paginas puedan hacer uso del scroll 
// suave sin tener que repetir código, y para mantener el codigo de los componentes más limpio

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};