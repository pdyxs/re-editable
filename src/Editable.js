import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPencil from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import EditableButtons from './EditableButtons';

class Editable extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      hasFocus: false,
      value: {}
    };

    this.focusRef = React.createRef();
  }

  onSubmit = () => {
    event.preventDefault();
    this.props.onChange(this.state.value);
    this.setState({
      isEditing: false
    });
  }

  onCancel = () => {
    event.preventDefault();
    this.setState({
      isEditing: false,
      value: this.props.value
    });
  }

  onStartEdit = () => {
    event.preventDefault();
    this.setState({
      isEditing: true,
      hasFocus: true,
      value: this.props.value
    });
  }

  componentDidUpdate() {
    if (this.focusRef.current && this.state.hasFocus) {
      this.setState({
        hasFocus: false
      });
      this.focusRef.current.focus();
    }
  }

  onChange = (val) => {
    if (!this.props.objectVal && val !== null && typeof val === 'object') {
      var cval = this.state.value;
      Object.entries(val).forEach(
        ([key, value]) => cval[key] = value
      );
      this.setState({ value: cval });
    } else {
      this.setState({ value: val });
    }
  } 

  render() {
    const {
      Renderer,
      Editor,
      placeholder,
      className,
      value,
      onChange,
      Buttons,
      ...otherProps
    } = this.props;

    if (this.state.isEditing) {
      let EditButtons = Buttons || EditableButtons;
      return (
        <span className={className + ' input-group' + (this.props.inline ? ' input-group-inline' : '')}>
          <Editor placeholder={placeholder} value={this.state.value}
            onChange={this.onChange} focusRef={this.focusRef} {...otherProps} />
          <EditButtons onSubmit={this.onSubmit} onCancel={this.onCancel} />
        </span>
      )
    }
    return (
      <span className={className + ' editable-renderer'}>
        <Renderer placeholder={placeholder} value={this.props.value} onStartEdit={this.onStartEdit} {...otherProps} />
        <button className="px-1 btn btn-link" onClick={this.onStartEdit}>
          <FontAwesomeIcon icon={faPencil} />
        </button>
      </span>
    );
  }
}

export default Editable;
