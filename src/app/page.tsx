import { Header } from "@/components/header.component";
import { WCAGSection } from "@/components/wcag-section";
import { W3CSection } from "@/components/w3c-section";
import { BoasPraticasSection } from "@/components/good-practice-section";

import { Footer } from "@/components/footer.component";
import { Banner } from "@/components/banner.component";
import { SidebarSection } from "@/components/sidebar-section";
import { AuthorCard } from "@/components/author-card.component";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <Header />

      <Banner />

      <div
        id="main-content"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <WCAGSection />

            <W3CSection />

            <BoasPraticasSection />
          </div>

          <div className="space-y-8">
            <AuthorCard />

            <SidebarSection />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
