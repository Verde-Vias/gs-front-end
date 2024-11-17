import Nav from "../Nav/nav"
import Image from "next/image"
import Transporte from "../../../public/images/transporte.png"

export default function Cabecalho() {
    return(
        <>
            <Nav></Nav>
            <div className="mt-14 flex flex-col md:flex-row items-center justify-between text-center lg:justify-around">
                <div className="text-center md:text-left ml-10 w-80">
                    <h1 className="text-2xl font-extrabold">Criando o caminho para um futuro sustentável </h1>
                    <p className="mt-5">Um ecossistema dedicado à mobilidade urbana sustentável, com soluções e informações sobre transporte limpo e eficiente para cidades mais inteligentes e ecológicas</p>
                    <button className="mt-5 bg-black text-white p-2 rounded-md hover:bg-white hover:text-black transition duration-500 border-solid border-2 border-black">Cadastrar Projeto</button>
                </div>
                <Image width={500} className="mr-5" src={Transporte} alt="Pessoa entrando no transporte"></Image>

            </div>
        </>
    )
}