import Image from "next/image";
import errorImage from "../../public/images/errorimage.png";


export default function NotFound() {
    return (
        <div className="div-page-not-found flex flex-col justify-center items-center gap-4">
            <h1 className="h1-page-not-found md:text-custom-yellow font-bold text-xl">
                Página não encontrada. Acesse outra página!
            </h1>
            <Image width={300} src={errorImage} alt="imagem de erro"></Image>
        </div>
    );
}