import "./Header.css";
import logo from "../assets/filminLogo.png";

export default function Header() {
  <header>
    <nav>
      <img src={logo} alt="Logo Filmin" className="logo" />
      <h3>Inicio</h3>
      <h3>Películas</h3>
    </nav>
    <section className="buttonsContainer">
      <button className="buttonSubscribe">Suscríbete</button>
      <button className="buttonLogin">Iniciar Sesión</button>
    </section>
  </header>
}
