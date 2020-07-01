import React from 'react';
import { requestConstants } from "../constants";
import { PaginatorNav, Row, Head, PokemonCard, SearchBar, PageTitle } from "../components";
import { usePagination, usePokemons, useSearch } from "../hooks"
import { useHistory } from 'react-router-dom';

const defaultLimit = 10;

export const Pokemons = props => {
  const { limit, page, search } = props;
  const { pokemons, status } = usePokemons(true);
  const filtered = useSearch(pokemons, search, ['name']);
  const history = useHistory();
  const paginator = usePagination(filtered, limit, page);

  const handleLimitChange = e => {
    history.push(`/pokemons?limit=${ e.target.value }&search=${ search }`);
  }

  const handleSearchChange = e => {
    history.replace(`/pokemons?limit=${ limit }&search=${ encodeURI(e.target.value) }`)
  }

  return (
    <>
      <Head pageTitle="Pokemons" />
      <PageTitle>All pokemons</PageTitle>
      { status === requestConstants.PENDING && <p>Loading ...</p> }
      { status === requestConstants.SUCCESS && 
        <Row>
          <SearchBar searchPhrase={ search } handleChange={ handleSearchChange } placeholder="Type in the pokemon name you are looking for" />
          <PaginatorNav paginator={ paginator } handleLimitChange={ handleLimitChange } />
          { paginator.items.length === 0 && <p>No results found.</p> }
          { paginator.items.length &&
            paginator.items.map((pokemon, index) => <PokemonCard key={ index } pokemon={ pokemon } /> )
          }
          <PaginatorNav paginator={ paginator } handleLimitChange={ handleLimitChange } />
        </Row>
      }
      { status === requestConstants.FAILURE && <p>Failed to fetch pokemons :(</p> }
    </>
  )
}

Pokemons.defaultProps = {
  limit: defaultLimit,
  search: "",
  page: 1,
};