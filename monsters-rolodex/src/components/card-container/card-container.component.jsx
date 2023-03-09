import { Component } from 'react';

class CardContainer extends Component {
    render() {
        const { username, email, id } = this.props;
        return (
            <div className="card-container" key={id}>
                <img alt={`monster ${username}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h2>{username}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default CardContainer;