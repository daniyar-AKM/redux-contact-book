import React, { Component } from 'react';
import './AddContact.css'
import {connect} from 'react-redux'
import {createContact} from '../../Redux/actions/index'

class AddContact extends Component {
  state={
    data:{
      name: '',
      lastName: '',
      phone: ''
    }
  }

  handleNameInput = (event) => {
    const name = event.target.value
    this.setState({name})

    this.setState({
      data: {
        ...this.state.data,
        name
      }
    })
  }

  handleLastNameInput = (event) => {
    const lastName = event.target.value
    this.setState({lastName})

    this.setState({
      data: {
        ...this.state.data,
        lastName
      }
    })
  }

  handlePhoneInput = (event) => {
    const phone = event.target.value
    this.setState({phone})

    this.setState({
      data: {
        ...this.state.data,
        phone
      }
    })
  }

  handleClick = () => {
    this.props.dispatch(
      createContact(this.props.data, this.state.data.name, this.state.data.lastName, this.state.data.phone)
    )
    this.setState({
      name: '',
      lastName: '',
      phone: ''
    })
  }

  render() {
    return (
      <div>
        <div className="addInpt">
          <input type="text" placeholder="name:" value={this.state.name} onChange={this.handleNameInput} />
          <input type="text" placeholder="last name:" value={this.state.lastName} onChange={this.handleLastNameInput} />
          <input type="text" placeholder="phone:" value={this.state.phone} onChange={this.handlePhoneInput} />
          <br/>
          <button className="add_btn" onClick={this.handleClick}>Add</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    data: state.data
  }
}

export default connect(mapStateToProps)(AddContact);