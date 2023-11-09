import * as React from 'react';
import styled from 'styled-components/macro';

export function Time(user) {
  return (
    <Wrapper>
      <div>
        <h2 className="tittle_h2 tittle">Thời gian</h2>
        <h2 className="tittle_h2 tittle">{user.user == 1 ? '15:00' : '09:00'}</h2>
      </div>
      <div>
        <h2 className="tittle_h2 tittle">Thứ</h2>
        <h2 className="tittle_h2 tittle">{user.user == 1 ? '06' : '05'}</h2>
      </div>
      <div>
        <h2 className="tittle_h2 tittle">Tháng</h2>
        <h2 className="tittle_h2 tittle">12.2023</h2>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  div {
    margin-top: 40px;
    width: 300px;
    text-align: center;
    border-right: 1px solid ${p => p.theme.text};
  }
  .tittle_h2 {
    margin: 0 !important;
    padding: 0;
  }
  div:nth-child(3) {
    border-right: none;
  }
  div:nth-child(2) .tittle_h2:nth-child(2) {
    font-size: 100px;
    line-height: 102px;
  }
`;
