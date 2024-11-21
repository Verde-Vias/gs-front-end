"use client";
import { TipoProjeto} from "@/types";
import { useEffect, useState } from "react";

export default function Projetos() {
  const [projetos, setProjetos] = useState<TipoProjeto[]>([]);

  const chamadaDaApi = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/VerdeVias/rest/projetos"
      );
      if (!response.ok) {
        throw new Error("Falha ao buscar dados");
      }
      const dados: TipoProjeto[] = await response.json();
      setProjetos(dados);
    } catch (error) {
      console.error("Falha ao buscar os dados:", error);
    }
  };

  useEffect(() => {
    chamadaDaApi();
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full items-center justify-center gap-4">
      <h1 className="w-full text-center text-4xl mt-40">Projetos <span className="text-verde">Cadastrados</span></h1>
      <div className="flex w-[90%] flex-wrap items-center justify-center gap-16 py-16">
        {projetos.map((projeto) => (
          <div
            key={projeto.idProjeto}
            className="mt-10 p-2 w-80 h-80 flex flex-col items-center justify-center text-center gap-5 border-2 shadow-lg shadow-verde border-solid border-verde rounded-lg hover:scale-110 hover:duration-300"
          >
            <h2 className="text-2xl">Id: {projeto.idProjeto}</h2>
            <p><span className="text-lg font-semibold">Descrição:</span> {projeto.descricao}</p>
            <p><span className="text-lg font-semibold">Custo: </span> R${projeto.custo}</p>
            <p><span className="text-lg font-semibold">Status: </span> {projeto.status}</p>
          </div>
        ))}
      </div>
      
      <p className="md:w-4/5 text-lg my-36 lg:w-[60%] p-8 border-2 shadow-md text-center shadow-verde border-solid border-verde rounded-md sm:w-4/5 ">Projetos sustentáveis no transporte público, como a adoção de veículos elétricos e combustíveis limpos, são fundamentais para reduzir a poluição do ar e os impactos das emissões de gases do efeito estufa. O objetivo é criar sistemas de mobilidade mais eficientes, acessíveis e ambientalmente responsáveis, contribuindo para cidades mais saudáveis e sustentáveis.</p>
    </div>
  );
}
