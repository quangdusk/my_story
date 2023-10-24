import * as React from 'react';
import { Col, Row } from 'antd';
import { CardLeft } from './CardLeft';
import { CardCenter } from './CardCenter';
import { CardRight } from './CardRight';

export function Card() {
  return (
    <>
      <Row>
        <Col
          span={4}
          xs={{ order: 1 }}
          sm={{ order: 2 }}
          md={{ order: 3 }}
          lg={{ order: 4 }}
        >
          <CardLeft />
        </Col>
        <Col
          span={16}
          xs={{ order: 1 }}
          sm={{ order: 2 }}
          md={{ order: 3 }}
          lg={{ order: 4 }}
        >
          <CardCenter />
        </Col>
        <Col
          span={4}
          xs={{ order: 1 }}
          sm={{ order: 2 }}
          md={{ order: 3 }}
          lg={{ order: 4 }}
        >
          <CardRight />
        </Col>
      </Row>
    </>
  );
}
