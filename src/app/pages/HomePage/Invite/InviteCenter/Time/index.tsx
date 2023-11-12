import { Col, Row } from 'antd';
import styled from 'styled-components/macro';

export function Time(user) {
  return (
    <Wrapper>
      <Row justify="center" align="middle">
        <Col span={8} xs={18} sm={18} md={18} lg={8}>
          <h2 className="tittle_h2 tittle">Thời gian</h2>
          <h2 className="tittle_h2 tittle">
            {user.user == 1 ? '16:00' : '16:00'}
          </h2>
        </Col>
        <Col className="border" span={8} xs={18} sm={18} md={18} lg={8}>
          <h2 className="tittle_h2 tittle">Thứ</h2>
          <h2 className="tittle_h2 tittle upper">
            {user.user == 1 ? '05' : '06'}
          </h2>
        </Col>
        <Col span={8} xs={18} sm={18} md={18} lg={8}>
          <h2 className="tittle_h2 tittle">Ngày</h2>
          <h2 className="tittle_h2 tittle">{user.user == 1 ? '23.11.2023' : '24.11.2023'}</h2>
        </Col>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .border {
    border-right: 1px solid ${p => p.theme.text};
    border-left: 1px solid ${p => p.theme.text};
  }
  .upper {
    font-size: 100px;
  }
  @media only screen and (max-width: 672px) {
    .border {
      border-bottom: 1px solid ${p => p.theme.text};
      border-top: 1px solid ${p => p.theme.text};
      border-right: none;
      border-left: none;
    }
    .upper {
      font-size: 50px !important;
    }
  }
  .tittle_h2 {
    margin: 0 !important;
    padding: 0;
  }
`;
