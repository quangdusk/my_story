import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';

export function Husband() {
  return (
    <Wrapper>
      <Row>
        <Col span={12} xs={12} sm={12} md={12} lg={12}>
          <div className='picture_profile'>
            quang
          </div>
        </Col>
        <Col span={12} xs={12} sm={12} md={12} lg={12}></Col>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
