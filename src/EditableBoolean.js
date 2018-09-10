import React, { Component } from 'react';
import Editable from './Editable';

const BooleanRenderer = (props) => {
  var val = props.value;
  return (<span>{val}</span>);
}

const BooleanEditableRenderer = (props) => {
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
    var {value, ...otherProps} = this.props;
    let val = value || false;
    return (
      <Editable inline
        Renderer={BooleanRenderer}
        EditableRenderer={BooleanEditableRenderer}
        Editor={BooleanEditor}
        value={val} {...otherProps} />
    )
  }
}

export { BooleanRenderer, BooleanEditor, BooleanEditableRenderer }
export default EditableBoolean;
