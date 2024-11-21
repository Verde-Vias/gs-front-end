"use client";
import { TipoCarro} from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Carro() {
  const [listaCarro, setlistaCarro] = useState<TipoCarro[]>([])
    
  const chamadaApi = async () => {
    try {
      const response = await fetch("http://localhost:8080/VerdeVias/rest/carro");
      if (!response.ok) {
        throw new Error("Erro ao buscar dados da API");
      }
      const data = await response.json();
      const { documents } = data;
      console.log(documents);
      setlistaCarro(documents);
    } catch (error) {
      console.error("Erro ao carregar a lista de carros:", error);
    }
  };

    useEffect(() => {
        chamadaApi();
    }, [])

    const handleDelete = async (idCarro:string) =>{
        try {
            const response = await fetch(`/api/base-carro/${idCarro}`,{
                method: 'DELETE',
            });
            if (response.ok) {
                alert("Produto excluído com sucesso!");
                chamadaApi();
            }
        } catch (error) {
            console.error("Erro na exclusão do produto!", error);
        }
    }

  return (
    <div className="container mx-auto my-8">
<h2 className="text-2xl font-bold mb-4">Carros</h2>
<div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200">
        <thead>
            <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b border-gray-200 text-left">ID</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">marca</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">modelo</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">valor</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">EDITAR | EXCLUIR</th>
            </tr>
        </thead>
        <tbody>
            {listaCarro.map((c) => (
                <tr key={c.$idCarro} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b border-gray-200">{c.marca}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{c.modelo}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{c.valor}</td>
                    <td className="py-2 px-4 border-b border-gray-200">
                        <Link href={`/carro/${c.idCarro}`} className="text-blue-500 hover:underline">EDITAR</Link> | 
                        <Link href="#" onClick={() => handleDelete(c.idCarro.toString())} className="text-red-500 hover:underline">EXCLUIR</Link>
                    </td>
                </tr>
            ))}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan={4} className="py-4 px-4 border-t border-gray-200 text-left">
                    <h2 className="text-xl font-bold">Quantidade de registros: {listaCarro.length}</h2>
                </td>
            </tr>
        </tfoot>
    </table>
   
    </div>
    <Link className="border-2 border-solid border-black hover:bg-verde hover:text-white p-2 rounded-md transition duration-500" href="carro/cad-carro">Cadastre</Link>
</div>
  )
}

/* <div className="min-h-screen flex flex-col w-full items-center justify-center gap-4">
      <h1 className="w-full text-center text-4xl mt-40">Carros <span className="text-verde">Cadastrados</span></h1>
      <div className="flex w-[90%] flex-wrap items-center justify-center gap-16 py-16">
        {carro.map((carro) => (
          <div
            key={carro.idCarro}
            className="mt-10 p-2 w-80 h-80 flex flex-col items-center justify-center text-center gap-5 border-2 shadow-lg shadow-verde border-solid border-verde rounded-lg hover:scale-110 hover:duration-300"
          >
            <h2 className="text-2xl">Id: {carro.idCarro}</h2>
            <p><span className="text-lg font-semibold">Marca:</span> {carro.marca}</p>
            <p><span className="text-lg font-semibold">Modelo: </span> R${carro.modelo}</p>
            <p><span className="text-lg font-semibold">Valor: </span> {carro.valor}</p>
          </div>
        ))}
      </div>
      
  ); */