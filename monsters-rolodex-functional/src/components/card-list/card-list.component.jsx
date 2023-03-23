import { Component } from "react";
import CardContainer from "../card-container/card-container.component";
import './card-list.styles.css';

const CardList = ({ monsters }) => {
    console.log(monsters);
    console.log('render from CardList');
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

export default CardList;