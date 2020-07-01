import React from 'react';
import {
  PageTitle,
  SectionTitle,
  Wrapper,
  Description,
  Head
} from '../components';

export const Home = () => {
  return (
    <Wrapper>
      <Head pageTitle="Home" />
      <PageTitle>PokeCRM</PageTitle>
      <SectionTitle>About</SectionTitle>
      <Description>
        Main purpose of this project was to create a CRM-like app with pagination, and show single record feature,
        and practice creating custom hook functions (usePokemon, usePokemons). The way that PokeAPI is built make it hard to implement
        search options more complex than the search bar. For example if response was something more than pokemon name and details link there
        could be features like: filter by region, filter by type(s) and probably many more, the pagination had to be created on the frontend due
        to fixed pagination limit and offset. The app gets all the pokemons from the API and creates a cache record in session storage to store all the pokemons.
      </Description>
      <SectionTitle>Attribution</SectionTitle>
      <Description>
        The API used can be found <a href="https://pokeapi.co/" rel="noopener noreferrer" target="_blank">here</a>. Pokemon images were provided by <a href="https://pokeres.bastionbot.org/" rel="noopener noreferrer" target="_blank">Pokeres</a>.
        Lastly the icons for states were downloaded from <a href="https://game-icons.net/faq.html" rel="noopener noreferrer" target="_blank">game-icons.net</a>.
      </Description>
    </Wrapper>
  )
}
