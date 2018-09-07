import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPencil from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faBan from '@fortawesome/fontawesome-free-solid/faBan';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import ReactMarkdown from 'react-markdown';
import Editable from './Editable';

const TextRenderer = (props) => (
  <a className="editable"
    role="button" onClick={props.onStartEdit}>
    {props.value && props.value.length > 0 ?
      (props.value.includes('\n') ?
        <ReactMarkdown source={props.value} /> :
        props.value) :
      <span className="text-muted">({props.placeholder})</span>}
  </a>
);

const TextEditor = (props) => {
  let onChange = (evt) => props.onChange(evt.target.value);
  return (
    <input type="text"
      className="form-control"
      placeholder={props.placeholder}
      value={props.value}
      onChange={onChange}
      ref={props.focusRef} />
  );
}

const TextAreaEditor = (props) => {
  let onChange = (evt) => props.onChange(evt.target.value);
  return (
    <textarea type="text"
              className="form-control"
              placeholder={props.placeholder}
              value={props.value}
              onChange={onChange}
              ref={props.focusRef} />
  );
}

class EditableText extends Component {
  render() {
    if (this.props.long || this.props.value.length > 50) {
      return (
        <Editable Renderer={TextRenderer} Editor={TextAreaEditor}
          value={this.props.value} placeholder={this.props.placeholder}
          onChange={this.props.onChange} />
      )
    }
    return (
      <Editable inline Renderer={TextRenderer} Editor={TextEditor}
        value={this.props.value} placeholder={this.props.placeholder}
        onChange={this.props.onChange} />
    )
  }
}

export { TextRenderer, TextEditor }
export default EditableText;
