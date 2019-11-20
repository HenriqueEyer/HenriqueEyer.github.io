import React from 'react';
import './DetailsPokemon.css'

class DetailsPokemon extends React.Component {
    render() {
        const {id, name, type, image, moreInfo, averageWeight } = this.props.pokemon;
        const itemtype = (item, size) => {
            return <li>{item} {size}</li>
        }

        const link = (item, info) => {
            return <li><a href={item}>  Mais info sobre {info} </a></li>
        }

        const imgPoke = imgPokemon => {
            return <img src={imgPokemon} alt="pokemon"/>
        }
        return (
            <div className="Details">
                <span className="id">{id}</span>
                <span>{name}</span>
                <div className="sub">
                <ul>
                    {itemtype(type)}
                    {itemtype(averageWeight['value'], averageWeight['measurementUnit'])}
                    {link(moreInfo,name)}
                </ul>
                {imgPoke(image)}
                </div>
            </div>
        )
    }
}

export default DetailsPokemon;
