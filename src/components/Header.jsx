import "./Header.css";
import logo from "../assets/filminLogo.png";

export const Header = () => (
  <header>
    <nav>
      <img src={logo} alt="Logo Filmin" className="logo" />
      <h3>Inicio</h3>
      <h3>Películas</h3>
    </nav>
    <section>
      <button className="buttonSubscribe">Suscríbete</button>
      <button className="buttonLogin">Iniciar Sesión</button>
    </section>
  </header>
);
