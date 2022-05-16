import '../App.css';
import '../New.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, {Component} from 'react';
import Main from './Main';
import Searchtheme from './Searchtheme';
import Mypage from './Mypage';
import Mytheme from './Mytheme';
import Favoritetheme from './Favoritetheme';

class MainS extends Component {
    render() {
        return(
            <div className="MainS">
                <Mypage/>
                <Mytheme/>
                <Favoritetheme/>
            </div>
        );
    }
}

export default MainS;