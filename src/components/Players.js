import React, { useState } from 'react'
import { data } from '../share/ListOfPlayers';
import { Link } from 'react-router-dom';
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize'
import Button from '@mui/material/Button'
const PlayersPresentation = () => {
  return (
    <Container>
      <Row>
        {data.map((player) => (
          <Col className="col s6" key={player.id}>
            <Card >
              <img src={player.img} />
              <h3>{player.name}</h3>
              <h4 className='title'>{player.club}</h4>
              <Button variant="text" color="primary">
                <Link to={`Detail/${player.id}`}>Detail</Link>
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default PlayersPresentation;