import { height } from '@mui/system'
import React from 'react'
import { Button, Modal } from 'react-materialize'

function ModalCase({ setIsOpen, player }) {
    function handleChange(e) {
        setIsOpen(e)
    }
    return (
        <div>
            <div className='modal-show' style={{ height: '100%', width: '80%', position: 'fixed'}} onClick={() => handleChange(false)}>
                <div id='modal1' className='modal' style={{ display: 'block', top: '35%' }}>
                    <div className='modal-content'>
                        <h4>Video for {player.name}</h4>
                        <p><iframe width='100%' height='400px' src={player.clip} title={player.name}
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe></p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ModalCase