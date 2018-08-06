import React, { Component } from 'react';
import axios from 'axios';

class FileForm extends Component {
  handleFormSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('data_file', this.uploadedFile.files[0]);
    formData.append('filename', 'data_file');
    const { data } = await axios.post('/api/students', formData);
    const names = data.split('\n').map(val => val.split(',')[0]);
    this.props.handleChildState({ names });
  };
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="file"
          name="data_file"
          ref={node => (this.uploadedFile = node)}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default FileForm;
