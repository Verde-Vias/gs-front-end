import Image from "next/image"
import Jenniferfoto from "../../../public/images/jenniferfoto.png"
import JuliaFoto from "../../../public/images/juliavasco.jpg"
import LeonardoFoto from "../../../public/images/leocadena.png"
import Link from "next/link"

export default function Integrantes() {
    return(
        <div className="h-screen">
        <div className="flex justify-around mt-20 flex-wrap">
            <div className="mt-10 w-72 p-5 flex flex-col items-center gap-5 border-2 shadow-lg shadow-verde border-solid border-verde rounded-lg">
                <div>
                    <h1>Jennifer Daleffi</h1>
                </div>
                <div className="flex gap-7">
                    <p>RM557137</p>
                    <p>1TDSPF</p>
                </div>
                <div className="">
                    <Image className="rounded-full w-32 h-32 border-2 shadow-lg shadow-verde border-solid border-verde" src={Jenniferfoto} alt="foto da jennifer"></Image>
                </div>
                <div className="flex gap-5">
                    <Link className="border-2 border-black border-solid bg-black text-white p-2 rounded-md hover:bg-transparent hover:text-black transition duration-500" href="https://github.com/JenniferDaleffi">GitHub</Link>
                    <Link className="border-2 border-azul border-solid bg-azul text-white p-2 rounded-md hover:bg-transparent hover:text-azul transition duration-500" href="https://www.linkedin.com/in/jenniferdaleffi/">LinkedIn</Link>
                </div>
            </div>
            <div className="mt-10 w-72 p-5 flex flex-col items-center gap-5 shadow-lg shadow-verde border-2 border-solid border-verde rounded-lg">
                <div>
                    <h1>Julia Vasconcelos</h1>
                </div>
                <div className="flex gap-7">
                    <p>RM558785</p>
                    <p>1TDSPF</p>
                </div>
                <div className="">
                    <Image className="rounded-full w-32 h-32 border-2 shadow-lg shadow-verde border-solid border-verde" src={JuliaFoto} alt="foto da jennifer"></Image>
                </div>
                <div className="flex gap-5">
                    <Link className="border-2 border-black border-solid bg-black text-white p-2 rounded-md hover:bg-transparent hover:text-black transition duration-500" href="https://github.com/juvascoli">GitHub</Link>
                    <Link className="border-2 border-azul border-solid bg-azul text-white p-2 rounded-md hover:bg-transparent hover:text-azul transition duration-500" href="https://www.linkedin.com/in/julia-vasconcelos-6009a9285/">LinkedIn</Link>
                </div>
            </div>
            <div className="mt-10 w-72 p-5 flex flex-col items-center gap-5 shadow-lg shadow-verde border-2 border-solid border-verde rounded-lg">
                <div>
                    <h1>Leonardo Cadena</h1>
                </div>
                <div className="flex gap-7">
                    <p>RM557528</p>
                    <p>1TDSPF</p>
                </div>
                <div className="">
                    <Image className="rounded-full w-32 h-32 border-2 border-solid border-verde shadow-lg shadow-verde" src={LeonardoFoto} alt="foto da jennifer"></Image>
                </div>
                <div className="flex gap-5">
                    <Link className="border-2 border-black border-solid bg-black text-white p-2 rounded-md hover:bg-transparent hover:text-black transition duration-500" href="https://github.com/cadenasza">GitHub</Link>
                    <Link className="border-2 border-azul border-solid bg-azul text-white p-2 rounded-md hover:bg-transparent hover:text-azul transition duration-500" href="https://www.linkedin.com/in/leonardo-cadena/">LinkedIn</Link>
                </div>
            </div>
        </div>
        </div>
    )
}