/*eslint-disable */
import React, {Component} from 'react';

export default class CatList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="list-group">{
            this.props.cats.map( item => (
              <li key={item.id} onClick={(e) => this.props.selectCat(item)} className="list-item"><i className="fa fa-camera" aria-hidden="true"></i> {item.slug}</li>
            ))
          }
          </ul>
        );
    }
}