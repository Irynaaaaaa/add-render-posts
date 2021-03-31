import React from "react";
import Post from '../posts/post';
const Posts = (props)=>{
   let elements = props.data.data.map(item=>{
       let data = {data:item, userData : props.data.users[item.userId-1]};
       return <Post key = {item.id} id = {item.id} data={data} />
    });
  return(
   <div>
      {elements}
   </div>
  )
};
export default Posts;