export function WCAGSection() {
  return (
    <section
      id="wcag"
      className="bg-gray-800 rounded-lg p-4 md:p-8 border border-gray-700"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
        WCAG - Web Content Accessibility Guidelines
      </h2>

      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 mb-6">
          As Web Content Accessibility Guidelines (WCAG) são um conjunto
          de diretrizes desenvolvidas pelo W3C para tornar o conteúdo
          web acessível para pessoas com deficiências.
        </p>

        <h3 className="text-xl font-semibold text-white mb-4">
          Princípios Fundamentais
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-300 mb-2">
              Perceptível
            </h4>
            <p className="text-gray-200 text-sm">
              A informação deve ser apresentada de forma que os usuários
              possam percebê-la.
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-300 mb-2">
              Operável
            </h4>
            <p className="text-gray-200 text-sm">
              Os componentes da interface devem ser operáveis por todos
              os usuários.
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-300 mb-2">
              Compreensível
            </h4>
            <p className="text-gray-200 text-sm">
              A informação e operação da interface devem ser
              compreensíveis.
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-300 mb-2">
              Robusto
            </h4>
            <p className="text-gray-200 text-sm">
              O conteúdo deve ser robusto o suficiente para ser
              interpretado por tecnologias assistivas.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-white mb-4">
          Níveis de Conformidade
        </h3>
        <div className="space-y-3 mb-6">
          <div className="flex md:items-center space-x-3 md:flex-row flex-col items-start">
            <div className="flex items-center space-x-3">
              <span className="w-4 h-4 bg-red-500 rounded-full" />
              <span className="text-white font-medium">Nível A</span>
            </div>
            <span className="text-gray-200">
              - Requisitos básicos de acessibilidade
            </span>
          </div>

          <div className="flex md:items-center space-x-3 md:flex-row flex-col items-start">
            <div className="flex items-center space-x-3">
              <span className="w-4 h-4 bg-yellow-500 rounded-full" />
              <span className="text-white font-medium">Nível AA</span>
            </div>
            <span className="text-gray-200">
              - Requisitos intermediários (padrão recomendado)
            </span>
          </div>

          <div className="flex md:items-center space-x-3 md:flex-row flex-col items-start">
            <div className="flex items-center space-x-3">
              <span className="w-4 h-4 bg-green-500 rounded-full" />
              <span className="text-white font-medium">Nível AAA</span>
            </div>
            <span className="text-gray-200">
              - Requisitos avançados de acessibilidade
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 