export function SidebarSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-lg p-4 md:p-8 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">
          Artigos Relacionados
        </h3>
        <div className="space-y-4">
          <button
            className="block w-full text-left p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-label="Ler artigo sobre Como Implementar ARIA Labels"
          >
            <h4 className="font-semibold text-white mb-2">
              Como Implementar ARIA Labels
            </h4>
            <p className="text-gray-200 text-sm">
              Aprenda a usar atributos ARIA para melhorar a
              acessibilidade...
            </p>
          </button>
          <button
            className="block w-full text-left p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-label="Ler artigo sobre Testando Acessibilidade"
          >
            <h4 className="font-semibold text-white mb-2">
              Testando Acessibilidade
            </h4>
            <p className="text-gray-200 text-sm">
              Ferramentas e técnicas para testar a acessibilidade do seu
              site...
            </p>
          </button>
          <button
            className="block w-full text-left p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-label="Ler artigo sobre Design Inclusivo"
          >
            <h4 className="font-semibold text-white mb-2">
              Design Inclusivo
            </h4>
            <p className="text-gray-200 text-sm">
              Princípios de design que consideram a diversidade dos
              usuários...
            </p>
          </button>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 md:p-8 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">
          Fique Atualizado
        </h3>
        <p className="text-gray-300 mb-4">
          Receba as últimas novidades sobre acessibilidade web
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Digite seu e-mail para se inscrever na newsletter"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Inscrever-se
          </button>
        </form>
      </div>
    </div>
  );
} 