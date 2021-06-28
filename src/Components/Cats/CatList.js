import React, { Component } from 'react';



class CatList extends React.Component {
  constructor(props)
  render() {
    const cats = [
      {
        breed: 'persian'
      },
      {
        breed: 'siamese'
      },
      {
        breed: 'maine coon'
      },
      {
        breed: 'ragdoll'
      },
      {
        breed: 'scottish fold'
      },
      {
        breed: 'sphynx'
      },
      {
        breed: 'british shorthair'
      },
      {
        breed: 'bengal'
      },
      {
        breed: 'american shorthair'
      },
    ];
    return (
      <div>
        {props.cats.map((breed) => {
          return (
            <ul>
              <li>{cats.breed}</li>
            </ul>
          )
        })}
      </div>
    ) 
  }
}

export default CatList;