import styled from "styled-components";
import { Link } from "react-router-dom";

const PaginatorWrapper = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const baseButton = `
  height: 28px;
  line-height: 1.3;
  font-size: 1.6rem;
  cursor: pointer;
  display: inline-block;
  padding: 5px 10px;
  border: 2px solid #395faa;
  border-radius: 5px;
  margin: 0 2.5px;
  text-decoration: none;
  background-color: #fff;
  font-weight: bold;
`
const PaginatorButton = styled(Link)`
  ${baseButton};
  color: #395faa;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  &:hover {
    color: #fff;
    background-color: #395faa;
  }
`

const PaginatorDisabledButton = styled.button`
  ${baseButton};
  font-family: inherit;
  border-color: #6d94e3;
  color: #5270ab;
  background-color: #84a1db;
  cursor: not-allowed;
`

const PaginatorButtonRow = styled.div`
  display: flex;
  align-items: center;
`

export {
  PaginatorWrapper,
  PaginatorButton,
  PaginatorDisabledButton,
  PaginatorButtonRow,
}