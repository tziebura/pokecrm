import styled from "styled-components";

const labelBgColor = '#395faa';
const cardBorder = `2px solid ${ labelBgColor }`;
const cardBgColor = '#fff';

const PokemonCardWrapper = styled.div`
  width: 20%;
  padding: 15px;
  text-align: center;
  > a {
    text-decoration: none;
  }
`

const PokemonCardInnerWrapper = styled.div`
  border: ${ cardBorder };
  border-radius: 5px;
  cursor: pointer;
  background-color: ${ cardBgColor };
`

const PokemonLabel = styled.div`
  background-color: ${ labelBgColor };
  color: #fff;
  padding: 5px;
`

const PokemonCardLabelText = styled.h2`
  font-size: 2rem;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const PokemonCardImageHolder = styled.div`
  padding-top: 100%;
  position: relative;
  border-bottom: ${ cardBorder };
`

const PokemonCardImage = styled.img`
  max-width: calc(100% - 20px);
  max-height: calc(100% - 20px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export {
  PokemonCardWrapper,
  PokemonCardInnerWrapper,
  PokemonLabel,
  PokemonCardLabelText,
  PokemonCardImageHolder,
  PokemonCardImage,
}