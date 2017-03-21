/*eslint-disable */
import React, {Component} from 'react';

export default class CatSelection extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const selectedCats = this.props.cats.filter( item => item.selected);
        
        return (
            <ul className="list-group">{
                selectedCats.map( item => (
                    <li key={item.id} className="list-group-item">
                        {item.slug}
                    </li>
                ))
            }</ul>
        );
    }
}