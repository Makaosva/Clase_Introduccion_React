import React from "react";
import Banner from "./Banner";

let nombre = "Macarena";

function Titulo() {
  return (
    <div>
      <h1>PROBANDO REACT</h1>
      <Banner />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
        laudantium. Unde mollitia temporibus, amet placeat laborum consequatur
        sit optio, enim dolore cum, debitis commodi repudiandae numquam a fugit
        aut nulla?
      </p>
      <h3>Mi nombre es {nombre}</h3>
    </div>
  );
}

export default Titulo;
