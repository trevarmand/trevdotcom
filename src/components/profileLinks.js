import './profileLinks.css'
import React from 'react';


class ProfileLinks extends React.Component {

    render() {
        return (
            <div className='profileLinks'>
                <a href="https://www.github.com/trevarmand">
                    <img src="./github.png" ></img>
                </a>
                <a href="https://linkedin/in/trevor-armand">
                    <img src="./linkedin.png"></img>
                </a>
            </div>
        )
    }
}


export default ProfileLinks;