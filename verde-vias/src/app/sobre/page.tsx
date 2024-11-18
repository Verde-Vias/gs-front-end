
export default function About() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="mt-14 flex flex-col md:flex-row items-center justify-between text-center lg:justify-around">
                <div className="text-center md:text-left ml-10 w-80">
                    <h1 className="text-2xl font-extrabold">VerdeVias </h1>
                    <p className="mt-5">Um caminho para um mundo sustentável!</p>
                </div>
                <p className="w-[30%]">
                    A VerdeVias é uma iniciativa voltada para a criação e implementação de soluções sustentáveis em áreas urbanas,
                    com o objetivo de promover o desenvolvimento de infraestrutura ecológica e de transporte que tenha um impacto positivo no meio ambiente.
                    O nome "VerdeVias" faz referência ao conceito de "vias verdes" —
                    ou seja, caminhos, corredores e sistemas de transporte que integram aspectos de sustentabilidade,
                    preservação ambiental e mobilidade urbana inteligente.
                </p>
            </div>
        </div>

    )



}