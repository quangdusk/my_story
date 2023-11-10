import * as React from 'react';
import styled from 'styled-components/macro';
import { Time } from './Time';
import { Address } from './Address';

export function InviteCenter() {
  const queryParameters = new URLSearchParams(window.location.search);
  var user = queryParameters.get('userId');
  var guest = queryParameters.get('guest');
  return (
    <Wrapper>
      <h2 className='tittle_h2 tittle' style={{paddingTop: "50px"}}>Trân trọng kính mời</h2>
      <h1 className='tittle_h1 tittle'>{guest}</h1>
      <h3 className='tittle_h3 tittle'>tới dự hôn lễ của 2 vợ chồng vào hồi</h3>
      <Time user={user}/>
      <Address />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .tittle_h1 {
    display: block;
    margin: auto;
    margin-top: 20px;
    font-style: italic;
    max-width: 500px;
    font-weight: 500;
    line-height: 70px;
    color: ${p=> p.theme.pink}
  }
  .tittle_h2 {
    display: block;
    margin: auto;
    max-width: 500px;
  }
  .tittle_h3 {
    display: block;
    margin: auto;
    box-sizing: border-box;
    line-height: 40px;
    max-width: 500px;
    margin-top: 30px;
  }
  .tittle_h3.tittle {
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 672px) {
    .tittle_h2, .tittle_h3 {
      font-size: 20px;
    }
    .tittle_h1 {
      font-size: 30px;
    }
    /* .tittle_h2.tittle {
      padding-top: 50px !important;
    } */
  }
`;
