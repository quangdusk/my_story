import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import HusbandImage from 'images/info1.png';
import FrameDecor2 from 'images/frame-decor-2.png';
import FrameDecor3 from 'images/frame-decor-3.png';

export function Wife() {
  return (
    <Wrapper>
      <Row justify="space-between">
        <Col span={12} xs={12} sm={12} md={12} lg={12}>
          <Row justify="space-around" align="middle" style={{ height: '100%' }}>
            <div className="text_profile">
              <h2 className="tittle_h2 tittle">Cô dâu</h2>
              <h1 className="font_calligraphy tittle_h1 tittle">
                Phạm Thị Hồng
              </h1>
              <p className="tittle">
                Mời chú rể giới thiệu về bản thân ở đây nha. Chú rể có thể trả
                lời những câu hỏi cơ bản như tên đầy đủ là gì nè, bao tuổi rùi,
                nhà ở đâu, sở thích, ưu điểm, khuyết điểm, ... Tất cả những gì
                mà chú rể muốn chia sẻ về bản thân thì mời chú rể hãy chia sẻ ở
                đây nha ♥
              </p>
            </div>
          </Row>
        </Col>
        <Col span={12} xs={12} sm={12} md={12} lg={12}>
          <Row justify="end">
            <div className="picture_profile">
              <div className="picture_decor">
                <img className="picture_decor_left rotate" src={FrameDecor2} />
                <img className="picture_decor_right" src={FrameDecor3} />
              </div>
              <div className="picture_profile_center">
                <img src={HusbandImage} />
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1290px;
  margin: auto;
  .picture_profile {
    width: 376px;
    height: 590px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding-top: 25px;
    z-index: 1;
  }
  .picture_profile_center {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
  }
  .picture_profile_center img {
    object-fit: cover;
    position: relative;
    width: calc(100% - 50px);
    height: 100%;
    border-radius: 200px 200px 0 0;
    padding-bottom: 25px;
  }
  .picture_decor {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .picture_decor_left {
    position: absolute;
    top: 52%;
    left: -6.1rem;
    transform: translateY(-50%);
  }
  .picture_decor_right {
    position: absolute;
    top: 30px;
    right: -6.2rem;
    transform: translateY(-50%);
  }
  .tittle_h2 {
    color: ${p => p.theme.blue};
    font-size: 40px;
    margin: 0px;
  }
  .tittle {
    text-align: left;
  }
  .tittle_h1 {
    text-shadow: -2px 2px 0px rgba(28, 28, 28, 0.25);
    font-weight: 500;
    font-size: 85px;
    margin: 0px;
  }
`;
