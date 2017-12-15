import React, { Component } from 'react';
import {addRecipe} from '../../actions'
//import logo from './logo.svg';
import './App.css';

class App extends Component {

	

	state ={
		calendar: null,
		inputValue: '',
		value:''
	}

	componentDidMount(){
		const {store} = this.props
		store.subscribe(() =>{
			this.setState(() => ({
				calendar: store.getState()
			}))
		})
		
	}

	

	handleChange = (event) =>{	
		this.setState({inputValue:  event.target.value})
	}

	submitFood = (e) =>{
		const {store} = this.props
		console.log(`event: ${e}`)
		store.dispatch(addRecipe({
			day: 'monday',
			meal: 'breakfast',
			recipe:{
				label: this.state.inputValue
			}
		}))
		this.setState({inputValue: ''})
		
		e.preventDefault()
		
	}

	render() {
		
				//console.log(this.props.store.dispatch(receiveComment('Redux is great!')));
		return (
		  <div className="App">
		  	<form>
			  <label>
			    recipe for monday's breakfast
			    <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
			  </label>
			  <input type="submit"  onClick={this.submitFood} />
			</form>
		    
		    <pre>
		    	Esmorzar del dilluns: {this.state.calendar && this.state.calendar.monday.breakfast}
		    </pre>
		  </div>
		);
		}
}

export default App;


/*


<input
		    	type='text'
		    	ref={(input) => this.input = input}
		    />
		    <button
		    	onClick={this.submitFood}>
		    submit
		    </button>

		    */