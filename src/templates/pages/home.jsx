import React, { Component } from 'react';
import Note from '../components/note';
import { Container } from 'reactstrap';
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
            <Form updateData={this._updateNoteData.bind(this)}/>
            {   this.state.notes.map((note, i) => (
                    <Note key={i} note={note} />
                ))
            }
        </Container>
        );
    }
}

export default Home;
