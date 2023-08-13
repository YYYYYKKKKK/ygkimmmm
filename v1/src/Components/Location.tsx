import React, {useEffect} from 'react';
import { Divider } from 'antd';
import styled from 'styled-components';
import GroovePaper from '../Assets/GroovePaper.png';
import LocationMap from '../Assets/LocationMap.png';
import GalleryPhoto1 from '../Assets/marker2.png';


declare global {
  interface Window {
    kakao: any;
  }
}

const Wrapper = styled.div`
  background: #fff;
  padding-left: 42px;
  padding-right: 42px;
  padding-top:42px;
  padding-bottom: 42px;
  width: 100%;
  text-align: center;
`;
const Info = styled.div`
  background: #fff;
  padding-top:30px;
  width: 100%;
  text-align: center;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;
const Content = styled.p`
  font-size: 1.5vh;
  opacity: 0.75;
  margin-bottom: 24px;
`;



const Image = styled.img`
  width: 75%;
  max-width: 1024px;
`;

const Location: React.FC = () => {
  useEffect(() => {
   

    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = { //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.465592221538444, 126.64350207308644), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    map.setZoomable(true);   
    map.addOverlayMapTypeId(window.kakao.maps.MapTypeId.TRAFFIC);    

    // 마커가 표시될 위치입니다 
    var imageSrc = GalleryPhoto1; // 마커이미지의 주소입니다    
    var imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
    var imageOption = {offset: new window.kakao.maps.Point(27, 69)}; 
    var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    var markerPosition  = new window.kakao.maps.LatLng(37.465592221538444, 126.64350207308644); 

// 마커를 생성합니다
var marker = new window.kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
    clickabl:true
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map); 

// 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
var iwContent = '<div style="width:210px; padding:5px;">인천광역시 미추홀구 석정로 51 <br><a href="https://map.kakao.com/link/to/정우랑유경이식장,37.465592221538444, 126.64350207308644" style="color:lightgray” target="_blank">카카오맵 길찾기 \></a></div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다    
var iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 인포윈도우를 생성합니다
var infowindow = new window.kakao.maps.InfoWindow({
    content : iwContent,
    removable : iwRemoveable
});

// 마커에 클릭이벤트를 등록합니다
window.kakao.maps.event.addListener(marker, 'click', function() {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(map, marker);  
});
  }, [])

  return (
    <><Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
    


      <div className="Location">
        <div id="map" style={{ width: "100%", height: "300px" }} />
        <Content>저희를 클릭하면, 장소정보를 확인하실 수 있어요:)</Content>
        
      
        <Info> 
					<div className="contain">
            <dl>
							<dt><Title>자가용안내</Title></dt>
							<dd><Content>제1경인고속도로 도화IC → 도화초교 사거리→ 제물포 방면(11시 방향) 좌회전 후 직진 → <br></br>숭의 시장 사거리 → 숭의로타리 방면 죄회전 → 330m직진 → 우회전  →<br></br>우측 인천 축구 전용 경기장 內 → 아레나파크 웨딩</Content></dd>
						</dl>
						<dl>
							<dt><Title>지하철안내</Title></dt>
							<dd><Content>① 1호선 도원역 1번 출구 (도보 5분)<br></br>② 도원역 지하 연결통로 직진</Content></dd>
						</dl>
						<dl>
							<dt><Title>버스안내</Title></dt>
							<dd><Content>① 14(숭의운동장 하차) <br></br>② 15, 22, 506(도원역 하차)</Content></dd>
						</dl>
						<dl>
							<dt><Title>주차안내</Title></dt>
							<dd><Content>① 아레나파크웨딩 P1 주차장 이용시 지하 1층<br></br>② 홈플러스 물류입고장 입구 P2 주차장 이용시 지하 2층</Content></dd>
						</dl>
					</div>
          </Info>
        
      </div>
      </Wrapper>
      </>
    
    
  );


} 

export default Location;