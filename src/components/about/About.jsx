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
        <li className="passoBorda">
          <div className="passo">
            <p className="passoNumero">1</p>
            <img src={mulherComoFunciona1} alt="Mulher" />
            <p>
              A Avante te ajuda a encontrar <span className="font-semibold">o consórcio ideal</span>.
            </p>
          </div>
        </li>
        <li className="passoBorda">
          <div className="passo">
            <p className="passoNumero">2</p>
            <img src={mulherComoFunciona2} alt="Mulher" />
            <p>
              Você paga as mensalidades e <span className="font-semibold">torce para ser contemplado</span>.
            </p>
          </div>
        </li>
        <li className="passoBorda">
          <div className="passo">
            <p className="passoNumero">3</p>
            <img src={mulherComoFunciona3} alt="Mulher" />
            <p>
            <span className="font-semibold">Você é contemplado na assembleia</span> por lance ou sorteio.
            </p>
          </div>
        </li>
      </ul>
      <Cta/>
    </section>
  );
};
