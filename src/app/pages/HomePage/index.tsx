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
import { GaleryImage } from '../GaleryImage';
import { Event } from '../Event';
import { MusicVideo } from './MusicVideo';
import { QrCode } from './QrCode';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>QuangHongWedding</title>
        <meta
          name="description"
          content="Đám cưới của Quang và Hồng"
        />
      </Helmet>
      <PageWrapper>
        <Card />
        <Invite />
        <Event />
        <Information />
        <Family />
        <Picture />
        {/* <WeddingPicture /> */}
        <Celebrate />
        <GaleryImage />
        <MusicVideo />
        <QrCode />
      </PageWrapper>
    </>
  );
}
