import Link from "next/link";
import { MobileMenu } from "./mobile-menu.component";

export function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
              aria-label="Página inicial do Blog de Acessibilidade"
            >
              <span className="font-bold text-xl">Acessibilidade</span>
            </Link>
          </div>

          <nav
            className="hidden md:flex space-x-8"
            aria-label="Navegação principal"
          >
            <Link
              href="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              title="Início"
            >
              Início
            </Link>
            <Link
              href="#wcag"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              title="WCAG"
            >
              WCAG
            </Link>
            <Link
              href="#w3c"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              title="W3C"
            >
              W3C
            </Link>
            <Link
              href="#boas-praticas"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              title="Boas Práticas"
            >
              Boas Práticas
            </Link>
          </nav>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
