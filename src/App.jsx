import React, {Component} from 'react';

class App extends Component {
	render() {
		return (
			<div>
				<div className="Title">Music</div>
				<div>
					<input placeholder="search here..."/>
					<button>submit</button>
				</div>
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