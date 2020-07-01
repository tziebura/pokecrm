import { useState, useEffect, useCallback } from "react"
import { axios } from "../helpers";
import { requestConstants } from "../constants";

export const usePokemons = (cache) => {
  const [pokemons, setPokemons] = useState([]);
  const [status, setStatus] = useState(requestConstants.IDLE);

  const memoizedFunction = useCallback(function fetchPokemons() {
    setStatus(requestConstants.PENDING);
    axios.get('/pokemon?limit=-1').then(response => {
      // Before assigning attach a "Fake" ID, the API does not return a pokemon ID for some unknown reason,
      // But all the pokemons which have image are indexed from 1 to X so the only thing we have to do is
      // set a fake id equals (itemIndex + 1).
      const fetchedPokemons = response.data.results.map((pokemon, index) => {
        pokemon.fakeId = index + 1;
        return pokemon;
      });
      if(cache) {
        sessionStorage.setItem('pokemons', JSON.stringify(fetchedPokemons));
      }
      
      setPokemons(fetchedPokemons);
      setStatus(requestConstants.SUCCESS);
    }).catch(err => {
      console.log(err);
      setStatus(requestConstants.FAILURE);
    })
  }, [cache]);

  useEffect(() => {
    if(sessionStorage.getItem('pokemons')) {
      const cachedPokemons = JSON.parse(window.sessionStorage.getItem('pokemons'));
      if(Array.isArray(cachedPokemons)) {
        setPokemons(cachedPokemons);
        setStatus(requestConstants.SUCCESS);
      }
      return;
    }
    
    memoizedFunction();
  }, [memoizedFunction]);

  return { pokemons, status };
}
