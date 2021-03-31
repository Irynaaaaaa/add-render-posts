import React, {Component} from "react";
import Users from '../user/getUsers';
import PostDate from '../tweet/postData/postData';
import PostContent from '../tweet/contentData/contentData'

export default class Post extends Component{

    render(){

        const userData = this.props.data.userData;
        const contentData = this.props.data.data;

        return(
            <div>
                <div>
                    <Users userData = {userData}/>
                    <PostDate date={contentData.date}/> 
                </div>
                <PostContent contentData = {contentData} />
            </div>
        )
    }

}