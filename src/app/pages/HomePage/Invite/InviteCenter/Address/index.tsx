import { Col, Row } from 'antd';
import * as React from 'react';
import styled from 'styled-components/macro';

export function Address() {
  return (
    <Wrapper>
        <h3 className='tittle_h3 tittle'>Tại địa chỉ</h3>
        <h3 className='tittle_h3 tittle'>Tòa nhà N09B2 Thành Thái Dịch Vọng Hà Nội</h3>
        <h3 className='tittle font_calligraphy'>Sự hiện diện của bạn sẽ là niềm vinh hạnh lớn của chúng tôi</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    .tittle_h3:nth-child(2) {
        margin-top: 20px;
        max-width: 100%;
        font-size: 40px;
    }
    h3:nth-child(3){
        font-size: 40px;
        line-height: 52px;
    }
`;
