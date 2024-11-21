"use client"

import { TipoCarro } from "@/types"
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function CadCarro() {

  const navigate = useRouter();

  const [carro, setCarro] = useState<TipoCarro>({
    $idCarro: 0,
    idCarro: 0,
    marca: "",
    modelo: "",
    valor: 0,
  });

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    
    e.preventDefault();
    try {
      const response = await fetch("/api/base-carro", {
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(carro),
      });
      
        if (response.ok) {
          const data = await response.json();
          alert("Carro cadastrado com sucesso!");
          setCarro({
            $idCarro: 0,
            idCarro: 0,
            marca: "",
            modelo: "",
            valor: 0,
          });
          console.table(data);
          navigate.push("/carro");
        }
    } catch (error) {
      console.error("Falha no cadastramento: ",error);
    }
  }

  return (
    <div className="w-screen h-screen">
        <h1 className="text-center py-8 mt-44 text-3xl">Cadastro de Carros Sustentaveis</h1>
        
        <div className="w-screen h-[80vh] flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit} className="w-[32rem] border-2 shadow-xl shadow-verde border-solid border-verde min-h-[35rem] flex flex-col items-center justify-center gap-4 rounded-lg">
                <div className="mt-12 max-w-[50rem] flex items-center justify-center">
                  <label className="text-lg px-1">id:</label>
                  <input type="number" name="id" value={carro.idCarro} placeholder="Digite o codigo do carro." required 
                    onChange={(e)=> setCarro({...carro, idCarro: parseFloat(e.target.value)})}  min={0} className="border border-black rounded-sm py-1 px-2 w-52"
                  />
                </div>
                <div className="mt-12  max-w-[28rem] flex items-center justify-center">
                  <label className="text-lg px-1">Marca:</label>
                  <input type="text" name="marca" value={carro.marca} placeholder="Digite a marca do carro." required
                  onChange={(e)=> setCarro({...carro, marca: e.target.value})} className="border border-black rounded-sm py-1 px-2 w-52"   />
                </div>
                <div className="mt-12  min-w-[28rem] flex items-center justify-center">
                  <label className="text-lg px-1">Modelo:</label>
                  <input type="text" name="modelo" value={carro.modelo} placeholder="Digite o modelo do carro." required
                  onChange={(e)=> setCarro({...carro, modelo: e.target.value})} className="border border-black rounded-sm py-1 px-2 w-52" />
                </div>
                <div className="mt-12  min-w-[28rem] flex items-center justify-center">
                  <label className="text-lg px-1">Valor:</label>
                  <input type="number" name="valor" value={carro.valor} placeholder="Digite o valor do carro." required 
                    onChange={(e)=> setCarro({...carro, valor: parseFloat(e.target.value)})}  min={0} className="border border-black rounded-sm py-1 px-2 w-52"
                  />
                  </div>
                <div className="mt-5">
                  <button type="submit" className=" bg-verde border-2 border-solid border-black hover:bg-white hover:text-black py-2 px-4 text-xl rounded-md transition duration-500">Cadastrar</button>
                </div>
            </form>
        </div>

    </div>
  )
}

