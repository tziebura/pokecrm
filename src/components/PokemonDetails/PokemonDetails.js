import React from 'react';
import { ContainedImage, PageTitle, SectionTitle } from '../';
import { 
  PokemonContainer,
  StatList,
  StatItem,
  StatIcon,
  PokemonDescription,
  PokemonImage,
  TypeBadge,
} from './PokemonDetails.styled';
import { textFormatter } from '../../helpers';
import { typeColors } from '../../constants';

export const PokemonDetails = (props) => {
  const { imgSrc, name, details } = props;
  
  const renderIcon = (statName) => <StatIcon src={ `/images/${statName}.png` } />
  const renderBadge = (pokemonType) => <TypeBadge bgColor={ typeColors[pokemonType] }>{ textFormatter.capitalize(pokemonType) }</TypeBadge>

  return (
    <PokemonContainer>
      <PokemonDescription>
        <PageTitle>{ name }</PageTitle>
        <SectionTitle>{ name } is of type:</SectionTitle>
        <StatList>
          { details.types.map((type, index) => <StatItem key={ index }>{ renderBadge(type.type.name, index) }</StatItem>) }
        </StatList>
        <SectionTitle>{ name } stats:</SectionTitle>
        <StatList>
          { details.stats.map((stat, index) => <StatItem key={ index }> { renderIcon(stat.stat.name) } { `${ textFormatter.capitalize(stat.stat.name)}: ${stat.base_stat}` }</StatItem>)}
        </StatList>
      </PokemonDescription>
      <PokemonImage>
        <ContainedImage height="600px;" src={ imgSrc } />
      </PokemonImage>
      
    </PokemonContainer>
  );
}