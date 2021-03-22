import React from 'react';
import Cardlist from './Cardlist';
import {robots} from './robots';
import Searchbox from './Searchbox'
class App extends React.Component{

  constructor(){
    super();
    this.state = {
        robots : robots,
        searchfield : ''
    }
  }

  
  onSearchChange = (event) => {
    this.setState({
      searchfield :event.target.value
    })
   
  }




  render(){
    const filterRobots = this.state.robots.filter((robot) => {
      return robot.name.toLocaleLowerCase().includes(this.state.searchfield)
    })
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <Searchbox searchChange = {this.onSearchChange}/>
        <Cardlist robots = {filterRobots}/>
      </div>
    )
  }
}

export default App;