import styled from 'styled-components';


export const Container = styled.div`

  background: #262626;
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 24px;

    @media(max-width: 800px) {
        flex-direction: column;
        position: relative;
    }
    
`;

export const Title = styled.h3`

  color:white;
  font-size: 15px;
  margin-left: 50px;
  margin-right: 300px;
  @media(max-width: 800px) {

      margin: 10px;

    }


`

export const ButtonOne = styled.button`

  background: none;
  border: none;
  color: #0468bf;
  text-transform: uppercase;
  font-size: 15px;
  :hover{
      color: white;
    }

    @media(max-width: 800px) {

      margin: 10px;

    }


`

export const ButtonTwo = styled.button`

  
  background: none;
  border: none;
  color: #0468bf;
  text-transform: uppercase;
  font-size: 15px;
  margin: 30px;
  :hover{
      color: white;
    }
    @media(max-width: 800px) {

      margin: 10px;

    }


`
