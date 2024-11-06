import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Alexis Rabbia</h1>
      <p>Analista de Sistemas | Desarrollador de Software</p>
      <p>Creando Soluciones a Medida</p>
      <nav>
        <a href="#projects">Proyectos</a>
        <a href="#skills">Habilidades</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
