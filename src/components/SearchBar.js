import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 15px;
`

const Input = styled.input`
  background-color: #fff;
  border: 3px solid #395faa;
  border-radius: 5px;
  font-size: 2rem;
  color: #395faa;
  width: 100%;
  outline: 0;
  padding: 0 10px;
  font-family: inherit;
  font-weight: bold;
  line-height: 1;
  height: 40px;
  padding-top: 5px;
`

const SearchBar = ({ searchPhrase, handleChange, placeholder }) => {
  return (
    <Wrapper>
      <Input value={ searchPhrase} onChange={ handleChange } placeholder={ placeholder } />
    </Wrapper>
  )
}

SearchBar.defaultProps = {
  placeholder: '',
}

export { SearchBar };