import React from "react";
import './addUser.css'

export default class AddForm extends React.Component{
     state = {
            author : 'Anakin Skywalker',
            text : '',
            img : ''

        };
        handleInputChange = event =>{
            const name = event.target.name;
            const value = event.target.value;
            this.setState({[name] : value});
            this.setState({id : event.target.id})
        };
        sentData = () =>{
            let userId = this.props.users.filter(user=>user.name===this.state.author)[0].id;
            console.log(userId);
           let obj= {
               userId : userId,
                content: this.state.text,
                image: this.state.img,
            };
            this.setState({text:''});
            this.setState({img:''});
           this.props.addPost(obj); 
       }
    render(){
       
        return(
        <form className = "add-user-form">
            <h1>Add Post</h1>
            <select name="author" id='' onChange={this.handleInputChange}>
                {getOptions(this.props.users)}
            </select>
            <input name = 'text' placeholder={"post text"} value={this.state.text} onChange={this.handleInputChange} type="text"/>
            <input name = 'img' placeholder={"image url"} value={this.state.img} onChange={this.handleInputChange} type="text"/>
                <button type="button" onClick={this.sentData} className = 'add-user-btn'> Add Post</button>
        </form>
        )
    }
}
const getOptions = (users)=>{
    let options = users.map(user=>{
        return <option name={'author'}   key = {user.id} value={user.name}>{user.name}</option>
    });
    return options;
  };