import React,{useState} from 'react';

import {
    Container,
    Title,
    SubTitle,
    InputsContainer,
    InputText,
    SearchButton,
    TableRow,
    TableCell,
    TableContainer,
    Table
} from './styles'

function Hello() {


    const [isTableVisible, setIsTableVisible] = useState(true)



    return (
        <Container>
            <Title>Pesquisa HidroTelemetria ANA</Title>
            <SubTitle>Ferramenta de pesquisa de dados das estações de hidrotelemetria da Agência Nacional de Aguás (ANA)</SubTitle>
            <InputsContainer>
                <InputText type = "text" placeholder = {'Código da Estação'}/>
                <InputText type = "text" placeholder = {'Data Início'}/>
                <InputText type = "text" placeholder = {'Data Fim'}/>
                <SearchButton type= "button">Pesquisar</SearchButton>
            </InputsContainer>
            {isTableVisible && 
            <TableContainer>
                <Table>
                    <thead>
                        <TableRow>
                            <TableCell>Código Estação</TableCell>
                            <TableCell>Data/Hora</TableCell>
                            <TableCell>Chuva</TableCell>
                            <TableCell>Nível</TableCell>
                            <TableCell>Vazão</TableCell>
                        </TableRow>
                    </thead>
                    <tbody>
                            <tr>
                                <TableCell>{'123'}</TableCell>
                                <TableCell>{'14h'}</TableCell>
                                <TableCell>{'Choveu sim!'}</TableCell>
                                <TableCell>{'2'}</TableCell>
                                <TableCell>{'bastante'}</TableCell>
                            </tr>
                            <tr>
                                <TableCell>{'123'}</TableCell>
                                <TableCell>{'14h'}</TableCell>
                                <TableCell>{'Choveu sim!'}</TableCell>
                                <TableCell>{'2'}</TableCell>
                                <TableCell>{'bastante'}</TableCell>
                            </tr>
                            <tr>
                                <TableCell>{'123'}</TableCell>
                                <TableCell>{'14h'}</TableCell>
                                <TableCell>{'Choveu sim!'}</TableCell>
                                <TableCell>{'2'}</TableCell>
                                <TableCell>{'bastante'}</TableCell>
                            </tr>
                    </tbody>
                </Table>
            </TableContainer>
            }
        </Container>
    )
}

export default Hello;