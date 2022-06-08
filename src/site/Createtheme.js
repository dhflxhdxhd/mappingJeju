import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../New.css';
import Map from './Map';

const Createtheme = () => {

  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');
  const [PlaceList, setPlaceList] = useState([]);

  useEffect(()=>{
    const fetchPlace = async() => {
      const result = await axios(`/thema/getPlace`);
      console.log(result.data.places)
      setPlaceList(result.data.places);
    };

    fetchPlace();
    
  },[]);

  const onChange = (e) => {
    setInputText(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText(InputText)
  };

  return (
      
    <div className="createtheme-wrapper">
        <nav className="createthemeheader">
          <button className="bookmark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bookmark-heart" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/></svg></button>
          <button className="plus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="plus-lg" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/></svg></button>
        </nav>

        <form className="searchplace" onSubmit={handleSubmit}>
          <input className="placesearchbar" placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
          <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -3 20 25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
        </form> 
        <Map searchPlace={Place} />

        <div className="themelist">
            <div className="themetitle"></div>
            {/* <React.Fragment>
                <button className="explainplace"><div className="place"></div></button>
            </React.Fragment> */}
        </div>
    </div>
  );
}

export default Createtheme;