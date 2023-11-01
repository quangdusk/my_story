import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import { Husband } from './Husband';

export function Information() {
  return (
    <Wrapper>
      <Husband />
    </Wrapper>
  );
}

const Wrapper = styled.div`
`;
