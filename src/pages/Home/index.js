import React, { useState } from 'react';

import { 
    
    ContainerGlobal, 
    ContainerPainel, 
    Painel, 
    SelectEstado, 
    Titulo, 
    TituloPainel, 
    Button, 
    Input 

} from './styles';

import api from '../../api'

function Home() {

    const[listaEstacoes, setListaEstacoes] = useState([]);
    const[dadosEstacoes, setDadosEstacoes] = useState([]);
    const[ufSelectList, setUfSelectList] = useState('');
    const[ufSelectDados, setUfSelectDados] = useState('');
    const[dataInicio, setDataInicio] = useState('');
    const[dataFim, setDataFim] = useState('');

    async function handleOnClickListaEstacoes(){

        const listaResponse = await api.post('estacoes', {
              download: true,
              uf: ufSelectList
          });
        const listaData = listaResponse;
        console.log(listaData.data)
        setListaEstacoes([...listaEstacoes, listaData]);
        const downloadResponse = await api.get(`download/${listaData.data.generatedFileName}`)
        console.log(downloadResponse);
        const url = window.URL.createObjectURL(new Blob([downloadResponse.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `estacoes_${ufSelectList}.csv`); //or any other extension
        document.body.appendChild(link);
        link.click();

    }

    async function handleOnClickDadosEstacoes(){

        console.log(`call ${ufSelectDados}`)
        const dadosResponse = await api.post('dadosHidrometeorologicosPorUf',{

            download: true,
            uf: ufSelectDados,
            data_inicio: dataInicio,
            data_fim: dataFim
        });
        const dadosData = dadosResponse;
        console.log(dadosData.data)
        setDadosEstacoes([...dadosEstacoes, dadosData])
        const downloadResponse = await api.get(`download/${dadosData.data.generatedFileName}`)
        console.log(downloadResponse);
        const url = window.URL.createObjectURL(new Blob([downloadResponse.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `dados_${ufSelectDados}.csv`); //or any other extension
        document.body.appendChild(link);
        link.click();

    }

    document.title = 'Hidrotelemetria PTI-ANA';

 return (

    <ContainerGlobal>
        <Titulo>HIDROTELEMETRIA- ANA</Titulo>
        <ContainerPainel>
            <Painel>
                <TituloPainel> Lista de Estações Telemétricas</TituloPainel>
                <SelectEstado value = {ufSelectList} onChange={e => setUfSelectList(e.target.value)}>
                        <option value="estado">STATE</option>
                        <option value="ac">AC</option>
                        <option value="al">AL</option>
                        <option value="ap">AP</option>
                        <option value="am">AM</option>
                        <option value="ba">BA</option>
                        <option value="ce">CE</option>
                        <option value="df">DF</option>
                        <option value="es">ES</option>
                        <option value="go">GO</option>
                        <option value="ma">MA</option>
                        <option value="mt">MT</option>
                        <option value="ms">MS</option>
                        <option value="mg">MG</option>
                        <option value="pa">PA</option>
                        <option value="pb">PB</option>
                        <option value="pr">PR</option>
                        <option value="pe">PE</option>
                        <option value="pi">PI</option>
                        <option value="rj">RJ</option>
                        <option value="rn">RN</option>
                        <option value="rs">RS</option>
                        <option value="ro">RO</option>
                        <option value="rr">RR</option>
                        <option value="sc">SC</option>
                        <option value="sp">SP</option>
                        <option value="se">SE</option>
                        <option value="to">TO</option>
                    </SelectEstado>
                    <Button type = "button" onClick = {() => {handleOnClickListaEstacoes()}}>Obter Dados</Button>
            </Painel>
            <Painel>
                <TituloPainel>Dados Hidrometeorológicos</TituloPainel>
                <SelectEstado value = {ufSelectDados} onChange={k => setUfSelectDados(k.target.value)}>
                        <option value="estado">STATE</option>
                        <option value="ac">AC</option>
                        <option value="al">AL</option>
                        <option value="ap">AP</option>
                        <option value="am">AM</option>
                        <option value="ba">BA</option>
                        <option value="ce">CE</option>
                        <option value="df">DF</option>
                        <option value="es">ES</option>
                        <option value="go">GO</option>
                        <option value="ma">MA</option>
                        <option value="mt">MT</option>
                        <option value="ms">MS</option>
                        <option value="mg">MG</option>
                        <option value="pa">PA</option>
                        <option value="pb">PB</option>
                        <option value="pr">PR</option>
                        <option value="pe">PE</option>
                        <option value="pi">PI</option>
                        <option value="rj">RJ</option>
                        <option value="rn">RN</option>
                        <option value="rs">RS</option>
                        <option value="ro">RO</option>
                        <option value="rr">RR</option>
                        <option value="sc">SC</option>
                        <option value="sp">SP</option>
                        <option value="se">SE</option>
                        <option value="to">TO</option>
                    </SelectEstado>
                    <Input type = "text" placeholder="Data Inicio:   YYYY-MM-DD" onChange = {(event) => {setDataInicio(event.target.value)}}></Input>
                    <Input type = "text" placeholder="Data Fim:      YYYY-MM-DD" onChange = {(event) => {setDataFim(event.target.value)}}></Input>
                    <Button type = "button" onClick = {() => {handleOnClickDadosEstacoes()}}>Obter Dados</Button>
            </Painel>
        </ContainerPainel>
    </ContainerGlobal>

 )

}

export default Home;