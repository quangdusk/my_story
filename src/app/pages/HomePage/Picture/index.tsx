import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import Husband from 'images/Husband.jpeg';
import StoryDecor from 'images/story-decor.png';
import Date from 'images/Date.jpeg';

export function Picture() {
  return (
    <Wrapper>
      <Row className="picture">
        <Col span={9} xs={9} sm={9} md={9} lg={9}>
          <img src={Husband} />
        </Col>
        <Col span={6} xs={6} sm={6} md={6} lg={6}>
          <img src={Date} />
        </Col>
        <Col span={9} xs={9} sm={9} md={9} lg={9}>
          <img src={Husband} />
        </Col>
      </Row>
      <Row className="story_decor" justify="space-around" align="middle">
        <Col span={12} xs={12} sm={12} md={12} lg={12}>
          <img className="rotate" src={StoryDecor} style={{width: "100%"}} />
        </Col>
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
