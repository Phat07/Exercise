import React from "react";
import { data } from "../Shared/ListOfPlayers";
import { useState } from "react";
import { Link } from 'react-router-dom'
export default function Player() {
    const [player, setPlayer] = useState([])
    console.log(data);
    return (
        <div className="container">
            {data.map((player) => (
                <div className="column">
                    <div className="card">
                        <img src={player.img} />
                        <h3>{player.name}</h3>
                        <p className="title">{player.club}</p>
                        <p><button onClick={() => { setPlayer(player) }}><a href="#popup1" id="openPopUp">
                            {/* Detail */}
                            <Link to={`detail/${player.id}`}>
                                <p>Detail</p>
                            </Link>
                        </a></button></p>
                    </div>
                </div>
            ))}
            <div id="popup1" className="overlay">
                <div className="popup">
                    <img src={player.img} />
                    <h2>{player.name}</h2>
                    <a className="close" href="#">&times;</a>
                    <div className="content">
                        {player.info}
                    </div>
                </div>

            </div>
        </div>

    )
}