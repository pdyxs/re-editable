import React, { Component } from 'react';
import Editable from './Editable';

const NumberRenderer = (props) => {
  var val = props.value || 0;

  if (!props.canEdit) {
    return (<span>{val}</span>)
  }

  if (props.zeroText && val == 0) {
    return (
      <a className="editable"
        role="button" onClick={props.onStartEdit}>
        {this.props.zeroText}
      </a>
    );
  }
  return (
    <a className="editable"
      href="#" onClick={props.onStartEdit}>
      {val}
    </a>
  );
}

const NumberEditor = (props) => {
  let onChange = (evt) => props.onChange(Number(evt.target.value));
  return (
    <input type="number"
      className="form-control"
      placeholder={props.placeholder}
      value={props.value}
      onChange={onChange}
      min={props.min}
      max={props.max}
      ref={props.focusRef} />
  );
}

class EditableNumber extends Component {

  render() {
    var {value, ...otherProps} = this.props;
    let val = value || 0;

    return (
      <Editable inline Renderer={NumberRenderer} Editor={NumberEditor}
        value={val} {...otherProps} />
    )
  }
}

export { NumberRenderer, NumberEditor }
export default EditableNumber;
