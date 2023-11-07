import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import Donate3 from 'images/donate3.png';

export function QrCode() {
  return (
    <Wrapper>
      <ul>
        <li><img src={Donate3} /></li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 100px;
  ul {
    margin: 0;
    padding: 0;
    position: fixed;
    right: 30px;
    bottom: 30px;
  }
  
  ul li {
    background-color: red;
    list-style: none;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    animation: animate 7s linear infinite;
    /* transform-origin: bottom center; */
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(359deg);
    }
  }

  ul li:nth-child(1) {
    animation-delay: 0s;
  }
`;
