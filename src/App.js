import './App.css';
import './common.css';
import React from 'react';
import Sidebar from './components/nav/sidebar';
import ProfileLinks from './components/nav/profileLinks';
import ExperienceContainer from './components/experience/experienceContainer';
import UnderConstructionPopup from './components/underConstruction';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      sidebar_rendered: false,
      under_construction: true,
    }
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
          <div className="sidebar-container">
            {
              this.state.sidebar_rendered && <Sidebar />
            }
          </div>
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
              <button className="learn-more-button" onClick={this.toggleSidebar}>click to learn more</button>
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

  toggleSidebar = () => {
    this.setState({
      sidebar_rendered: !this.state.sidebar_rendered
    })
  }

  toggleUnderConstruction() {
    this.setState({
      under_construction: !this.state.under_construction
    });
  }
}



export default App;
