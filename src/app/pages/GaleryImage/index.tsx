import { Col, Row } from 'antd';
import * as React from 'react';
import styled from 'styled-components/macro';
import StoryDecor from 'images/story-decor.png';
import DSC1206 from 'images/DSC_1206.jpg';
import DSC1237 from 'images/DSC_1237.jpg';
import DSC1308 from 'images/DSC_1308.jpg';
import DSC1346 from 'images/DSC_1346.jpg';
import DSC1425 from 'images/DSC_1425.jpg';
import DSC1510 from 'images/DSC_1510.jpg';
import DSC1562 from 'images/DSC_1562.jpg';
import DSC1574 from 'images/DSC_1574.jpg';
import DSC1600 from 'images/DSC_1600.jpg';
import DSC1603 from 'images/DSC_1603.jpg';
import DSC1607 from 'images/DSC_1607.jpg';
import DSC1628 from 'images/DSC_1628.jpg';
import DSC1638 from 'images/DSC_1638.jpg';
import DSC1738 from 'images/DSC_1738.jpg';
import DSC1750 from 'images/DSC_1750.jpg';
import DSC1771 from 'images/DSC_1771.jpg';
import DSC1777 from 'images/DSC_1777.jpg';
import DSC1803 from 'images/DSC_1803.jpg';

export function GaleryImage() {
  return (
    <Wrapper>
      <div className="row">
        <div className="column">
          <img src={DSC1206} loading="lazy" />
          <img src={DSC1237} loading="lazy" />
          <img src={DSC1308} loading="lazy" />
          <img src={DSC1346} loading="lazy" />
          <img src={DSC1425} loading="lazy" />
          <img src={DSC1510} loading="lazy" />
        </div>
        <div className="column">
          <img src={DSC1562} loading="lazy" />
          <img src={DSC1574} loading="lazy" />
          <img src={DSC1600} loading="lazy" />
          <img src={DSC1603} loading="lazy" />
          <img src={DSC1607} loading="lazy" />
          <img src={DSC1628} loading="lazy" />
        </div>
        <div className="column">
          <img src={DSC1638} loading="lazy" />
          <img src={DSC1738} loading="lazy" />
          <img src={DSC1750} loading="lazy" />
          <img src={DSC1771} loading="lazy" />
          <img src={DSC1777} loading="lazy" />
          <img src={DSC1803} loading="lazy" />
        </div>
      </div>
      <Row className="story_decor" justify="space-around" align="middle">
        <Col span={12} xs={12} sm={12} md={12} lg={12}>
          <img className="rotate" src={StoryDecor} />
        </Col>
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

  .story_decor img {
    width: 100%;
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
