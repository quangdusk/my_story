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
        <Col
          span={10}
          xs={{ order: 1 }}
          sm={{ order: 2 }}
          md={{ order: 3 }}
          lg={{ order: 4 }}
        >
          <CardInfoLeft />
        </Col>
        <Col
          span={4}
          xs={{ order: 1 }}
          sm={{ order: 2 }}
          md={{ order: 3 }}
          lg={{ order: 4 }}
        >
          <CardInfoCenter />
        </Col>
        <Col
          span={10}
          xs={{ order: 1 }}
          sm={{ order: 2 }}
          md={{ order: 3 }}
          lg={{ order: 4 }}
        >
          <CardInfoRight />
        </Col>
      </Row>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 30px 0px;
`;
