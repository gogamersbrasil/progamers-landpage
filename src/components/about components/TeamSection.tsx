"use client"
import React from "react";

import { Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./card";

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Pedro Carvalho",
      role: "CEO & Fundador",
      description: "Empreende no mercado de games desde 2014, sempre focando em otimização, estratégias e experiências épicas.",
      image: "/lovable-uploads/df53e211-12fa-4432-af87-ee2ce5c953b4.png",
      social: {
        linkedin: "https://www.linkedin.com/in/pedrocarvalhor/",
        instagram: "https://www.instagram.com/pedrohcarvalhor"
      }
    },
    {
      id: 2,
      name: "João Igor Matos",
      role: "CTO & Co-Fundador",
      description: "7 anos de experiência no mercado de desenvolvimento de software. Desenvolvedor full stack e consultor, especialista, com entrega, Liderança e excelência.",
      image: "/lovable-uploads/d8525814-2505-4952-a9a9-6c6520417a9a.png",
      social: {
        linkedin: "https://www.linkedin.com/in/joao-igor-matos/",
        instagram: "https://www.instagram.com/joao.igor/"
      }
    },
    {
      id: 3,
      name: "Barbara Carvalho",
      role: "Co-Fundadora",
      description: "Heroína do ano Ceará Awards 2023, MBA em Marketing internacional - Gamer, sempre inovando nas estratégias do mercado.",
      image: "/lovable-uploads/6311fc82-b8d2-4a2f-a9e5-2cf3b5244f4d.png",
      social: {
        linkedin: "https://www.linkedin.com/in/b%C3%A1rbaracarvalhoo/",
        instagram: "https://www.instagram.com/babi1z/"
      }
    },
    {
      id: 9,
      name: "Juliano Pimentel",
      role: "CFO",
      description: "Desenvolvedor, com sólida vivência em gestão e discovery de produtos.",
      image: "/lovable-uploads/f8afe76e-5217-4b40-b0c6-2609d92c82ad.png",
      social: {
        linkedin: "",
        instagram: ""
      }
    },
    {
      id: 10,
      name: "Sergio Gabriel",
      role: "CCO",
      description: "Designer criativo multidisciplinar, com atuação como Diretor Criativo e Diretor de Arte, sempre com foco em eficiência, inovação e impacto visual.",
      image: "/lovable-uploads/206a638c-0e30-4121-8893-61aeacb5ff44.png",
      social: {
        linkedin: "https://www.linkedin.com/in/dekki/",
        instagram: "https://www.instagram.com/sergiodekki/"
      }
    },
    {
      id: 4,
      name: "Pedro Roger",
      role: "League Ops & Dev Fullstack Jr",
      description: "Graduando de Engenharia, com vasta experiência gamer, Desenvolvedor web e designer, habilidades na área de criação de projetos, e manutenções de códigos.",
      image: "/lovable-uploads/67096908-eafa-45ff-9a99-24d3a8422e23.png",
      social: {
        linkedin: "https://www.linkedin.com/in/pedro-roger/",
        instagram: "https://www.instagram.com/eng.pedrodev/"
      }
    },
    {
      id: 5,
      name: "Jonas Silva",
      role: "Dev Fullstack",
      description: "Resiliente e adaptável, atuando em migração de sistemas e no desenvolvimento de aplicações para diversos setores, incluindo o bancário.",
      image: "/lovable-uploads/dfd5827f-ff24-4e34-a728-e20c2adfffc1.png",
      social: {
        linkedin: "",
        instagram: ""
      }
    },
    {
      id: 6,
      name: "Raul Renner",
      role: "Dev Fullstack",
      description: "Bacharel em Engenharia de Software. Desenvolvedor com mais de 5 anos de experiência no desenvolvimento de projetos de software, com atuação em diversas áreas.",
      image: "/lovable-uploads/c356ea93-26d9-48e2-94f6-66e061de0c2e.png",
      social: {
        linkedin: "",
        instagram: ""
      }
    },
    {
      id: 7,
      name: "Marcos Gomes",
      role: "Q.A",
      description: "Profissional em início de carreira na área de Quality Assurance(QA).",
      image: "/lovable-uploads/261a144c-8c20-4964-8bdd-6de75426a221.png",
      social: {
        linkedin: "",
        instagram: ""
      }
    },
    {
      id: 8,
      name: "Krisalex Oliveira",
      role: "Events Manager",
      description: "Apaixonado por criar experiências inesquecíveis promovendo eventos e criando conteúdo. Transformando momentos em histórias visuais incríveis.",
      image: "/lovable-uploads/f19c6729-d3ad-46e5-8bd7-22cab6130254.png",
      social: {
        linkedin: "",
        instagram: ""
      }
    }
  ];

 return (
    <section className="py-20 bg-gaming-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Nossa Equipe
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça as pessoas por trás da revolução dos e-sports brasileiros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
           <Card
  key={member.id}
  className="group bg-gaming-darker border border-gray-800 transition-all duration-300 hover:border-gaming-purple/60 hover:shadow-lg hover:scale-[1.02]"
>
  <CardContent className="p-6 text-center">
    <div className="relative mt-8 mb-4">
      <div className="w-28 h-28 mx-auto rounded-full p-[2px] bg-gradient-to-br from-gaming-purple via-gaming-red to-gaming-accent transition-transform duration-300 group-hover:scale-105">
        <div className="rounded-full overflow-hidden w-full h-full bg-gaming-dark">
          <Image
            src={member.image}
            alt={member.name}
            width={112}
            height={112}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>

   <h3 className="text-xl font-bold bg-gradient-to-r from-gaming-red to-gaming-purple bg-clip-text text-transparent">
  {member.name}
</h3>

    <div className="mb-4 text-sm font-semibold bg-gradient-to-r from-gaming-red to-gaming-purple bg-clip-text text-transparent">
      {member.role}
    </div>

    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
      {member.description}
    </p>

    <div className="flex justify-center space-x-4">
      {member.social.linkedin ? (
        <a
          href={member.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gaming-red/20 hover:bg-gaming-red rounded-full flex items-center justify-center transition-colors duration-300"
        >
          <Linkedin className="w-5 h-5 text-gaming-red hover:text-white" />
        </a>
      ) : (
        <div className="w-10 h-10 bg-gray-600/20 rounded-full flex items-center justify-center cursor-not-allowed">
          <Linkedin className="w-5 h-5 text-gray-600" />
        </div>
      )}

      {member.social.instagram ? (
        <a
          href={member.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gaming-accent/20 hover:bg-gaming-accent rounded-full flex items-center justify-center transition-colors duration-300"
        >
          <Instagram className="w-5 h-5 text-gaming-accent hover:text-white" />
        </a>
      ) : (
        <div className="w-10 h-10 bg-gray-600/20 rounded-full flex items-center justify-center cursor-not-allowed">
          <Instagram className="w-5 h-5 text-gray-600" />
        </div>
      )}
    </div>
  </CardContent>
</Card>


          ))}
        </div>
      </div>
    </section>
  );
}