import Image from "next/image";
import errorImage from "../../public/images/notfound.png";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="div-page-not-found flex flex-col justify-center items-center gap-4 h-screen">
            <h1 className="h1-page-not-found md:text-custom-yellow font-bold text-xl">
                Página não encontrada. Acesse outra página!
            </h1>
            <Image width={300} src={errorImage} alt="imagem de erro"></Image>
            <Link className="p-3 bg-verde rounded-md text-lg hover:bg-transparent border-solid border-2 border-verde transition duration-500 hover:text-verde" href="/">Retorne</Link>
        </div>
    );
}