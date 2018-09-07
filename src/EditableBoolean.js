import React, { Component } from 'react';
import Editable from './Editable';

const BooleanRenderer = (props) => {
  var val = props.value;
  return (
    <a className="editable"
      href="#" onClick={props.onStartEdit}>
      {val ? "True" : "False"}
    </a>
  );
}

const BooleanEditor = (props) => {
  let onChange = (evt) => {
    props.onChange(evt.target.checked)
  };
  return (
    <div className="input-group-prepend">
      <div className="input-group-text">
        <input type="checkbox"
          value={props.value}
          onChange={onChange}
          ref={props.focusRef} />
      </div>
    </div>
  );
}

class EditableBoolean extends Component {

  render() {
    let val = this.props.value || false;
    return (
      <Editable inline Renderer={BooleanRenderer} Editor={BooleanEditor}
        value={val} onChange={this.props.onChange} />
    )
  }
}

export { BooleanRenderer, BooleanEditor }
export default EditableBoolean;
