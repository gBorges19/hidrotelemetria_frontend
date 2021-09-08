import styled from 'styled-components';


export const Container = styled.div`

  background: #262626;
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;

    @media(max-width: 800px) {
        flex-direction: column;
        position: relative;
    }
    
`;

export const Link = styled.a`

  color:white;
  text-decoration: 0;
  margin: 5px;


`

export const UL = styled.ul`

    list-style-type: none;
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    @media(max-width: 800px) {

      margin: 10px;

  }
    

`
export const ContainerSVG = styled.div`

  display: flex;
  flex-direction: row;


`

export const Svg = styled.svg`

  margin: 5px;

`
