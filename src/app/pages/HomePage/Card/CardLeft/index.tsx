import * as React from 'react';
import { Col, Row } from 'antd';
import coverDecorTl from 'images/cover-decor-tl.png';
import styled from 'styled-components/macro';

export function CardLeft() {
  return (
    <Wrapper>
      <img src={coverDecorTl} className='cardLeftImg' />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .cardLeftImg {
    left: 0;
    position: absolute;
  }
`;
