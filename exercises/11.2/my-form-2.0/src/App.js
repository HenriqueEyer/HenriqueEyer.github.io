import React from 'react';
import './App.css';
import Campos from './Campos';
import Select from './Select';
import Radio from './Radio';
import TextArea from './TextArea'
import FormErrors from './FormErrors'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',
      email: '',
      cpf:'',
      endereco:'',
      cidade:'',
      estados:'',
      moradia:'Casa',
      Resumo:'',
      cargo:'',
      descricao:'',
      alert:'0',
      formErrors: {
        name:'',
        email: '',
        cpf:'',
        endereco:'',
        cidade:'',
        estados:'',
        moradia:'',
        Resumo:'',
        cargo:'',
        descricao:''
      }
    }
  }

  changeHandler = event => {
    const { name, value } = event.target
    console.log(name, value)
    this.setState((state) => ({
      [name]: value,
      formErrors: {
        ...state.formErrors,
        [name]: this.validateField(name, value)
      }
    }))
  }

  validateField(fieldName, value) {
    switch(fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        return isValid ? '' : ' is invalid'
      default:
        break;
    }
    return ''
  }

  onMouseEnterHandler = (event) => {
    if(this.state.alert==='0'){
      alert('Preencha com cuidado esta informação.')
      this.setState({alert:'1'})
    }
  }


  render() {
    return (
      <div>
        <form>
          <fieldset className="form">
           <Campos type="text" id="name" maxLength={40} name="name"  onChange={this.changeHandler} style={{ textTransform: "uppercase" }}/>
           <Campos type="email" id="email" maxLength={50}  name="email"  onChange={this.changeHandler}/>
           <Campos type="text" id="cpf" maxLength={11}  name="cpf"  onChange={this.changeHandler}/>
           <Campos type="text" id="endereco" maxLength={200} name="endereco"  handleChange={this.changeHandler}/>
           <Campos type="text" id="Cidade" maxLength={28} name="Cidade"  onChange={this.changeHandler}/>
           <Select onChange={this.changeHandler} name="estados"/>
           <Radio type="radio" id="Casa" name="moradia" valor={this.state.moradia} onChange={this.changeHandler}/>
           <Radio type="radio" id="Apartamento" name="moradia" valor={this.state.moradia} onChange={this.changeHandler}/>
          </fieldset>
          <fieldset>
          <TextArea type="TextArea" maxLength={1000} name="Resumo" id="resumo" onChange={this.changeHandler}/>
          <TextArea type="TextArea" maxLength={40} name="cargo" id="cargo" onChange={this.changeHandler} onMouseEnter={this.onMouseEnterHandler}/>
          <TextArea type="TextArea" maxLength={500} name="descricao" id="descricao" onChange={this.changeHandler}/>
          </fieldset>
          <FormErrors formErrors={this.state.formErrors}/>
        </form>
      </div>
    );
  }
}
export default App;
