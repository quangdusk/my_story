import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import Donate3 from 'images/donate3.png';
import { useScrollDirection } from 'react-use-scroll-direction'

export function QrCode() {
  const { isScrollingDown } = useScrollDirection();
  return (
    <Wrapper>
      <Row className="qr_code" justify="space-around" align="middle">
        {isScrollingDown ? 'Scrolling down' : 'scrolling up'}
        <img src={Donate3} />
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 100px;
  .qr_code {
    position: fixed;
    bottom: 50px;
    right: 50px;
    border-radius: 50%;
    z-index: 10000;
    background: ${p => p.theme.orange};
  }
`;
