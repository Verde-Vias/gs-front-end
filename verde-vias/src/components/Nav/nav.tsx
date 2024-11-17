export default function Navbar() {
    return(
        <div>
            <nav className="flex flex-wrap justify-around gap-5 mr-5 ml-5 mt-2">
                <a className="text-xl p-2" href="">Verde<span className="text-verde">Vias</span></a>
                <a className="border-2 border-solid border-black hover:bg-verde hover:text-white p-2 rounded-md transition duration-500" href="">Projetos Sustentáveis</a>
                <a className="border-2 border-solid border-black hover:bg-verde hover:text-white p-2 rounded-md transition duration-500" href="">Sobre o projeto</a>
                <a className="border-2 border-solid border-black hover:bg-verde hover:text-white p-2 rounded-md transition duration-500" href="">Integrantes</a>
            </nav>
        </div>
    )
}