import * as React from 'react';
import styled from 'styled-components/macro';
import EventRight from 'images/event-right-type3.png';

export function InviteRight() {
  return (
    <Wrapper>
      <img src={EventRight} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: -150px;
  right: 0;
`;
