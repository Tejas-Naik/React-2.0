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
                    return (
                        <CardContainer monster={monster} />
                    )
                })}
            </div>
        )
    }
}

export default CardList;