import React, { Component } from 'react';
import Note from '../components/note';
import { Container, Spinner } from 'reactstrap';
import Axios from 'axios';

class Pin extends Component {
	state = {
		notes: [],
		is_loading: true
	};

	componentDidMount() {
		this._updateNoteData();
	}

	_updateNoteData() {
		Axios.get('http://localhost:3000/notes')
			.then((res) => {
				this.setState({
					notes: res.data.filter(data => data.pinned===true),
					is_loading: false
                });
			})
            .catch(console.error);

	}

	render() {
		return (
			<Container className='mt-5'>
				{this.state.is_loading && <Spinner className='text-center' type='grow' color='secondary' />}
				{(!this.state.notes.length && !this.state.is_loading) && <h2 className='text-muted text-center'>No data available at the moment</h2>}
				{this.state.notes.map((note, i) => (
					<Note
						key={i}
						note={note}
					/>
				))}
			</Container>
		);
	}
}

export default Pin;
