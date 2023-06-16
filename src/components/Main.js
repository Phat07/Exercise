import React, { Component } from 'react'
import { data } from '../share/ListOfPlayers';
import PlayersPresentation from './Players';
function Main() {
    return (<PlayersPresentation players={data} />)
  
}
export default Main