import * as React from 'react';
import styled from 'styled-components/macro';
import And from 'images/and.png';

export function CardInfoCenter() {
  return (
    <Wrapper>
      <img className='and' src={And} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  text-align: center;
  img {
    max-width: 114px;
  }
`;
