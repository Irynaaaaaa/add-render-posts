import React, {useState} from 'react';
import './addUser.css'

export default class AddUser extends React.Component{
    state = {
        name : '',
        nickname : '@',
        image : ''
    };
    count = 0;
    onChangeUserInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        if(name!=='nickname') {
            this.setState({[name]: value})
        }else {
            !this.state.nickname.split('').includes('@')? this.setState({'nickname':'@'+value}):this.setState({'nickname':value})

        }

    };
    onAddUser = ()=>{
        let obj = {
            name : this.state.name,
            username:this.state.nickname,
            avatar: this.state.image
        };
        this.setState({name:''});
        this.setState({nickname:'@'});
        this.setState({image:''});
      this.props.addUser(obj);
    };
render() {
      return(
          <div className={"add-user-form"}>
              <h1>Add User</h1>
              <input type="text" name = "name"     value={this.state.name} placeholder={'name'} onChange={(e)=>this.onChangeUserInput(e)}/>
              <input type="text" name="nickname" value={this.state.nickname}  placeholder={'nickname'} onChange={(e)=>this.onChangeUserInput(e)}/>
              <input type="text" name="image" value={this.state.image}  placeholder={'image link'} onChange={(e)=>this.onChangeUserInput(e)}/>
              <button type="button" className={'add-user-btn'} onClick={()=>this.onAddUser()}>Add user</button>
          </div>
      )
}
}