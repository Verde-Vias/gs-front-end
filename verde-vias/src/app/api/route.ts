// import { NextResponse } from "next/server";
// import { Tipo } from "@/types";

// export async function GET() {
//   try {
//     const response = await fetch('http://localhost:8080/');
//     if (!response.ok) {
//       throw new Error('Falha ao buscar dados');
//     }
    // const dados: Tipo[] = await response.json();
    // return NextResponse.json(dados);
//   } catch (error) {
//     console.error('Falha ao buscar os dados:', error);
//     return NextResponse.json({ error: 'Falha ao buscar os dados' }, { status: 500 });
//   }
// }