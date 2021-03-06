import React, {Component} from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		}
	}

	search() {
		console.log('this.state', this.state);
	}

	render() {
		return (
			<div className="App">
				<div className="Title">Music</div>
				<FormGroup>
					<InputGroup>
						<FormControl
							type="text"
							placeholder="search by artist.."
							value={this.state.query}
							onChange={event => {this.setState({query: event.target.value})}}
							onKeyPress={event => {
								if (event.key === 'Enter') {
									this.search()
								}
							}}
						/>
						<InputGroup.Addon onClick={() => this.search()}>
							<Glyphicon glyph="search"/>
						</InputGroup.Addon>
					</InputGroup> 
				</FormGroup>
				<div className="Profile">
					<div>Artist Picture</div>
					<div>Artist</div>
				</div>
				<div className="Gallery">
					Gallery
				</div>
			</div>
		)
	}
}

export default App;