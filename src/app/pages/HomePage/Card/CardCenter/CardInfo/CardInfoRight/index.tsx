import * as React from 'react';
import styled from 'styled-components/macro';

export function CardInfoRight() {
  return (
    <Wrapper>
      <h1 className='card_info_tittle'>Phạm Hồng</h1>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .card_info_tittle {
    text-align: left;
  }
`;
