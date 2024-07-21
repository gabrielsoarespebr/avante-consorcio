import "./App.css";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="Avante logotipo"/>

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
            <a
              href="https://www.instagram.com"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default App;
