import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Modal, QRCode } from 'antd';
import Donate3 from 'images/donate3.png';
import VBa from 'images/v-ba.png';
import VBL from 'images/v-l.png';
import VBR from 'images/v-r.png';
import VB from 'images/v-b.png';

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
          </div>
        </div>
      </div>

      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <QRCode
          errorLevel="H"
          size={160}
          iconSize={160 / 4}
          value="https://ant.design/"
          icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        />
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
    left: 0;
  }
  .letter_right {
    position: absolute;
    left: 48%;
  }

  .letter_top {
    position: absolute;
    transform: rotate(180deg);
    left: 0;
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

  ul li:nth-child(1) {
    animation-delay: 0s;
  }
`;
