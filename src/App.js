import React from 'react';
import './App.css';
import { CardList } from './components/card-list-component/cardlist';
import { SearchBox } from './components/search-box/search-box';
export default class App extends React.Component  {
 constructor(){
   super();
   this.state ={
     monsters : [],
     searchField :""
   }

 }

 componentDidMount() {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users =>  this.setState({monsters : users}))
 }
  

  render() {
  const {monsters , searchField} = this.state;
  const filterMonsters = monsters.filter( monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='Search Moster Here' handleChange={e => this.setState({searchField : e.target.value})}/>
      <CardList monsterData= {filterMonsters} />
    </div>
  );
}
}


