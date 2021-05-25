import styled from 'styled-components';


export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    color: #fff;
    font-size: 45px;
`

export const SubTitle = styled.h2`
    color: #fff;
    font-size: 20px;
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`


export const InputText = styled.input`
    margin: 10px;
`

export const SearchButton = styled.button`
    margin: 10px;
`

export const TableContainer = styled.div`
    display:flex;
    margin:10px;
    width: 95vw;
`

export const Table = styled.table`
    flex:1;
`

export const TableRow = styled.tr`
    color: #fff;
    font-weight: bold;
`

export const TableCell = styled.td`
    padding: 10px;
    border: 1px solid #fff;
    text-align: center;
`