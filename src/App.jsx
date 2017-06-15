import React, {Component} from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="Title">Music</div>
				<FormGroup>
					<InputGroup>
						<FormControl
							type="text"
							placeholder="search by artist.."
						/>
						<InputGroup.Addon>
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