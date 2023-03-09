import { Component } from "react";
import CardContainer from "../card-container/card-container.component";
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
                        <CardContainer id={id} email={email} username={username} />

                    )
                })}
            </div>
        )
    }
}

export default CardList;