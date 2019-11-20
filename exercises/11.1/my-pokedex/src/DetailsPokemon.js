import React from 'react';
import './DetailsPokemon.css'

class DetailsPokemon extends React.Component {
    render() {
        const {id, name, type, image, averageWeight } = this.props.pokemon;
        const itemtype = (item, size) => {
            return <li>{item} {size}</li>
        }

        const imgPoke = imgPokemon => {
            return <img src={imgPokemon} alt="pokemon"/>
        }
        return (
            <div className="Details">
                <span className="id">{id}</span>
                <div className="sub">
                <ul>
                    {itemtype(name)}
                    {itemtype(type)}
                    <li>AverageWeight: {averageWeight['value']}, {averageWeight['measurementUnit']}</li>

                </ul>
                {imgPoke(image)}
                </div>
            </div>
        )
    }
}

export default DetailsPokemon;
