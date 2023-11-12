import * as React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components/macro';

export function MusicVideo() {
  const videoOptions = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      showinfo: 0,
      mute: 0,
      loop: 1
    }
  };
  return (
    <Wrapper>
      <YouTube videoId="JgTZvDbaTtg" opts={videoOptions} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1290px;
  margin: auto;
  margin-top: 50px;
  padding-bottom: 100px;
  padding: 12px;
`;
