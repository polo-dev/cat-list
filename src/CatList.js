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
              <li key={item.id} onClick= {(e) => this.props.selectCat(item)} className="list-group-item"><i className="fa fa-cog" aria-hidden="true"></i>{item.slug}
              <img src={item.url} />
              </li>
            ))
          }
          </ul>
        );
    }
}