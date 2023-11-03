import * as React from 'react';
import styled from 'styled-components/macro';

export function MusicVideo() {
  return (
    <Wrapper>
      <iframe
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/TKlXc3iywoM?si=ujQtBW5mSEO9eU0h"
        title="Một nhà"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1290px;
  margin: auto;
  margin-top: 50px;
  padding-bottom: 100px;
`;
