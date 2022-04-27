import React from "react"
import { Button, Form } from "react-bootstrap"
import './Home.css'

export class Home extends React.Component{
    render(){
        return (
            <div className="home">
                {/*  https://react-bootstrap.github.io/forms/form-control/*/} 
               <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Please upload a valid video for analysis</Form.Label>
                    <div className="uploadSection">

                        <Form.Control type="file" />
                        <Button variant="outline-primary">Upload</Button>
                    </div>
                </Form.Group>
               
            </div>
        )
    }
}
