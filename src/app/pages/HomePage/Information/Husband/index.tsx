import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import HusbandImage from 'images/info1.png';
import FrameDecor1 from 'images/framde-decor-1.png';
import FrameDecor2 from 'images/frame-decor-2.png';

export function Husband() {
  return (
    <Wrapper>
      <Row>
        <Col span={12} xs={12} sm={12} md={12} lg={12}>
          <div className="picture_profile">
            <div className="picture_decor">
              <img className="picture_decor_left" src={FrameDecor1} />
              <img className="picture_decor_right" src={FrameDecor2} />
            </div>
            <div className="picture_profile_center">
              <img src={HusbandImage} />
            </div>
          </div>
        </Col>
        <Col span={12} xs={12} sm={12} md={12} lg={12}>
          <div className="text_profile">
            <h2 className="tittle_h2 tittle">Chú rể</h2>
            <h1 className='font_calligraphy tittle_h1 tittle'>Nguyễn Đắc Quang</h1>
            <p className='tittle'>
              Mời chú rể giới thiệu về bản thân ở đây nha. Chú rể có thể trả lời
              những câu hỏi cơ bản như tên đầy đủ là gì nè, bao tuổi rùi, nhà ở
              đâu, sở thích, ưu điểm, khuyết điểm, ... Tất cả những gì mà chú rể
              muốn chia sẻ về bản thân thì mời chú rể hãy chia sẻ ở đây nha ♥
            </p>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1290px;
  margin: auto;
  margin-top: 80px;
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
    top: 50%;
    left: -4.7rem;
    transform: translateY(-50%);
  }
  .picture_decor_right {
    position: absolute;
    top: 85%;
    right: -6.1rem;
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
