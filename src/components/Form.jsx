import React from 'react';
const axios = require('axios');

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          brewery_id: '',
          name: '',
          cat_id:  '',
          style_id: '',
          abv: '',
          rating: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.addBeer = this.addBeer.bind(this);
      }

      handleChange(event) {
        this.setState({
          [event.target.id]: event.target.value,
        });
      }
      addBeer() {
        var data = {
          brewery_id: this.state.brewery_id,
          name: this.state.name,
          cat_id:this.state.cat_id,
          style_id: this.state.style_id,
          abv: this.state.abv,
          rating: this.state.rating
        }
        fetch('/api/addBeer', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(data)}) .then(()=> console.log('mike'))
      }


      submitForm() {
          this.props.handleCloseModal();
          this.addBeer();
      }

      render() {
        return (
          <div className="beer-form">
            <h2>Add A Beer</h2>
            <br></br>
            <label>Name: </label>
            <input type="text" id="name" onChange={this.handleChange}></input>
            <br></br>
            <label>Brewery: </label>
            <select onChange={this.handleChange} id="brewery_id" >
                {this.props.breweries.map(brewery => <option value={brewery.id}>{brewery.name}</option>)}
            </select>
            <br></br>
            <label>Category: </label>
            <select onChange={this.handleChange} id="cat_id" >
                {this.props.categories.map(category => <option value={category.id}>{category.cat_name}</option>)}
            </select>
            <br></br>
            <label>Style: </label>
            <select onChange={this.handleChange} id="style_id" >
                {this.props.styles.map(style => <option value={style.id}>{style.style_name}</option>)}
            </select>
            <br></br>
            <label>ABV: </label>
            <input type="email" id="abv" onChange={this.handleChange}></input>
            <br></br>
            <label>Rating: </label>
            <select onChange={this.handleChange} id="rating" >
               <option value='1'>1</option>
               <option value='2'>2</option>
               <option value='3'>3</option>
               <option value='4'>4</option>
               <option value='5'>5</option>
            </select>
            <br></br>
            <button onClick={this.submitForm}>Save Beer</button>
          </div>
        );
      }
}

export default Form;
