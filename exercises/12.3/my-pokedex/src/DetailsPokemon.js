import React from 'react';
import './DetailsPokemon.css'
import { Link } from 'react-router-dom'


function DetailsPokemon(props) {
    const { id, name, type, image, averageWeight } = props.pokemon;
    const itemtype = (item, size) => {
        return <li>{item} {size}</li>
    }

    const imgPoke = imgPokemon => {
        return <img src={imgPokemon} alt="pokemon" />
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
            <Link to={`/pokemons/${id}`} >{`Mais Detalhes do ${name}`}</Link>
        </div>
    )
}


export default DetailsPokemon;
