import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const Note = ({ note, deleteNote }) => {
    return (
        <Card>
            <CardBody>
                <CardTitle tag='h5'>{note.title}</CardTitle>
                <CardSubtitle tag='h6' className='mb-2 text-muted'>{note.subtitle}</CardSubtitle>
                <CardText>
                    {note.content}
                </CardText>
                <Button className='mr-2' color='info'>Update</Button>
                <Button color='danger' onClick={() => deleteNote(note._id)}>Delete</Button>
            </CardBody>
        </Card>
    );
}

export default Note;
