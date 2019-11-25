import React, { Component } from 'react';
import './list.css'
import PropTypes from 'prop-types';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:true,
            select:['1','A']
        }
    }

    changeSelect=event=>{
        const arr = [(event.target.id), event.target.textContent]
        this.setState({ select: arr });
    }

    changeShow=()=>{
        this.setState((state) => ({ show: !state.show}))
    }

    createLI=({id,item})=>{
    return <li key={id} id={id} onClick={(e)=>this.changeSelect(e)}>{item}</li>
    }

    createUL=(listItens)=>{
        return (
        <ul>
        {listItens.map(item=>this.createLI(item))}
        </ul>
        );
    }

    render(){
        return(
            <div className="main">
                {this.props.children}
                <div className="boxUp" onClick={(()=>this.changeShow())}>
                {this.state.select[1]}
                </div>
                {this.state.show && this.createUL(this.props.itens)}
            </div>
        )
    }
}



export default List;

List.propTypes = {
    itens: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number,
        item: PropTypes.string,
    })),
}
