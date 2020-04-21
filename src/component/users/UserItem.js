import React from 'react';
import PropTypes from 'prop-types'

// const UserItem =(props)=> {
    // const {login,avatar_Url,html_Url}=props.user;
const UserItem =({user:{login,avatar_url,html_url}})=> {        
        return ( 
        <div className = "card text-center" >
            <img alt="" src={avatar_url} className="round-img" style={{width:'60px'}}/>
        <h3>{login}</h3>
        <a href={html_url} className="btn btn-dark btn-sm my-1">More...</a>
        </div>
        )
}
UserItem.prototype = {
    user:PropTypes.object.isRequired
}
export default UserItem