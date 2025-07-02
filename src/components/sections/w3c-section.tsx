export function W3CSection() {
  return (
    <section
      id="w3c"
      className="bg-gray-800 rounded-lg p-4 md:p-8 border border-gray-700"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
        W3C - World Wide Web Consortium
      </h2>

      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 mb-6">
          O World Wide Web Consortium (W3C) é uma organização
          internacional que desenvolve padrões para a World Wide Web,
          garantindo que a web seja acessível, interoperável e
          universal.
        </p>

        <h3 className="text-xl font-semibold text-white mb-4">
          Principais Iniciativas
        </h3>
        <ul className="space-y-3 mb-6 text-gray-300">
          <li className="flex items-start space-x-3">
            <span className="text-blue-300 mt-1">•</span>
            <span>Desenvolvimento de padrões web abertos</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-300 mt-1">•</span>
            <span>Criação de diretrizes de acessibilidade (WCAG)</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-300 mt-1">•</span>
            <span>
              Promoção da interoperabilidade entre tecnologias
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-300 mt-1">•</span>
            <span>Desenvolvimento de ferramentas de validação</span>
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-4">
          Tecnologias W3C
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-700 p-3 rounded-lg text-center">
            <div className="text-blue-300 font-semibold">HTML</div>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg text-center">
            <div className="text-blue-300 font-semibold">CSS</div>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg text-center">
            <div className="text-blue-300 font-semibold">
              JavaScript
            </div>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg text-center">
            <div className="text-blue-300 font-semibold">ARIA</div>
          </div>
        </div>
      </div>
    </section>
  );
} 