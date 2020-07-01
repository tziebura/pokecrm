import React from 'react';
import {
  PaginatorWrapper,
  PaginatorButton,
  PaginatorDisabledButton,
  PaginatorButtonRow,
} from './PaginatorNav.styled';

const limitChoices = [10, 25, 50, 100, 250, 500, 1000];


const SmartLink = ({ href, text }) => {
  if(href) {
    return(
      <PaginatorButton to={ href }>
        { text }
      </PaginatorButton>
    );
  }
  else {
    return (
      <PaginatorDisabledButton>
        { text }
      </PaginatorDisabledButton>
    );
  }
}

export const PaginatorNav = props => {
  const {
    paginator,
    handleLimitChange,
  } = props;

  const { navigation, limit } = paginator;

  return (
    <PaginatorWrapper>
      <select value={ limit } onChange={ handleLimitChange }>
        { limitChoices.map((choice, index) => <option key={ index } value={ choice }>{ choice }</option> ) }
        { limitChoices.findIndex(el => el === parseInt(limit)) === -1 && <option value={ limit } key={ limitChoices.length }>{ limit }</option> }
      </select>
      <PaginatorButtonRow>
        { navigation.previousPage && <SmartLink text="First page" href={ navigation.firstPage } /> }
        <SmartLink href={ navigation.previousPage } text="Previous page" />
        <SmartLink href={ navigation.nextPage } text="Next page" />
        { navigation.nextPage && <SmartLink text="Last page" href={ navigation.lastPage } /> }
      </PaginatorButtonRow>      
    </PaginatorWrapper>
  )
}
