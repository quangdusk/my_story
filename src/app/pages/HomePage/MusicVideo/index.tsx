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
      loop: 1,
    },
  };

  return (
    <Wrapper>
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/JgTZvDbaTtg?si=P7wtuGJOGyeR1hdG"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> */}
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
