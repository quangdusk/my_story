import * as React from 'react';
import styled from 'styled-components/macro';
import EventLeft from 'images/event-left-type3.png';

export function InviteLeft() {
  return (
    <Wrapper>
      <img className='event_left' src={EventLeft} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: -150px;
  z-index: 2;
  @media only screen and (max-width: 672px) {
    .event_left {
      width: 100px !important;
      bottom:0px;
    }
  }
`;
