import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import LinkLeft from 'images/link-left.png';

export function WeddingPictureLeft() {
  return (
    <Wrapper>
      <img src={LinkLeft} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  
`;
