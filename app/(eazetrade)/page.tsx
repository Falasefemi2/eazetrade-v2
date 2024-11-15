import Hero from "./components/eazetrade-hero";
import AppHeader from "./components/eazetrades-header";

export default function Page() {
  return (
    <main>
      <div className="bg-[#EEEAFF] h-[703px]">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <AppHeader />
          <Hero />
        </div>
      </div>
    </main>
  )
}
