import React from "react"
import { Form } from "react-bootstrap"

export class Home extends React.Component{
    render(){
        return (
            <div className="home">
                {/*  https://react-bootstrap.github.io/forms/form-control/*/} 
               <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Please upload a valid video for analysis</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
            </div>
        )
    }
}
