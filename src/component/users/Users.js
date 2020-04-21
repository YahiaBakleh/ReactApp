import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'

const Users = ({users ,loading}) => {

    // console.log(" our spinner loading value : " + loading); // our spinner loading value : flase
    if (loading) {
            return (<Spinner/>);
        } else {
            return (
                <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gridGap:'1rem'}}>
                {/* <div style={userStyle}> */}
                    {/* {this.state.users.map(user=>{return <UserItem key={user.id} user={user}/>})} */}
                    {users.map(user=>(<UserItem key={user.id} user={user}/>))}
                </div>
            )
        }
    } // <Spinner/> !!!!!????

// const userStyle = {
//     dispaly:'grid',
//     gridTemplateColumns: 'repeat(3,1fr)',
//     gridGap:'1rem'
// }
Users.prototype={
    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
}

export default Users
