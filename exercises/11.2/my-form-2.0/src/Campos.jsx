import React from 'react';

class Campos extends React.Component {
  render() {
    const { type, name, onChange, maxLength, style} = this.props
    return (
        <input 
        style={style}
        type={type} 
        name={name} 
        placeholder={name} 
        maxLength={maxLength}
        onChange={onChange} 
        required/>
    );
  }
}
export default Campos;
