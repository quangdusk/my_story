import * as React from 'react';
import styled from 'styled-components/macro';
import { Time } from './Time';
import { Address } from './Address';

export function InviteCenter() {
  return (
    <Wrapper>
      <h2 className='tittle_h2 tittle'>Trân trọng kính mời</h2>
      <h1 className='tittle_h1 tittle'>Bạn A cùng người thương</h1>
      <h3 className='tittle_h3 tittle'>tới dự hôn lễ của 2 vợ chồng vào hồi</h3>
      <Time />
      <Address />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .tittle_h1 {
    display: block;
    margin: auto;
    margin-top: 40px;
    font-style: italic;
    max-width: 500px;
    font-weight: 500;
    line-height: 70px;
  }
  .tittle_h2 {
    display: block;
    margin: auto;
    max-width: 500px;
    margin-top: 100px;
  }
  .tittle_h3 {
    display: block;
    margin: auto;
    box-sizing: border-box;
    line-height: 40px;
    max-width: 500px;
    margin-top: 50px;
  }
`;
