import './App.css';
import React from 'react';
import Sidebar from './components/sidebar';
import ProfileLinks from './components/profileLinks';
import ExperienceContainer from './components/experience/experienceContainer';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      sidebar_rendered: false,
    }
  }

  render() {

    return (
      <div className="App">
        <div className="primary-background">
          <div className="sidebar-container">
            {
              this.state.sidebar_rendered && <Sidebar />
            }
          </div>
          <div className="intro yellow-text">
            <header className="intro-header">
              <p>
                Hi!
              </p>
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
            <ProfileLinks />
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
}



export default App;
