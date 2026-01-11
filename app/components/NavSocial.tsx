import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

function NavSocial() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Separator component for visual separation */}
      <div className="w-px h-40 bg-[#2E3A59]/50" />
      {/* Social media navigation links with tooltips */}
      <nav className="flex flex-col gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <a href="https://www.facebook.com/" target="_blank">
              <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </a>
          </TooltipTrigger>
          <TooltipContent>Conoce mi perfil de Facebook!</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <a href="https://www.github.com/" target="_blank">
              <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
            </a>
          </TooltipTrigger>
          <TooltipContent>Conoce mi perfil de GitHub!</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <a href="https://www.instagram.com/" target="_blank">
              <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
          </TooltipTrigger>
          <TooltipContent>Conoce mi perfil de Instagram!</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <a href="https://www.linkedin.com/" target="_blank">
              <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </TooltipTrigger>
          <TooltipContent>Conoce mi perfil de LinkedIn!</TooltipContent>
        </Tooltip>
      </nav>
      {/* Separator component for visual separation */}
      <div className="w-px h-40 bg-[#2E3A59]/50" />
      
    </div>
  );
}

export default NavSocial;
