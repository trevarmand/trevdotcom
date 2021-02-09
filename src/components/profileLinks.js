import './profileLinks.css'
import React from 'react';
import github from '../images/logos/git.svg'
import linkedin from '../images/logos/git.svg'

class ProfileLinks extends React.Component {

    render() {
        return (
            <div className='profile-links link-image'>
                <a href="https://www.github.com/trevarmand">
                    <img src={github} ></img>
                </a>
                <a href="https://linkedin.com/in/trevor-armand">
                    <img src={linkedin}></img>
                </a>
            </div>
        )
    }
}


export default ProfileLinks;