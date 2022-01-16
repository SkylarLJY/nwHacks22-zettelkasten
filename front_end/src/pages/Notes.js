import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Masonry from 'react-masonry-css'
import NoteCard from '../components/NoteCard'
import noteService from '../services/notes'
import { ethers } from "ethers";
import { noteplayground } from "../config";
import NotePlayground from "../artifacts/contracts/NotePlayground.sol/NotePlayground.json";


export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('')


  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])


  const handleDelete = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = notes.filter(note => note.id !== id)

    noteService
      .deleteVal(id)
      .then(() => {
        setNotes(changedNote)
      })
      .catch(error => {
        console.error(error);
      })
  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  const shareNote = async (id) => {
    const note = notes.find(n => n.id === id)
    if (note.shared) return
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      // const web3Modal = new Web3Modal()
      // const conn = await web3Modal.connect()
      // const provider = new ethers.providers.Web3Provider(conn)

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(noteplayground, NotePlayground.abi, signer);
      const transaction = await contract.addNote(note.title, note.title, note.details);
      await transaction.wait();
      const notes = await contract.getAllNotes();
      // await notes.wait()
      console.log(notes);
      // fetchNotes();
      note.shared = true;
    }
  };

  return (
    <Container size="sm">
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      > let's get this bread</Typography >
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {notes.map(note => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} handleShare={shareNote} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}
