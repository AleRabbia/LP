// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="container">
      <p>
        © {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
