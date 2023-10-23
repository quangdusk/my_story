import * as React from 'react';
import styled from 'styled-components/macro';
import { Title } from './components/Title';

export function Information() {
  return (
    <Wrapper>
      <Title>Xin chao cac ban</Title>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;
