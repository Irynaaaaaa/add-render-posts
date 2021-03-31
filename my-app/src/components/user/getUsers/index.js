import React from 'react';
import User from '../user/index'

const Users = (props)=> {
    return(
        <div>
            <h2>Users</h2>
            {showUsersList(props.users)}
        </div>
    )
    };
    
    const showUsersList = (users)=>{
      let elements = users.map(user=>{
          return(
              <User key={user.id} props={user}/>
          )
      });
      return elements;
    };
    
    export default Users;
    