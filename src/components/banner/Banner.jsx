import "./Banner.css";
import carro from "../../assets/images/carro.png";
import caminhao from "../../assets/images/caminhao.png";
import casa from "../../assets/images/casa.png";
import aviao from "../../assets/images/aviao.png";
import { useState } from "react";
import { Cta } from "../shared/Cta";

export const Banner = () => {
  const [servicoImagemNumero, setServicoImagemNumero] = useState(0);

  const servicoLista = [
    {
      nome: "Automóveis",
      descricao:
        "Trocar de carro ou adquirir seu primeiro automóvel ficou muito mais fácil! Você tem a chance de ser contemplado por sorteio ou lance, garantindo flexibilidade e economia. Não perca a oportunidade de dirigir o carro dos seus sonhos. Fale conosco e descubra todas as vantagens de fazer parte de um consórcio de automóveis.",
    },
    {
      nome: "Pesados",
      descricao:
        "Você está prestes a adquirir o caminhão certo para aumentar sua frota e alavancar seu negócio. Invista no seu negócio com a segurança e a economia que só o consórcio pode oferecer. Entre em contato e descubra como podemos ajudar você a conquistar o caminhão perfeito para suas necessidades.",
    },
    {
      nome: "Imóveis",
      descricao:
        "Você já imaginou adquirir seu imóvel residencial ou comercial com parcelas que caibam no seu bolso e a possibilidade de planejamento financeiro a longo prazo? A Avante viabiliza a realização do seu sonho de forma simples e eficiente. Entre em contato e saiba como podemos ajudar você a conquistar a seu imóvel.",
    },
    {
      nome: "Serviços",
      descricao:
        "Seja para realizar aquela viagem dos sonhos, organizar uma festa inesquecível ou investir em sua saúde com uma cirurgia planejada, nosso consórcio de serviços é a solução ideal para você. Concretize seus projetos de vida de forma organizada e econômica. Fale conosco e saiba mais!",
    },
  ];

  const [servicoDescricao, setServicoDescricao] = useState(
    servicoLista[0].descricao
  );

  const handleClick = (index) => {
    setServicoImagemNumero(index);
    setServicoDescricao(servicoLista[index].descricao);
  };

  return (
    <section id="banner" className="text-white">
      <p className="fonteTitulo mb-10">Qual sua próxima conquista?</p>
      <div className="flex justify-between">
        <div>
          <img
            className={servicoImagemNumero === 0 ? "" : "escondeImagem"}
            src={carro}
            alt="Carro"
          />
          <img
            className={servicoImagemNumero === 1 ? "" : "escondeImagem"}
            src={caminhao}
            alt="Caminhão"
          />
          <img
            className={servicoImagemNumero === 2 ? "" : "escondeImagem"}
            src={casa}
            alt="Casa"
          />
          <img
            className={servicoImagemNumero === 3 ? "" : "escondeImagem"}
            src={aviao}
            alt="Avião"
          />
        </div>
        <ul id="servicos">
          {servicoLista.map((e, index) => (
            <li key={index}>
              <button onClick={() => handleClick(index)}>{e.nome}</button>
            </li>
          ))}
        </ul>
      </div>
      <p>{servicoDescricao}</p>
      <Cta/>
    </section>
  );
};
