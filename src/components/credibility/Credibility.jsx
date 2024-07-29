import "./Credibility.css";
import credibilidadeTerra from "../../assets/images/credibilidadeTerra.png";
import credibilidadeFolha from "../../assets/images/credibilidadeFolha.png";

export const Credibility = () => {
  return (
    <section id="credibilidade" className="text-white">
      <p className="fonteTitulo mb-10">Consórcio vale a pena?</p>
      <ul className="flex justify-between">
        <a
          href="https://www.terra.com.br/noticias/setor-de-consorcios-deve-bater-novo-recorde-em-2024,ca0bba7fe5b1c3058e3a274a5f8c7366gv9pqy47.html"
          target="_blank"
        >
          <li className="noticia">
            <i className="fa-solid fa-quote-left"></i>
            <p>Setor de consórcios deve bater novo recorde em 2024</p>
            <img src={credibilidadeTerra} alt="Notícia" className="end" />
          </li>
        </a>
        <a
          href="https://www1.folha.uol.com.br/mercado/2023/06/com-restricao-no-credito-consorcio-passa-a-atrair-publico-mais-jovem.shtml"
          target="_blank"
        >
          <li className="noticia mb-7">
            <i className="fa-solid fa-quote-left"></i>
            <p>
              Com restrição no crédito, consórcio passa a atrair público mais
              jovem
            </p>
            <img src={credibilidadeFolha} alt="Notícia" />
          </li>
        </a>
      </ul>
    </section>
  );
};
