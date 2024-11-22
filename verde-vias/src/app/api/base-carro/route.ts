import { NextResponse } from "next/server";
import { TipoCarro } from "@/types";

export async function GET() {
  try {
    const response = await fetch('http://localhost:8080/VerdeVias/rest/carro');
    if (!response.ok) {
      throw new Error('Falha ao buscar dados');
    }
    return NextResponse.json(response);
  } catch (error) {
    console.error('Falha ao buscar os dados:', error);
    return NextResponse.json({ error: 'Falha ao buscar os dados' }, { status: 500 });
  }
}

export async function POST(request: Request) {
    try {
      const {idCarro, marca, modelo, valor} = await request.json();
      const carro = {idCarro, marca, modelo, valor} as TipoCarro
      const response = await fetch('http://localhost:8080/VerdeVias/rest/carro')
      if (!response.ok) {
        throw new Error('Falha ao cadastrar dados');
        }
        return NextResponse.json(carro, {status:201});
    } catch (error) {
      console.error("Erro ao processar a requisição:", error);
      return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
    }
  }