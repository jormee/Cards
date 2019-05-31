import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import { users } from '../UserDB';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Cards from '../Components/Cards/Cards';
import Home from '../Components/Home/Home';

class App extends Component {
  constructor () {
    super ();
    this.state={
      input: '',
      users: users,
      route: 'home',
    }
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  }

  render() {
    const filteredCards = this.state.users.filter(user => {
      return(user.name.toLowerCase().includes(this.state.input.toLowerCase()));
    })
    return (
      
      <div className="db">
        <Navbar searchChange={this.onInputChange}/>
        {
          this.state.route==='landing'
          ?<Home />:
          <Cards users={filteredCards}/>
        }
        <Footer />
      </div>
    );
  };
  }

  export default App;
