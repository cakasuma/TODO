import React, { Component } from 'react';
import { Button, Form, Card, CardBody, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios';
import qs from 'qs';

class AddNote extends Component {
    state = {
        title: '',
        subtitle: '',
        content: ''
    };

    _handleInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        const note = this.state;

        Axios.post('http://localhost:3000/notes', qs.stringify(note))
            .then((res) => {
                this.props.updateData();
            })
    }
    render() { 
        return (
            <Card>
                <CardBody>
                    <Form tag='form' onSubmit={this._handleSubmit}>
                        <FormGroup>
                            <Label>Title</Label>
                            <Input type='text' name='title' placeholder='Title' onChange={this._handleInputChange} />
                        </FormGroup>
                        <br />
                        <FormGroup>
                            <Label>Subtitle</Label>
                            <Input type='text' name='subtitle' placeholder='Subtitle' onChange={this._handleInputChange} />
                        </FormGroup>
                        <br />
                        <FormGroup>
                            <Label>Content</Label>
                            <Input type='textarea' name='content' placeholder='Content' onChange={this._handleInputChange} />
                        </FormGroup>
                        <br />
                        <FormGroup>
                            <Button type='submit' color='secondary'>Submit</Button>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        );
    }
}
 
export default AddNote;