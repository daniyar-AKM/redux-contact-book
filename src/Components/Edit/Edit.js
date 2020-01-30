import React, { Component } from 'react';
import {connect} from 'react-redux'
import {updateContact} from '../../Redux/actions'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'

class Edit extends Component {
  state ={
    name: '',
    lastName: '',
    phone: ''
  }

  handleInputName = event => {
    const name = event.target.value

    this.setState({name})
  }

  handleInputLastName = event => {
    const lastName = event.target.value

    this.setState({lastName})
  }

    handleInputPhone = event => {
    const phone = event.target.value

    this.setState({phone})
  }


  componentDidMount() {
    const currentIndex = this.props.currentIndex;
    const data = this.props.data;

    this.setState({
      name: currentIndex !== -1 ? data[currentIndex].name : '',
      lastName: currentIndex !== -1 ? data[currentIndex].lastName : '',
      phone: currentIndex !== -1 ? data[currentIndex].phone : ''
    })
  }

  handleClick = () => {
    this.props.updateContact(this.props.data, this.state, this.props.currentIndex)
    this.props.history.push('/')
  }

  handleBack = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <ul>
          <button className="close_btn" onClick={this.handleBack}>X</button>
          <li><input value={this.state.name} onChange={this.handleInputName}/></li>
          <li><input value={this.state.lastName} onChange={this.handleInputLastName}/></li>
          <li><input value={this.state.phone} onChange={this.handleInputPhone}/></li>
          <li><button className="save_btn" onClick={this.handleClick}>SAVE</button></li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    updateContact: (data, obj, index) => dispatch(updateContact(data, obj, index))
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Edit);