"use client"

import { TipoCarro } from "@/types"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function EditarCarro({params}:{params:{id:number}}) {

  const navigate = useRouter();

  const [carro, setCarro] = useState<TipoCarro>({
    $idCarro: 0,
    idCarro: 0,
    marca: "",
    modelo: "",
    valor: 0,
  });

  useEffect(() => {
    const chamadaApi = async () => {
        const response = await fetch(`/api/base-carro/${params.id}`);
        const data = await response.json();
        setCarro(data);
    }
    chamadaApi();
}, [params.id])

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    
    e.preventDefault();
    try {
      const response = await fetch(`/api/base-carro/${params.id}`, {
        method: "PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(carro),
      });
      
        if (response.ok) {
          const data = await response.json();
          alert("Carro atualizado com sucesso!");
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
      console.error("Falha na atualização: ",error);
    }
  }

  return (
    <div>
        <h1>Editar Carros Sustentaveis</h1>
        
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                  <label>id:</label>
                  <input type="number" name="id" value={carro.idCarro} placeholder="Digite o codigo do carro." required 
                    onChange={(e)=> setCarro({...carro, idCarro: parseFloat(e.target.value)})}  min={0}
                  />
                </div>
                <div>
                  <label>Marca:</label>
                  <input type="text" name="marca" value={carro.marca} placeholder="Digite a marca do carro." required
                  onChange={(e)=> setCarro({...carro, marca: e.target.value})}  />
                </div>
                <div>
                  <label>Modelo:</label>
                  <input type="text" name="modelo" value={carro.modelo} placeholder="Digite o modelo do carro." required
                  onChange={(e)=> setCarro({...carro, modelo: e.target.value})} />
                </div>
                <div>
                <div>
                  <label>Valor:</label>
                  <input type="number" name="valor" value={carro.valor} placeholder="Digite o valor do carro." required 
                    onChange={(e)=> setCarro({...carro, valor: parseFloat(e.target.value)})}  min={0}
                  />
                </div>
                  <button type="submit">Alterar</button>
                </div>
            </form>
        </div>

    </div>
  )
}

