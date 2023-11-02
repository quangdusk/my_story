import * as React from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';

export function WeddingPictureCenter() {
  return (
    <Wrapper>
      <h1 className='tittle tittle_h1 font_calligraphy'>Ảnh ngày cưới</h1>
      <p className='tittle p'>Dưới đây là một số ảnh ngày cưới, bạn có thể xem cùng chúng mình <a>tại đây</a> nha ♥</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1290px;
  margin: auto;
  .tittle_h1 {
    font-size: 85px;
    line-height: 85px;
    text-shadow: -2px 2px 0px rgb(28 28 28 / 25%);
    margin-top: 0px;
  }
  .p {
    color: ${p => p.theme.blue};
  }
`;
