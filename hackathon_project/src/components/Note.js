import React from 'react'

const Note = ({ note, deleteNote }) => {

    return (
        <li className='note'>
            {note.content}
            <button onClick={deleteNote}>delete</button>
        </li>
    )
}

export default Note