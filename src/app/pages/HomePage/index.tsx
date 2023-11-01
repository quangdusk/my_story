import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import { Card } from './Card';
import { Invite } from './Invite';
import { Information } from './Information';
import { Family } from './Family';

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
        <Information />
        <Family />
        {/* <Masthead />
        <Features /> */}
      </PageWrapper>
    </>
  );
}
