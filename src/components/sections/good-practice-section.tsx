import { Lightbulb } from "lucide-react";

export function GoodPracticeSection() {
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

          <div className="bg-gray-700 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-green-400 mb-3">
              7. Diálogos Acessíveis
            </h4>
            <p className="text-gray-200 mb-3">
              Implemente diálogos que sejam totalmente acessíveis para usuários de tecnologias assistivas:
            </p>

            <div className="space-y-6">
              <div>
                <h5 className="text-md font-semibold text-gray-200 mb-2">
                  Elemento Dialog Nativo
                </h5>
                <p className="text-gray-200 mb-2">
                  Use o elemento HTML5 &lt;dialog&gt; para melhor suporte nativo:
                </p>
                <pre className="bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`<!-- Botão que abre o diálogo -->
<button 
  aria-haspopup="dialog"
  aria-controls="dialog-nativo"
  aria-expanded="false"
  onclick="openDialog('dialog-nativo')"
>
  Abrir Diálogo Nativo
</button>

<!-- Diálogo nativo com acessibilidade completa -->
<dialog 
  id="dialog-nativo"
  aria-labelledby="dialog-nativo-titulo"
  aria-describedby="dialog-nativo-descricao"
  aria-modal="true"
>
  <div class="dialog-header">
    <h2 id="dialog-nativo-titulo">Confirmar Exclusão</h2>
    <button 
      aria-label="Fechar diálogo"
      onclick="closeDialog('dialog-nativo')"
      class="close-button"
    >
      ×
    </button>
  </div>
  
  <div class="dialog-content">
    <p id="dialog-nativo-descricao">
      Tem certeza que deseja excluir este item? Esta ação não pode ser desfeita.
    </p>
    
    <div class="dialog-actions">
      <button 
        onclick="confirmarExclusao()"
        class="btn-primary"
      >
        Confirmar
      </button>
      <button 
        onclick="closeDialog('dialog-nativo')"
        class="btn-secondary"
      >
        Cancelar
      </button>
    </div>
  </div>
</dialog>

<!-- JavaScript para controle do diálogo -->
<script>
function openDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  const button = document.querySelector(\`[aria-controls="\${dialogId}"]\`);
  
  dialog.showModal();
  button.setAttribute('aria-expanded', 'true');
  
  // Foco no primeiro elemento interativo
  dialog.querySelector('button, input, textarea, select').focus();
}

function closeDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  const button = document.querySelector(\`[aria-controls="\${dialogId}"]\`);
  
  dialog.close();
  button.setAttribute('aria-expanded', 'false');
  button.focus(); // Retorna o foco ao botão que abriu
}
</script>`}
                  </code>
                </pre>
              </div>

              <div>
                <h5 className="text-md font-semibold text-gray-200 mb-2">
                  Div com Role Dialog (Fallback)
                </h5>
                <p className="text-gray-200 mb-2">
                  Para navegadores que não suportam o elemento dialog nativo:
                </p>
                <pre className="bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`<!-- Botão que abre o diálogo customizado -->
<button 
  aria-haspopup="dialog"
  aria-controls="dialog-custom"
  aria-expanded="false"
  onclick="openCustomDialog('dialog-custom')"
>
  Abrir Diálogo Customizado
</button>

<!-- Diálogo customizado com role="dialog" -->
<div 
  id="dialog-custom"
  role="dialog"
  aria-labelledby="dialog-custom-titulo"
  aria-describedby="dialog-custom-descricao"
  aria-modal="true"
  class="dialog-overlay"
  style="display: none;"
>
  <div class="dialog-container">
    <div class="dialog-header">
      <h2 id="dialog-custom-titulo">Configurações do Perfil</h2>
      <button 
        aria-label="Fechar diálogo"
        onclick="closeCustomDialog('dialog-custom')"
        class="close-button"
      >
        ×
      </button>
    </div>
    
    <div class="dialog-content">
      <p id="dialog-custom-descricao">
        Configure suas preferências de perfil abaixo:
      </p>
      
      <form>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" />
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
        
        <div class="dialog-actions">
          <button type="submit" class="btn-primary">
            Salvar
          </button>
          <button 
            type="button"
            onclick="closeCustomDialog('dialog-custom')"
            class="btn-secondary"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- JavaScript para controle do diálogo customizado -->
<script>
function openCustomDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  const button = document.querySelector(\`[aria-controls="\${dialogId}"]\`);
  
  dialog.style.display = 'flex';
  button.setAttribute('aria-expanded', 'true');
  
  // Capturar foco dentro do diálogo
  trapFocus(dialog);
  
  // Foco no primeiro elemento interativo
  dialog.querySelector('button, input, textarea, select').focus();
}

function closeCustomDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  const button = document.querySelector(\`[aria-controls="\${dialogId}"]\`);
  
  dialog.style.display = 'none';
  button.setAttribute('aria-expanded', 'false');
  button.focus(); // Retorna o foco ao botão que abriu
}

// Função para capturar o foco dentro do diálogo
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  element.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
    
    if (e.key === 'Escape') {
      closeCustomDialog(element.id);
    }
  });
}
</script>`}
                  </code>
                </pre>
              </div>

              <div className="bg-gray-600 p-4 rounded">
                <h6 className="text-sm font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                  <Lightbulb /> Atributos de Acessibilidade para Diálogos:
                </h6>
                <ul className="text-gray-200 text-sm space-y-1">
                  <li>
                    • <strong>aria-haspopup="dialog":</strong> Indica que o botão abre um diálogo
                  </li>
                  <li>
                    • <strong>aria-controls:</strong> Associa o botão ao diálogo que ele controla
                  </li>
                  <li>
                    • <strong>aria-expanded:</strong> Indica se o diálogo está aberto ou fechado
                  </li>
                  <li>
                    • <strong>aria-labelledby:</strong> Associa o diálogo ao seu título
                  </li>
                  <li>
                    • <strong>aria-describedby:</strong> Associa o diálogo à sua descrição
                  </li>
                  <li>
                    • <strong>aria-modal="true":</strong> Indica que é um diálogo modal
                  </li>
                  <li>
                    • <strong>role="dialog":</strong> Define o papel semântico (para divs)
                  </li>
                  <li>• <strong>Gerenciamento de foco:</strong> Captura e retorna o foco adequadamente</li>
                  <li>• <strong>Suporte a teclado:</strong> Tab, Shift+Tab, Escape</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
