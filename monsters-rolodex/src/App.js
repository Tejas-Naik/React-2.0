import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFeild: '',
    };
  }

  componentDidMount() {
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
    console.log('render from AppJS');
    const { monsters, searchFeild } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFeild)
    );

    return (
      <div className='App'>
        <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters..." className="monsters-search-box" />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
