import "./About.css";
import mulherComoFunciona1 from "../../assets/images/mulherComoFunciona1.png";
import mulherComoFunciona2 from "../../assets/images/mulherComoFunciona2.png";
import mulherComoFunciona3 from "../../assets/images/mulherComoFunciona3.png";
import { Cta } from "../shared/Cta";

export const About = () => {
  return (
    <section id="about" className="text-white">
      <p className="fonteTitulo mb-10">Como funciona?</p>
      <ul className="flex justify-between">
        <li className="passo">
          <div>
            <p className="passoNumero">1</p>
            <p>
              A Avante te ajuda a encontrar{" "}
              <span className="font-semibold">o consórcio ideal</span>.
            </p>
          </div>
          <img src={mulherComoFunciona1} alt="Mulher" />
        </li>

        <li className="passo">
          <div>
            <p className="passoNumero">2</p>
            <p>
              Você paga as mensalidades e{" "}
              <span className="font-semibold">torce para ser contemplado</span>.
            </p>
          </div>
          <img src={mulherComoFunciona2} alt="Mulher" />
        </li>

        <li className="passo">
          <div>
            <p className="passoNumero">3</p>
            <p>
              <span className="font-semibold">
                Você é contemplado na assembleia
              </span>{" "}
              por lance ou sorteio.
            </p>
          </div>
          <img src={mulherComoFunciona3} alt="Mulher" />
        </li>
      </ul>
      <Cta />
    </section>
  );
};
