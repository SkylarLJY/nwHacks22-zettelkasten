//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

contract NotePlayground{
    uint public noteCount = 0;

    struct Note{
        uint id;
        string src;
        string title;
        string content;
        address owner;
        // bool isStart;
    }

    constructor() {
        addNote("test source", "title", "content");
        noteCount = 0;
    }

    mapping(uint => Note) public notes;

    function addNote(string memory _src, string memory _title, string memory _content) public {
        notes[noteCount] = Note(noteCount, _src, _title, _content, msg.sender);
        noteCount ++;
    }

    function getAllNotes() public view returns(Note[] memory){
        Note[] memory allNotes = new Note[](noteCount);
        for (uint i = 0; i < noteCount; i++){
            allNotes[i] = notes[i];
        }
        return allNotes;
    }

    function test() public view returns(uint){
        return noteCount;
    }


}