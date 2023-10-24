import * as React from 'react';
import styled from 'styled-components/macro';
import { Title } from '../../components/Title';

export function CardCenter() {
  return (
    <Wrapper>
      <h1 className='card_center_tittle'>Xin chao cac ban</h1>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .card_center_tittle {
    display: flex;
    text-align: center;
    flex-direction: column;
  }
`;
