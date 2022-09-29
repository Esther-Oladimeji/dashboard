import styled from "styled-components";
import { DeleteOutline } from "@material-ui/icons"

export const Table = styled.div`
flex: 4;

`

export const TableItems = styled.div`
display: flex;
align-items: center;
`
export const TableImage = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
object-fit: contain;
margin-right: 10px;

`

export const TableEditButton= styled.button`
border: none;
border-radius: 10px;
padding: 5px 10px;
background-color: ${props => props.primary ? "DarkMagenta" : "SeaGreen"};
color: white;
cursor: pointer;
margin-right: 20px;
`

export const TableDeleteOutline = styled(DeleteOutline)`
color: red;
cursor: pointer;
`