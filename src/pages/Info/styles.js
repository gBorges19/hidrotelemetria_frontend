import styled from 'styled-components';
import '../Home/fonts.css'

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

export const ContainerContent = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba( 255, 255, 255, 0.10 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  margin: 20px;

`

export const TituloContent = styled.h2`

    font-family: 'Oswald', sans-serif;
    margin:18px;
    font-size: 20px;


`

export const InfoText = styled.span`

  margin: 15px;
  font-size: 15px;
  text-align: center;


`

export const SvgInfo = styled.svg`

    margin: 20px;

`