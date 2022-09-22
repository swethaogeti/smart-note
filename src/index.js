import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { AuthProvider } from "./contexts/AuthProvider";
import { NotesProvider } from "./contexts/NotesProvider";
import { ArchiveProvider } from "./contexts/ArchiveProvider";
import { TrashProvider } from "./contexts/TrashProvider";
import { FiltersProvider } from "./contexts/FiltersProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <FiltersProvider>
        <NotesProvider>
          <TrashProvider>
            <ArchiveProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ArchiveProvider>
          </TrashProvider>
        </NotesProvider>
      </FiltersProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
