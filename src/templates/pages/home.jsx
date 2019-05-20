import React, { Component } from 'react';
import Note from '../components/note';
import { Container, Row, Col, Button } from 'reactstrap';
import Form from '../components/add-note';
import Axios from 'axios'

class Home extends Component {
    state = {
        notes: []
    }

    componentDidMount() {
        this._updateNoteData();
    }

    _updateNoteData() {
        Axios.get('http://localhost:3000/notes')
        .then((res) => {
            this.setState({
                notes: res.data
            });
        })
        .catch(console.error);
    }

    _deleteNotes() {
        Axios.delete('http://localhost:3000/notes')
        .then((res) => {
            this._updateNoteData();
        })
        .catch(console.error);
    }

    render() {
        return (
        <Container className='pt-5 pb-5'>
            <Row>
                <Col md='6' sm='12'>
                    <Form updateData={this._updateNoteData.bind(this)} />
                    <Button className='w-100 mt-2' color='danger' onClick={this._deleteNotes.bind(this)}>Clear All</Button>
                </Col>
                { !this.state.notes.length &&
                    <Col md='6' sm='12'>
                        <h2 className='text-muted text-center'>No data available at the moment</h2>
                    </Col>
                }
                <Col md='6' sm='12'>
                    {   this.state.notes.map((note, i) => (
                            <Note key={i} note={note} />
                        ))
                    }
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Home;
