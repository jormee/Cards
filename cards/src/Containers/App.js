import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'tachyons';
import { users } from '../UserDB';
import Navbar from '../Components/Navbar/Navbar';
import SignUp from '../Components/Forms/SignUp';
import SignIn from '../Components/Forms/SignIn';
import Profile from '../Components/Profile/Profile';
import EditProfile from '../Components/Forms/Edit Profile';
import Footer from '../Components/Footer/Footer';
import Cards from '../Components/Cards/Cards';
import Home from '../Components/Home/Home';
import err404 from '../Components/Errors/404';

class App extends Component {
  constructor () {
    super ();
    this.state={
      input: '',
      users: users,
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
      <BrowserRouter>
        <div className="db">
          <Navbar searchChange={this.onInputChange} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cards' render={()=><Cards users={filteredCards}/>} />
            <Route path='/signin' component={SignIn} />
            <Route path='/profile' component={Profile} />
            <Route path='/edit-profile' component={EditProfile} />
            <Route path='/signup' component={SignUp} />
            <Route component={err404} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  };
  }

  export default App;
