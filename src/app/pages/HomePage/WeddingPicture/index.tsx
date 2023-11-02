import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import { WeddingPictureLeft } from './WeddingPictureLeft';
import { WeddingPictureCenter } from './WeddingPictureCenter';
import { WeddingPictureRight } from './WeddingPictureRight';

export function WeddingPicture() {
  return (
    <Wrapper>
      <Row>
        <Col span={4} xs={4} sm={4} md={4} lg={4}>
          <WeddingPictureLeft />
        </Col>
        <Col span={16} xs={16} sm={16} md={16} lg={16}>
          <WeddingPictureCenter />
        </Col>
        <Col span={4} xs={4} sm={4} md={4} lg={4}>
          <WeddingPictureRight />
        </Col>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 100px;
`;
