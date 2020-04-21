import React, { Component } from 'react'

class Clear extends Component {

    state = {
        find:''
    }
onSubmit=e=>{
  e.preventDefault();
  this.setState({find:''});
}

  render() {
    return (
      <div>
        <form className='form'>
          <input type='submit' className='btn btn-danger btn-block' onSubmit={this.onSubmit} />
        </form>
      </div>
    )
  }
}

export default Clear
