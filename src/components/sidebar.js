import './sidebar.css'
import React from 'react';


class Sidebar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            rendered: this.props.rendered
        }
    }

    render() {
        return (
            <div className="sidebar" id="slide">
                <p className="header-color navigation-header">NAVIGATION</p>
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