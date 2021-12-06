import { useRef } from 'react'
import styled from 'styled-components'
import { Carro } from '../Carro'
import styles from './estilos'
import {Container, Titulo,ContenedorBus,Button} from './styles'

export const Navbar = ({ cantidad, productos, eliminarProducto,temaContext, buscarProducto }) => {
    const buscarProdu = useRef();
    const obtenerResultado =()=>{
        buscarProducto(buscarProdu.current.value);
    }

    return (
        <Container>
            <Titulo>Darwin Ventura Proyecto</Titulo>
            <Button btnTema onClick={() => temaContext()}> Tema </Button>
            <ContenedorBus>
                <input ref={buscarProdu} type="txt"/>
                <Button onClick={obtenerResultado} style={styles.buscarButton}> Buscar </Button>
            </ContenedorBus>
            <Carro cantidad={cantidad} productos={productos} eliminarProducto={eliminarProducto} style={styles.carro}/>
        </Container>
    )
}