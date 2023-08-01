import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Routes, Navigate } from "react-router-dom";
import { NewNote } from "./NewNote";

export type Note = {
  id: string;
} & NoteData;

export type RawNote = {
  id: string;
};
export type RawNoteData = {
  title: string;
  textarea: string;
  tagIds: string[];
};

export type Tag = {
  id: string;
  label: string;
};
function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("notes", []);
  const [tags, setTags] = useLocalStorage<RawNote[]>("tags", []);

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Hi</h1>}></Route>
        <Route path="/new" element={<NewNote />}></Route>
        <Route path="/:id">
          <Route index element={<h1>show</h1>}></Route>
          <Route path="edit" element={<h1>edit</h1>}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
