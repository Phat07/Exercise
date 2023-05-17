import React, {Component} from "react";

export default class Player extends Component{
    render(){
        return(
            <div className="container">
                <div className="column">
                    <div className="card">
                        <img src="assets/cr.jpg"/>
                        <h3>Cristino Ronaldo</h3>
                        <p className="title">Manchester United</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="assets/kante.jpg"/>
                        <h3>Kante</h3>
                        <p className="title">Chelsea</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="assets/messi.jpg"/>
                        <h3>Messi</h3>
                        <p className="title">PSG</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="assets/neymar.jpg"/>
                        <h3>Neymar</h3>
                        <p className="title">PSG</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="assets/kane.jpg"/>
                        <h3>Kane</h3>
                        <p className="title">Tottemham</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="assets/haaland.jpg"/>
                        <h3>Haaland</h3>
                        <p className="title">Manchester City</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
            </div>
        )
    }
}