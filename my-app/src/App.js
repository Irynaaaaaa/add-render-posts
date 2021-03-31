import './App.css'
import {connect} from "react-redux";
import React from "react";
import {getUsers,addUser, postPost} from "./components/actions/index";
import {Switch,Link,Route,Redirect} from "react-router-dom";
import Users from './components/user/getUsers';
import AddUser from './components/user/addUser';
import AddForm from './components/tweet/addForm/addForm';


export  class App extends React.Component{
  componentDidMount() {
    this.props.getUsers();
}
  render(){

  return (
    <div >
      <div className = 'header'>
        <ul className = 'menu'>
          <li ><Link to="/users">Users</Link></li>
          <li ><Link to="/addUser">Add User</Link></li>
          <li ><Link to="/addTweetOnServer">Add Post</Link></li>
        </ul>
        </div>
        <Switch>
                <Route path = '/users' ><Users users={this.props.users}  /></Route>
                <Route  path = '/addUser'><AddUser addUser={this.props.addUser}/></Route>
                <Route  path = '/addTweetOnServer'><AddForm users = {this.props.users} addPost={this.props.postPost}/></Route>
        </Switch>

    </div>
  );
}
}


const  mapDispatchToProps = dispatch =>{
  return{
      getUsers : () =>  dispatch(getUsers()),
      addUser : payload => dispatch(addUser(payload)),
      postPost : payload=>dispatch(postPost(payload))
  }
};
const mapStateToProps = store =>{
    console.log(store.post.data);
    return{
      post : {data: store.post.data, users : store.user.data},
      users : store.user.data
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
