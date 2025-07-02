import { Lightbulb } from "lucide-react";

export function BoasPraticasSection() {
  return (
    <section
      id="boas-praticas"
      className="bg-gray-800 rounded-lg p-4 md:p-8 border border-gray-700"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
        Boas Práticas de Acessibilidade
      </h2>

      <div className="prose prose-invert max-w-none">
        <h3 className="text-xl font-semibold text-white mb-4">
          Implementação Prática
        </h3>

        <div className="space-y-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-green-400 mb-3">
              1. Estrutura Semântica
            </h4>
            <p className="text-gray-200 mb-3">
              Use elementos HTML semânticos para estruturar o conteúdo:
            </p>
            <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
              <code className="text-green-400">
                {`<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>`}
              </code>
            </pre>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-green-400 mb-3">
              2. Textos Alternativos
            </h4>
            <p className="text-gray-200 mb-3">
              Sempre forneça textos alternativos para imagens:
            </p>
            <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
              <code className="text-green-400">
                {`<img src="logo.png" alt="Logo da empresa" />`}
              </code>
            </pre>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-green-400 mb-3">
              3. Contraste de Cores
            </h4>
            <p className="text-gray-200 mb-3">
              Mantenha um contraste adequado entre texto e fundo:
            </p>
            <ul className="text-gray-200 space-y-1">
              <li>• Texto normal: mínimo 4.5:1</li>
              <li>• Texto grande: mínimo 3:1</li>
              <li>• Use ferramentas de verificação de contraste</li>
            </ul>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-green-400 mb-3">
              4. Navegação por Teclado
            </h4>
            <p className="text-gray-200 mb-3">
              Garanta que todos os elementos sejam navegáveis por teclado:
            </p>
            <ul className="text-gray-200 space-y-1">
              <li>• Use Tab para navegar</li>
              <li>• Implemente indicadores de foco visíveis</li>
              <li>• Evite armadilhas de teclado</li>
            </ul>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-green-400 mb-3">
              5. Landmarks (Marcadores de Região)
            </h4>
            <p className="text-gray-200 mb-3">
              Use landmarks para organizar a estrutura da página e melhorar a
              navegação para usuários de tecnologias assistivas:
            </p>
            <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
              <code className="text-green-400">
                {`<!-- Exemplo de estrutura com landmarks -->
<header role="banner">
  <nav role="navigation" aria-label="Menu principal">
    <!-- Links de navegação -->
  </nav>
</header>

<main role="main">
  <section role="region" aria-labelledby="section-title">
    <h2 id="section-title">Título da Seção</h2>
    <!-- Conteúdo da seção -->
  </section>
</main>

<aside role="complementary" aria-labelledby="sidebar-title">
  <h3 id="sidebar-title">Informações Adicionais</h3>
  <!-- Conteúdo complementar -->
</aside>

<footer role="contentinfo">
  <!-- Informações de rodapé -->
</footer>`}
              </code>
            </pre>
            <p className="text-gray-200 mt-3 text-sm">
              <strong>Tipos de Landmarks:</strong> banner, navigation, main,
              complementary, contentinfo, region, search, form
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-green-400 mb-3">
              6. Atributos ARIA: aria-label e aria-labelledby
            </h4>
            <p className="text-gray-200 mb-3">
              Use estes atributos para fornecer descrições claras e contextuais:
            </p>

            <div className="space-y-4">
              <div>
                <h5 className="text-md font-semibold text-gray-200 mb-2">
                  aria-label
                </h5>
                <p className="text-gray-200 mb-2">
                  Fornece uma descrição direta do propósito da região:
                </p>
                <pre className="bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`<!-- Navegação com descrição clara -->
<nav aria-label="Menu principal do site">
  <ul>
    <li><a href="/">Início</a></li>
    <li><a href="/sobre">Sobre</a></li>
  </ul>
</nav>

<!-- Botão com contexto -->
<button aria-label="Fechar modal de login">
  <svg>...</svg>
</button>

<!-- Formulário com propósito específico -->
<form aria-label="Formulário de busca de produtos">
  <input type="search" placeholder="Buscar produtos..." />
</form>`}
                  </code>
                </pre>
              </div>

              <div>
                <h5 className="text-md font-semibold text-gray-200 mb-2">
                  aria-labelledby
                </h5>
                <p className="text-gray-200 mb-2">
                  Associa a região a um título específico existente na página:
                </p>
                <pre className="bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`<!-- Seção com título associado -->
<section aria-labelledby="produtos-titulo">
  <h2 id="produtos-titulo">Produtos em Destaque</h2>
  <div class="produtos-grid">
    <!-- Lista de produtos -->
  </div>
</section>

<!-- Sidebar com título -->
<aside aria-labelledby="sidebar-titulo">
  <h3 id="sidebar-titulo">Informações Adicionais</h3>
  <div class="sidebar-content">
    <!-- Conteúdo do sidebar -->
  </div>
</aside>

<!-- Modal com título -->
<div role="dialog" aria-labelledby="modal-titulo">
  <h2 id="modal-titulo">Confirmar Exclusão</h2>
  <p>Tem certeza que deseja excluir este item?</p>
</div>`}
                  </code>
                </pre>
              </div>

              <div className="bg-gray-600 p-4 rounded">
                <h6 className="text-sm font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                  <Lightbulb /> Dicas Importantes:
                </h6>
                <ul className="text-gray-200 text-sm space-y-1">
                  <li>
                    • <strong>aria-label:</strong> Use quando não há texto
                    visível ou precisa de contexto adicional
                  </li>
                  <li>
                    • <strong>aria-labelledby:</strong> Use quando já existe um
                    título visível na página
                  </li>
                  <li>• Mantenha as descrições concisas e informativas</li>
                  <li>
                    • Evite redundância - não repita informações já visíveis
                  </li>
                  <li>• Teste com leitores de tela para verificar a clareza</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
