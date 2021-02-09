import './App.css';
import React from 'react';
import Sidebar from './components/sidebar';
import ProfileLinks from './components/profileLinks';

class App extends React.Component { 

  constructor() {
    super()
    this.state = {
      sidebar_rendered: false,
    }
  }

  render() {

    return (
      <div className="App app-background">
        <div className="sidebar-container">
          {
            this.state.sidebar_rendered && <Sidebar />
          }
        </div>
        <div className="intro">
          <header className="intro-header tb-gradient-text">
            <p>
              Hi!
            </p>
          </header>
          <div className="intro-sentence blue-text">
            <p className="no-bottom">
              My name is Trevor Armand.
            </p>
            <p >
              Welcome to my website!
            </p>
          </div>
        </div>
        <div className="quick-info">
          <button className="learn-more-button" onClick={this.toggleSidebar}>click to learn more</button>
          <p> or, if you really don't like it here...</p>
          <p>visit one of my profiles: </p>
          <ProfileLinks/>
          {/* inset a react component containing links! */}
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
