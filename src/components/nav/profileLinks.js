import './profileLinks.css'
import React from 'react';
import github from '../../images/logos/github.png'
import linkedin from '../../images/logos/linkedin.png'

class ProfileLinks extends React.Component {

    render() {
        return (
            <div className='profile-links'>
                <a href="https://www.github.com/trevarmand">
                    <img className='link-image img-spacing' src={github} ></img>
                </a>
                <a href="https://linkedin.com/in/trevor-armand">
                    <img className='link-image' src={linkedin}></img>
                </a>
            </div>
        )
    }
}


export default ProfileLinks;