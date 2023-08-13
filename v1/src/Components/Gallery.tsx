import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Divider } from 'antd';
import styled from 'styled-components';
import GalleryPhoto1 from '../Assets/wedding1.jpg';
import GalleryPhoto2 from '../Assets/wedding2.jpg';
import GalleryPhoto3 from '../Assets/wedding3.jpg';
import GalleryPhoto4 from '../Assets/wedding4.jpg';
import GalleryPhoto5 from '../Assets/wedding5.jpg';
import GalleryPhoto6 from '../Assets/wedding6.jpg';
import GalleryPhoto7 from '../Assets/wedding7.jpg';
import GalleryPhoto8 from '../Assets/wedding8.jpg';
import GalleryPhoto9 from '../Assets/wedding9.jpg';
import GalleryPhoto10 from '../Assets/wedding10.jpg';
import GalleryPhoto11 from '../Assets/wedding11.jpg';
import GalleryPhoto12 from '../Assets/wedding12.jpg';
import GalleryPhoto13 from '../Assets/wedding13.jpg';
import GalleryPhoto14 from '../Assets/wedding14.jpg';
import GalleryPhoto15 from '../Assets/wedding15.jpg';
import GalleryPhoto16 from '../Assets/wedding16.jpg';
import GalleryPhoto17 from '../Assets/wedding17.jpg';


import GroovePaper from '../Assets/GroovePaper.png';

const Wrapper = styled.div`
  background: #fff;
  padding: 42px;
  width: 100%;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
  },
  {
    original: GalleryPhoto10,
    thumbnail: GalleryPhoto10,
  },
  {
    original: GalleryPhoto11,
    thumbnail: GalleryPhoto11,
  },
  {
    original: GalleryPhoto12,
    thumbnail: GalleryPhoto12,
  },
  {
    original: GalleryPhoto13,
    thumbnail: GalleryPhoto13,
  },
  {
    original: GalleryPhoto14,
    thumbnail: GalleryPhoto14,
  },
  {
    original: GalleryPhoto15,
    thumbnail: GalleryPhoto15,
  },
  {
    original: GalleryPhoto16,
    thumbnail: GalleryPhoto16,
  },
  {
    original: GalleryPhoto17,
    thumbnail: GalleryPhoto17,
  }
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery autoPlay={true}  showPlayButton={true} showFullscreenButton={true} items={images} />
    </Wrapper>
  );
};

export default Gallery;
