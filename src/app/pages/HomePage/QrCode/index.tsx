import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Modal, QRCode } from 'antd';
import Donate3 from 'images/donate3.png';
import VBa from 'images/v-ba.png';
import VBL from 'images/v-l.png';
import VBR from 'images/v-r.png';
import VB from 'images/v-b.png';
import Heart from 'images/heart.png';
import QrCodeImage from 'images/qr_code.jpeg';

export function QrCode() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <div className="qr_code" onClick={showModal}>
        <ul>
          <li >
            <img src={Donate3}/>
          </li>
        </ul>
        <div className="letter">
          <div className="letter_image">
            <img className="letter_center" src={VBa} />
            <img className="letter_left" src={VBL} />
            <img className="letter_right" src={VBR} />
            <img className="letter_top" src={VB} />
            <img className="letter_bottom" src={VB} />
            <img className="letter_in" src={Heart} />
          </div>
        </div>
      </div>

      <Modal
        // title="Basic Modal"
        centered
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={550}
        closeIcon={false}
      >
        <img src={QrCodeImage} style={{width: "500px", height: "800px"}} />
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 100px;
  .qr_code {
    margin: 0;
    padding: 0;
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 10;
  }

  .letter {
    position: absolute;
    top: 38%;
    left: 45%;
  }
  .letter_image {
    position: relative;
  }

  .letter_left {
    position: absolute;
    z-index: 11;
    left: 0;
  }
  .letter_right {
    position: absolute;
    z-index: 11;
    left: 48%;
  }

  .letter_in {
    position: absolute;
    z-index: 9;
    left: 5px;
  }

  .letter_image:hover .letter_top {
    transform: rotateY(180deg);
    top: -18px;
    z-index: 9;
    transform-style: preserve-3d;
  }

  .letter_image:hover .letter_in {
    animation: open 0.2s linear;
    top: -6px;
    z-index: 10;
  }

  .letter_top {
    position: absolute;
    z-index: 10;
    transform: rotate(180deg);
    left: 0;
  }

  .letter_bottom {
    position: absolute;
    z-index: 11;
    left: 0;
    bottom: 0;
  }

  ul li {
    list-style: none;
    animation: animate 7s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(359deg);
    }
  }

  @keyframes open {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes close {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  ul li:nth-child(1) {
    animation-delay: 0s;
  }
`;
