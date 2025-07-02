export function Banner() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Acessibilidade Web
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Descubra como criar experiências digitais inclusivas seguindo as
            diretrizes WCAG e padrões W3C
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              title="Começar a Aprender"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900"
            >
              Começar a Aprender
            </button>
            <button
              type="button"
              title="Ver Artigos"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
            >
              Ver Artigos
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">2.2B</div>
            <div className="text-blue-200">
              Pessoas com deficiência no mundo
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">WCAG 2.1</div>
            <div className="text-blue-200">Padrão atual de acessibilidade</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-blue-200">Sites devem ser acessíveis</div>
          </div>
        </div>
      </div>
    </section>
  );
}
