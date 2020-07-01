import styled from "styled-components";

const navWidth = '230px';
const navBgColor = '#ff2400';

const Main = styled.main`
  padding-left: ${ navWidth };
`

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: ${ navWidth };
  height: 100%;
  background-color: ${ navBgColor };
  padding: 50px 15px 15px;
`

export {
  Main,
  Aside,
};