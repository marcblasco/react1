import React from "react";

function Testimonio(){
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" 
            src={require("../imagenes/tia1.png")}
            alt="foto de emma"/>
           <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>
                    hola
                </p>
                <p className='cargo-testimonio'>
                    caracola
                </p>
                <p className='texto-testimonio'>hhshhs</p>
            </div>
        </div>
       
    );
}

export default Testimonio