import * as React from 'react';
import styled from 'styled-components/macro';
import EventRight from 'images/event-right-type3.png';

export function InviteRight() {
  return (
    <Wrapper>
      <img className='event_right' src={EventRight} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: -150px;
  right: 0;
  @media only screen and (max-width: 672px) {
    .event_right {
      width: 100px !important;
      bottom: 0;
    }
  }
`;
