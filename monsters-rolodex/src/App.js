import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };

    this.originalMonsters = [];

    console.log('constructor()');
  }

  componentDidMount() {
    console.log('componentDidMount()');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users });
        this.originalMonsters = users;
      });
  }

  render() {
    console.log('render()');
    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search Monsters...'
          onChange={(event) => {
            const searchString = event.target.value.toLowerCase();
            if (searchString === '') {
              this.setState({ monsters: this.originalMonsters });
            } else {
              const filteredMonsters = this.originalMonsters.filter(monster =>
                monster.name.toLowerCase().includes(searchString)
              );
              this.setState({ monsters: filteredMonsters });
            }
          }}
        />
        {this.state.monsters.map((monster, id) => (
          <div key={id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
