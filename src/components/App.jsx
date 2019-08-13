/* eslint-disable no-tabs */
import React from 'react';
import Modal from './Modal.jsx'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			brewery: '',
			rating: '',
      beers: [],
      breweries: []
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch('/api/beers').then(res=>res.json()).then(data=> this.setState({
      beers: data
    })).catch(err => console.log(err))
  }

	handleInputChange(e) {
		const { value } = e.target;
		const { name } = e.target;

		this.setState({
			[name]: value,
		});
	}

	handleSubmit(e) {
		const formData = {
			name: this.state.name,
			brewery: this.state.brewery,
			rating: this.state.rating,
		};

		this.props.handleSubmitButtonClick(formData);
		e.preventDefault();
	}

	render() {
    const beers = this.state.beers
    console.log(beers)
		return (
			<div>Beer
      <Modal />
      <div>
        {beers.map(beer => <div>{beer.name}</div>)}
      </div>
      </div>
		);
	}
}

export default App;
