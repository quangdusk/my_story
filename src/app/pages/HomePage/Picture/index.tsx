import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import Husband from 'images/Husband.jpeg';
import StoryDecor from 'images/story-decor.png';

export function Picture() {
  return (
    <Wrapper>
      <Row className='picture'>
        <Col span={9} xs={9} sm={9} md={9} lg={9}>
          <img src={Husband} />
        </Col>
        <Col span={6} xs={6} sm={6} md={6} lg={6}>
          <img src={Husband} />
        </Col>
        <Col span={9} xs={9} sm={9} md={9} lg={9}>
          <img src={Husband} />
        </Col>
      </Row>
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
  .picture img {
    padding: 10px;
    object-fit: cover;
    width: 100%;
    max-height: 400px;
    height: 100%;
  }
  .story_decor {
    padding-top: 100px;
  }
`;
