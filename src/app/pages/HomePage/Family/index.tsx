import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import Ring from 'images/ring.png';
import StoryDecor from 'images/story-decor.png';

export function Family() {
  return (
    <Wrapper>
      <Row>
        <Col span={8} xs={8} sm={8} md={8} lg={8}>
          <h3 className="p">Nhà trai</h3>
          <h2 className="tittle">Nguyễn Đắc Toàn</h2>
          <h2 className="tittle">Trịnh Thị Mai</h2>
        </Col>
        <Col span={8} xs={8} sm={8} md={8} lg={8}>
          <Row justify="space-around" align="middle" style={{height: '100%'}}>
              <img className="ring" src={Ring} />
          </Row>
        </Col>
        <Col span={8} xs={8} sm={8} md={8} lg={8}>
          <h3 className="p">Nhà gái</h3>
          <h2 className="tittle">Nguyễn Đắc Toàn</h2>
          <h2 className="tittle">Trịnh Thị Mai</h2>
        </Col>
      </Row>
      <Row className='story_decor' justify='space-around'>
        <img src={StoryDecor} />
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1290px;
  padding-top: 216px;
  margin: auto;
  h3 {
    color: ${p => p.theme.textSecondary};
    line-height: 24px;
    margin-bottom: 8px;
    text-align: center;
  }

  .tittle {
    font-size: 32px;
    color: ${p => p.theme.blue};
  }
  .story_decor {
    padding-top: 130px;
  }
`;
