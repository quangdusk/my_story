import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import StoryDecor from 'images/story-decor.png';
import Date from 'images/Date.jpeg';
import CauHon from 'images/CauHon.jpeg';
import CongVien from 'images/CongVien.jpeg';

export function Picture() {
  return (
    <Wrapper>
      <Row className="picture">
        <Col span={9} xs={24} sm={24} md={24} lg={9}>
          <img src={CauHon} />
        </Col>
        <Col span={6} xs={24} sm={24} md={24} lg={6}>
          <img src={Date} />
        </Col>
        <Col span={9} xs={24} sm={24} md={24} lg={9}>
          <img src={CongVien} />
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
