"use client";
import { TipoCarro} from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Carro() {
  const [listaCarro, setlistaCarro] = useState<TipoCarro[]>([])
    
  const chamadaDaApi = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/VerdeVias/rest/carro"
      );
      if (!response.ok) {
        throw new Error("Falha ao buscar dados");
      }
      const dados: TipoCarro[] = await response.json();
      setlistaCarro(dados);
    } catch (error) {
      console.error("Falha ao buscar os dados:", error);
    }
  };

    useEffect(() => {
        chamadaDaApi();
    }, [])

    const handleDelete = async (idCarro:string) =>{
        try {
            const response = await fetch(`http://localhost:8080/VerdeVias/rest/carro/${idCarro}`,{
                method: 'DELETE',
            });
            if (response.ok) {
                alert("Produto excluído com sucesso!");
                chamadaDaApi();
            }
        } catch (error) {
            console.error("Erro na exclusão do produto!", error);
        }
    }

  return (
    <div className="container mx-auto h-screen flex justify-center items-center flex-col">
      <h2 className="text-2xl font-bold mb-4 text-center">Carros</h2>
      <div className="overflow-x-auto flex items-center justify-center w-full px-4">
        <table className="w-full h-80 bg-white border border-gray-200">
        <thead>
            <tr className="bg-verde">
                <th className="py-2 px-4 border-b border-gray-200 text-left">ID</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">marca</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">modelo</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">valor</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">EDITAR | EXCLUIR</th>
            </tr>
        </thead>
        <tbody>
            {listaCarro.map((c) => (
                <tr key={c.$idCarro} className="hover:bg-verde">
                  <td className="py-2 px-4 border-b border-gray-200">{c.idCarro}</td>
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
                <td colSpan={4} className="py-4 px-4 border-t border-gray-200 text-center">
                    <h2 className="text-xl font-bold">Quantidade de registros: {listaCarro.length}</h2>
                </td>
            </tr>
        </tfoot>
    </table>
   
    </div>
    <div className="flex items-center justify-center mt-10">
    <Link className="border-2 border-solid border-black hover:bg-verde hover:text-white py-2 px-4 text-xl rounded-md transition duration-500" href="carro/cad-carro">Cadastre</Link>
    </div>
</div>
  )
}

