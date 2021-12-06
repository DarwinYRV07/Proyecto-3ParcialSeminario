import styled, { css } from "styled-components";



export const Container = styled.nav`
    backdrop-filter: blur(20px);
    background: rgba(76,76,76,0.8);
    box-sizing: border-box;
    color: #fff;
    display:flex;
    justify-content: space-between;
    padding: fixed;
    top:0px;
    width: 100%;
    padding:15px;
`

export const Titulo = styled.p`
    font-size:25px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export const ContenedorBus = styled.div`
    padding:10px;
    margin:5px;
`

export const Button = styled.button`
    font-size:15px;
    background:blue;
    color:white;
    margin:3px;
    padding:5px;
    border-radius:5px;
    ${props=>props.btnTema && css`
        margin-top:20px;
        font-size:15px; 
        background:blue;
        padding:5px;
        color: white;
        width:80px;
        height:40px;
    `}
`