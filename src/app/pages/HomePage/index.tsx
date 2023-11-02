import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import { Card } from './Card';
import { Invite } from './Invite';
import { Information } from './Information';
import { Family } from './Family';
import { Picture } from './Picture';
import { WeddingPicture } from './WeddingPicture';
import { Celebrate } from './Celebrate';

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
      <PageWrapper>
        <Card />
        <Invite />
        <Information />
        <Family />
        <Picture />
        <WeddingPicture />
        <Celebrate />
      </PageWrapper>
    </>
  );
}
