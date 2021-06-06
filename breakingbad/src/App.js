// Instalamos emotion
// npm i @emotion/core @emotion/styled
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase"

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  // States
  const [frase, guardarFrase] = useState({});

  // Cargar la frase usando el hook de useEffect
  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    //Consultando API usando fetch
    // Funciona con promises
    // Await: Indica que se detenga la ejecucion del codigo hasta que se complete el request
    const request = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const quote = await request.json();
    guardarFrase(quote[0]);
  };

  return (
    <Contenedor>
      <Frase
        frase={frase}
      />
      <Boton onClick={consultarAPI}>Obtener frase</Boton>
    </Contenedor>
  );
}

export default App;
