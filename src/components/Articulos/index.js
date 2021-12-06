import { useEffect, useRef, useState } from 'react'
import { Articulo } from "../Articulo";
import styles from './estilos'
import { Container } from "../Articulos/styles";

export const Articulos = (props) => {
    const productos = props.data.articulos;
    const agregarAlCarro = props.agregarAlCarro;
    const [count,setCount] = useState(0);

    useEffect(()=>{
        document.title=`${count}`;
    })

    return (
        <Container>
            <div>
                <p>Total de clicks en el bottn de agregar {count}</p>
                <button onClick={()=>setCount(count + 1)}>sumar</button>
                <button  onClick={()=>setCount(0)}>Restaurar</button>
            </div>
            {
                productos.map(prod => 
                    // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                    <Articulo key={prod.id} prod={prod} agregarAlCarro={agregarAlCarro} />
                )
                
            }
            
        </Container>
    )
}
/**
 * div Container
 */