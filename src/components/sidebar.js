import './sidebar.css'
import React from 'react';


class Sidebar extends React.Component {

    render() {
        return (
            <div className="sidebar" id="slide">
                <p className="header-color navigation-header"></p>
                <ul className="linkList item-color">
                    <li><a href='google.com'>Work Experience</a></li>
                    <li><a>Personal Projects</a></li>
                    <li><a>References</a></li>
                    <li><a>Writing</a></li>
                    <li><a>About Trevor</a></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;