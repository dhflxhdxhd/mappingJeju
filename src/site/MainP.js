import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, {Component} from 'react';
import Main from './Main';
import Searchtheme from './Searchtheme';

class MainP extends Component {
    render() {
        return(
            <div className="MainP">
                <Main/>
                {/* <Searchtheme/> */}
            </div>
        );
    }
}

export default MainP;