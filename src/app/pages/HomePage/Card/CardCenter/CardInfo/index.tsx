import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import { CardInfoCenter } from './CardInfoCenter';
import { CardInfoLeft } from './CardInfoLeft';
import { CardInfoRight } from './CardInfoRight';

export function CardInfo() {
  return (
    <Wrapper>
      <Row>
        <Col span={10} xs={24} sm={24} md={24} lg={10}>
          <CardInfoLeft />
        </Col>
        <Col span={4} xs={24} sm={24} md={24} lg={4}>
          <CardInfoCenter />
        </Col>
        <Col span={10} xs={24} sm={24} md={24} lg={10}>
          <CardInfoRight />
        </Col>
      </Row>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 30px 0px;
`;
