import "./CompetitiveEdge.css";
import { Cta } from "../shared/Cta";

export const CompetitiveEdge = () => {
  return (
    <section id="competitiveEdge" className="text-white">
      <p className="fonteTitulo mb-10">Nossos diferenciais</p>
      <ul className="flex justify-between">
        <li>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-face-smile"></i>
            <p className="font-semibold">Atendimento humanizado</p>
          </div>
          <p>
            Nossa especialidade é ouvir, entender e atender suas necessidades.
            Então, pode ter certeza de que você contará com o suporte de
            profissionais experientes em cada etapa do processo.
          </p>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-list-check"></i>
            <p className="font-semibold">Variedade de Planos</p>
          </div>
          <p>
            Nossos planos de consórcio são flexíveis, atendendo às necessidades
            específicas de cada cliente com soluções personalizadas para
            diferentes prazos e valores.
          </p>
        </li>
        <li>
          <div className="flex items-center gap-2">
          <i className="fa-solid fa-lock"></i>
            <p className="font-semibold">Segurança</p>
          </div>
          <p>
            Valorizamos a construção de relacionamentos de confiança e
            transparência, garantindo que você se sinta seguro e bem acolhido
            durante todo o consórcio.
          </p>
        </li>
      </ul>
      <Cta />
    </section>
  );
};
