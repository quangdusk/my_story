import * as React from 'react';
import styled from 'styled-components/macro';
import Bowtie from 'images/bowtie.png';
import { CardInfo } from './CardInfo';
import { Row } from 'antd';
import { CardInfoFooter } from './CardInfoFooter';
import FrameDecor from 'images/frame-decor-3.png';

export function CardCenter() {
  return (
    <Wrapper>
      <h1 className="card_center_tittle">Xin chao cac ban</h1>
      <img src={Bowtie} />
      <CardInfo />
      <img src={Bowtie} className="rotate" />
      <div className="dot"></div>
      <CardInfoFooter />
      <img className='rotateLeft45' src={FrameDecor} alt="" />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding-top: 40px;
  img {
    width: 100%;
  }
  .card_center_tittle {
    display: flex;
    text-align: center;
    flex-direction: column;
    margin-bottom: 48px;
    overflow-wrap: anywhere;
    font-size: 55px;
    font-family: Philosopher;
    font-weight: 300;
    color: ${p => p.theme.text};
  }
  .rotateLeft45 {
    max-width: 230px;
    display: flex;
    margin: auto;
  }
`;
