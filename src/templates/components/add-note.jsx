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

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            if (this.props.note_id) {
                Axios.get(`http://localhost:3000/notes/${this.props.note_id}`)
                .then((res) => {
                    const data = res.data;
    
                    this.setState({
                        title: data.title,
                        subtitle: data.subtitle,
                        content: data.content
                    })
                })
            }
        }
    }

    _handleInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        const note = this.state;

        if (this.props.note_id) {
            Axios.put(`http://localhost:3000/notes/${this.props.note_id}`, qs.stringify(note))
                .then((res) => {
                    this.props.updateData();
                })
        } else {
            Axios.post('http://localhost:3000/notes', qs.stringify(note))
                .then((res) => {
                    this.props.updateData();
                })
        }

        this.setState({
            title: '',
            subtitle: '',
            content: ''
        })
    }
    render() { 
        return (
            <Card>
                <CardBody>
                    <Form tag='form' onSubmit={this._handleSubmit}>
                        <FormGroup>
                            <Label>Title</Label>
                            <Input type='text' value={this.state.title} name='title' placeholder='Title' onChange={this._handleInputChange} />
                        </FormGroup>
                        <br />
                        <FormGroup>
                            <Label>Subtitle</Label>
                            <Input type='text' value={this.state.subtitle} name='subtitle' placeholder='Subtitle' onChange={this._handleInputChange} />
                        </FormGroup>
                        <br />
                        <FormGroup>
                            <Label>Content</Label>
                            <Input type='textarea' value={this.state.content} name='content' placeholder='Content' onChange={this._handleInputChange} />
                        </FormGroup>
                        <br />
                        <FormGroup>
                            <Button type='submit' color='success'>Submit</Button>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        );
    }
}
 
export default AddNote;