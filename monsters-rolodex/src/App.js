import { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Tejas"
    }
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Hii {this.state.name}</p>
          <button>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
