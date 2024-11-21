
import Link from "next/link";

export default function Cadastro() {
    return (
        <main className="flex h-screen w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center w-[95%] h-[93%] bg-black rounded-[20px] shadow-lg p-10">
                <h1 className="text-4xl text-center mb-10 text-white">
                    Cadastre-se:
                </h1>
                <section className="flex flex-col gap-6 w-1/2">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label className="text-lg mb-2">Nome:</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                className="w-full px-3 py-2 border rounded bg-white text-black"
                                placeholder="Digite seu nome:"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-lg mb-2">Telefone:</label>
                            <input
                                type="number"
                                id="telefone"
                                name="telefone"
                                className="w-full px-3 py-2 border rounded bg-white text-black"
                                placeholder="Digite seu nome:"
                            />
                        </div>
                    </div>
                    <Link href="/">
                        <button className="text-black w-full h-[50px] bg-white  rounded-[10px] border border-black cursor-pointer shadow-md text-lg font-medium hover:transition-all hover:duration-300 hover:scale-105 hover:bg-verde">
                            Cadastrar
                        </button>
                    </Link>
                </section>
            </div>
        </main>
    );
}