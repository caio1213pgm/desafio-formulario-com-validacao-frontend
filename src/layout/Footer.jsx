import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
function Footer() {
  return (
    <footer>
      <div className="w-full bg-amber-700 md:p-6 px-2 flex items-center gap-2 h-[82px] justify-between">
        <h1 className="text-white md:text-3xl font-medium">
          Caio Fabio - Todos os direitos reservados
        </h1>
        <div className="text-white md:text-5xl flex gap-5 text-xl">
          <a href="https://www.linkedin.com/in/caiofcfx00/">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/caio1213pgm">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;