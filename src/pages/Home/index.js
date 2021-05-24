import React,{useState} from 'react';
import api from '../../api'
import {AllBackground, Title,TitleSmall,TitleTableOne,TitleTableTwo,TomatoButton,TableForm} from "./styles"


function Home() {

    //div conteiner para colocar tudo dentro
    //div para o titulo, <h1>
    //div para os inputs
    //div para cada input text
    //3 inputs text 1 botao botao
    //armazenar em um estado do componente {useState} useState(iniciar váriavel)

    //retorna um array com 2 posições, primeiro a variavel e em segundo a função para setar um valor na váriavel
    const [codEstacao, setCodEstacao] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
    const[hidrotelemetria, setHidrotelemetria] = useState([]);

    async function handleOnClick(){

        const hidrotelemetriaResponse = await api.get(`telemetriaInfo/${codEstacao}/${dataInicio}/${dataFim}`);
        const hidrotelemetriaData = hidrotelemetriaResponse.data.hidrotelemetria;
        setHidrotelemetria(hidrotelemetriaData);

    }

    return (
        
    <AllBackground>
      <div>

          <div><Title>Pesquisa HidroTelemetria ANA</Title></div>
          <div><TitleSmall>Ferramenta de pesquisa de dados das estações de hidrotelemetria da Agência Nacional de Aguás (ANA)</TitleSmall></div>

          <div>

            <div>

                <input 

                    type = "text" 
                    value = {codEstacao}
                    onChange = {(event) => {setCodEstacao(event.target.value)}}
                    placeholder = {'Código da Estação'}

                />

            </div>

            <div>
            
                <input
                    
                    type = "text" 
                    value = {dataInicio}
                    onChange = {(event) => {setDataInicio(event.target.value)}}
                    placeholder = {'Data Início'}

                />

            </div>

            <div>

                <input 

                    type = "text" 
                    value = {dataFim}
                    onChange = {(event) => {setDataFim(event.target.value)}}
                    placeholder = {'Data Fim'}

                />

            </div>

            <div>

                <TomatoButton type = "button" onClick = {() => {handleOnClick()}}>
                    Pesquisar
                </TomatoButton>

            </div>


          </div>

          <div>

          <table>

                <thead>

                    <tr>

                        <TitleTableOne>Código Estação</TitleTableOne>
                        <TitleTableTwo>Data/Hora</TitleTableTwo>
                        <TitleTableOne>Chuva</TitleTableOne>
                        <TitleTableTwo>Nível</TitleTableTwo>
                        <TitleTableOne>Vazão</TitleTableOne>

                    </tr>

                </thead>

                <tbody>

                    {hidrotelemetria && hidrotelemetria.map((obj) => {

                        return(

                            <tr key = {obj.DataHora}>

                                <td>{obj.CodEstacao}</td>
                                <td>{obj.DataHora}</td>
                                <td>{obj.Chuva}</td>
                                <td>{obj.Nivel}</td>
                                <td>{obj.Vazao}</td>

                            </tr>

                        )

                    })}

                </tbody>

            </table>

          </div>

        </div>
    </AllBackground>


    );
  }


  export default Home;