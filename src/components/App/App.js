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

function mapStateToProps({calendar, food}){
	console.log(`calendar: ${calendar}`)
	let days=[]
	for(let day in calendar){
		days.push(day) 
	}
	console.log(`days: ${days}`)
	return {
		calendar: days.map((day) =>({
			day,
			meals: Object.keys(calendar[day]).reduce((meals, meal) =>{
						meals[meal] = calendar[day][meal]
						? calendar[day][meal]
						: null
						return meals
					},{})
		}))
	}
}


export default connect(mapStateToProps)(App)


