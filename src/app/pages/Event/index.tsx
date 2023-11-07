import * as React from 'react';
import styled from 'styled-components/macro';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ScheduleOutlined, HeartOutlined } from '@ant-design/icons';

export function Event() {
  return (
    <Wrapper>
      <h1 className="tittle tittle_h1">Sự kiện</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date={`07:00 23.11.2023`}
          dateClassName={'date_background'}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<ScheduleOutlined />}
        >
          <h3 className="vertical-timeline-element-title">Lễ ăn hỏi</h3>
          <h4 className="vertical-timeline-element-subtitle">Nhà gái</h4>
          <p>
            Xóm Tây, Thôn Sen Hồ, Xã Lệ Chi, Huyện Gia Lâm, Thành phố Hà Nội
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="16:00 23.11.2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<ScheduleOutlined />}
        >
          <h3 className="vertical-timeline-element-title">Bữa cơm thân mật</h3>
          <h4 className="vertical-timeline-element-subtitle">Nhà gái</h4>
          <p>
            Xóm Tây, Thôn Sen Hồ, Xã Lệ Chi, Huyện Gia Lâm, Thành phố Hà Nội
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="09:00 24.11.2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<ScheduleOutlined />}
        >
          <h3 className="vertical-timeline-element-title">Rước dâu</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            Xóm Hoà An, Khu phố Đạo Tú, Phường Song Hồ, Thị xã Thuận Thành, Tỉnh
            Bắc Ninh
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="16:00 24.11.2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<ScheduleOutlined />}
        >
          <h3 className="vertical-timeline-element-title">Bữa cơm thân mật</h3>
          <h4 className="vertical-timeline-element-subtitle">Nhà trai</h4>
          <p>
            Xóm Hoà An, Khu phố Đạo Tú, Phường Song Hồ, Thị xã Thuận Thành, Tỉnh
            Bắc Ninh
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(247, 4, 65)', color: '#fff' }}
          icon={<HeartOutlined />}
        />
      </VerticalTimeline>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1290px;
  padding-top: 50px;
  margin: auto;
  .tittle_h1 {
    font-size: 55px;
    line-height: 62px;
  }
  .vertical-timeline-element-icon svg {
    position: absolute;
  }
`;
