import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const Note = ({ note, deleteNote, updateNote, updatePin }) => {
    return (
        <Card className='mb-2'>
            <CardBody>
                <CardTitle tag='h5'>{note.title}</CardTitle>
                <CardSubtitle tag='h6' className='mb-2 text-muted'>{note.subtitle}</CardSubtitle>
                <CardText>
                    {note.content}
                </CardText>
                {updateNote && <Button className='mr-2' color='info' onClick={() => updateNote(note._id)}>Update</Button>}
                {deleteNote && <Button className='mr-2' color='danger' onClick={() => deleteNote(note._id)}>Delete</Button>}
                {updatePin && <Button color='primary' onClick={() => updatePin(note._id, note.pinned)}>{note.pinned ? 'Unpin' : 'Pin'}</Button>}
            </CardBody>
        </Card>
    );
}

export default Note;
