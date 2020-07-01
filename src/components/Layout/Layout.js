import React from 'react';
import {
  Main,
  Aside,
} from './Layout.styled';
import { ContainedImage } from '../ContainedImage';
import { Link } from 'react-router-dom';

export const Layout = ({ children }) => (
  <div>
    <Aside>
      <ContainedImage height="180px" src="/images/logo.png" alt="PokeCRM" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pokemons">PokeCRM</Link></li>
        <li><Link to="/404">404 Page</Link></li>
      </ul>
    </Aside>
    <Main>
      { children }
    </Main>
  </div>
)