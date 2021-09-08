import {  } from "react-router-dom";
import { Container, Link, ContainerSVG, Svg, UL } from "./styles";

export default function Footer() {

  return (

    <Container>
          <ContainerSVG>
            <Svg xmlns="http://www.w3.org/2000/svg"  width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3" /><line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
             <a href="https://www.instagram.com/ptibrasil/?hl=pt-br" target='_blank' rel="noreferrer">
            <circle cx="50" cy="50" r="40" fill="blue" />
            </a>
             </Svg>
             <Svg xmlns="http://www.w3.org/2000/svg"  width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            <a href="https://www.linkedin.com/company/ptibrasil/mycompany/" target='_blank' rel="noreferrer">
            <circle cx="50" cy="50" r="40" fill="blue" />
            </a>
            </Svg>
            <Svg xmlns="http://www.w3.org/2000/svg"  width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            <a href="https://github.com/gBorges19/hidrotelemetria_backend" target='_blank' rel="noreferrer">
            <circle cx="50" cy="50" r="40" fill="blue" />
            </a>
            </Svg>
          </ContainerSVG>
            <UL>
                <li>
                    <Link href="mailto:gustavoborgesdv@gmail.com">Email</Link>
                </li>
                <li>
                    <Link href="https://api.whatsapp.com/send?phone=5519971618090&text=O%20site%20esta%20com%20algum%20problema" target="_blank" rel="noreferrer">Whatsapp</Link>
                </li>
             </UL>      
    </Container>

  );

}