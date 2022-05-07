import React from 'react';
/* import pokemons from './data'; */

class Pokes extends React.Component {
  render{) {
    const {pokemons} = this.props
    const{name, type, image, averageWeight} = pokemons
    return(
      <article>
        <p>{name}</p>
        <p>{type}</p>
        <p>{averageWeight.value}</p>
        <img src={image} alt= 'pokemons' />
      </article>
    )
  }
};