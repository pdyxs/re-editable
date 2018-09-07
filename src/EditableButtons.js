import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBan from '@fortawesome/fontawesome-free-solid/faBan';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';

class EditableButtons extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      onSubmit,
      onCancel
    } = this.props;

    return (
      <span className="input-group-extender">
        <span className="input-group-append">
          <button className="btn btn-outline-primary" onClick={onSubmit}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </span>
        <span className="input-group-append">
          <button className="btn btn-outline-danger" onClick={onCancel}>
            <FontAwesomeIcon icon={faBan} />
          </button>
        </span>
      </span>
    )
  }
}

export default EditableButtons;
