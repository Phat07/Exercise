import React from "react";
import { useParams } from "react-router-dom";
import { PlayerList } from "../share/ListOfPlayers";
import {Container, Textarea,Select, TextInput, Button, Icon} from 'react-materialize';


const handleSubmit =(e)=>{
    e.preventDefault();
}
const Contact = () =>{
    return(
        <Container className="container">
        <h3>Contact us</h3>
        <form onSubmit={handleSubmit}>
            <TextInput id="TextInput-38" m={6} label='Your Name'/>
            <TextInput id="TextInput-39" label='Your Phone'/>
            <TextInput email id="TextInput-40" label='Your Mail'/>
            <Select id="Select-46" multiple={false} onChange={function noRefCheck(){}} value="">
                <option disabled value=''>
                    Choose your favourite nation
                </option>
                <option value='1'>
                    England
                </option>
                <option value='2'>
                    France
                </option>
                <option value='3'>
                    Spain
                </option>
            </Select>
            <Textarea icon={<Icon>mode_edit</Icon>} id='Textarea-28' label="Your content"/>
            <Button>Submit</Button>
        </form>
    </Container>
    )

}

export default Contact;