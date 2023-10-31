import * as React from 'react';
import styled from 'styled-components/macro';

export function CardInfoLeft() {
  return (
    <Wrapper>
      <h1 className='card_info_tittle'>Đắc Quang</h1>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .card_info_tittle {
    text-align: right;
    padding-right: 20px;
  }
`;
