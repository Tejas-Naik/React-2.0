import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFeild: '',
    };

    console.log('constructor()');
  }

  componentDidMount() {
    console.log('componentDidMount()');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users });
      });
  }

  onSearchChange = (event) => {
    const searchFeild = event.target.value.toLowerCase();
    this.setState({ searchFeild })
  }

  render() {
    const { monsters, searchFeild } = this.state;
    const { onSearchChange } = this;

    console.log('render()');
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFeild)
    );

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search Monsters...'
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monster, id) => (
          <div key={id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
