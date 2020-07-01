import React from 'react';
import { usePokemon } from '../hooks';
import { textFormatter } from '../helpers';
import { requestConstants } from '../constants';
import { Head, PokemonDetails } from '../components';
import { useParams } from 'react-router-dom';

export const Pokemon = (props) => {
  const params = useParams();
  const pokemonName = params.pokemon;
  const { pokemon, status } = usePokemon(pokemonName);
  return (
    <>
      <Head pageTitle={ textFormatter.capitalize(pokemonName) } />
      { status === requestConstants.PENDING && <p>Loading ...</p> }

      { status === requestConstants.SUCCESS && 
        <PokemonDetails 
          name={ textFormatter.capitalize(pokemonName) }
          imgSrc={ `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png` }
          details={ pokemon }
        />
      }
    </>
  )
}
