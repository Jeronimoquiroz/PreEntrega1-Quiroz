import { useState } from "react";
import { div } from "react2/lib/ReactDOMFactories";

const Contador = () => {

    const [contador,setContador] = useState(0);

    const sumarUno = () => {
        setContador(contador + 1);      
    }

    const restarUno = () => {
        setContador(contador - 1);      
    }

   return (

    <div>
        <h3>{contador}</h3>
        <button onClick={sumarUno}>Sumar</button>
        <button onClick={restarUno}>Restar</button>
    </div>
   
   ) 

} 
export default Contador;