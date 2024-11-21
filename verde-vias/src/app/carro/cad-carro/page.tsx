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
    <div>
        <h1>Cadastro de Carros Sustentaveis</h1>
        
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
                  <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>

    </div>
  )
}

