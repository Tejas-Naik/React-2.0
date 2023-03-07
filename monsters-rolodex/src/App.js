import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
    console.log('constructor()');
  }

  componentDidMount() {
    console.log('componenetDidMount()');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users }
        },
        () => console.log(this.state)
      ))
  }

  render() {
    console.log('render()');
    return (
      <div className='App'>
        <input className='search-box' type='search' placeholder='Search Monsters...'
          onChange={
            (event) => {
              const searchString = event.target.value.toLowerCase();
              const filteredMonsters = this.state.monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchString));
              this.setState(
                () => {
                  return { monsters: filteredMonsters }
                })
            }
          } />
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
