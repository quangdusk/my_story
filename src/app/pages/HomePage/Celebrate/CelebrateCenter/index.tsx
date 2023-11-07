import * as React from 'react';
import styled from 'styled-components/macro';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  HeartOutlined
} from '@ant-design/icons';
import { Row } from 'antd';
import StoryDecor from 'images/story-decor.png';
import WifeBirthday from 'images/WifeBirthday.jpeg';
import FirstDate from 'images/Date.jpeg';
import Noel from 'images/Noel.jpeg';
import CongVien from 'images/CongVien.jpeg';
import HaiVan from 'images/HaiVan.jpeg';
import Pagoda from 'images/Pagoda.jpeg';
import Cinema from 'images/Cinema.jpeg';
import Beach from 'images/Beach.jpeg';
import CauHon from 'images/CauHon.jpeg';

export function CelebrateCenter() {
  return (
    <Wrapper>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date={``}
          dateClassName={'date_background'}
          iconStyle={{ background: 'rgb(247, 4, 65)', color: '#fff' }}
          icon={<HeartOutlined />}
        >
          <h3 className="vertical-timeline-element-title">08.11.2022</h3>
          <p>
            Lần đầu tổ chức sinh nhật bất ngờ cho em
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          dateClassName={'first_date'}
          iconStyle={{ background: 'rgb(247, 4, 65)', color: '#fff' }}
          icon={<HeartOutlined />}
        >
          <h3 className="vertical-timeline-element-title">24.11.2022</h3>
          <p>
          Lần đầu chúng mình đi cafe và nắm tay nhau
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          dateClassName={'noel'}
          iconStyle={{ background: 'rgb(247, 4, 65)', color: '#fff' }}
          icon={<HeartOutlined />}
        >
          <h3 className="vertical-timeline-element-title">16.12.2022</h3>
          <p>Giáng sinh đầu tiên bên nhau </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          dateClassName={'park'}
          iconStyle={{ background: 'rgb(247, 4, 65)', color: '#fff' }}
          icon={<HeartOutlined />}
        >
          <h3 className="vertical-timeline-element-title">07.01.2023</h3>

          <p>Công viên Thống Nhất - nơi đầy ắp kỉ niệm</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          dateClassName={'hai_van'}
          iconStyle={{ background: 'rgb(247, 4, 65)', color: '#fff' }}
          icon={<HeartOutlined />}
        >
          <h3 className="vertical-timeline-element-title">
            12.01.2023
          </h3>
          <p>Hải Vân: nơi chúng mình gặp nhau, rồi yêu nhau. Kỷ niệm lần đầu hỗ trợ bạn ý setup sự kiện Year and party ở Hải Vân. Công việc mà bạn ý yêu thích</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          dateClassName={'pagoda'}
          iconStyle={{ background: 'rgb(247, 4, 65)', color: '#fff' }}
          icon={<HeartOutlined />}
        >
          <h3 className="vertical-timeline-element-title">
            22.01.2023
          </h3>
          <p>Tết đầu tiên bên nhau. Cũng xúng xính váy áo rủ nhau đi chùa thắp hương cầu may mắn, bình an</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          dateClassName={'cinema'}
          iconStyle={{ background: 'rgb(247, 4, 65)', color: '#fff' }}
          icon={<HeartOutlined />}
        >
          <h3 className="vertical-timeline-element-title">
            27.01.2023
          </h3>
          <p>Kỷ niệm lần đầu đi xem phim với nhau. Hôm ý chúng mình đi xem phim Nhà Bà Nữ do Trấn Thành làm đạo diễn. Bạn Dâu Tây hôm ý mít ướt dữ lắm nhưng phim thật sự cũng rất hay và ý nghĩa</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          dateClassName={'beach'}
          iconStyle={{ background: 'rgb(247, 4, 65)', color: '#fff' }}
          icon={<HeartOutlined />}
        >
          <h3 className="vertical-timeline-element-title">
            26.06.2023
          </h3>
          <p>Hạ Long đón chúng mình bằng cơn mưa trắng xóa cả biển, nhưng kết thúc lại là 1 ngày nắng đẹp và có cả Cầu Vồng.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          dateClassName={'cau_hon'}
          iconStyle={{ background: 'rgb(247, 4, 65)', color: '#fff' }}
          icon={<HeartOutlined />}
        >
          <h3 className="vertical-timeline-element-title">
            26.10.2023
          </h3>
          <p>Mình cầu hôn bạn Dâu Tây bất ngờ đó, tại chính quán cafe lần đầu chúng mình đi với nhau. Và bạn ý đã SAY YESSSSS!</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(247, 4, 65)', color: '#fff' }}
          icon={<HeartOutlined />}
        />
      </VerticalTimeline>
      <Row className='story_decor' justify='space-around'>
        <img src={StoryDecor} />
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .date_background {
    background-image: url(${WifeBirthday});
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .first_date {
    background-image: url(${FirstDate});
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .noel {
    background-image: url(${Noel});
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .park {
    background-image: url(${CongVien});
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .hai_van {
    background-image: url(${HaiVan});
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .pagoda {
    background-image: url(${Pagoda});
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .cinema {
    background-image: url(${Cinema});
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .beach {
    background-image: url(${Beach});
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .cau_hon {
    background-image: url(${CauHon});
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .vertical-timeline-element-icon svg {
    position: absolute;
  }
  .story_decor {
    padding-top: 30px;
  }
`;
