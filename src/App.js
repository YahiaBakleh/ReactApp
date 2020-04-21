import React, {Component} from "react";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Search from "./component/layout/Search";
import Clear from "./component/layout/Clear";
import Users from "./component/users/Users";
import axios from 'axios';

class App extends Component {

  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    // const Id = process.env.REACT_APP_GITHUB_CLIENT_ID;
    // const Secret=process.env.REACT_APP_GITHUB_CLIENT_SECRET;
    this.setState({loading:true});
    // const res = await axios.get(`https://api.github.com/users/REACT_APP_GITHUB_CLIENT_ID=${Id}&
    // REACT_APP_GITHUB_CLIENT_SECRET=${Secret}`);
    const res = await axios.get("https://api.github.com/users");

    this.setState({loading:false, users:(res.data)});
    // console.log(this.state.users); // object and lot of data
    // console.log("type of users is " + typeof(this.state.users)); // type of users is object
    // console.log(this.state.users.length); // 30

    /* ***Patch to fix spiner probelm *** */
    // let length = 0;
    // console.log('length :' + length);
    // const res = await axios.get('https://api.github.com/users');
    // length = res.data.length;
    // console.log('length after trying conn :' + length);

    // length > 0 ? this.setState({users:res.data}): this.setState({loading:true});

  };
  onSearch= x=>{
    console.log(x);
    // this.setState({loading:true});
    // const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    // this.setState({loading:false, users:(res.data.items)});
  }
  render() {
    const {users,loading} = this.state;
    return (
    <div className = "root" >
      <Navbar / >
      <div className = 'container' >
        <Search searchUsers={this.searchUser}/>
        <Users loading = {loading} users = {users}/>
        <Clear searchUsers={this.onSearch}/>
      </div >
      </div>
    );
  }
  n
}

export default App;
