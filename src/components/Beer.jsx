import React from 'react';


class Beer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      rating: 0,
      id: this.props.data.id,
		};
		this.handleChanges = this.handleChanges.bind(this);
		this.updateBeer = this.updateBeer.bind(this);
  }
  updateBeer() {
    var data = {
      id: this.state.id,
      rating: this.state.rating
    }
    fetch('/api/updateBeer', {method: 'PUT',headers: {'Content-Type': 'application/json'},body: JSON.stringify(data)}) .then(()=> console.log('mike'))
  }

handleChanges(event) {
  Promise.all([this.setState({
    rating: event.target.value,
  })]).then(()=> this.updateBeer());
}
  render(){
    return (
    <>
      <tr id='wrapper'>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.abv}</td>
        <td><label></label>
        <div class="select">
            <select name="slct" id="slct" onChange={this.handleChanges} id="rating" >
                <option value="" disabled selected>{this.props.data.rating}</option>
               <option value='1'>1</option>
               <option value='2'>2</option>
               <option value='3'>3</option>
               <option value='4'>4</option>
               <option value='5'>5</option>
            </select></div></td>
      </tr>
    </>
    )
  }

}
export default Beer;