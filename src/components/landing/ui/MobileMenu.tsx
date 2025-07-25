import { useState } from "react";

interface Route {
  path: string;
  label: string;
}

interface MobileMenuProps {
  routes: Route[];
}

export default function MobileMenu({ routes }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1 p-2 cursor-pointer"
        aria-label="Toggle mobile menu"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-[6px]" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[80px] sm:top-[90px] left-0 right-0 transition-all duration-300 md:hidden z-40 bg-secondary ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}
      >
        <ul className="flex flex-col p-6 space-y-4">
          {routes.map(({ path, label }) => (
            <li key={path}>
              <a
                href={path}
                onClick={closeMenu}
                className="block py-3 px-4 text-white hover:text-primary transition-colors text-lg font-medium"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-4 space-y-3">
            <a
              className="block bg-transparent border border-primary text-primary btn text-center py-3"
              href="auth#login"
              onClick={closeMenu}
            >
              Iniciar sesión
            </a>
            <a
              className="block bg-white text-secondary btn text-center py-3"
              href="/challenges"
              onClick={closeMenu}
            >
              Empezar
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
