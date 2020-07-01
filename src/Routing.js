import React from 'react';
import { 
  Pokemons,
  Pokemon,
  Home,
  Error404,
} from './pages';
import {
  Switch,
  Route,
} from "react-router-dom";
import { getQueryParams } from './helpers';

export const Routing = () => (
  <Switch>
    <Route exact path="/pokemons" render={
      (props) => {
        const query = getQueryParams(props.location);
        return <Pokemons { ...props } page={ query.page } limit={ query.limit } search={ query.search } />
      }
    } 
    />
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/pokemons/:pokemon">
      <Pokemon />
    </Route>
    <Route path="*">
      <Error404 />
    </Route>
  </Switch>
)