"use client";

import { useRouter } from "next/navigation";
import { ChevronRight, Gamepad2 } from "lucide-react";
import fundo from "../../public/fundo.png";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="relative w-full pt-6 pb-16 overflow-hidden">
      {/* Background com overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${fundo.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/60"></div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-gaming-purple/20 p-4 rounded-full border border-gaming-purple/30">
              <Gamepad2 className="w-12 h-12 text-gaming-purple" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent">
            Eleve seu Game ao Próximo Nível
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed drop-shadow-md">
            Junte-se à maior comunidade de jogadores competitivos. Participe de
            torneios, forme equipes e conquiste rankings globais.
          </p>

          <div>
            <button
              className="bg-gradient-to-r from-purple-700 to-blue-500 
                hover:from-purple-800 hover:to-blue-600 
                text-white px-6 py-2.5 
                rounded-md shadow-md shadow-purple-500/30 
                hover:shadow-lg hover:shadow-purple-600/50 
                transition-all duration-300 
                focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2"
              onClick={() => router.push("/signup")}
            >
              Começar a Jogar
              <ChevronRight className="ml-2 h-5 w-5 inline" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
