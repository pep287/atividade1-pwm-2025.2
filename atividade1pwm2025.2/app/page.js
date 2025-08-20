import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>Biografia</h1>
      <br />
      <p>
        {" "}
        Meu nome e Pedro Mota Mendes, tenho 20 anos e sou estudante de Ciencias
        da Computação, na Universidade Cátolica de Pernambuco e atualmente estou
        no quinto período do curso.
      </p>
      <img src="/image.jpg" alt="Minha imagem" width={300} />
    </div>
  );
}
