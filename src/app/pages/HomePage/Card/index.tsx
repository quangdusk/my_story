import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import { CardLeft } from './CardLeft';
import { CardCenter } from './CardCenter';
import { CardRight } from './CardRight';

export function Card() {
  return (
    <Wrapper>
      <Row>
        <Col
          span={4}
          xs={4}
          sm={4}
          md={4}
          lg={4}
        >
          <CardLeft />
        </Col>
        <Col
          span={16}
          xs={16}
          sm={16}
          md={16}
          lg={16}
        >
          <CardCenter />
        </Col>
        <Col
          span={4}
          xs={4}
          sm={4}
          md={4}
          lg={4}
        >
          <CardRight />
        </Col>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${p => p.theme.text};
  background: ${p => p.theme.background};
`;
