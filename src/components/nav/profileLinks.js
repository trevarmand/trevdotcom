import './profileLinks.css'
import React from 'react';
import github from '../../images/logos/github.png'
import linkedin from '../../images/logos/linkedin.png'
import strava from '../../images/logos/strava.png'

class ProfileLinks extends React.Component {

    render() {
        return (
            <div className='profile-links mb-3 mt-3'>
                <a href="https://www.github.com/trevarmand">
                    <img className='link-image mr-5' src={github} ></img>
                </a>
                <a href="https://linkedin.com/in/trevor-armand">
                    <img className='link-image ml-3 mr-5' src={linkedin}></img>
                </a>
                <a href="https://www.strava.com/athletes/5607708">
                    <img className='link-image ml-3' src={strava}></img>
                </a>
            </div>
        )
    }
}


export default ProfileLinks;