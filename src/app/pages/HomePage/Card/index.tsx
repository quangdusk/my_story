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
          span={3}
          xs={3}
          sm={3}
          md={3}
          lg={3}
        >
          <CardLeft />
        </Col>
        <Col
          span={18}
          xs={18}
          sm={18}
          md={18}
          lg={18}
        >
          <CardCenter />
        </Col>
        <Col
          span={3}
          xs={3}
          sm={3}
          md={3}
          lg={3}
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
  border-bottom: 2px solid ${p => p.theme.border};
`;
