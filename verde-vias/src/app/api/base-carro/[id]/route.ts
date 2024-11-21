import { TipoCarro } from "@/types";
import { NextResponse } from "next/server"

export async function PUT(request: Request) {
  try {
    const dados: TipoCarro = await request.json();
    const id = dados.idCarro;
    if (!id) {
      throw new Error('ID do carro não fornecido');
    }

    const response = await fetch(`http://localhost:8080/VerdeVias/rest/carro/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error('Falha ao atualizar os dados');
    }

    const resultado = await response.json();
    return NextResponse.json(resultado);
  } catch (error) {
    console.error('Erro ao atualizar os dados:', error);
    return NextResponse.json({ error: 'Erro ao atualizar os dados' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
    try {
      const { searchParams } = new URL(request.url);
      const id = searchParams.get('id');
  
      if (!id) {
        throw new Error('ID do carro não fornecido');
      }
      const response = await fetch(`http://localhost:8080/VerdeVias/rest/carro/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Falha ao excluir os dados');
      }
  
      return NextResponse.json({ message: 'Carro excluído com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir os dados:', error);
      return NextResponse.json({ error: 'Erro ao excluir os dados' }, { status: 500 });
    }
  }