import '../App.css';
import '../New.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, {Component} from 'react';
import Main from './Main';
import Searchtheme from './Searchtheme';
import Mypage from './Mypage';
import Mytheme from './Mytheme';


class MypageP extends Component {
    render() {
        return(
            <div className="MypageP">
                <Mypage/>
                {/* <Mytheme/> */}

            </div>
        );
    }
}

export default MypageP;