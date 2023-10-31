import * as React from 'react';
import CardLeftImg from 'images/cardLeft.png';
import styled from 'styled-components/macro';

export function CardLeft() {
  return (
    <Wrapper>
      <img src={CardLeftImg} className='cardLeftImg'/>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .cardLeftImg {
    left: 0;
    position: absolute;
    max-width: 400px;
  }
`;
