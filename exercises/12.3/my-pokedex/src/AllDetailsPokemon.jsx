import React from 'react';
import './AllDetailsPokemon.css'

function AllDetailsPokemon(props) {

    const { id, name, type, image, averageWeight, foundAt, summary } = props.pokemon;

    const itemtype = (item, size) => {
        return <li>{item} {size}</li>
    }

    const imgPoke = (imgPokemon,alt) => {
        return <img src={imgPokemon} alt={alt} />
    }
    return (
        <div className="Details">
            <h2>{`${name} Details`}</h2>
            <span className="id">{id}</span>
            <div className="sub">
                <ul>
                    {itemtype(name)}
                    {itemtype(type)}
                    <li>AverageWeight: {averageWeight['value']}, {averageWeight['measurementUnit']}</li>
                </ul>
                {imgPoke(image, 'pokemon')}
            </div>

            <div>
            <h3>Summary</h3>
            <p>{summary}</p>
            </div>

            <div>
                <h3>Game Location {name}</h3>
                {foundAt.map(({ location, map})=>{
                    return (
                        <div>
                            {imgPoke(map,location)}
                            <h4>{location}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default AllDetailsPokemon;
