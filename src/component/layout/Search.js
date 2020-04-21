import React, { Component } from 'react'

class Search extends Component {
    state ={
        text:''
    }
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
      }
    onSubmit(e){
        e.preventDefault();
        // this.props.searchUsers(this.state.text);
        this.props.onSearch(this.state.text);
        this.setState({text:''});
    }
    onChange =(e)=> {
        //for multi input so we do we create only one method to handle event
        this.setState({ [e.target.name] : e.target.value});
        //for single event or input
        //this.setState({find: e.target.value})
    }

    render() {

        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'  >
                    <label >You will serch: {this.state.text}</label>
                    < input type = "text"
                    name = "text"
                    placeholder = "Search ..."
                    value = {this.state.text}
                    onChange={this.onChange}
                    />
                    {/* onSubmit with arrow function style fucn = ()=>{} */}
                    <button type="submit" className="btn btn-dark btn-block" >Find</button>
                    {/* onSubmit with traditional function style function(){} */}
                    {/* <button type="submit" className="btn btn-dark btn-block" onSubmit={this.onSubmit.bind(this)}>Find</button> */}
                </form>
            </div>
        )
    }
}

export default Search
