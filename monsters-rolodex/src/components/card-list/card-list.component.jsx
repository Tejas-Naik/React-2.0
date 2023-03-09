import { Component } from "react";

class CardList extends Component {
    render() {
        console.log(this.props.monsters);
        console.log('render from CardList');
        const { monsters } = this.props;
        return (
            monsters.map(monster => {
                return <h1 key={monster.id}>{monster.name}</h1>
            })
        )
    }
}

export default CardList;