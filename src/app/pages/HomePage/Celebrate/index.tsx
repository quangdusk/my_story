import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import { CelebrateLeft } from './CelebrateLeft';
import { CelebrateCenter } from './CelebrateCenter';
import { CelebrateRight } from './CelebrateRight';

export function Celebrate() {
  return (
    <Wrapper>
      <Row>
        <Col span={4} xs={4} sm={4} md={4} lg={4}>
          <CelebrateLeft />
        </Col>
        <Col span={16} xs={16} sm={16} md={16} lg={16}>
          <CelebrateCenter />
        </Col>
        <Col span={4} xs={4} sm={4} md={4} lg={4}>
          <CelebrateRight />
        </Col>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
`;
