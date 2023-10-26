import * as React from 'react';
import styled from 'styled-components/macro';
import And from 'images/and.png';

export function CardInfoFooter() {
  return (
    <Wrapper>
      <h1 className='card_info_tittle'>06 . 09 . 2069</h1>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  text-align: center;
  .card_info_tittle {
    font-family: Philosopher;
    font-style: initial;
    font-size: 55px;
    font-weight: normal;
  }
`;
