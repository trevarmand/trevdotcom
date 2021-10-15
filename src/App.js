import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './common.css';
import React from 'react';
import ProfileLinks from './components/nav/profileLinks';
import ExperienceContainer from './components/experience/experienceContainer';
import UnderConstructionPopup from './components/underConstruction';
import Button from 'react-bootstrap/Button'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      under_construction: true,
    }
  }

  scrollToExperience = () => {
    document.getElementById("experience-container")?.scrollIntoView({behavior: 'smooth'});  
  }

  toggleUnderConstruction() {
    this.setState({
      under_construction: !this.state.under_construction
    });
  }

  render() {

    return (
      <div className="App">
        <div className="primary-background">
          { this.state.under_construction ?
            <UnderConstructionPopup 
              closePopup={this.toggleUnderConstruction.bind(this)}
            />
            : null
          }
          
          <div className="intro-containter">
            <div className="yellow-text">
              <header className="intro-header">
                Hi!
              </header>
              <div className="intro-sentence yellow-text">
                <p>
                  My name is Trevor Armand.
                <br />
                Welcome to my website!
              </p>
              </div>
            </div>
            <div className="quick-info yellow-text">
              <Button className="learn-more-button" onClick={() => {this.scrollToExperience()}}>click to learn more</Button>
              <p> or, if you really don't like it here...<br />
            visit one of my profiles: </p>
              <ProfileLinks className="profile-links" />
            </div>
          </div>
        </div>
        <div className="second-background">
          <ExperienceContainer />
        </div>
      </div>
    );
  }
}



export default App;
