import React,{useState} from 'react';
import api from '../../api'

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

      <div>

          <div><h1>Pesquisa HidroTelemetria</h1></div>

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

                <button type = "button" onClick = {() => {handleOnClick()}}>
                    Pesquisar
                </button>

            </div>


          </div>

          <div>

          <table>

                <thead>

                    <tr>

                        <td>Código Estação</td>
                        <td>Data/Hora</td>
                        <td>Chuva</td>
                        <td>Nível</td>
                        <td>Vazão</td>

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

    );
  }


  export default Home;