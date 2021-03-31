import React from "react";
import './user.css'

const User = ({props})=>{
  return(
      <div className = 'user' >
          <img className = 'user-img' src={props.avatar} alt="avatar"/>
          <span className = 'name'>{props.name}</span>
          <span className = 'username'>{props.username}</span>
      </div>
  )
};
export default User;

