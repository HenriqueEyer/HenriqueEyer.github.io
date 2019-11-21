import React from 'react';

class TextArea extends React.Component {
  render() {
    const { type, name, onChange, onMouseEnter, maxLength } = this.props
    console.log(onMouseEnter,'teste')
    return (
        <textarea 
        type={type} 
        ame={name} 
        placeholder={name} 
        maxLength={maxLength} 
        onChange={onChange} 
        onMouseEnter={onMouseEnter}
        required>
        </textarea>
    );
  }
}
export default TextArea;
