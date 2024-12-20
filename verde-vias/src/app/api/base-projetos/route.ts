import { NextResponse } from "next/server";
import { TipoProjeto } from "@/types";


export async function GET() {
  try {
    const response = await fetch('http://localhost:8080/VerdeVias/rest/projetos');
    if (!response.ok) {
      throw new Error('Falha ao buscar dados');
    }
    const dados: TipoProjeto[] = await response.json();
    return NextResponse.json(dados);
  } catch (error) {
    console.error('Falha ao buscar os dados:', error);
    return NextResponse.json({ error: 'Falha ao buscar os dados' }, { status: 500 });
  }
}
