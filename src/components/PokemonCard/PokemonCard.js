import React, { useState, useEffect } from 'react';
import { 
  PokemonCardWrapper,
  PokemonLabel,
  PokemonCardLabelText,
  PokemonCardImageHolder,
  PokemonCardImage,
  PokemonCardInnerWrapper
} from "./PokemonCard.styled";
import { textFormatter } from "../../helpers";
import { Link } from "react-router-dom";

const imageBaseUrl = 'https://pokeres.bastionbot.org/images/pokemon';
const placeholderImg = 'images/404.png';

export const PokemonCard = ({ pokemon }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  let img;

  useEffect(() => {
    if(!img.complete) {
      setIsImageLoaded(false);
    }
  }, [img]);

  return (
    <PokemonCardWrapper>
      <Link to={ `/pokemons/${ pokemon.name}` }>
        <PokemonCardInnerWrapper>
          <PokemonLabel>
            <PokemonCardLabelText>
              #{pokemon.fakeId}
            </PokemonCardLabelText>
          </PokemonLabel>
          <PokemonCardImageHolder>
            <PokemonCardImage src={ `${imageBaseUrl}/${pokemon.fakeId}.png` }
              style={ { display: isImageLoaded ? 'inline' : 'none' }}
              onLoad={ () => setIsImageLoaded(true) }
              onError={ e => e.target.src = placeholderImg }
              ref={ (ref) => img = ref }
            />
          </PokemonCardImageHolder>
          <PokemonLabel>
            <PokemonCardLabelText>
              { textFormatter.capitalize(pokemon.name )}
            </PokemonCardLabelText>
          </PokemonLabel>
        </PokemonCardInnerWrapper>
      </Link>
    </PokemonCardWrapper>
  )
}
