import Link from "next/link"
export default function Navbar() {
    return(
        <div>
            <nav className="flex flex-wrap justify-around gap-5 mr-5 ml-5 mt-2">
                <Link className="text-xl p-2" href="/">Verde<span className="text-verde">Vias</span></Link>
                <Link className="border-2 border-solid border-black hover:bg-verde hover:text-white p-2 rounded-md transition duration-500" href="projetos">Projetos Sustentáveis</Link>
                <Link className="border-2 border-solid border-black hover:bg-verde hover:text-white p-2 rounded-md transition duration-500" href="sobre">Sobre o Projeto</Link>
                <Link className="border-2 border-solid border-black hover:bg-verde hover:text-white p-2 rounded-md transition duration-500" href="integrantes">Integrantes</Link>
            </nav>
        </div>
    )
}