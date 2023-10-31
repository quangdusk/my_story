import * as React from 'react';
import styled from 'styled-components/macro';
import { Title } from './components/Title';
import BowtieBot from 'images/bowtie.png';

export function Information() {
  return (
    <Wrapper>
      <Title>Xin chao cac ban</Title>
      <img className='bottie_rotate' src={BowtieBot} />
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
  margin: 0 auto;
  width: 960px;
  .bottie_rotate {
    transform: rotate(180deg);
  }

`;
