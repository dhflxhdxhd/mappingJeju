import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import '../New.css';
import Map from './Map';
import ShowPlaceList from './ShowPlaceList';

const Createtheme = () => {
  
  const query = window.location.search;
  const param = new URLSearchParams(query);
  const host = param.get('host');
  const MyThema = Boolean(Number(host));
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');
  const [PlaceList, setPlaceList] = useState([]);
  const [ThemaInfo, setThemaInfo] = useState([]);
  const [Showing, setShowing] = useState(MyThema ? true : false);

  const onChange = (e) => {
    setInputText(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText(InputText)
  };

  const onClick = (e) => {
    setShowing((prev) => !prev);
  } 

  useEffect(()=>{
    // console.log(sess ionStorage.getItem('thema_id'))

    const fetchThema = async() => {
      const params = {thema_id : sessionStorage.getItem('thema_id')}
      const result = await axios(`/thema/getThema`, {params});
      // console.log(result.data);
      setThemaInfo(result.data.thema_info);
      setPlaceList(result.data.thema_place_info);
    }

    fetchThema()

  },[]);

  return (
      
    <div className="createtheme-wrapper">
        <nav className="createthemeheader">
          {MyThema ? null : 
            <button className="bookmark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bookmark-heart" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/></svg></button>
          }
          {MyThema ? 
            <button className="plus" onClick={onClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="plus-lg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/></svg></button>
          : null}
        </nav>
        
        {Showing ?
        <form className="searchplace" onSubmit={handleSubmit}>
          <input className="placesearchbar" placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
          <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 -3 20 25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
        </form> 
        : null}
        <Map searchPlace={Place} Showing={Showing} placeList={PlaceList}/>

        <div className="themelist">
          <div className="themetitle">
            <div className="alignplace">
                <div className="listthemename">{ThemaInfo.thema_name}</div>
            </div>
          </div>
            <React.Fragment>
                < ShowPlaceList placeitems={PlaceList} themahost={ThemaInfo.thema_host} Showing={Showing}/>
            </React.Fragment>
        </div>
    </div>
  );
}

export default Createtheme;