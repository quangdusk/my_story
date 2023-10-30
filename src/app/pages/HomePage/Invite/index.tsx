import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import { InviteLeft } from './InviteLeft';
import { InviteCenter } from './InviteCenter';
import { InviteRight } from './InviteRight';

export function Invite() {
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
          <InviteLeft />
        </Col>
        <Col
          span={16}
          xs={16}
          sm={16}
          md={16}
          lg={16}
        >
          <InviteCenter />
        </Col>
        <Col
          span={4}
          xs={4}
          sm={4}
          md={4}
          lg={4}
        >
          <InviteRight />
        </Col>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-bottom: 2px solid ${p => p.theme.border};
`;
