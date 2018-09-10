import React, { Component } from 'react';
import Editable from './Editable';
import { ChromePicker } from 'react-color';

let defaultColor = {
  r: 0,
  g: 0,
  b: 0,
  a: 1
};

const ColourRenderer = (props) => {
  let val = props.value || defaultColor;
  if (!props.canEdit) {
    return (
      <span className="colour-display border rounded"
        style={
          {backgroundColor: `rgba(${val.r},${val.g},${val.b},${val.a})`}
        }></span>
    )
  }
  return (
    <a className="editable"
      role="button" onClick={props.onStartEdit}>
      <span className="colour-display border rounded"
        style={
          {backgroundColor: `rgba(${val.r},${val.g},${val.b},${val.a})`}
        }></span>
    </a>
  );
}

const ColourEditor = (props) => {
  let onChange = (color) => props.onChange(color.rgb);
  let val = props.value || defaultColor;
  return (
    <ChromePicker color={val} onChange={onChange} />
  )
}

class EditableColour extends Component {
  render() {
    let val = this.props.value || defaultColor;
    return (
      <Editable Renderer={ColourRenderer} Editor={ColourEditor}
        value={val} onChange={this.props.onChange} />
    );
  }
}

export default EditableColour;
