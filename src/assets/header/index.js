import { ButtonOne, ButtonTwo, Container, Title } from "./styles";
import logo from './logopti.png';

export default function Header() {

  return (
    <Container>
      <img src={logo} height="45" width="45" alt="Logo Parque Tecnológico Itaipu"></img>
      <Title>Fundação Parque Tecnológico Itaipu</Title>
      <a  href="/"><ButtonOne type="button">Inicio</ButtonOne></a>
      <a  href="/Info"><ButtonTwo type="button">Info</ButtonTwo></a>
    </Container>
  );

}