import React, {Component} from "react";
// import { useContext } from 'react'
// import { ThemeContext } from './ThemeContext'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Navigation(props){
    
        const [color,setColor] =useState('White')
        function handleChange(item){
            item='black'
            if(color==='black'){
                item='white';
            }
            props.handleChange(item)
            setColor(item)
            // console.log(item)
        }
        let color1;
        color1=color==='white'?'black':'white'
        useEffect(()=>{
            setColor('black')
        },[])
        let elm=null;
        elm=color==='black'?'Switch Nav to Dark mode':'Switch Nav to Light mode';
        return(
            <div>
                <nav>
                    <ul className="content1" style={{backgroundColor: `${color}`}}> 
                        <Link to={'/'}>
                        <li><a className="active" href="#home" style={{color:`${color1}`}}>Home</a></li>
                        </Link>
                        <li><a href="#news" style={{color:`${color1}`}}>News</a></li>
                        <li><a href="#about" style={{color:`${color1}`}}>About</a></li>
                        <li><a href="#contact" style={{color:`${color1}`}}>Contact</a></li>
                        <li><a onClick={()=>handleChange({color})} href="#" style={{color:`${color1}`}}>{elm}</a></li>                        
                    </ul>
                </nav>
            </div>
        )
    
}