import { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Tejas", lastName: "Naik" },
      company: "ZTM",
    }
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>I'm {this.state.name.firstName} {this.state.name?.lastName}, I work at {this.state.company}</p>
          <button onClick={() => {
            this.setState({ name: { firstName: "Andrei", lastName: "Neigoi" } });
            console.log(this.state)
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
