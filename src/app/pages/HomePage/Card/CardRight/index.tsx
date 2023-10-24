import * as React from 'react';
import FlowerDecor2 from 'images/flower-decor2.png';
import styled from 'styled-components/macro';

export function CardRight() {
  return (
    <Wrapper>
      <img src={FlowerDecor2} alt="" className='cardRightImg' />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .cardRightImg {
    right: 0;
    position: absolute;
  }
`;
