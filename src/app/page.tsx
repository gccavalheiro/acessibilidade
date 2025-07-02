import { Header } from "@/components/header.component";
import { GoodPracticeSection } from "@/components/sections/good-practice-section";
import { W3CSection } from "@/components/sections/w3c-section";
import { WCAGSection } from "@/components/sections/wcag-section";

import { AuthorCard } from "@/components/author-card.component";
import { Banner } from "@/components/banner.component";
import { Footer } from "@/components/footer.component";
import { SidebarSection } from "@/components/sections/sidebar-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <Header />

      <Banner />

      <main
        id="main-content"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <WCAGSection />

            <W3CSection />

            <GoodPracticeSection />
          </div>

          <div className="space-y-8">
            <AuthorCard />

            <SidebarSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
