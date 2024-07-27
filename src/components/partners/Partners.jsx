import "./Partners.css";
import parceiroBancoDoBrasil from "../../assets/images/parceiroBancoDoBrasil.png";
import parceiroSantander from "../../assets/images/parceiroSantander.png";
import parceiroBradesco from "../../assets/images/parceiroBradesco.png";
import parceiroRodobens from "../../assets/images/parceiroRodobens.png";
import parceiroChevrolet from "../../assets/images/parceiroChevrolet.png";
import pessoasApontandoPraCima from "../../assets/images/pessoasApontandoPraCima.png";

export const Partners = () => {
  return (
    <section id="partners" className="text-white">
      <p className="fonteTitulo mb-10">Nossos parceiros</p>
      <div>
        <ul
          className="list-unstyled flex justify-between gap-5"
          id="parceiroLista1"
        >
          <li>
            <img
              src={parceiroBancoDoBrasil}
              alt="Banco do Brasil"
              className="parceiroImagem"
            />
          </li>
          <li>
            <img
              src={parceiroSantander}
              alt="Santander"
              className="parceiroImagem"
            />
          </li>
          <li>
            <img
              src={parceiroBradesco}
              alt="Bradesco"
              className="parceiroImagem"
            />
          </li>
          <li>
            <img
              src={parceiroRodobens}
              alt="Rodobens"
              className="parceiroImagem"
            />
          </li>
          <li>
            <img
              src={parceiroChevrolet}
              alt="Chevrolet"
              className="parceiroImagem"
            />
          </li>
        </ul>
        <ul
          className="list-unstyled flex justify-between gap-5"
          id="parceiroLista2"
        >
          <li>
            <img
              src={parceiroBancoDoBrasil}
              alt="Banco do Brasil"
              className="parceiroImagem"
            />
          </li>
          <li>
            <img
              src={parceiroSantander}
              alt="Santander"
              className="parceiroImagem"
            />
          </li>
          <li>
            <img
              src={parceiroBradesco}
              alt="Bradesco"
              className="parceiroImagem"
            />
          </li>
          <li>
            <img
              src={parceiroRodobens}
              alt="Rodobens"
              className="parceiroImagem"
            />
          </li>
          <li>
            <img
              src={parceiroChevrolet}
              alt="Chevrolet"
              className="parceiroImagem"
            />
          </li>
        </ul>
      </div>
      <img src={pessoasApontandoPraCima} alt="Pessoas apontando pra cima" />
    </section>
  );
};
