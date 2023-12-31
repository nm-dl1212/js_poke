import React from 'react'
import "./Card.css";

const Card = ({ pokemon }) => {
    return (
        <div className='card'>
            <div className='cardImg'>
                <img src={pokemon.sprites.front_default} alt='' />
            </div>

            <h3 className='cardName'>{pokemon.name}</h3>

            <div className='cardTypes'>
                <div>type</div>
                {pokemon.types.map((type) => {
                    return (
                        <div>
                            <span className='typeName'>{type.type.name}</span>
                        </div>
                    )
                })}
            </div>

            <div className='cardInfo'>
                <div className='cardData'>
                    <p className='title'>おもさ: {pokemon.weight}</p>
                </div>
                <div className='cardData'>
                    <p className='title'>たかさ: {pokemon.height}</p>
                </div>
                <div className='cardData'>
                    <p className='title'>のうりょく: {pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    );
};

export default Card