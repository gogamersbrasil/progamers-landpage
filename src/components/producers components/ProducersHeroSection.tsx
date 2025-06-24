import { ChevronRight } from "lucide-react";

export default function ProducersHeroSection() {
  return (
    <section className="relative  flex items-center justify-center bg-gradient-to-br from-gaming-darker via-gaming-dark to-gaming-darker overflow-hidden  flex-col">
      <div className="relative w-full pt-24 pb-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('/lovable-uploads/7c1cd109-b7da-44ab-9f80-4d05d0aa6a6b.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              Soluções para Produtores e Marcas
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed drop-shadow-md">
              Potencialize sua presença no universo dos e-sports com nossas
              ferramentas de gestão de alta performance.
            </p>

            <div>
              <button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-md shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                type="button"
              >
                Fale com um consultor
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
