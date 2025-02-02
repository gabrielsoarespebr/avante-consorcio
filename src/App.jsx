import "./App.css";
import logo from "./assets/images/logo.png";
import { About } from "./components/about/About";
import { Banner } from "./components/banner/Banner";
import { CompetitiveEdge } from "./components/competitive-edge/CompetitiveEdge";
import { Credibility } from "./components/credibility/Credibility";
import { Faq } from "./components/faq/Faq";
import { Partners } from "./components/partners/Partners";
import { Divider } from "./components/shared/Divider";

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="Avante logotipo" />

        <ul id="redesSociais">
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=558198477398&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </header>
      <Banner />
      <Divider />
      <About />
      <Divider />
      <Partners />
      <Divider />
      <CompetitiveEdge />
      <Divider />
      <Credibility />
      <Divider />
      <Faq />
      <Divider />
      <footer className="text-center font-semibold py-4">
        Avante &copy; Todos os direitos reservados
      </footer>

      <a
        href="https://api.whatsapp.com/send/?phone=558198477398&text&type=phone_number&app_absent=0"
        target="_blank"
        aria-label="Entrar em contato pelo WhatsApp"
        title="Entrar em contato pelo WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" id="whatsappIcone"></i>
      </a>
    </>
  );
}

export default App;
