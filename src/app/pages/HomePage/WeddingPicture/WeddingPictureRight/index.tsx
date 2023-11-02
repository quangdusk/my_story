import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import LinkRight from 'images/link-right.png';

export function WeddingPictureRight() {
  return (
    <Wrapper>
      <Row justify="end">
        <img src={LinkRight} />
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
