import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { TextEditor } from "./components/TextEditor";
import { TextEditorModal } from "./components/TextEditorModal";
import { ArchivePage } from "./pages/ArchivePage";
import { HomePage } from "./pages/HomePage";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { TrashPage } from "./pages/TrashPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/notes" element={<HomePage />}>
          <Route path=":noteId" element={<TextEditorModal />} />
        </Route>

        <Route path="/trash" element={<TrashPage />}></Route>
        <Route path="archive" element={<ArchivePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
