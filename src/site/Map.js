import React, { useEffect, useState } from 'react'

const { kakao } = window

const Map = ({ searchPlace }) => {

  // 검색결과 배열에 담아줌
  const [Places, setPlaces] = useState([])
  
  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
    const container = document.getElementById('myMap')
    const options = {
      center: new kakao.maps.LatLng(33.401780, 126.466666),
      level: 9,
    }
    const map = new kakao.maps.Map(container, options)
    const ps = new kakao.maps.services.Places()

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds()

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i])
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }

        map.setBounds(bounds)
        displayPagination(pagination)
        setPlaces(data)
      }
    }

    function displayPagination(pagination) {
      var paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        i

      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild)
      }

      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement('a')
        el.href = '#'
        el.innerHTML = i

        if (i === pagination.current) {
          el.className = 'on'
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i)
            }
          })(i)
        }

        fragment.appendChild(el)
      }
      paginationEl.appendChild(fragment)
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      })

      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
        infowindow.open(map, marker)
      })
    }

    // 지도를 클릭하면 마크 표시하는 함수
    function positionMarker() {
      const marker = new kakao.maps.Marker()
      marker.setMap(map)

      kakao.maps.event.addListener(map, 'click', (MouseEvent) => {
        let latlng = MouseEvent.latLng

        marker.setPosition(latlng)

        let message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고,'
        message += '경도는 ' + latlng.getLng() + ' 입니다.'
        
        console.log(message)
      })
    }

    // const sw = kakao.maps.LatLng(33.056653, 126.118089),
    //       ne = kakao.maps.LatLng(33.663354, 126.985530)
    // const bounds = new kakao.maps.LatLngBounds(sw, ne)
    // const searchOptions = {useMapCenter: true,}

    map.setMaxLevel(13)
    ps.keywordSearch(searchPlace, placesSearchCB)

    positionMarker()

  }, [searchPlace])

  return (
    <div className='map_wrap'>
      <div
        id="myMap"
        style={{
          width: '100%',
          height: '100%',
          position:'realtive',
          overflow: 'hidden',
        }}
      ></div>
      <ul id="result-list">
        {Places.map((item, i) => (
          <li className='item' key={i}>
            <span className={'markerbg marker_'+ (i+1)}></span>
            <div className='info'>
              <h5>{item.place_name}</h5>
              {item.road_address_name ? (
                <div>
                  <span>{item.road_address_name}</span>
                  <span className='jibun gray'>{item.address_name}</span>
                </div>
              ) : (
                <span>{item.address_name}</span>
              )}
              <span className='tel'>{item.phone}</span>
            </div>
          </li>
        ))}
        <div id="pagination"></div>
      </ul>
    </div>
  )
}

export default Map