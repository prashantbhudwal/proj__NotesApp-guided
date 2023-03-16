"use client";
import Sidebar from "@/components/Sidebar";
import Editor from "@/components/Editor";
import { data } from "./data";
import Split from "react-split";
import { nanoid } from "nanoid";
import { useState } from "react";

type Note = {
  id: number;
  body: string;
};

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  const [currentNoteId, setCurrentNoteId] = useState<number | "">(
    (notes[0] && notes[0].id) || ""
  );

  function createNewNote() {
    const newNote = {
      id: parseInt(nanoid(), 36),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text: string) {
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      })
    );
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="flex">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
