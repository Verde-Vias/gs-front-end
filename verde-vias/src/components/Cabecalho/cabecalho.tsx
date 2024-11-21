import Image from "next/image"
import Link from "next/link"
import Transporte from "../../../public/images/transporte.png"

export default function Cabecalho() {
    return (
        <div className="h-screen">
            <div className="mt-28 flex flex-col md:flex-row items-center justify-between text-center lg:justify-around ">
                <div className="text-center md:text-left ml-10 w-96">
                    <h1 className="text-3xl font-extrabold">Criando o caminho para um futuro sustentável </h1>
                    <p className="mt-5">Um ecossistema dedicado à mobilidade urbana sustentável, com soluções e informações sobre transporte limpo e eficiente para cidades mais inteligentes e ecológicas</p>
                    <Link href="cadastro">
                        <button className="mt-5 bg-black text-white p-2 rounded-md hover:bg-white hover:text-black transition duration-500 border-solid border-2 border-black">Cadastre-se</button>
                    </Link>
                </div>
                <Image width={600} className="mr-5" src={Transporte} alt="Pessoa entrando no transporte"></Image>
            </div>
        </div>
    )
}