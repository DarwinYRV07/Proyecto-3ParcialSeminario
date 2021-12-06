import styles from './estilos'
import {BurbujaNum} from './styles'

export const Burbuja = ({ cantidad }) => {
    // let { numero } = props
    // let numero = props.numero
    return (
        <BurbujaNum>
            {cantidad > 9 ? '9+' : cantidad}
        </BurbujaNum>
    )   
}