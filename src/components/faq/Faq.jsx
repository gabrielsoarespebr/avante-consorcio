import "./Faq.css";
import mulher from "../../assets/images/mulherFaq.png";
import { Cta } from "../shared/Cta";

export const Faq = () => {
  return (
    <section id="faq" className="text-white">
      <p className="fonteTitulo mb-10">Perguntas frequentes</p>
      <div className="flex gap-5">
        <img src={mulher} alt="Mulher" />
        <div>
          <div id="perguntasLista">
            <details>
              <summary className="font-semibold">
                Preciso escolher o que comprar no momento de contratação do
                consórcio?
              </summary>
              <p>
                Não. Uma das grandes vantagens do consórcio é não precisar
                escolher um bem específico no momento do contrato. Você precisa
                apenas definir a categoria: automóveis, pesados, imóveis ou
                serviços.
              </p>
            </details>
            <details>
              <summary className="font-semibold">
                O que acontece quando sou contemplado?
              </summary>
              <p>
                Você recebe um documento chamado &quot;carta de crédito&quot; e
                pode usar seu valor para adquirir o bem de sua escolha. Essa
                carta equivale ao pagamento à vista.
              </p>
            </details>
            <details>
              <summary className="font-semibold">
                Posso fazer mais de um consórcio ao mesmo tempo?
              </summary>
              <p>
                Sim, basta demonstrar capacidade financeira para honrar suas
                obrigações.
              </p>
            </details>
          </div>
          <Cta />
        </div>
      </div>
    </section>
  );
};
