import { GithubIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";

export function AuthorCard() {
  return (
    <div className="bg-gray-800 rounded-lg p-4 md:p-8 border border-gray-700">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Image
            src="https://github.com/gccavalheiro.png"
            alt="Foto de uma pessoa"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
          />
          <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-800"></div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">Gabriel Cavalheiro</h3>
          <p className="text-gray-300 text-sm">Desenvolvedor Front-end</p>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">React</span>
            <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">Next.js</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-gray-200 text-sm leading-relaxed">
          Desenvolvedor web apaixonado por acessibilidade.
          Criando experiências digitais inclusivas para todos.
        </p>
      </div>

      <div className="flex space-x-3 mt-4">
        <a
          href="https://www.linkedin.com/in/gabrielcavalheiro"
          className="text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
          aria-label="LinkedIn do autor"
          target="_blank"
          title="LinkedIn do autor"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>

        <a
          href="https://github.com/gccavalheiro"
          className="text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
          aria-label="GitHub do autor"
          title="Github do autor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </div>
    </div>
  );
} 