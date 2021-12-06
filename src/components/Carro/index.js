import { useState } from 'react'
import { Burbuja } from '../Burbuja'
import styles from './estilos'
import {Container,Lista,Sublista} from './styles';

export const Carro = ({ cantidad, productos,eliminarProducto }) => {

    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    return (
        <Container>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <button onClick={handleMostrarCarro} style={styles.carro}>
                Carro
            </button>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <Container listaArticulo>
                        <Lista>
                            {
                                productos.map((x,p) => {
                                    return (
                                        <Sublista>
                                            <span><button onClick={() => eliminarProducto(p)} style={styles.deleteButton}> X </button>{x.nombre}</span>    
                                            <img height={25} alt={x.nombre} src={x.imagen}/>
                                            <span>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                        </Sublista>
                                    )
                                })
                            }
                            <Sublista>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </Sublista>
                            <Sublista>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </Sublista>
                            <Sublista>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </Sublista>
                        </Lista>
                    </Container>
            }
        </Container>

    )
}