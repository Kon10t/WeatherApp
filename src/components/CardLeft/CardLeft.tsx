import React from 'react';
import { CardImg } from './CardImg';
import CardTemp from './CardTemp';

import '../weatherStyle.css';

export default function CardLeft() {

  return (
    <div className='card-left'>
      <CardImg/>
      <CardTemp />
    </div>
  )
}