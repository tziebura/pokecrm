import React from 'react';
import styled from "styled-components"
import { ContainedImage } from '../components';

const PullCenter = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`
export const Error404 = () => (
  <PullCenter>
    <ContainedImage height="720px" src="/images/not-found.png" alt="404 Not Found" />
  </PullCenter>
)