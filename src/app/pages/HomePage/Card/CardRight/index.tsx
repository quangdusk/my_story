import * as React from 'react';
import CardRightImg from 'images/cardRight.png';
import styled from 'styled-components/macro';

export function CardRight() {
  return (
    <Wrapper>
      <img src={CardRightImg} className='cardRightImg'/>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .cardRightImg {
    right: 0;
    position: absolute;
  }
`;
