import React from 'react';
import './underConstruction.css';

class UnderConstructionPopup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <h1>Hey there!</h1>
                    <p>Thanks for paying me a visit. This site is under construction. <br /> 
                    Please understand that visuals and overall site are not in a finished state. <br />
                    That being said, all information shared here is accurate and up-to-date.</p>
                    <button onClick={this.props.closePopup}>Got it!</button>
                </div>
            </div>
        );
    }
}

export default UnderConstructionPopup;