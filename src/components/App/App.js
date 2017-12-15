import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

	render() {
		
		console.log(this.props);
		return (
		  <div className="App">
		  	hola
		  </div>
		);
	}
}

function mapStateToProps(state){
	console.log(`calendar: ${state}`)
	let days=[]
	for(let day in state){
		days.push(day) 
	}
	console.log(`days: ${days}`)
	return {
		calendar: days.map((day) =>({
			day,
			meals: Object.keys(state[day]).reduce((meals, meal) =>{
						meals[meal] = state[day][meal]
						? state[day][meal]
						: null
						return meals
					},{})
		}))
	}
}


export default connect(mapStateToProps)(App)


