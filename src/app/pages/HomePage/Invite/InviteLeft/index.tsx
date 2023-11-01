import * as React from 'react';
import styled from 'styled-components/macro';
import EventLeft from 'images/event-left-type3.png';

export function InviteLeft() {
  return (
    <Wrapper>
      <img src={EventLeft} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: -150px;
  z-index: 2;
`;
