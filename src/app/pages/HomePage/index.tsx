import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { Masthead } from './Masthead';
import { Features } from './Features';
import { PageWrapper } from 'app/components/PageWrapper';
import { Col, Row } from 'antd';
import { Card } from './Card';
import { Invite } from './Invite';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Nguyễn Đắc Quang</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      {/* <NavBar /> */}
      <PageWrapper>
        <Card />
        <Invite />
        {/* <Masthead />
        <Features /> */}
      </PageWrapper>
    </>
  );
}
