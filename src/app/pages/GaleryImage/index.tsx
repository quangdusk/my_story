import { Row } from 'antd';
import * as React from 'react';
import styled from 'styled-components/macro';
import StoryDecor from 'images/story-decor.png';

export function GaleryImage() {
  return (
    <Wrapper>
      <div className="row">
        <div className="column">
          <img src="https://www.w3schools.com/w3images/nature.jpg" />
          <img src="https://www.w3schools.com/w3images/rocks.jpg" />
          <img src="https://www.w3schools.com/w3images/nature.jpg" />
          <img src="https://www.w3schools.com/w3images/nature.jpg" />
          <img src="https://www.w3schools.com/w3images/rocks.jpg" />
          <img src="https://www.w3schools.com/w3images/nature.jpg" />
          <img src="https://www.w3schools.com/w3images/nature.jpg" />
        </div>
        <div className="column">
          <img src="https://www.w3schools.com/w3images/nature.jpg" />
          <img src="https://www.w3schools.com/w3images/rocks.jpg" />
          <img src="https://www.w3schools.com/w3images/nature.jpg" />
          <img src="https://www.w3schools.com/w3images/nature.jpg" />
        </div>
        <div className="column">
          <img src="https://www.w3schools.com/w3images/nature.jpg" />
          <img src="https://www.w3schools.com/w3images/nature.jpg" />
          <img src="https://www.w3schools.com/w3images/rocks.jpg" />
          <img src="https://www.w3schools.com/w3images/nature.jpg" />
          <img src="https://www.w3schools.com/w3images/nature.jpg" />
        </div>
      </div>
      <Row className="story_decor" justify="space-around">
        <img className="rotate" src={StoryDecor} />
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1290px;
  margin: auto;
  margin-top: 50px;
  .row {
    display: -ms-flexbox; 
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 11px;
  }

  .story_decor {
    margin-top: 90px;
  }

  .column {
    -ms-flex: 33%;
    flex: 33%;
    max-width: 33%;
    padding: 0 11px;
  }

  .column img {
    margin-top: 24px;
    vertical-align: middle;
    width: 100%;
  }
`;
