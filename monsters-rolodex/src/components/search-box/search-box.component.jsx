import { Component } from "react";

class SearchBox extends Component {
    render() {
        const { onChangeHandler, className, placeholder } = this.props;
        return (
            <div>
                <input
                    className={className}
                    type='search'
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                />
            </div>
        )
    }
}

export default SearchBox;