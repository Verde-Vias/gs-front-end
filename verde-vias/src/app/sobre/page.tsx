
export default function About() {
    return (
        <div className="min-h-screen flex items-center justify-center w-screen">
            <div className="mt-14 flex flex-col md:flex-row items-center justify-between text-center lg:justify-around">
                <div className="text-center md:text-left w-80">
                    <h1 className="text-3xl font-extrabold">Verde<span className="text-verde">Vias</span> </h1>
                    <p className="mt-5 ml-2 sm:mt-0 sm:mb-5">Um caminho para um mundo sustentável!</p>
                </div>
                <p className="lg:w-[50%] text-lg sm:w-[50%] sm:mt-6 sm:text-xl p-4">
                    A Verde<span className="text-verde">Vias</span> é uma iniciativa voltada para a criação e implementação de soluções sustentáveis em áreas urbanas,
                    com o objetivo de promover o desenvolvimento de infraestrutura ecológica e de transporte que tenha um impacto positivo no meio ambiente.
                    O nome Verde<span className="text-verde">Vias</span> faz referência ao conceito de vias verdes 
                    ou seja, caminhos, corredores e sistemas de transporte que integram aspectos de sustentabilidade,
                    preservação ambiental e mobilidade urbana inteligente.
                </p>
            </div>
        </div>

    )



}