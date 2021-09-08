import styled from 'styled-components';
import './fonts.css'

export const ContainerGlobal = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom right, #f0edf2 34%, #a7a9aa 100%);
    
    @media(max-width: 800px) {
        flex-direction: column;
        position: relative;
  }

`

export const Titulo = styled.h1`

    font-size: 45px;
    text-align: center;
    font-family: 'Oswald', sans-serif;
    margin: 70px;


`

export const ContainerPainel = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    @media(max-width: 800px) {
        flex-direction: column;
        position: relative;
  }


`

export const Painel = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px;
    background: #262626;
    border: 0;
    border-radius: 60px;
    align-content: center;

    @media(max-width: 800px) {
        flex-direction: column;
        position: relative;
        margin: 30px;
  }

`

export const TituloPainel = styled.h2`

    font-family: 'Oswald', sans-serif;
    margin: 30px;
    font-size: 30px;
    color: white;
    text-align: center;


`

export const SelectEstado = styled.select`

    margin: 30px;
    border: #0468BF;
    border-radius: 100px 100px 100px 100px;
    width:100px;
    height:20px;
    color: #262626;
    text-align:center;
    text-transform: uppercase;
    font-weight: bold;
    background: #0468BF;
    overflow:hidden;
    text-indent: 0.01px;
    font-family:Arial, Helvetica, sans-serif;

`

export const Button = styled.button`

    margin: 30px;
    color: #0468BF;
    background: #262626;
    border: 3px solid #0468BF;
    border-radius: 100px 100px 100px 100px;
    width:200px;
    height:45px;
    font-weight: bold;
    :hover{
    background: linear-gradient(to top left, #0468BF 8%, transparent 28%);
    box-shadow: inset 2px 2px 2px rgba(0,0,0,0.2);
  }

`

export const Input = styled.input`

    margin: 30px;
    background: #262626;
    border-bottom: 1px solid #BFBFBF;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    color: #BFBFBF;
    
`