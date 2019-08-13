//import FormComponent from 'FormComponent';
import React from 'react';
import ReactModal from 'react-modal';
import Form from './Form.jsx'

class Modal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div>
        <button class="btn draw-border" onClick={this.handleOpenModal}>Add New Beer</button>
        <ReactModal
           isOpen={this.state.showModal}
        >
          <Form breweries={this.props.breweries} categories={this.props.categories} styles={this.props.styles} handleCloseModal={this.handleCloseModal}/>

        </ReactModal>
      </div>
    );
  }
}

export default Modal;