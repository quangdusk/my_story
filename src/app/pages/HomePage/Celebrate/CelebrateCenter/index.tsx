import * as React from 'react';
import styled from 'styled-components/macro';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Husband from 'images/Husband.jpeg';
import {
  HomeOutlined,
  ScheduleOutlined,
  HeartOutlined
} from '@ant-design/icons';
import { Row } from 'antd';
import StoryDecor from 'images/story-decor.png';
import WifeBirthday from 'images/WifeBirthday.jpeg';

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
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<HomeOutlined />}
        >
          <h3 className="vertical-timeline-element-title">08.11.2022</h3>
          <p>
            Sau thời gian quen nhau thì đây là lần đầu mình tổ chức sinh nhật cho bạn ấy nè
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<ScheduleOutlined />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<ScheduleOutlined />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<ScheduleOutlined />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<ScheduleOutlined />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<ScheduleOutlined />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<ScheduleOutlined />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
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
    background-size: cover;
    background-repeat: no-repeat;
  }
  .vertical-timeline-element-icon svg {
    position: absolute;
  }
  .story_decor {
    padding-top: 30px;
  }
`;
