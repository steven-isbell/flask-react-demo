import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FileForm extends Component {
  render() {
    return (
      <form>
        <input
          type="file"
          name="data_file"
          ref={node => (this.uploadedFile = node)}
          onChange={() => this.props.handleFormSubmit(this.uploadedFile)}
        />
      </form>
    );
  }
}

FileForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired
};

export default FileForm;
