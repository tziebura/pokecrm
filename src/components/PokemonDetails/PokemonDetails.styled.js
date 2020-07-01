import styled from "styled-components";

const PokemonContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`

const StatList = styled.ul`
  list-style: none;
  font-size: 2rem;
  font-style: capitalize;
`

const StatItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`

const StatIcon = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 10px;
`

const BaseColumn = styled.div`
  width: 50%;
  padding: 0 15px;
  display: flex;
  align-items: left;
  flex-direction: column;
`

const PokemonDescription = styled(BaseColumn)`
  width: 40%;
`

const PokemonImage = styled(BaseColumn)`
  width: 60%;

`

const TypeBadge = styled.span`
  display: inline-block;
  padding: 5px 25px 0;
  width: 150px;
  border-radius: 10px;
  text-align: center;
  background-color: ${ props => props.bgColor };
  color: #fff;
  border: 4px solid #000;
  line-height: 1;
`
export {
  PokemonContainer,
  StatList,
  StatItem,
  StatIcon,
  PokemonDescription,
  PokemonImage,
  TypeBadge,
};