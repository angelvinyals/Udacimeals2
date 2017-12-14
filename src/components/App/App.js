import React, { Component } from 'react';
import {addRecipe} from '../../actions'
//import logo from './logo.svg';
import './App.css';

class App extends Component {
	state ={
		calendar: null
	}

	componentDidMount(){
		const {store} = this.props

		store.subscribe(() =>{
			this.setState(() => ({
				calendar: store.getState()
			}))
		})
		
	}


	submitFood =() =>{
		this.props.store.dispatch(addRecipe({
			day: 'monday',
			meal: 'breakfast',
			recipe:{
				label: this.input.value
			}
		}))
		this.input.value =''
	}

	render() {
		
				//console.log(this.props.store.dispatch(receiveComment('Redux is great!')));
		return (
		  <div className="App">
		    <input
		    	type='text'
		    	ref={(input) => this.input = input}
		    />
		    <button
		    	onClick={this.submitFood}>
		    submit
		    </button>
		    <pre>
		    	Esmorzar del dilluns: {this.state.calendar && this.state.calendar.monday.breakfast}
		    </pre>
		  </div>
		);
		}
}

export default App;
