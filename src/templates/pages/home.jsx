import React, { Component } from 'react';
import Note from '../components/note';
import { Container, Row, Col, Button } from 'reactstrap';
import AddNote from '../components/add-note';
import Axios from 'axios'

class Home extends Component {
    state = {
        notes: [],
        note_update_id: '', 
    }

    componentDidMount() {
        this._updateNoteData();
    }

    _updateNoteData() {
        Axios.get('http://localhost:3000/notes')
        .then((res) => {
            this.setState({
                notes: res.data,
                note_update_id: ''
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

    _deleteNote(id) {
        Axios.delete(`http://localhost:3000/notes/${id}`)
        .then((res) => {
            this._updateNoteData();
        })
        .catch(console.error);
    }

    _updateNoteId(id) {
        this.setState({
            note_update_id: id
        });
    }

    render() {
        return (
        <Container className='pt-5 pb-5'>
            <Row>
                <Col md='6' sm='12'>
                    <AddNote note_id={this.state.note_update_id} updateData={this._updateNoteData.bind(this)} />
                    <Button className='w-100 my-2' color='danger' onClick={this._deleteNotes.bind(this)}>Clear All</Button>
                </Col>
                { !this.state.notes.length &&
                    <Col className='pt-sm-2' md='6' sm='12'>
                        <h2 className='text-muted text-center'>No data available at the moment</h2>
                    </Col>
                }
                <Col md='6' sm='12'>
                    {   this.state.notes.map((note, i) => (
                            <Note key={i} note={note} updateNote={this._updateNoteId.bind(this)} deleteNote={this._deleteNote.bind(this)} />
                        ))
                    }
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Home;
