import React, { Component } from 'react';
import Note from '../components/note';
import { Container, Row, Col } from 'reactstrap';
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
    render() {
        return (
        <Container className='pt-5 pb-5'>
            <Row>
                <Col md='6'>
                    <Form updateData={this._updateNoteData.bind(this)}/>
                </Col>
                <Col md='6'>
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
