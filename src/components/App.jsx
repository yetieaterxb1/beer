/* eslint-disable no-tabs */
import React from 'react';
import Modal from './Modal.jsx'
import Beer from './Beer.jsx'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      renderBeers:[],
      beers: [],
      breweries: [],
      categories:[],
      styles:[],
      breweryid: 400
		};

		this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBreweryChange = this.handleBreweryChange.bind(this);
  }
  componentWillMount() {
    Promise.all([
      fetch('/api/beers'),
      fetch('/api/breweries'),
      fetch('/api/categories'),
      fetch('/api/styles')
    ]).then(([res1,res2,res3,res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()])).then(([data1,data2,data3,data4]) => this.setState({
      renderBeers: data1, beers: data1.filter(beer => beer.brewery_id === this.state.breweryid), breweries: data2, categories: data3, styles: data4
    }));
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

  handleBreweryChange(event) {
    console.log(typeof event.target.value)
    this.setState({
      breweryid: parseInt(event.target.value),
      beers: this.state.renderBeers.filter(beer => beer.brewery_id === parseInt(event.target.value))
    })
  }
	render() {
    console.log(this.state.breweries[this.state.breweryid])
    console.log(this.state.beers)
    console.log(this.state.breweries[0])
    const beers = this.state.beers
    const breweries = this.state.breweries
    const categories = this.state.categories
    const styles = this.state.styles
    const userBeers = beers.filter(beer => beer.rating !== 0)
		return (
      <>
      <section>
      <div class="text-effect">
        <h1 class="neon" data-text="BEER FLIGHT" contenteditable>BEER FLIGHT</h1>
        <div class="gradient"></div>
        <div class="spotlight"></div>

      </div>
			<br></br>
      <br></br>
      <div class='modalbrewery'>
        <div class='modalselect'>
          <Modal class='modal' breweries={breweries} categories={categories} styles={styles}/>
        </div>
        <div class="breweryselect">
          <div class="select">
            <select  name="slct" id="slct" onChange={this.handleBreweryChange}  >
              <option value="" disabled selected>Select Brewery</option>
              {this.state.breweries.map(brewery => <option value={brewery.id}>{brewery.name}</option>)}
            </select>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="tbl-header">
      <table class = "container" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <th>Beer Name</th>
          <th>ABV</th>
          <th>Rating</th>
        </tr>
        {beers.map(beer => <Beer data={beer} />)}
      </table>
      </div>
      </section>
      </>
		);
	}
}

export default App;


