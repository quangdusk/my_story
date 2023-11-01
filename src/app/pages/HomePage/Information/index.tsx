import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import { Husband } from './Husband';
import { Wife } from './Wife';

export function Information() {
  return (
    <Wrapper>
      <Husband />
      <Wife />
    </Wrapper>
  );
}

const Wrapper = styled.div`
`;
