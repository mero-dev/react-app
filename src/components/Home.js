import {React, Component} from 'react';
import '../assets/css/home.css';
import Clock from "./Clock";

class Home extends Component {

    state = {
        txt: null,
    }

    onInputChange = (e) => {
        this.setState({txt: e.target.value});
    }

    render() {
        return (
            <div className="container">
                <h3>My Home</h3>
                <Clock/>
                <p>{this.props.text}</p>
                <h5>{this.props.autor.firstname} {this.props.autor.lastname}</h5>
                {/* hier in h3 ausgabe des textes der in input eingeben wird */}
                <h3>Hier State Ausgabe: {this.state.txt}</h3>
                {/* hier onChange event benutzen für die function, die den state setzen soll  */}
                <input type="text" onChange={this.onInputChange} />
            </div>
        )
    }
}
export default Home;
