import { useState, useEffect } from "react";
// import Card from "react-bootstrap/Card";
import { ethers } from "ethers";
import { noteplayground } from "../config";
import NotePlayground from "../artifacts/contracts/NotePlayground.sol/NotePlayground.json";
import Container from '@material-ui/core/Container'
import Masonry from 'react-masonry-css'
import NoteCard from '../components/NoteCard'
import noteService from '../services/notes'

function NoteShare() {
  const [title, setTitle] = useState();
  const [src, setSrc] = useState();
  const [content, setContent] = useState();
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    fetchNotes()
  }, [])

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function fetchNotes() {
      console.log('fetch all')
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const provider = ethers.getDefaultProvider(ethers.providers.getNetwork(80001), 'https://polygon-mumbai.infura.io/v3/e398d302dbb741238eba9fa73c5b9f05')
      const signer = provider.getSigner();
      const contract = new ethers.Contract(noteplayground, NotePlayground.abi, signer);
      console.log(contract);
      try {
        // const data = []
        // const test = await contract.test();
        // console.log(test)
        const data = await contract.getAllNotes();
        console.log(data);

        const notes = await Promise.all(
          data.map(async (i) => {
            return {
              category: "work",
              title: i.title,
              detials: i.content,
              id: i.id
            };
          })
        );
        console.log(notes);
        setAllNotes(notes);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  async function shareNote() {
    console.log(title);
    if (!content) return;
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      // const web3Modal = new Web3Modal()
      // const conn = await web3Modal.connect()
      // const provider = new ethers.providers.Web3Provider(conn)

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(noteplayground, NotePlayground.abi, signer);
      const transaction = await contract.addNote(src, title, content);
      await transaction.wait();
      const notes = await contract.getAllNotes();
      // await notes.wait()
      console.log(notes);
      // fetchNotes();
    }
  };
  const handleDelete = id => {
      console.log(id)
  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };
  return (
    <Container>
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {allNotes.map(note => (
        <div key={note.id}>
          <NoteCard note={note} handleDelete={handleDelete} handleShare={handleDelete}/>
        </div>
      ))}
    </Masonry>
  </Container>
  );
}
export default NoteShare;
