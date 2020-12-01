import './App.css';
import React from 'react';
import Cities from './components/Cities'
import Pets from './components/Pets'

class App extends React.Component {

  state = {
    username: 'pabloberho',
    email: 'pablo@pablo.com',
    amountOfMoney: 50,
    admin: true,
    cities: ['Madrid', 'Granada', 'Sevilla', 'Barcelona', 'Lugo'],
    alignment: 'center',
    changeAlignment: ()=>{
      this.state.alignment === 'center'
        ? this.setState({alignment: 'left'})
        : this.setState({alignment:'center'})
    },
    pets: [
      {animal: 'dog', name: 'Maya'},
      {animal: 'dog', name: 'Jordi'},
      {animal: 'Cat', name: 'Misifu'},
      {animal: 'horse', name: 'Firulais'}
    ],
    deletePet: (_name)=>{
      const newPets = this.state.pets.filter((pet)=>{
        return pet.name !== _name
      })
      this.setState({pets: newPets})
    },
    addPet: (_pet)=>{
      // this.setState({pets: [...this.state.pets, {animal: 'dog', name: _pet}]})
      const copyOfPets= [...this.state.pets]
      copyOfPets.unshift({animal: 'dog', name: _pet})
      this.setState({pets:copyOfPets})
    }
  }
  changeUsername = ()=>{
    this.state.username === 'pabloberho'  
      ? this.setState({username: 'jaimejacobo'})
      : this.setState({username: 'pabloberho'})
  }
  renderAdminMessage = ()=>{
    if(this.state.admin){
      return <h2>WELCOME ADMIN!!!</h2>
    }
    return
  }
  changeAmountOfMoney = (_operation)=> {
    if(_operation === 'add'){
      this.setState({amountOfMoney: this.state.amountOfMoney + 10})
    }else if(_operation === 'substract'){
      this.setState({amountOfMoney: this.state.amountOfMoney - 10})
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Main page</h1>

        {/* {this.renderAdminMessage} */}
        {this.state.admin && <h2>WELCOME ADMIN!!!</h2>}

        <h2>Hello, {this.state.username}</h2>  
        <button onClick={()=>this.changeUsername()}>Change Username</button> 

        <p>Money: {this.state.amountOfMoney}$</p>
        <button onClick={()=>this.changeAmountOfMoney('add')}>Add 10$</button>
        <button onClick={()=>this.changeAmountOfMoney('substract')}>Remove 10$</button>

        <Cities 
          cities={this.state.cities}
          alignment={this.state.alignment}
          changeAlignment={this.state.changeAlignment}
        />

        <Pets pets={this.state.pets} deletePet={this.state.deletePet} addPet={this.state.addPet}/>

      </div>
    )
  }
}

export default App;
