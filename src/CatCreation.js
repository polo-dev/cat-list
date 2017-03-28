/*eslint-disable */
import React, {Component} from 'react';

export default class CatCreation extends Component {
    constructor(props) {
        super(props);
            this.state = {
            url: null
        }
    }

    state = {
        url: null
    };

    changeHandler = (e) => {
        this.setState({
            url: e.target.value
        });

        //this.props.addCat(this.state.url);
    }

    render() {
        return (
            <div>
                <h1>Création de chat</h1>
                <div>
                    <label htmlFor="url"></label>
                    <input type="text" name="url" value={this.state.url} onChange={this.changeHandler}/> 
                    <button onClick={()=>this.props.addCat(this.state.url)}>Add Cat</button>
                </div>
            </div>);
    }
}