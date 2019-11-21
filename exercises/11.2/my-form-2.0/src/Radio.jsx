import React from 'react';

class Radio extends React.Component {
  render() {
    const { type, name, valor, onChange, maxLength, id} = this.props
    return (
        <div>
        <input
         type={type}
         name={name}
         checked={id===valor?true:false} 
         id={id} 
         placeholder={name} 
         maxLength={maxLength} 
         value={id} 
         onChange={onChange} />
        <span>{id}</span>
        </div>
    );
  }
}
export default Radio;
