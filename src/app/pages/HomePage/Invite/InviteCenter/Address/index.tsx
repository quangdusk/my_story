import { Row, Tooltip } from 'antd';
import * as React from 'react';
import styled from 'styled-components/macro';
import BoyLove from 'images/heartboy.png';
import GirlLove from 'images/heartgirl.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export function Address() {
  const [address, setAddress] = React.useState(1);
  const [click, setClick] = React.useState(false);

  const hanhdleChangeAddress = () => {
    setClick(!click);
    setAddress(previousState => {
      return previousState == 1 ? 2 : 1;
    });
  };

  return (
    <Wrapper>
      <h3 className="tittle_h3 tittle">tại địa chỉ</h3>
      <Tooltip title={address == 1 ? 'Nhà trai' : 'Nhà gái'}>
        <div className="flip-card ">
          <div className={`flip-card-inner ${click && 'flip-card-rotate'}`}>
            <div className={`flip-card-front ${click && 'is-flipped'}`}>
              <img src={BoyLove} onClick={hanhdleChangeAddress} />
              <h3 className={`tittle_h3 tittle`}>
                Xóm Hoà An, Khu phố Đạo Tú, Phường Song Hồ, Thị xã Thuận Thành, Tỉnh Bắc Ninh
                <a
                  target="blank"
                  href="https://maps.app.goo.gl/imDdfN7CTgGbeXzh8"
                >
                  <FontAwesomeIcon icon={faLocationDot} style={{color: "#256d79", marginLeft: 10}} />
                </a>
              </h3>
            </div>
            <div className={`flip-card-back ${click && 'is-flipped'}`}>
              <img src={GirlLove} onClick={hanhdleChangeAddress} />
              <h3 className={`tittle_h3 tittle`}>
                Xóm Tây, Thôn Sen Hồ, Xã Lệ Chi, Huyện Gia Lâm, Thành phố Hà Nội{' '}
                <a
                  target="blank"
                  href="https://maps.app.goo.gl/c2vpBSKez2e2n6zh7"
                >
                  <FontAwesomeIcon icon={faLocationDot} style={{color: "#256d79", marginLeft: 10}} />
                </a>
              </h3>
            </div>
          </div>
        </div>
      </Tooltip>
      <Row style={{ marginTop: '100px' }}>
        <h3 className="tittle tittle_h3 font_calligraphy">
          Sự hiện diện của bạn sẽ là niềm vinh hạnh lớn của chúng tôi
        </h3>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* .tittle_h3:nth-child(2) {
    margin-top: 20px;
    max-width: 100%;
    font-size: 40px;
  } */
  .tittle_h3.tittle {
    max-width: 1000px;
  }
  h3:nth-child(3) {
    font-size: 40px;
    line-height: 52px;
  }
  .flip-card {
    background-color: transparent;
    perspective: 1000px;
    margin: auto;
    margin-top: 20px;
    min-height: 70px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .flip-card-rotate {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    left: 0;
  }

  .flip-card-front img,
  .flip-card-back img {
    width: 40px;
    height: 40px;
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }

  .tittle_h3 a img {
    width: 20px;
    margin-left: 10px;
  }
`;
