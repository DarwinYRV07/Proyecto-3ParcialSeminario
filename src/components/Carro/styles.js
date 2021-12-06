import styled, { css } from "styled-components";

export const Container = styled.div`
    position: relative;
    ${props => props.listaArticulo && css`
        border-radius: 5px;
        box-shadow: 0px 0px 15px rgba(0,0,0,0.4);
        background-color: #fff;
        color:#000;
        padding:10px;
        position:absolute;
        right: 0px;
        top:50px;
        width:400px;
    `}
`
export const Lista = styled.ul`
    list-style-type:none;
    margin: 0px;
    padding:0px;
`
export const Sublista = styled.li`
    align-items:center;
    border-bottom: 1px dashed #ccc;
    display:flex;
    justify-content:space-between;
    margin-bottom:10px;
    padding-bottom:5px;
`