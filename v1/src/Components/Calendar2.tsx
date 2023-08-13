import React, {useEffect} from 'react';
import { Divider } from 'antd';
import styled from 'styled-components';
import GroovePaper from '../Assets/GroovePaper.png';
import LocationMap from '../Assets/LocationMap.png';
import GalleryPhoto1 from '../Assets/calendar.png';



const Wrapper = styled.div`
  padding:0px;
  background: #fff;
  width: 100%;
  margin: auto
`;
const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;
const Img = styled.img`
height: 68vh;
width: 400px;
overflow: hidden;
position: relative;
margin: auto;
display: block;
border-radius:5%;
border:1px lightgray;
`;



const Calendar2 = () => {
  return (
    <Wrapper>
       <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>WEDDING DAY</Title>
      </Divider>
    <Img src={GalleryPhoto1} />
    </Wrapper>
  );
};

export default Calendar2;
