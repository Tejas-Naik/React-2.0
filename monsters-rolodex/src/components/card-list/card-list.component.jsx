import { Component } from "react";
import './card-list.styles.css';

class CardList extends Component {
    render() {
        console.log(this.props.monsters);
        console.log('render from CardList');
        const { monsters } = this.props;
        return (
            <div className="card-list">
                {monsters.map(monster => {
                    const { name: username, id, email } = monster;
                    return (
                        <div className="card-container" key={id}>
                            <img alt={`monster ${username}`} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
                            <h2>{username}</h2>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CardList;