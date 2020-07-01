import { useState, useEffect } from "react"
import { requestConstants } from "../constants";
import { axios } from "../helpers";

export const usePokemon = (name) => {
  const [pokemon, setPokemon] = useState({});
  const [status, setStatus] = useState(requestConstants.IDLE);

  useEffect(() => {
    setStatus(requestConstants.PENDING);
    axios.get(`/pokemon/${name}/`)
    .then(response => {
      console.log(response.data);
      setPokemon(response.data);
      setStatus(requestConstants.SUCCESS);
    })
    .catch(err => {
      console.log(err);
      setStatus(requestConstants.FAILURE);
    })
  }, [name]);

  return {
    pokemon,
    status,
  };
}